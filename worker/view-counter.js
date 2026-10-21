/**
 * AstrologyLib view counter — Cloudflare Worker + Durable Object storage.
 * Public page-view counts for astrologylib.org (nonprofit library).
 *
 * Storage: a single Durable Object instance holds all counters — increments
 * are serialized there, so counts are atomic and strongly consistent.
 * (KV was the first choice, but the deploy credential has no Workers KV
 * permission on this account; DO lives inside the Workers scope and works.)
 *
 * Endpoints:
 *   POST /hit?key=total            -> increment site total, return {key, value, counted}
 *   POST /hit?key=p:/some/path/    -> increment one page's count, return {key, value, counted}
 *   GET  /get?key=...              -> read only, return {key, value}
 *
 * Rules:
 * - CORS locked to https://astrologylib.org (other Origins -> 403).
 * - Known bot/crawler user agents are not counted (their hit returns counted:false).
 * - Stores only numbers. No visitor data, no cookies, nothing personal.
 */
const ALLOWED_ORIGIN = "https://astrologylib.org";
const BOT_RE =
  /(googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex|sogou|exabot|ia_archiver|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|bytespider|gptbot|claudebot|ccbot|applebot|headless|phantomjs|selenium|puppeteer|playwright|lighthouse|spider|crawler)/i;

function isValidKey(key) {
  if (key === "total") return true;
  if (typeof key === "string" && key.startsWith("p:")) {
    const p = key.slice(2);
    return p.length >= 1 && p.length <= 200 && /^\/[A-Za-z0-9\-._~\/]*$/.test(p);
  }
  return false;
}

function json(body, status, origin) {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };
  if (origin === ALLOWED_ORIGIN) {
    headers["Access-Control-Allow-Origin"] = ALLOWED_ORIGIN;
    headers["Vary"] = "Origin";
  }
  return new Response(JSON.stringify(body), { status, headers });
}

/** Single-instance counter store. All increments funnel through here. */
export class Counter {
  constructor(ctx, env) {
    this.ctx = ctx;
  }
  async fetch(request) {
    const url = new URL(request.url);
    const storeKey = url.searchParams.get("k") || "";
    let value = (await this.ctx.storage.get(storeKey)) || 0;
    if (url.pathname === "/inc") {
      value += 1;
      await this.ctx.storage.put(storeKey, value);
    }
    return new Response(JSON.stringify({ value }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    // CORS preflight
    if (request.method === "OPTIONS") {
      if (origin !== ALLOWED_ORIGIN) return json({ error: "forbidden origin" }, 403, origin);
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
          "Vary": "Origin",
        },
      });
    }

    if (url.pathname !== "/hit" && url.pathname !== "/get") {
      return json({ error: "not found" }, 404, origin);
    }

    // /hit is called cross-origin from the site only (browsers always send Origin).
    // /get is read-only public data: a *present* Origin must still be the site's.
    if (url.pathname === "/hit" && origin !== ALLOWED_ORIGIN) {
      return json({ error: "forbidden origin" }, 403, origin);
    }
    if (url.pathname === "/get" && origin && origin !== ALLOWED_ORIGIN) {
      return json({ error: "forbidden origin" }, 403, origin);
    }

    const key = url.searchParams.get("key") || "";
    if (!isValidKey(key)) return json({ error: "bad key" }, 400, origin);
    const storeKey = key === "total" ? "total" : "page" + key.slice(2);
    const stub = env.COUNTER.getByName("global");

    if (url.pathname === "/hit") {
      if (request.method !== "POST") return json({ error: "method not allowed" }, 405, origin);
      const ua = request.headers.get("User-Agent") || "";
      const counted = ua.length > 0 && !BOT_RE.test(ua);
      const path = counted ? "/inc" : "/read";
      const res = await stub.fetch(
        "https://counter" + path + "?k=" + encodeURIComponent(storeKey)
      );
      const { value } = await res.json();
      return json({ key, value, counted }, 200, origin);
    }

    // /get — read only
    if (request.method !== "GET") return json({ error: "method not allowed" }, 405, origin);
    const res = await stub.fetch("https://counter/read?k=" + encodeURIComponent(storeKey));
    const { value } = await res.json();
    return json({ key, value }, 200, origin);
  },
};
