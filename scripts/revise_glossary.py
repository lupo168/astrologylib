#!/usr/bin/env python3
"""Revise glossary.ts: terminology fixes, English definitions, traditional Chinese, school hedges.
Run once from repo root; produces revised src/data/glossary.ts and a change log."""
import re, json, sys

PATH = "src/data/glossary.ts"
src = open(PATH, encoding="utf-8").read()

m = re.search(r"export const GLOSSARY_TERMS: GlossaryTerm\[\] = \[(.*?)\n\];", src, re.S)
arr = m.group(1)
objs = re.findall(r'\{\s*"id":.*?\n  \}', arr, re.S)
terms = [json.loads(o) for o in objs]
by_id = {t["id"]: t for t in terms}

# ---------- 1. Simplified -> Traditional mapping (chars appearing in this file) ----------
S2T = {
    "专":"專","临":"臨","亲":"親","从":"從","伤":"傷","会":"會","儿":"兒","克":"剋",
    "关":"關","冲":"衝","动":"動","华":"華","变":"變","国":"國","坏":"壞","夺":"奪",
    "孙":"孫","宫":"宮","将":"將","属":"屬","岁":"歲","帮":"幫","并":"並","库":"庫",
    "应":"應","数":"數","杀":"殺","杂":"雜","权":"權","枭":"梟","气":"氣","泄":"洩",
    "润":"潤","灾":"災","盖":"蓋","盘":"盤","禄":"祿","穑":"穡","红":"紅","纪":"紀",
    "纳":"納","经":"經","药":"藥","见":"見","调":"調","财":"財","贵":"貴","辞":"辭",
    "运":"運","进":"進","错":"錯","长":"長","闲":"閒","阳":"陽","阴":"陰","飞":"飛",
    "马":"馬","驿":"驛","鸾":"鑾",
}
def to_trad(s):
    return "".join(S2T.get(ch, ch) for ch in s)

# ---------- 2. Per-term overrides ----------
# en: new English name; sd: new shortDef; dd_add: append to detailedDef; dd_sub: replace in detailedDef
OV = {
 "ming-gong": {"en": "Life Palace (BaZi · Ming Gong)",
   "sd": "In BaZi, an auxiliary life pillar derived from the birth month and hour, marking temperament and life orientation.",
   "dd_add": "Distinct from the Life Palace of Zi Wei Dou Shu, which anchors that system's twelve-palace chart — see ming-gong-ziwei."},
 "shen-gong": {"en": "Body Palace (Shen Gong)",
   "sd": "Primarily a Zi Wei Dou Shu concept: the palace of embodied effort, habit, and mid-life focus — see shen-gong-ziwei."},
 "ming-gong-ziwei": {"dd_add": "(For the BaZi term of the same name, see ming-gong.)"},
 "shen-gong-ziwei": {"dd_sub": [("after age 35", ", commonly said to grow stronger after about age 35 (school-dependent)")]},
 "xi-shen": {"en": "Favorable God (Xi Shen)"},
 "xian-shen": {"en": "Idle God (Xian Shen)",
   "sd": "A neutral presence that neither strongly helps nor harms the Useful God."},
 "chou-shen": {"en": "Hostile God (Chou Shen)",
   "sd": "The element that curbs both the Useful God and the Favorable God."},
 "xiao-shen": {"en": "Owl Spirit (Xiao Shen)",
   "sd": "The Indirect Seal turned hostile — the owl that robs the Eating God's food.",
   "dd": "Xiao means owl, a raptor that seizes prey. When the Indirect Seal (Pian Yin) turns unfavorable it is renamed the Owl Spirit, infamous in the structure Xiao Shen Duo Shi, 'the owl robs the food'. The image is seizing, not starving."},
 "yang-ren": {"en": "Yang Blade (Yang Ren)",
   "sd": "The Blade at the Emperor-of-Prosperity (Di Wang) position for a Yang Day Master — strength pushed to excess.",
   "dd": "The character 羊 (sheep) is a classical loan for 頫/陽 (yang); the term has nothing to do with sheep. A Yang Blade lends great force, but like a live blade it must be harnessed."},
 "hong-luan": {"en": "Red Luan Bird (Hong Luan)", "sd": "Romance and wedding joy."},
 "tian-xi": {"en": "Heavenly Joy (Tian Xi)", "sd": "Celebrations, weddings, and happy events."},
 "san-fang-si-zheng": {"en": "Trine and Opposition (San Fang Si Zheng)",
   "dd_sub": [("Forms a tetrahedron of influence:", "Forms a four-point field of view:")]},
 "kui-gang": {"en": "Kui Gang (Four Majestic Day Pillars)",
   "sd": "Four special day pillars (Geng Chen, Geng Xu, Wu Xu, Ren Chen) noted for forceful, unbending character."},
 "yao-ci": {"en": "Line Statements (Yao Ci)"},
 "gua-ci": {"en": "Hexagram Judgment (Gua Ci)"},
 "shen-sha": {"en": "Spirits & Killers (Shen Sha)",
   "sd": "Auxiliary stars and spirits marking auspicious and inauspicious tendencies."},
 "jian-lu": {"en": "Established Prosperity (Jian Lu)",
   "sd": "The Approaching-Officer (Lin Guan) position: the Day Master standing self-sufficient in its own element."},
 "lu-shen": {"en": "Prosperity Star (Lu Shen)",
   "sd": "The branch where the Day Master rests at ease in its own element — natural provision."},
 "jian-lu-ge": {"en": "Established Prosperity Pattern (Jian Lu Ge)"},
 "xian-chi": {"en": "Salty Pool (Xian Chi)",
   "sd": "An alternate name for the Peach Blossom star — attraction and desire.",
   "dd": "Xian Chi was originally an ancient astronomical station where the sun was said to bathe; as a Shen Sha it marks romance and temptation."},
 "liu-nian": {"en": "Annual Luck (Liu Nian)",
   "dd_add": "In Zi Wei Dou Shu, the same words name the annual transit — see liu-nian-ziwei."},
 "liu-qin": {"en": "Six Relations (Liu Qin)",
   "sd": "The family relations — parents, siblings, spouse, children — mapped through the Ten Gods.",
   "dd_add": "In Liu Yao, the Six Kinships label the lines of a cast hexagram — see liu-qin-liuyao."},
 "liu-qin-liuyao": {"dd_add": "(For the BaZi term of the same name, see liu-qin.)"},
 "yong-shen": {"dd_add": "In Liu Yao divination the same words name a different concept — see yong-shen-liuyao."},
 "yin-yang-chacuo": {"en": "Yin-Yang Error Days (Yin Cha Yang Cuo)",
   "sd": "Special days on which marriage plans meet repeated friction."},
 "shu-xiang": {"en": "Zodiac Sign (Shu Xiang)", "sd": "The animal of the birth year — same as Sheng Xiao."},
 "he-bazi": {"sd": "Comparing two Eight-Character charts for compatibility."},
 "tai-yuan": {"sd": "Fetal Origin: the month pillar counted ten months back from birth, marking prenatal influence."},
 "xiao-yun": {"sd": "Year-by-year luck cycles, mainly referenced for a person's early years before the Decadal Luck begins."},
 "sui-yun": {"sd": "Reading the Annual Year (Liu Nian) and Decadal Luck (Da Yun) together as one combined climate."},
 "de-di": {"sd": "Gaining ground: the Day Master's element finds root support in the Earthly Branches."},
 "tong-guan": {"sd": "A mediating element transforms a standoff between two clashing elements into a flow of generation."},
 "fu-yi": {"sd": "Balancing: restraining a Day Master that is too strong, supporting one that is too weak."},
 "bing-yao": {"sd": "Disease and Remedy: the chart's structural flaw, and the element that cures it."},
 "cai-guan-yin": {"sd": "The three classical favorable structures: Wealth, Officer, and Seal working in order."},
 "sha-yin-xiang-sheng": {"sd": "Killings transformed by the Seal: pressure channeled into growth and legitimacy."},
 "shi-shen-zhi-sha": {"sd": "The Eating God restraining Seven Killings — a noble structure of productive control."},
 "shang-guan-pei-yin": {"sd": "Hurting Officer's brilliance tempered by the Seal — expression with grounding."},
 "shang-guan-jian-guan": {"sd": "Hurting Officer meeting the Direct Officer — usually unfavorable; rebellion collides with authority."},
 "guan-sha-hunza": {"sd": "Officer and Killings mixed — divided authority, usually unfavorable."},
 "cai-xing-huai-yin": {"sd": "Wealth damaging the Seal — material concerns eroding learning and support."},
 "xiao-shen-duo-shi": {"sd": "The Owl Spirit robbing the Eating God — sustenance and creativity seized."},
 "bi-jie-duo-cai": {"sd": "Peers and Rob Wealth seizing the assets — competition taking what one holds."},
 "mu": {"sd": "Wood in two polarities: Jia (yang) and Yi (yin)."},
 "huo": {"sd": "Fire in two polarities: Bing (yang) and Ding (yin)."},
 "tu": {"sd": "Earth in two polarities: Wu (yang) and Ji (yin)."},
 "jin": {"sd": "Metal in two polarities: Geng (yang) and Xin (yin)."},
 "shui": {"sd": "Water in two polarities: Ren (yang) and Gui (yin)."},
 "sheng": {"sd": "To generate: the mother element produces and feeds its child (Wood feeds Fire)."},
 "ke": {"sd": "To control: one element disciplines and shapes another (Wood parts Earth)."},
 "xie": {"sd": "Drain: what the Day Master generates siphons its energy outward."},
 "hao": {"sd": "Expend: what the Day Master controls costs it effort to hold."},
 "bang": {"sd": "Support: same-element stems and branches reinforce the Day Master."},
 "chong": {"sd": "Clash — the six directly opposed branch pairs (see liu-chong)."},
 "he": {"sd": "Combination — Six Harmonies, Three Combinations, and the five stem pairs (see liu-he, san-he)."},
 "xing": {"sd": "Punishment — the punishing branch groups (see xiang-xing)."},
 "hai": {"sd": "Harm — the six harmful branch pairs (see liu-hai)."},
 "po": {"sd": "Break — the six breaking branch pairs (see xiang-po)."},
 "wang-xiang-xiu-qiu-si": {"sd": "The five seasonal strength states: Prosperous, Assisting, Resting, Imprisoned, Dead."},
 "na-yin": {"sd": "The 'melodic' Five-Element assigned to each of the sixty stem-branch pairs, used in classical dating and divination."},
 "jia": {"sd": "First Heavenly Stem: Yang Wood — the great tree; pioneering, upright, unbending."},
 "yi": {"sd": "Second Heavenly Stem: Yin Wood — the climbing vine; flexible, refined, adaptive."},
 "bing": {"sd": "Third Heavenly Stem: Yang Fire — the sun; open, warm, illuminating."},
 "ding": {"sd": "Fourth Heavenly Stem: Yin Fire — candlelight and hearth; focused, gentle, persistent."},
 "wu": {"sd": "Fifth Heavenly Stem: Yang Earth — the mountain; solid, reliable, encompassing."},
 "ji": {"sd": "Sixth Heavenly Stem: Yin Earth — field and garden soil; nurturing, practical, modest."},
 "geng": {"sd": "Seventh Heavenly Stem: Yang Metal — raw ore and axe; decisive, righteous, forceful."},
 "xin": {"sd": "Eighth Heavenly Stem: Yin Metal — jewelry and blade; precise, refined, discriminating."},
 "ren": {"sd": "Ninth Heavenly Stem: Yang Water — ocean and river; wise, flowing, far-reaching."},
 "gui": {"sd": "Tenth Heavenly Stem: Yin Water — rain and dew; intuitive, subtle, penetrating."},
 "zi": {"sd": "First Earthly Branch: Rat, Yang Water, the hour 23:00–01:00, deep winter."},
 "chou": {"sd": "Second Earthly Branch: Ox, Yin Earth, 01:00–03:00, the frozen end of winter."},
 "yin": {"sd": "Third Earthly Branch: Tiger, Yang Wood, 03:00–05:00, the awakening of spring."},
 "mao": {"sd": "Fourth Earthly Branch: Rabbit, Yin Wood, 05:00–07:00, mid-spring growth."},
 "chen": {"sd": "Fifth Earthly Branch: Dragon, Yang Earth, 07:00–09:00, spring's fertile storage."},
 "si": {"sd": "Sixth Earthly Branch: Snake, Yin Fire, 09:00–11:00, early summer's warmth."},
 "wu-horse": {"sd": "Seventh Earthly Branch: Horse, Yang Fire, 11:00–13:00, high summer."},
 "wei": {"sd": "Eighth Earthly Branch: Goat, Yin Earth, 13:00–15:00, late summer's ripening."},
 "shen": {"sd": "Ninth Earthly Branch: Monkey, Yang Metal, 15:00–17:00, the first touch of autumn."},
 "you": {"sd": "Tenth Earthly Branch: Rooster, Yin Metal, 17:00–19:00, crisp mid-autumn."},
 "xu": {"sd": "Eleventh Earthly Branch: Dog, Yang Earth, 19:00–21:00, autumn drying into earth."},
 "hai-pig": {"sd": "Twelfth Earthly Branch: Pig, Yin Water, 21:00–23:00, winter's stillness."},
 "liushi-jiazi": {"sd": "The full sixty-pair cycle of stems and branches, restarting roughly every sixty years."},
 "ganzhi-jinian": {"sd": "Recording years, months, days, and hours with the stem-branch cycle."},
 "wen-chang": {"sd": "Literary Star — study, writing, examinations, and scholarly talent."},
 "tao-hua": {"sd": "Peach Blossom — charm, romance, and social attraction."},
 "yi-ma": {"sd": "Post Horse — travel, relocation, and forward movement."},
 "hua-gai": {"sd": "Canopy Star — artistic gifts, solitude, and spiritual inclination."},
 "jiang-xing": {"sd": "General Star — command presence and leadership authority."},
 "jin-yu": {"sd": "Golden Carriage — refinement, comfort, and noble bearing."},
 "tian-de": {"sd": "Heavenly Virtue — benevolent rescue from difficulty."},
 "yue-de": {"sd": "Monthly Virtue — benevolent rescue from difficulty."},
 "tian-she": {"sd": "Heavenly Amnesty — grave faults finding pardon."},
 "fu-xing": {"sd": "Fortune Star — natural blessing and ease of living."},
 "jie-sha": {"sd": "Robbery Star — sudden loss and outside shocks."},
 "zai-sha": {"sd": "Disaster Star — accidents and calamity."},
 "wang-shen": {"sd": "Lost Spirit — dissipation and quiet attrition."},
 "gu-chen": {"sd": "Solitary Star — inner solitude and self-sufficiency."},
 "gua-su": {"sd": "Widow Star — isolation within partnership."},
 "mu-ku": {"sd": "Tomb and Storage — the branch that gathers and stores an element's Qi."},
 "liu-xiu": {"sd": "Six Elegant days — quick, refined intelligence."},
 "guo-yin": {"sd": "National Seal — official authority and standing."},
 "ge-ju": {"sd": "The structural classification of a chart — its governing arrangement."},
 "zheng-guan-ge": {"sd": "The Direct Officer as the chart's governing structure — legitimacy and position."},
 "qi-sha-ge": {"sd": "Seven Killings as the governing structure — power under pressure."},
 "cai-ge": {"sd": "Wealth as the governing structure — resources and stewardship."},
 "shi-shen-ge": {"sd": "The Eating God as the governing structure — easy, productive flow."},
 "shang-guan-ge": {"sd": "Hurting Officer as the governing structure — brilliance and rebellion."},
 "jian-lu-ge2": None,
 "yang-ren-ge": {"sd": "The Yang Blade structure — immense force needing an outlet."},
 "cong-ge": {"sd": "Following structures: a helpless Day Master yields to the dominant force."},
 "cong-cai-ge": {"sd": "Following Wealth: the whole chart yields to dominant Wealth."},
 "cong-sha-ge": {"sd": "Following Killings: yielding to dominant authority and pressure."},
 "cong-er-ge": {"sd": "Following the Children: yielding to dominant Output (expression)."},
 "cong-ruo-ge": {"sd": "Following Weakness: rootless and unaided, the Day Master abandons itself to the weak side."},
 "cong-qiang-ge": {"sd": "Following Strength: with Peers and Seals dominant, the chart flows with its own power."},
 "hua-qi-ge": {"sd": "Transformation structure: leading stems combine and the chart transforms to a new element."},
 "zhuan-wang-ge": {"sd": "Single-phase dominance: one element fills the chart."},
 "qu-zhi-ge": {"sd": "Wood Dominance: Wood alone prevails (Qu Zhi)."},
 "yan-shang-ge": {"sd": "Fire Dominance: Fire alone prevails (Yan Shang)."},
 "jia-se-ge": {"sd": "Earth Dominance: Earth alone prevails (Jia Se)."},
 "cong-ge-jin": {"sd": "Metal Dominance: Metal alone prevails (Cong Ge)."},
 "run-xia-ge": {"sd": "Water Dominance: Water alone prevails (Run Xia)."},
 "pai-pan": {"sd": "Constructing the chart: computing the pillars, palaces, and cycles."},
 "qi-yun": {"sd": "Fixing the starting age of the first Decadal Luck cycle."},
 "jiao-yun": {"sd": "The handover between one Decadal Luck cycle and the next."},
 "sui-yun-bing-lin": {"sd": "The Annual Year landing on the same pillar as the Decadal Luck — doubled force."},
 "tai-sui": {"sd": "The presiding spirit of the year — the year's branch itself."},
 "fan-tai-sui": {"sd": "Disturbing Tai Sui: any clash, harm, or punishment involving the year's branch."},
 "chong-tai-sui": {"sd": "A direct clash with the year's Tai Sui."},
 "xing-tai-sui": {"sd": "A punishing relationship with the year's Tai Sui."},
 "hai-tai-sui": {"sd": "A harmful relationship with the year's Tai Sui."},
 "san-he": {"sd": "Three-branch combinations forming an elemental frame (e.g. Shen–Zi–Chen gathers Water)."},
 "san-hui": {"sd": "Three-branch seasonal assemblies (e.g. Yin–Mao–Chen gathers Wood)."},
 "liu-hai": {"sd": "Six Harms — branch pairs that quietly undermine each other."},
 "xiang-xing": {"sd": "Mutual Punishment — the punishing branch groups."},
 "xiang-po": {"sd": "Mutual Break — the six breaking branch pairs."},
 "he-hun": {"sd": "Marriage compatibility assessed through the two BaZi charts."},
 "hua-lu": {"dd_sub": [("Associated with Wood and Spring energy", "In one common school, associated with Wood and Spring energy")]},
 "hua-quan": {"dd_sub": [("Associated with Fire and Summer energy", "In one common school, associated with Fire and Summer energy")]},
 "hua-ke": {"dd_sub": [("Associated with Metal and Autumn energy", "In one common school, associated with Metal and Autumn energy")]},
 "hua-ji": {"dd_sub": [("Associated with Water and Winter energy", "In one common school, associated with Water and Winter energy")]},
}
OV.pop("jian-lu-ge2", None)

changelog = []
for t in terms:
    ov = OV.get(t["id"])
    if not ov:
        continue
    if "en" in ov and ov["en"] != t["en"]:
        changelog.append((t["id"], "en", t["en"], ov["en"])); t["en"] = ov["en"]
    if "sd" in ov and ov["sd"] != t["shortDef"]:
        changelog.append((t["id"], "shortDef", t["shortDef"], ov["sd"])); t["shortDef"] = ov["sd"]
    if "dd" in ov:
        changelog.append((t["id"], "detailedDef", t["detailedDef"][:40], ov["dd"][:40])); t["detailedDef"] = ov["dd"]
    for old, new in ov.get("dd_sub", []):
        if old in t["detailedDef"]:
            t["detailedDef"] = t["detailedDef"].replace(old, new)
            changelog.append((t["id"], "detailedDef(sub)", old, new))
    if "dd_add" in ov and ov["dd_add"] not in t["detailedDef"]:
        t["detailedDef"] = (t["detailedDef"].rstrip() + " " + ov["dd_add"]).strip()
        changelog.append((t["id"], "detailedDef(+)", "", ov["dd_add"][:60]))

# traditional conversion for zh + categoryZh
for t in terms:
    new_zh = to_trad(t["zh"])
    if new_zh != t["zh"]:
        changelog.append((t["id"], "zh", t["zh"], new_zh)); t["zh"] = new_zh
    new_cz = to_trad(t.get("categoryZh", ""))
    if new_cz != t.get("categoryZh", ""):
        t["categoryZh"] = new_cz

# ---------- 3. Re-serialize ----------
def ser(t):
    fields = ["id","zh","py","en","category","categoryZh","isCore","shortDef","detailedDef","practicalNote","source","sourceLink","learnLink"]
    lines = ["  {"]
    for i, f in enumerate(fields):
        v = t.get(f, "")
        if isinstance(v, bool):
            s = "true" if v else "false"
        else:
            s = json.dumps(v, ensure_ascii=False)
        lines.append(f'    "{f}": {s}' + ("," if i < len(fields)-1 else ""))
    lines.append("  }")
    return "\n".join(lines)

new_arr = ",\n".join(ser(t) for t in terms)
new_src = src[:m.start(1)] + new_arr + src[m.end(1):]
open(PATH, "w", encoding="utf-8").write(new_src)

with open("scripts/glossary_changelog.json", "w", encoding="utf-8") as f:
    json.dump(changelog, f, ensure_ascii=False, indent=1)

print(f"terms: {len(terms)}, changes: {len(changelog)}")
empty = [t["id"] for t in terms if not t["shortDef"].strip()]
print("still-empty shortDef:", empty)
cjk = [t["id"] for t in terms if re.search(r"[\u4e00-\u9fff]", t["shortDef"])]
print("shortDef still Chinese:", cjk)
