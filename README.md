# Chinese Astrology Library（CAL）· AstrologyLib

> **Project Name**: Chinese Astrology Library (CAL / 萬卷東方典藏庫)  
> **Public Identity**: **AstrologyLib**  
> **Official Website**: https://astrologylib.org  
> **GitHub Repository**: https://github.com/lupo168/astrologylib  
> **Seal & Trademark**: “易” (Drawn from [Chong Xi Small Seal 崇羲篆體](https://xiaoxue.iis.sinica.edu.tw/chongxi/) · Academia Sinica 中央研究院小學堂 CC BY-ND 3.0 TW)  
> **License**: CC BY-SA 4.0 (Translations & Lexicon) / MIT (Software Code)  

An open-access digital humanities archive, concordance, and translation project dedicated to classical Chinese astrology, cosmology, and the I Ching (*Zhouyi*) tradition. 

The project translates foundational ancient texts into clear, structured, verifiable English editions. Grounded in original woodblock editions, scholarly restraint, and philological fidelity.

---

## 🏛️ Project Pillars · 核心基石

1. **The Grand Corpus · 萬卷典藏 (2,064 Works)**
   - Complete digital editions of classical Chinese cosmological texts, including 1,721 texts from the Daoist Canon (*Zhengtong Daozang*) and 343 treatises from the Yi Canon (*Yicang*).
   - Distributed open storage ensuring zero-egress, low-latency access for global researchers and students.

2. **Standardized Bilingual Lexicon · 術語規範與辭典**
   - Harmonized English terminology for complex classical metaphysical concepts (Yin-Yang, Wu Xing, BaZi, Heavenly Stems, Earthly Branches, Ten Gods, 64 Hexagrams).
   - Each term cross-referenced with classical citations, dynasty origin, and pronunciation guides.

3. **Client-Side Astronomical Tools · 純前端排盤工具**
   - Transparent, open-source calculation engines for True Solar Time BaZi charts, Zi Wei Dou Shu celestial placements, and Zhouyi hexagram casting.
   - 100% client-side computation: zero user data stored, zero birth dates transmitted, zero tracking cookies.

4. **Non-Commercial Academic Charter · 純粹學術獨立**
   - **Zero Commercial Transactions**: Free, open access forever. No paywalls, no sponsored promotions, no paid consultations.
   - **Strictly Zero Financial Donations**: We do not solicit or accept monetary donations, wire transfers, or grants. We accept only historical manuscript scans, edition collation, and voluntary translation contributions.

---

## 📥 Grand Corpus Direct Downloads · 古籍原文下載通道 (2,064 Volumes)

All 2,064 classical Chinese texts (Daoist Canon & I Ching Canon) are 100% public domain and free to download for open scholarly research, algorithmic text-mining, and digital humanities collation.

### 1. Web Portal & Online Reader · 官方在線檢索與水墨閱讀器
- **Interactive Grand Corpus Catalog (2,064 Works)**:  
  👉 [https://astrologylib.org/library/classics/](https://astrologylib.org/library/classics/)  
  *Features real-time search across title, author, historical dynasty, CE Gregorian year, and classical section classification.*
- **Classical Online Reader with Academic Citation Generator**:  
  👉 [https://astrologylib.org/library/read/](https://astrologylib.org/library/read/)

### 2. GitHub Raw Text Downloads · 本倉庫原文直下目錄
All raw UTF-8 `.txt` manuscript transcriptions are directly tracked and hosted within this repository:
- **Daoist Canon (正統道藏與續道藏 · 1,721 Volumes)**:  
  📁 [`public/classics/daozang/`](https://github.com/lupo168/astrologylib/tree/main/public/classics/daozang)  
  *Covers Dongzhen, Dongxuan, Dongshen, Taiping, Taiqing, Zhengyi, and Xudaozang sections.*
- **Yi Canon (易藏與術數典籍 · 343 Volumes)**:  
  📁 [`public/classics/yicang/`](https://github.com/lupo168/astrologylib/tree/main/public/classics/yicang)  
  *Covers Zhouyi Commentaries (易經義理), Shushu / Divination (術數經典), Astronomy & Calendar (天文曆算), and Philosophical Treatises (哲學演繹).*

### 3. Machine-Readable Metadata Catalogs · 結構化典籍目錄 (JSON)
For programmatic ingestion, machine learning, and digital humanities pipelines:
- **Daoist Canon Metadata (1,721 entries)**:  
  📄 [`public/classics/daozang_catalog.json`](https://github.com/lupo168/astrologylib/blob/main/public/classics/daozang_catalog.json) ｜ [Direct API Link](https://astrologylib.org/classics/daozang_catalog.json)
- **Yi Canon Metadata (343 entries)**:  
  📄 [`public/classics/yicang_catalog.json`](https://github.com/lupo168/astrologylib/blob/main/public/classics/yicang_catalog.json) ｜ [Direct API Link](https://astrologylib.org/classics/yicang_catalog.json)

### 4. Git Bulk Download Command · 批量克隆下載指令
To download the entire 2,064 texts archive locally in one command:
```bash
# Clone the complete repository including all 2,064 classical texts
git clone https://github.com/lupo168/astrologylib.git

# Navigate directly to the classical texts corpus
cd astrologylib/public/classics
ls -lh daozang yicang
```

---

## 🛠️ Technical Stack · 技術棧

- **Static Site Generator**: [Astro](https://astro.build/) (Static Site Generation / Island Architecture)
- **Language**: TypeScript + Modern CSS
- **Deployment & Edge**: Cloudflare Pages (Atomic deployment triggered on Git push)
- **Typography**: Source Han Serif (*Noto Serif SC*) & Source Han Sans (*Noto Sans SC*) under SIL OFL 1.1

```bash
# Clone repository
git clone https://github.com/lupo168/astrologylib.git
cd astrologylib

# Install dependencies
npm install

# Start development server
npm run dev

# Build production static bundle
npm run build
```

---

## 📜 Intellectual Property & Licensing · 版權與許可

- **Source Literature**: Public Domain. All original Chinese texts are centuries old and part of the global cultural heritage.
- **English Translations & Harmonized Lexicon**: Licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/). You are free to share and adapt the material, provided appropriate credit is given and derivative works remain under the same open license.
- **Software & Computational Code**: Licensed under the [MIT License](./LICENSE).

---

## 🙏 Acknowledgements & Upstream Sources · 底本致謝與字體來源

We extend our deepest gratitude to the digital humanities projects, research institutes, and open-source font creators whose selfless public sharing made this library possible:

1. **2,064 Classical Base Texts (正統道藏與易藏典籍底本)**:
   - Sourced with immense gratitude from the monumental open-source transcription and cataloging initiative by **Gary Chow (周家樂)**: [daizhigev20 (殆知閣古代文獻檢索系統開源專案)](https://github.com/garychowcmu/daizhigev20).
   - Augmented by public-domain textual concordances from the [Chinese Text Project (ctext.org)](https://ctext.org/) and [Wikisource (維基文庫)](https://zh.wikisource.org/).

2. **Official Seal Character “易” (標誌與印章篆體)**:
   - Faithfully derived from the authoritative [Chong Xi Small Seal 崇羲篆體](https://xiaoxue.iis.sinica.edu.tw/chongxi/), developed by **Academia Sinica (中央研究院小學堂)**, licensed under [Creative Commons Attribution-NoDerivs 3.0 Taiwan (CC BY-ND 3.0 TW)](https://creativecommons.org/licenses/by-nd/3.0/tw/).

3. **Bilingual Typography & Display (字體與排版)**:
   - Primary display and body fonts: [Source Han Serif / Noto Serif SC (思源宋體)](https://fonts.google.com/noto/specimen/Noto+Serif+SC) and [Source Han Sans / Noto Sans SC (思源黑體)](https://fonts.google.com/noto/specimen/Noto+Sans+SC), authored by Adobe and Google under the [SIL Open Font License 1.1](https://openfontlicense.org/).

---

## 🤝 Contributing & Peer Review · 志願參與與校勘

We warmly welcome contributions from sinologists, classical Chinese scholars, translators, and students:

- **Textual Collation**: Correcting OCR errors, identifying variant characters (*yitizi*), or citing better woodblock editions.
- **Translation Proofreading**: Improving English clarity, preserving nuances of cosmological terms, and checking translations against original lines.
- **Manuscript Donations**: Contributing high-resolution public-domain scans or rare edition citations.

See our [Contribution Guide](https://astrologylib.org/contribute/) and [Contributor Agreement](https://astrologylib.org/contributor-agreement/) on the official website.

---

## 📬 Contact · 聯絡

- **Official Inquiries**: `contact@astrologylib.org`
- **Academic Issues & Errata**: Open an Issue on [GitHub](https://github.com/lupo168/astrologylib/issues)
