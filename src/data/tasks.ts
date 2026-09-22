// Volunteer proofreading work-in-progress list.
// Status: open (待認領) / inprogress (校對中) / verified (已核驗)
// Standard reference for community collation across Yi Canon & classical corpus.

export interface ProofTask {
  id: string;
  category: 'glossary' | 'zhouyi' | 'wings' | 'classics' | 'primer';
  title: string;
  zh: string;
  scope: string;
  status: 'open' | 'inprogress' | 'verified';
  priority: 'high' | 'medium' | 'low';
  note: string;
}

export const TASKS: ProofTask[] = [
  // 1. 核心基石：术语表
  {
    id: 'glossary-core',
    category: 'glossary',
    title: 'Glossary · Core Metaphysical Terms (164 entries)',
    zh: '術語表 · 核心哲學術語庫 (164 詞條)',
    scope: 'Verification of Taiji, Yin-Yang, Five Elements, Heavenly Stems, Earthly Branches',
    status: 'inprogress',
    priority: 'high',
    note: 'The benchmark dictionary against which all classical English translations must align.',
  },
  {
    id: 'glossary-astro',
    category: 'glossary',
    title: 'Glossary · Astrological & Celestial Lexicon',
    zh: '術語表 · 天文星象與神煞辭典',
    scope: 'Expansion covering 28 Lunar Mansions, Four Symbols, Purple Star terminology',
    status: 'open',
    priority: 'medium',
    note: 'Standardizing ancient astronomical nomenclature for classical research.',
  },

  // 2. 周易 64 卦爻辞分卷认领 (上经 1-30，下经 31-64)
  {
    id: 'zy-01-08',
    category: 'zhouyi',
    title: 'Zhou Yi · Hexagrams 01-08 (Creation & Trial)',
    zh: '周易 · 乾至比（第 01 至 08 卦 48 爻）',
    scope: 'Qian, Kun, Zhun, Meng, Xu, Song, Shi, Bi — Line texts and judgments',
    status: 'inprogress',
    priority: 'high',
    note: 'Cosmological origins and foundational human struggles; pilot translation undergoing second review.',
  },
  {
    id: 'zy-09-16',
    category: 'zhouyi',
    title: 'Zhou Yi · Hexagrams 09-16 (Social Order & Power)',
    zh: '周易 · 小畜至豫（第 09 至 16 卦 48 爻）',
    scope: 'Xiao Chu, Lu, Tai, Pi, Tong Ren, Da You, Qian (Modesty), Yu',
    status: 'open',
    priority: 'high',
    note: 'Crucial ethical and political dynamics; open for scholar claim.',
  },
  {
    id: 'zy-17-24',
    category: 'zhouyi',
    title: 'Zhou Yi · Hexagrams 17-24 (Decay & Renewal)',
    zh: '周易 · 隨至復（第 17 至 24 卦 48 爻）',
    scope: 'Sui, Gu, Lin, Guan, Shi Ke, Bi (Grace), Bo, Fu — Cyclic turns',
    status: 'open',
    priority: 'high',
    note: 'Hexagram Fu (Return) requires strict metaphysical precision against Daoist commentaries.',
  },
  {
    id: 'zy-25-30',
    category: 'zhouyi',
    title: 'Zhou Yi · Hexagrams 25-30 (Upper Canon Climax)',
    zh: '周易 · 無妄至離（第 25 至 30 卦 36 爻 · 上經終卷）',
    scope: 'Wu Wang, Da Chu, Yi (Jaws), Da Guo, Kan (Water), Li (Fire)',
    status: 'open',
    priority: 'high',
    note: 'The fundamental polarity of Kan (Abyss) and Li (Clarity) concluding Book I.',
  },
  {
    id: 'zy-31-40',
    category: 'zhouyi',
    title: 'Zhou Yi · Hexagrams 31-40 (Human Affection & Release)',
    zh: '周易 · 咸至解（第 31 至 40 卦 60 爻 · 下經始卷）',
    scope: 'Xian, Heng, Dun, Da Zhuang, Jin, Ming Yi, Jia Ren, Kui, Jian, Xie',
    status: 'open',
    priority: 'medium',
    note: 'Beginning of the human sphere: courtship, marriage, estrangement, and liberation.',
  },
  {
    id: 'zy-41-48',
    category: 'zhouyi',
    title: 'Zhou Yi · Hexagrams 41-48 (Cultivation & Community)',
    zh: '周易 · 損至井（第 41 至 48 卦 48 爻）',
    scope: 'Sun, Yi (Increase), Guai, Gou, Cui, Sheng, Kun (Adversity), Jing (Well)',
    status: 'open',
    priority: 'medium',
    note: 'Focuses on spiritual subtraction (Sun) and social nourishment (Jing).',
  },
  {
    id: 'zy-49-56',
    category: 'zhouyi',
    title: 'Zhou Yi · Hexagrams 49-56 (Revolution & Traveling)',
    zh: '周易 · 革至旅（第 49 至 56 卦 48 爻）',
    scope: 'Ge, Ding, Zhen, Gen, Jian (Gradual), Gui Mei, Feng, Lu',
    status: 'open',
    priority: 'medium',
    note: 'Dynastic transition, thunder, stillness, and wanderer contemplation.',
  },
  {
    id: 'zy-57-64',
    category: 'zhouyi',
    title: 'Zhou Yi · Hexagrams 57-64 (Spiritual Completion & Before)',
    zh: '周易 · 巽至未濟（第 57 至 64 卦 48 爻 · 全書終卷）',
    scope: 'Xun, Dui, Huan, Jie, Zhong Fu, Xiao Guo, Ji Ji, Wei Ji',
    status: 'open',
    priority: 'high',
    note: 'The master paradox of Completion (63) and Before Completion (64). Needs master collation.',
  },

  // 3. 十翼经传 (The Ten Wings)
  {
    id: 'wings-xici-upper',
    category: 'wings',
    title: 'The Great Commentary (Xi Ci I · 繫辭上傳)',
    zh: '周易 · 繫辭上傳（全十二章）',
    scope: '12 chapters of foundational Yi philosophy: Qian and Kun as cosmic portals',
    status: 'verified',
    priority: 'high',
    note: 'Drafted and editorially verified in 2026. Available as baseline reading model.',
  },
  {
    id: 'wings-xici-lower',
    category: 'wings',
    title: 'The Great Commentary (Xi Ci II · 繫辭下傳)',
    zh: '周易 · 繫辭下傳（全十二章）',
    scope: 'Chapters on ancient technological inventions, divination ritual, and human virtue',
    status: 'inprogress',
    priority: 'high',
    note: 'Chapter 2 (Inventions inspired by Hexagrams) under active collation.',
  },
  {
    id: 'wings-wenyan',
    category: 'wings',
    title: 'Commentary on the Words (Wen Yan · 文言傳)',
    zh: '周易 · 文言傳（乾坤二卦詳解）',
    scope: 'Confucian philosophical treatises dedicated exclusively to Qian and Kun',
    status: 'open',
    priority: 'medium',
    note: 'Moral leadership and yin-yang dynamics; suitable for comparative philosophy specialists.',
  },
  {
    id: 'wings-shuogua',
    category: 'wings',
    title: 'Discussion of the Trigrams (Shuo Gua · 說卦傳)',
    zh: '周易 · 說卦傳（八卦象數取象）',
    scope: 'Early Heavens, Later Heavens arrangements, animal & familial correspondences',
    status: 'open',
    priority: 'high',
    note: 'The prime sourcebook for all traditional Chinese divination and feng shui correspondences.',
  },

  // 4. 命理与术数原典 (Foundational Classics)
  {
    id: 'classics-ditian-1',
    category: 'classics',
    title: 'Di Tian Sui · Chapters 01-21 (Heaven, Earth & Five Elements)',
    zh: '滴天髓 · 通神論（前 21 節：理氣象數篇）',
    scope: 'Celestial Qi, earthly configurations, stem properties, branch interactions',
    status: 'inprogress',
    priority: 'high',
    note: 'First 21 verses translated into clean English with Liu Bowen annotations.',
  },
  {
    id: 'classics-ditian-2',
    category: 'classics',
    title: 'Di Tian Sui · Chapters 22-42 (Character, Fate & Dynamics)',
    zh: '滴天髓 · 通神論（後 21 節：格局休咎篇）',
    scope: 'Structural balance, hidden transformations, sickness, lineage patterns',
    status: 'open',
    priority: 'high',
    note: 'Open for experienced BaZi practitioners proficient in traditional literary Chinese.',
  },
  {
    id: 'classics-jyl',
    category: 'classics',
    title: 'Jiao Shi Yi Lin · Selected Portions (Western Han Divination)',
    zh: '焦氏易林 · 精選卷（西漢易林占驗）',
    scope: 'Batched verse translations: 64 to 64 permutations (4,096 four-character poems)',
    status: 'open',
    priority: 'low',
    note: 'Colossal long-term project; accepted in modular batches of 64 verses.',
  },

  // 5. 零门槛通识导读 (Primer Series)
  {
    id: 'primer-cs-series',
    category: 'primer',
    title: 'Foundational Primer Series (Natural English Polish)',
    zh: '零基礎通識系列 · 英文地道性潤色',
    scope: 'Yin-Yang, Five Elements, 12 Zodiacs, BaZi Framework primer articles',
    status: 'open',
    priority: 'medium',
    note: 'Focus on removing awkward translated syntax; native English speakers highly desired.',
  },
];

export const CATEGORIES = [
  { key: 'glossary', title: '1. Standardization & Lexicon · 術語與辭典', desc: 'Ensuring ontological and philosophical consistency across all translations.' },
  { key: 'zhouyi', title: '2. The Zhou Yi 64 Hexagrams · 周易經文爻辭', desc: 'Line-by-line judgment and line texts divided into 8-hexagram modular batches.' },
  { key: 'wings', title: '3. The Ten Wings (Shi Yi) · 十翼易傳哲學', desc: 'Canonical Confucian and early commentaries explaining the metaphysics of change.' },
  { key: 'classics', title: '4. Classical Metaphysical Canons · 專題典籍', desc: 'Deep-dive masterworks spanning BaZi destiny analysis, celestial astrology, and historical divination.' },
  { key: 'primer', title: '5. Primers & Educational Guides · 通識導讀潤色', desc: 'Introductory reading materials polished for modern English readers.' },
] as const;

