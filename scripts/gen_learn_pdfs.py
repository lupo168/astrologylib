#!/usr/bin/env python3
"""Generate 24 one-page free PDF cheat sheets for astrologylib.org /learn/ pages.
Iron rule: no .com / Etsy / commercial links inside. Only astrologylib.org.
"""
from fpdf import FPDF
import os

FONT_REG = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"
FONT_BOLD = "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "pdf")


class Sheet(FPDF):
    def build_page(self, title, subtitle):
        self.add_font("Noto", "", FONT_REG)
        self.add_font("Noto", "B", FONT_BOLD)
        self.set_auto_page_break(True, margin=18)
        self.add_page()
        self.set_font("Noto", "B", 20)
        self.set_text_color(30, 30, 30)
        self.cell(0, 10, title, new_x="LMARGIN", new_y="NEXT")
        if subtitle:
            self.set_font("Noto", "", 11)
            self.set_text_color(100, 100, 100)
            self.cell(0, 7, subtitle, new_x="LMARGIN", new_y="NEXT")
        self.ln(4)
        self.set_draw_color(180, 60, 60)
        self.set_line_width(0.8)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(5)

    def shead(self, text):
        self.set_font("Noto", "B", 13)
        self.set_text_color(140, 40, 40)
        self.cell(0, 8, text, new_x="LMARGIN", new_y="NEXT")
        self.ln(1)

    def spara(self, text, size=10.5):
        self.set_font("Noto", "", size)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 5.5, text, new_x="LMARGIN", new_y="NEXT")
        self.ln(1)

    def sbullets(self, items, size=10.5):
        self.set_font("Noto", "", size)
        self.set_text_color(40, 40, 40)
        for it in items:
            self.multi_cell(0, 5.5, "\u2022  " + it, new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

    def sfooter(self):
        self.set_y(-16)
        self.set_font("Noto", "", 8.5)
        self.set_text_color(130, 130, 130)
        self.cell(0, 5, "astrologylib.org  \u00b7  Free for personal use  \u00b7  "
                        "For guidance and self-awareness only \u2014 not medical, legal or financial advice.",
                  align="C")


def make(slug, title, subtitle, build):
    os.makedirs(OUT, exist_ok=True)
    pdf = Sheet(format="A4")
    pdf.build_page(title, subtitle)
    build(pdf)
    pdf.sfooter()
    path = os.path.join(OUT, slug + ".pdf")
    pdf.output(path)
    print("OK", slug, os.path.getsize(path), "bytes")


if __name__ == "__main__":
    # smoke test with one sheet
    def _t(pdf):
        pdf.shead("Section")
        pdf.spara("A paragraph of text.")
        pdf.sbullets(["bullet one", "bullet two"])
    make("_smoke", "Smoke Test", "subtitle", _t)
    os.remove(os.path.join(OUT, "_smoke.pdf"))
    print("smoke OK")


# ---------------- content builders ----------------

def b_bazi(pdf):
    pdf.shead("The Four Pillars")
    pdf.sbullets([
        "Year pillar \u2014 environment & roots. Month pillar \u2014 upbringing & season.",
        "Day pillar \u2014 YOU (the Day Master). Hour pillar \u2014 inner life & later years.",
        "Each pillar = Heavenly Stem (top) + Earthly Branch (bottom). 4 \u00d7 2 = 8 characters.",
    ])
    pdf.shead("Find Your Day Master in 30 Seconds")
    pdf.spara("Open any chart. Look at the DAY column, top character \u2014 the stem. That is the Day Master (\u65e5\u4e3b). Ask: do the surrounding pillars feed it or drain it? That one question starts every reading.")
    pdf.shead("The Ten Gods (relationships to the Day Master)")
    pdf.sbullets([
        "Same element: Friend / Rival (\u6bd4\u80a9 \u52ab\u8ca1) \u2014 peers, competitors.",
        "What you produce: Output (\u98df\u795e \u50b7\u5b98) \u2014 creativity, children.",
        "What controls you: Officer (\u6b63\u5b98 \u4e03\u6b9e) \u2014 career, discipline.",
        "You control: Wealth (\u6b63\u8ca1 \u504f\u8ca1) \u2014 money, assets.",
        "What produces you: Resource (\u6b63\u5370 \u504f\u5370) \u2014 support, learning.",
    ])

def b_ziwei(pdf):
    pdf.shead("14 Major Stars (\u5341\u56db\u4e3b\u661f)")
    pdf.sbullets([
        "Command: Zi Wei \u7d2b\u5fae (Emperor), Tian Fu \u5929\u5e9c (Treasurer), Wu Qu \u6b66\u66f2 (General).",
        "Strategy: Tian Ji \u5929\u6a5f (Strategist), Ju Men \u5de8\u9580 (Orator), Tian Liang \u5929\u6881 (Mentor).",
        "Warmth: Tai Yang \u592a\u967d (Sun), Tai Yin \u592a\u9670 (Moon), Tian Tong \u5929\u540c (Child).",
        "Drive: Lian Zhen \u5ec9\u8c9e, Tan Lang \u8caa\u72fc, Qi Sha \u4e03\u6b9e, Po Jun \u7834\u8ecd.",
        "Trust: Tian Xiang \u5929\u76f8 (Prime Minister).",
    ])
    pdf.shead("12 Palaces (\u5341\u4e8c\u5bae)")
    pdf.spara("Life \u547d\u5bae \u00b7 Siblings \u5144\u5f1f\u5bae \u00b7 Marriage \u592b\u59bb\u5bae \u00b7 Children \u5b50\u5973\u5bae \u00b7 Wealth \u8ca1\u5e1b\u5bae \u00b7 Health \u75be\u5384\u5bae \u00b7 Migration \u9077\u79fb\u5bae \u00b7 Friends \u4ea4\u53cb\u5bae \u00b7 Career \u5b98\u7984\u5bae \u00b7 Property \u7530\u5b85\u5bae \u00b7 Fortune \u798f\u5fb7\u5bae \u00b7 Parents \u7236\u6bcd\u5bae")
    pdf.shead("Si Hua \u2014 the Four Transformations (\u56db\u5316)")
    pdf.sbullets(["Hua Lu \u5316\u7984: flow, opportunity.", "Hua Quan \u5316\u6b0a: power, will.",
                 "Hua Ke \u5316\u79d1: fame, clarity.", "Hua Ji \u5316\u5fcc: friction, deep lessons."])
    pdf.spara("30-second start: find your Ming Gong (\u547d\u5bae). Which star sits there? That is your natural mode.")

def b_zodiac(pdf):
    pdf.shead("12 Animals \u00d7 Earthly Branches")
    rows = [("\u9f20 Rat \u5b50", "2020 2008 1996 1984"), ("\u4e11 Ox \u4e11", "2021 2009 1997 1985"),
            ("\u864e Tiger \u5bc5", "2022 2010 1998 1986"), ("\u5154 Rabbit \u536f", "2023 2011 1999 1987"),
            ("\u9f8d Dragon \u8fb0", "2024 2012 2000 1988"), ("\u86c7 Snake \u5df3", "2025 2013 2001 1989"),
            ("\u99ac Horse \u5348", "2026 2014 2002 1990"), ("\u7f8a Goat \u672a", "2027 2015 2003 1991"),
            ("\u7334 Monkey \u7533", "2028 2016 2004 1992"), ("\u9d8f Rooster \u9149", "2029 2017 2005 1993"),
            ("\u72d7 Dog \u620c", "2030 2018 2006 1994"), ("\u8c6c Pig \u4ea5", "2031 2019 2007 1995")]
    pdf.set_font("Noto", "", 10.5); pdf.set_text_color(40, 40, 40)
    for a, b in rows:
        pdf.cell(60, 6.5, a, new_x="RIGHT", new_y="TOP"); pdf.cell(0, 6.5, b, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)
    pdf.shead("Three Rules")
    pdf.sbullets(["The zodiac is a calendar first, personality test second.",
                 "The year flips at Chinese New Year \u2014 late-January births can fall either side.",
                 "The animal is the face; the branch behind it is what a BaZi chart actually uses."])

def b_yinyang(pdf):
    pdf.shead("Yin \u9670 / Yang \u967d in One Breath")
    pdf.spara("Yang = outward, active, bright, rising. Yin = inward, receptive, still, gathering. Neither is better \u2014 each is the other\u2019s partner in a cycle.")
    pdf.shead("Everyday Examples")
    pdf.sbullets(["Day (yang) / night (yin).", "Inhale (yang, expanding) / exhale (yin, settling).",
                 "Summer (yang, blaze) / winter (yin, storing).", "Speaking (yang) / listening (yin).",
                 "Action (yang) / rest (yin)."])
    pdf.shead("The Classic Line")
    pdf.spara("\u201cOne yin, one yang \u2014 this is called the Way.\u201d \u2014 Zhou Yi, Xi Ci (\u7e6b\u8fad). A chart, a year, a personality: each is some particular balance of the two forces at a given moment.")

def b_wuxing(pdf):
    pdf.shead("Five Ways Energy Moves")
    pdf.sbullets(["Wood \u6728 \u2014 grows and spreads (spring).", "Fire \u706b \u2014 rises and transforms (summer).",
                 "Earth \u571f \u2014 holds and settles (the pivot).", "Metal \u91d1 \u2014 cuts and refines (autumn).",
                 "Water \u6c34 \u2014 runs and gathers (winter)."])
    pdf.shead("Generating Cycle (\u76f8\u751f) \u2014 each feeds the next")
    pdf.spara("Wood \u2192 Fire (it burns) \u2192 Earth (it becomes ash) \u2192 Metal (ore forms) \u2192 Water (it melts and flows) \u2192 Wood.")
    pdf.shead("Controlling Cycle (\u76f8\u524b) \u2014 each checks another")
    pdf.spara("Wood \u2192 Earth (roots break soil) \u2192 Water (dams it) \u2192 Fire (quenches it) \u2192 Metal (melts it) \u2192 Wood (cuts it).")
    pdf.shead("Read Any Chart")
    pdf.spara("Which elements are present, and which are strong? Wood+fire runs \u201chot\u201d; metal+water runs \u201ccold.\u201d Nothing is judged \u2014 each element is a different tempo.")

def b_liuyao(pdf):
    pdf.shead("Build the Hexagram")
    pdf.spara("Toss three coins six times, bottom line first. Three alike = moving line (\u52d5\u723b).")
    pdf.shead("Assign Each Line Three Things")
    pdf.sbullets(["Earthly Branch (\u5730\u652f) \u2014 Zi, Chou, Yin... with its element.",
                 "Six Kinship role (\u516d\u89aa) \u2014 Parents / Officer / Siblings / Wealth / Offspring.",
                 "Celestial Spirit (\u516d\u795e) \u2014 from the day\u2019s stem: Azure Dragon, Vermilion Bird, Yellow Dragon, Soaring Serpent, White Tiger, Black Tortoise."])
    pdf.shead("Shi (\u4e16\u723b) vs Ying (\u61c9\u723b)")
    pdf.spara("Shi = you, the inquirer. Ying = the counterpart. Generate/combine \u2192 agreement. Clash/overcome \u2192 friction.")
    pdf.shead("Yong Shen (\u7528\u795e) \u2014 the Focus Line")
    pdf.sbullets(["Job/career \u2192 Officer line.", "Money \u2192 Wealth line.", "Exams/contracts \u2192 Parents line.",
                 "Competition \u2192 watch the Siblings line attacking Wealth."])

def b_iching_beg(pdf):
    pdf.shead("Learning Roadmap")
    pdf.sbullets(["1. Yin-Yang + Five Elements (the vocabulary).",
                 "2. The 8 trigrams (\u516b\u5366): Qian, Dui, Li, Zhen, Xun, Kan, Gen, Kun.",
                 "3. The 64 hexagrams: names + core image each.",
                 "4. The Ten Wings (\u5341\u7ffc): the commentary tradition.",
                 "5. One consultation method (coin toss). Then practice on small questions."])
    pdf.shead("The 8 Trigrams")
    pdf.spara("Heaven \u4e7e \u00b7 Lake \u514c \u00b7 Fire \u96e2 \u00b7 Thunder \u9707 \u00b7 Wind \u5dfd \u00b7 Water \u574e \u00b7 Mountain \u826e \u00b7 Earth \u5764. Every hexagram = upper trigram + lower trigram.")

def b_consult(pdf):
    pdf.shead("Coin Method in 6 Steps")
    pdf.sbullets(["1. Quiet the mind. Hold one clear question.",
                 "2. Toss three coins. 3 heads = old yang (moving); 3 tails = old yin (moving); 2 heads 1 tail = young yin; 2 tails 1 head = young yang.",
                 "3. Repeat six times, building the hexagram from the BOTTOM line up.",
                 "4. Read the hexagram\u2019s overall judgment (\u5366\u8fad).",
                 "5. If there are moving lines, read those line texts (\u723b\u8fad).",
                 "6. Moving lines create a second hexagram \u2014 the direction of change."])
    pdf.shead("Three Honest Notes")
    pdf.sbullets(["Ask about what you can influence, not lottery numbers.",
                 "One question per casting. Don\u2019t re-cast until you get the answer you want.",
                 "The I Ching reflects on a situation; it does not decide for you."])

def b_hexagrams(pdf):
    pdf.shead("64 Hexagrams (\u516d\u5341\u56db\u5366) \u2014 Names")
    names = ["1 Qian \u4e7e", "2 Kun \u5764", "3 Zhun \u5c6f", "4 Meng \u8499", "5 Xu \u9700", "6 Song \u8a1f",
             "7 Shi \u5e2b", "8 Bi \u6bd4", "9 Xiao Xu \u5c0f\u755c", "10 Lu \u5c65", "11 Tai \u6cf0", "12 Pi \u5426",
             "13 Tong Ren \u540c\u4eba", "14 Da You \u5927\u6709", "15 Qian \u8b19", "16 Yu \u8c6b",
             "17 Sui \u96a8", "18 Gu \u880a", "19 Lin \u81e8", "20 Guan \u89c0", "21 Shi Ke \u566c\u55d1", "22 Bi \u8d1b",
             "23 Bo \u5265", "24 Fu \u5fa9", "25 Wu Wang \u7121\u5984", "26 Da Xu \u5927\u755c", "27 Yi \u9810", "28 Da Guo \u5927\u904e",
             "29 Kan \u574e", "30 Li \u96e2", "31 Xian \u54b8", "32 Heng \u6046", "33 Dun \u9059", "34 Da Zhuang \u5927\u58ef",
             "35 Jin \u6649", "36 Ming Yi \u660e\u5937", "37 Jia Ren \u5bb6\u4eba", "38 Kui \u777d", "39 Jian \u8e47", "40 Xie \u89e3",
             "41 Sun \u640d", "42 Yi \u76ca", "43 Guai \u592b", "44 Gou \u59e4", "45 Cui \u8403", "46 Sheng \u5347",
             "47 Kun \u56f0", "48 Jing \u4e95", "49 Ge \u9769", "50 Ding \u9f0e", "51 Zhen \u9707", "52 Gen \u826e",
             "53 Jian \u6f38", "54 Gui Mei \u6b78\u59b9", "55 Feng \u8c50", "56 Lu \u65c5", "57 Xun \u5dfd", "58 Dui \u514c",
             "59 Huan \u6f63", "60 Jie \u7bc0", "61 Zhong Fu \u4e2d\u5b5a", "62 Xiao Guo \u5c0f\u904e", "63 Ji Ji \u65e2\u6fdf", "64 Wei Ji \u672a\u6fdf"]
    pdf.set_font("Noto", "", 9.5); pdf.set_text_color(40, 40, 40)
    for i in range(0, 64, 4):
        row = names[i:i+4]
        for j, n in enumerate(row):
            last = (j == len(row) - 1)
            pdf.cell(47, 6, n, new_x="LMARGIN" if last else "RIGHT", new_y="NEXT" if last else "TOP")
    pdf.ln(2)
    pdf.spara("Start: memorize 1\u20132 (Qian/Kun, heaven/earth), 29\u201330 (Kan/Li, water/fire). The rest come with use.", size=10.5)

def b_wings(pdf):
    pdf.shead("The Ten Wings (\u5341\u7ffc) \u2014 the Commentary Tradition")
    pdf.sbullets(["Tuan Zhuan I & II \u5f56\u50b3\u4e0a\u4e0b \u2014 on the hexagram judgments.",
                 "Xiang Zhuan I & II \u8c61\u50b3\u4e0a\u4e0b \u2014 on the images.",
                 "Xi Ci I & II \u7e6b\u8fad\u4e0a\u4e0b \u2014 the great philosophy (yin-yang, change).",
                 "Wen Yan \u6587\u8a00 \u2014 on Qian and Kun.",
                 "Shuo Gua \u8aaa\u5366 \u2014 on the trigrams.", "Xu Gua \u5e8f\u5366 \u2014 why this sequence.",
                 "Za Gua \u96dc\u5366 \u2014 mixed notes on pairs."])
    pdf.spara("The Wings turn the Zhou Yi from an oracle into a philosophy. Read Xi Ci first if you read one.")

def b_zy_yj(pdf):
    pdf.shead("Zhou Yi vs Yi Jing \u2014 the Relationship")
    pdf.sbullets(["Zhou Yi (\u5468\u6613) = the original core: 64 hexagrams + judgments + line texts. Zhou dynasty.",
                 "Ten Wings (\u5341\u7ffc) = the commentary layers added later.",
                 "Yi Jing / I Ching (\u6613\u7d93) = Zhou Yi + Wings together, the received classic.",
                 "So: every Zhou Yi is (part of) the Yi Jing; the Yi Jing is bigger than the Zhou Yi."])
    pdf.spara("Analogy: the Zhou Yi is the source code; the Ten Wings are the documentation; the Yi Jing is the shipped release.")

def b_find_chart(pdf):
    pdf.shead("Reading Checklist (after you plot the chart)")
    pdf.sbullets(["1. Day Master \u2014 stem of the day pillar. Who is this chart about?",
                 "2. Strength \u2014 do month/season and neighbors feed or drain it?",
                 "3. Useful God (\u7528\u795e) \u2014 which element would restore balance?",
                 "4. Ten Gods \u2014 how do the other stems relate to the Day Master?",
                 "5. Luck pillars (\u5927\u904b) \u2014 which decade is active now?"])
    pdf.shead("Try It Free")
    pdf.spara("Use the BaZi chart tool on this site (Tools \u2192 BaZi Chart), then work this checklist top to bottom. One pass, no skipping.")

def b_daymaster(pdf):
    pdf.shead("Ten Day Masters (\u5341\u65e5\u4e3b)")
    pdf.sbullets(["Jia \u7532 (yang wood) \u2014 the tall tree. Yi \u4e59 (yin wood) \u2014 grass and vine.",
                 "Bing \u4e19 (yang fire) \u2014 the sun. Ding \u4e01 (yin fire) \u2014 candlelight.",
                 "Wu \u620a (yang earth) \u2014 the mountain. Ji \u5df1 (yin earth) \u2014 farmland.",
                 "Geng \u5e9a (yang metal) \u2014 raw ore, the sword. Xin \u8f9b (yin metal) \u2014 jewelry.",
                 "Ren \u58ec (yang water) \u2014 ocean and river. Gui \u7678 (yin water) \u2014 rain and dew."])
    pdf.spara("Yang stems push outward; yin stems gather inward. Your Day Master is a starting lens, not a verdict.")

def b_tengods(pdf):
    pdf.shead("Ten Gods (\u5341\u795e) \u2014 Five Relationships \u00d7 Yin/Yang")
    pdf.sbullets(["Friend (\u6bd4\u5c63) / Rival (\u52ab\u8ca1) \u2014 same element. Peers, siblings, competitors.",
                 "Eating (\u98df\u795e) / Hurting (\u50b7\u5b98) \u2014 what you produce. Talent, expression, children.",
                 "Direct Officer (\u6b63\u5b98) / Seven Killings (\u4e03\u6b9e) \u2014 what controls you. Career, discipline, pressure.",
                 "Direct Wealth (\u6b63\u8ca1) / Indirect Wealth (\u504f\u8ca1) \u2014 what you control. Money, assets.",
                 "Direct Seal (\u6b63\u5370) / Indirect Seal (\u504f\u5370) \u2014 what produces you. Support, study, mentors."])
    pdf.spara("Rule of thumb: the god\u2019s yin/yang relative to the Day Master decides \u201cdirect\u201d vs \u201cindirect.\u201d Same polarity = indirect.")

def b_yongshen(pdf):
    pdf.shead("Finding the Useful God (\u7528\u795e) \u2014 Flowchart")
    pdf.sbullets(["1. Is the Day Master strong or weak? (Season + stems + branches.)",
                 "2. If STRONG \u2192 Useful God drains or controls it: Output, Wealth, or Officer.",
                 "3. If WEAK \u2192 Useful God feeds it: Resource (Seal) or Friend.",
                 "4. Check the luck pillars: does the current decade bring the Useful God or take it away?",
                 "5. Sanity check: a Useful God that is clashed or voided in the chart is weakened."])
    pdf.spara("The Useful God is the element the chart is thirsty for. Everything else in the reading serves this one answer.")

def b_dayun(pdf):
    pdf.shead("Luck Pillars (\u5927\u904b) \u2014 One Page")
    pdf.sbullets(["Each pillar = 10 years. Direction: yang year-born males & yin year-born females go forward through the stems; reversed otherwise.",
                 "Start age: count from birth to the next solar term (Jie), divide by 3 \u2248 starting age.",
                 "Read a pillar by: its stem-branch vs the Day Master (Ten Gods again) + whether it brings the Useful God.",
                 "Annual overlay (\u6d41\u5e74): the year\u2019s stem-branch plays against the active decade pillar."])
    pdf.spara("Decades set the weather; years bring the weather events. Never read a year without its decade.")

def b_z2027(pdf):
    pdf.shead("2027 \u2014 Year of the Goat (\u4e01\u672a)")
    pdf.sbullets(["Stem-branch: Ding-Wei (\u4e01\u672a) \u2014 yin fire over yin earth.",
                 "Animal: Goat (\u7f8a). Element flavor: fire feeding earth.",
                 "Year flips at Chinese New Year (Feb 2027), not Jan 1.",
                 "2026 was Bing-Wu (\u4e19\u5348), year of the Horse \u2014 yang fire over yang fire."])
    pdf.shead("What the Almanac Watches")
    pdf.sbullets(["Which branches clash or combine with Wei (\u672a).",
                 "Whose Day Master is fed or drained by Ding fire.",
                 "Month-by-month stem-branch overlays (coming in the full 2027 outlook)."])

def b_goat(pdf):
    pdf.shead("Goat Years (\u7f8a\u5e74)")
    pdf.set_font("Noto", "", 10.5); pdf.set_text_color(40, 40, 40)
    for line in ["2027  2015  2003  1991  1979  1967  1955  1943",
                 "Branch: Wei (\u672a) \u00b7 Direction: South-Southwest",
                 "Hours: 1\u20133 pm \u00b7 Season: late summer",
                 "Element: Earth (yin) \u00b7 Trine: Hai-Mao-Wei (\u4ea5\u536f\u672a, wood)"]:
        pdf.cell(0, 6.5, line, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)
    pdf.shead("Goat + Branch, Not Just the Animal")
    pdf.spara("In a BaZi chart the Goat is the branch Wei with yin earth \u2014 plus hidden stems. The animal is the door; the branch is the room.")

def b_compat(pdf):
    pdf.shead("Trines (\u4e09\u5408) \u2014 natural allies")
    pdf.sbullets(["Shen-Zi-Chen \u7533\u5b50\u8fb0 (Monkey-Rat-Dragon) \u2014 water frame.",
                 "Hai-Mao-Wei \u4ea5\u536f\u672a (Pig-Rabbit-Goat) \u2014 wood frame.",
                 "Yin-Wu-Xu \u5bc5\u5348\u620c (Tiger-Horse-Dog) \u2014 fire frame.",
                 "Si-You-Chou \u5df3\u9149\u4e11 (Snake-Rooster-Ox) \u2014 metal frame."])
    pdf.shead("Six Harmonies (\u516d\u5408) \u2014 pairs")
    pdf.spara("Zi-Chou \u00b7 Yin-Hai \u00b7 Mao-Xu \u00b7 Chen-You \u00b7 Si-Shen \u00b7 Wu-Wei.")
    pdf.shead("Clashes (\u516d\u885d) \u2014 opposites")
    pdf.spara("Zi-Wu \u00b7 Chou-Wei \u00b7 Yin-Shen \u00b7 Mao-You \u00b7 Chen-Xu \u00b7 Si-Hai. Clash \u2260 doom \u2014 it means friction that forces change.")

def b_fengshui(pdf):
    pdf.shead("Feng Shui in Five Concepts")
    pdf.sbullets(["Qi (\u6c23) \u2014 the flow being read. Stagnant = bad, rushing = bad.",
                 "Form (\u5f62) \u2014 mountains, water, roads as seen shapes.",
                 "Direction (\u5411) \u2014 the facing of a building; paired with sitting (\u5750).",
                 "Time (\u6642) \u2014 flying stars change yearly; space + time together.",
                 "Balance \u2014 yin-yang and five elements applied to rooms, not just charts."])
    pdf.spara("Honest note: classical texts disagree on schools (Form vs Compass). Anyone selling one \u201ctrue\u201d method is selling, not teaching.")

def b_vs_tarot(pdf):
    pdf.shead("I Ching vs Tarot \u2014 Honest Comparison")
    pdf.sbullets(["Origin: Chinese classic (Zhou dynasty layers) vs European card game turned oracle (18th c.).",
                 "Mechanism: 64 hexagrams from a fixed text vs 78 cards with layered symbolism.",
                 "Question style: both suit open situation questions; both fail at lottery numbers.",
                 "Learning curve: I Ching needs classical literacy; tarot needs symbolic fluency.",
                 "Shared limit: both reflect on a situation \u2014 neither decides for you."])
    pdf.spara("Pick the one whose symbols you enjoy living with. The tool matters less than the honesty of the question.")

def b_vs_west(pdf):
    pdf.shead("BaZi vs Western Astrology \u2014 Honest Comparison")
    pdf.sbullets(["Core unit: birth MOMENT as 8 characters vs birth moment as planet positions.",
                 "Time logic: stems-branches calendar cycles vs tropical zodiac + planetary transits.",
                 "Self concept: Day Master + its relationships vs Sun/Moon/Ascendant complex.",
                 "Prediction style: luck pillars (decades) + annual stems vs transits + progressions.",
                 "Shared limit: both are interpretive frameworks, not measurement instruments."])
    pdf.spara("Many practitioners study both. BaZi excels at elemental balance; Western astrology excels at psychological narrative.")

def b_vs_zb(pdf):
    pdf.shead("Zi Wei vs BaZi \u2014 Honest Comparison")
    pdf.sbullets(["BaZi: 8 characters, time-based. Reads elemental strength and balance.",
                 "Zi Wei: stars + 12 palaces, space-based. Reads archetypes and life sectors.",
                 "BaZi question: \u201cwhat energy do I carry?\u201d Zi Wei question: \u201cwhere does my life happen?\u201d",
                 "Shared roots: yin-yang, five elements, stems and branches underlie both.",
                 "Practice: many readers use BaZi for the constitution, Zi Wei for the detail."])

def b_vs_ast(pdf):
    pdf.shead("Map of Divination Systems")
    pdf.sbullets(["Situation oracles: I Ching / Liu Yao (a moment\u2019s pattern), Tarot (a moment\u2019s image).",
                 "Birth systems: BaZi (elemental balance), Zi Wei (stars & palaces), Western astrology (planets & houses).",
                 "Space systems: Feng Shui (where), face/palm reading (what shows).",
                 "Choosing: match the system to the question \u2014 situation \u2192 oracle; lifetime \u2192 birth chart; place \u2192 feng shui."])
    pdf.spara("No system does everything. The honest ones say so up front.")


ALL = [
    ("bazi-cheatsheet", "BaZi One-Page: the Four Pillars Diagram", "Find the Day Master. Read everything as a relationship to it.", b_bazi),
    ("ziwei-cheatsheet", "Zi Wei Quick Reference: 14 Stars & 12 Palaces", "One page to read any Zi Wei chart.", b_ziwei),
    ("zodiac-cheatsheet", "Chinese Zodiac: 12 Animals Year Chart", "Printable. Find your animal, then look behind it at the branch.", b_zodiac),
    ("yin-yang-cheatsheet", "Yin & Yang One-Page: Everyday Examples", "The single idea underneath every school of Chinese metaphysics.", b_yinyang),
    ("five-elements-cheatsheet", "Five Elements Cycles Diagram", "Printable. Generating + controlling, on one page.", b_wuxing),
    ("liuyao-cheatsheet", "Liu Yao Line-Assignment Card", "Printable. Six lines, three assignments, one focus.", b_liuyao),
    ("i-ching-beginners-cheatsheet", "I Ching Beginner Roadmap", "Five steps, in order. No skipping step 1.", b_iching_beg),
    ("how-to-consult-i-ching-cheatsheet", "I Ching Consultation: Coin Method Card", "Printable. Six steps, three honest notes.", b_consult),
    ("i-ching-hexagrams-cheatsheet", "64 Hexagrams: Name List", "Printable. Learn Qian, Kun, Kan, Li first.", b_hexagrams),
    ("what-are-ten-wings-cheatsheet", "The Ten Wings, Mapped", "Commentary layers of the Yi, on one page.", b_wings),
    ("zhouyi-vs-yijing-cheatsheet", "Zhou Yi vs Yi Jing: Relationship Map", "Source code, documentation, shipped release.", b_zy_yj),
    ("find-your-bazi-chart-cheatsheet", "BaZi Reading Checklist", "Plot the chart, then work top to bottom.", b_find_chart),
    ("day-master-meaning-cheatsheet", "Ten Day Masters: Quick Table", "Find your stem. Read it as a lens, not a verdict.", b_daymaster),
    ("bazi-ten-gods-cheatsheet", "Ten Gods Relationship Map", "Five relationships, ten names.", b_tengods),
    ("bazi-useful-god-cheatsheet", "Useful God: Decision Flowchart", "Strong or weak first. Everything follows.", b_yongshen),
    ("bazi-luck-pillars-cheatsheet", "Luck Pillars: How Decades Work", "Decades set the weather; years bring events.", b_dayun),
    ("chinese-zodiac-2027-cheatsheet", "2027: Year of the Goat, One Page", "Ding-Wei. Fire feeding earth.", b_z2027),
    ("year-of-goat-2027-cheatsheet", "Goat Years Reference", "Years, branch, hidden stems.", b_goat),
    ("zodiac-compatibility-cheatsheet", "Zodiac Compatibility Chart", "Trines, harmonies, clashes \u2014 printable.", b_compat),
    ("what-is-feng-shui-cheatsheet", "Feng Shui: Five Concepts", "Qi, form, direction, time, balance.", b_fengshui),
    ("i-ching-vs-tarot-cheatsheet", "I Ching vs Tarot: Comparison", "Helping you choose \u2014 not choosing for you.", b_vs_tarot),
    ("bazi-vs-western-astrology-cheatsheet", "BaZi vs Western Astrology: Comparison", "Two calendars, two psychologies.", b_vs_west),
    ("ziwei-vs-bazi-cheatsheet", "Zi Wei vs BaZi: Comparison", "Time-based vs space-based. Most readers use both.", b_vs_zb),
    ("i-ching-vs-astrology-cheatsheet", "Divination Systems: Overview Map", "Match the system to the question.", b_vs_ast),
]

if __name__ == "__main__" and os.environ.get("GEN_ALL") == "1":
    for slug, title, sub, fn in ALL:
        make(slug, title, sub, fn)
    print(f"done: {len(ALL)} pdfs")
