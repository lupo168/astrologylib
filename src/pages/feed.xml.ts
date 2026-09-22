// 版本：v1.0.0 | 创建：2026-09-21 12:00 +08:00 | 更新：2026-09-21 12:00 +08:00
// 用途：AstrologyLib.org 全站学术与典籍动态 RSS 2.0 聚合端点 (feed.xml)

export async function GET() {
  const siteUrl = 'https://astrologylib.org';
  const pubDate = new Date().toUTCString();

  const items = [
    {
      title: 'Grand Corpus: 2,064 Classical Canons Indexed & Hosted on Cloudflare R2',
      link: `${siteUrl}/library/classics/`,
      description: 'Public-domain preservation archive containing 1,721 Daoist Canon works and 343 Yi Canon works in complete raw transcriptions.',
      pubDate: 'Mon, 21 Sep 2026 00:00:00 GMT',
      guid: `${siteUrl}/library/classics/`
    },
    {
      title: 'Translation Proofreading Board: 17 Open Academic Collation Tasks',
      link: `${siteUrl}/contribute/`,
      description: 'Volunteer proofreaders invited to collate Zhou Yi 64 hexagrams, Ten Wings, and Di Tian Sui with named credits and traditional seal awards.',
      pubDate: 'Mon, 21 Sep 2026 00:00:00 GMT',
      guid: `${siteUrl}/contribute/#tasks`
    },
    {
      title: 'Canonical Lexicon: Core Metaphysical Glossary (164 Terms)',
      link: `${siteUrl}/glossary/`,
      description: 'Rigorous bilingual glossary standardizing Taiji, Yin-Yang, Five Elements, Heavenly Stems, and Earthly Branches.',
      pubDate: 'Wed, 10 Sep 2026 00:00:00 GMT',
      guid: `${siteUrl}/glossary/`
    },
    {
      title: 'The Zhou Yi (I Ching): 64 Hexagrams & 386 Line Texts Bilingual Translation',
      link: `${siteUrl}/zhouyi/`,
      description: 'Complete bilingual rendering of the 64 Hexagrams with line-by-line Chinese-English alignment and commentary notes.',
      pubDate: 'Wed, 19 Aug 2026 00:00:00 GMT',
      guid: `${siteUrl}/zhouyi/`
    },
    {
      title: 'Di Tian Sui (Drip of Heavenly Essence): Chapter 1-21 Canonical Commentary',
      link: `${siteUrl}/library/ditian-sui/`,
      description: 'The premier classic on Four Pillars BaZi metaphysics, translated with bilingual textual collation.',
      pubDate: 'Wed, 19 Aug 2026 00:00:00 GMT',
      guid: `${siteUrl}/library/ditian-sui/`
    },
    {
      title: 'Astrological Calculation Tools: True Solar Time BaZi & Zi Wei Dou Shu Charts',
      link: `${siteUrl}/tools/bazi-chart/`,
      description: 'Open-access mathematical algorithms calculating authentic planetary cycles, true solar time, and astrological charts without user tracking.',
      pubDate: 'Thu, 10 Sep 2026 00:00:00 GMT',
      guid: `${siteUrl}/tools/bazi-chart/`
    }
  ];

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AstrologyLib · Classical Chinese Metaphysical Canons</title>
    <link>${siteUrl}</link>
    <description>Open-access digital humanities repository of 2,064 classical Chinese texts from the Yi Canon and Daoist Canon, featuring scholarly translations, terminology, and tools.</description>
    <language>en-us</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid>${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <description><![CDATA[${item.description}]]></description>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(rssXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
