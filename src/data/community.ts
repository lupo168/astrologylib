// AstrologyLib Community Data & Seed Topics
// Structured for W3C Schema.org QAPage & DiscussionForumPosting (SEO / AEO / GEO Optimized)

export interface CommunityReply {
  id: string;
  author: string;
  authorRole?: string;
  createdAt: string;
  content: string;
  likes: number;
}

export interface CommunityTopic {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  category: 'Classics & Errata' | 'BaZi & Destiny' | 'Feng Shui' | 'Daoist Canon' | 'General Metaphysics';
  createdAt: string;
  approxDateRef?: string;
  views: number;
  repliesCount: number;
  content: string;
  tags: string[];
  replies: CommunityReply[];
}

export const CANONICAL_TOPICS: CommunityTopic[] = [
  {
    id: "TOPIC-001",
    title: "关于《三易备遗》宋代家铉翁进书状的文字校勘与版本异议考",
    author: "衡 (Curator)",
    authorRole: "AstrologyLib Fellow",
    category: "Classics & Errata",
    createdAt: "2026-09-08 10:30",
    approxDateRef: "两宋 (约 1270 CE)",
    views: 342,
    repliesCount: 3,
    tags: ["三易备遗", "四库全书", "文献校勘", "殆知阁底本"],
    content: `在研读《三易备遗》（四库全书经部一·易类，宋朱元升撰）卷首之咸淳八年两浙提刑家铉翁进书状时，对照文渊阁写本与殆知阁（daizhigev20）数字化文本，发现数处避讳字与版刻异文：

1. 卷首进书状中“承节郎差处州龙泉遂昌庆元及建宁松溪政和巡检朱元升”，部分刻本脱“及”字；
2. 卷末士立跋语中“庚午备遗成帙，堂家先生用闻于朝”，此处“堂家先生”指家铉翁（因其号堂家先生，宋末直言敢谏之名臣）。

欢迎对两宋易学文献流传史有研究的同仁比对四库馆臣抄本与正统道藏太玄部所收本之对读异同，共同完善公有领域文本的勘误记录。`,
    replies: [
      {
        id: "REP-001-1",
        author: "Julian Vance",
        authorRole: "Sinology Researcher, Oxford",
        createdAt: "2026-09-08 11:15",
        content: "Very insightful comparison. The Wenyuan Pavilion manuscript indeed records 家鉉翁's memorial with slight variance in the bureaucratic titles compared to the Southern Song provincial gazetteers. Appreciate this library's transparent provenance tracing back to Gary Chow's Daizhige repository.",
        likes: 12
      },
      {
        id: "REP-001-2",
        author: "思齐",
        authorRole: "易学研习者",
        createdAt: "2026-09-08 12:40",
        content: "朱元升《三易备遗》以连山、归藏、周易并列，先天卦图极受南宋末年易家推崇，感谢馆方提供如此清爽的在线标点与朝代考据！",
        likes: 8
      }
    ]
  },
  {
    id: "TOPIC-002",
    title: "《滴天髓》通神论“天道与地道”在现代四柱调候用神中的义理辨析",
    author: "玄鉴道人",
    authorRole: "BaZi Practitioner",
    category: "BaZi & Destiny",
    createdAt: "2026-09-07 16:20",
    approxDateRef: "清代道光 (1848 CE)",
    views: 890,
    repliesCount: 4,
    tags: ["滴天髓", "任铁樵", "五行生克", "十干调候"],
    content: `《滴天髓》首揭“欲识三元万法宗，先观帝载与神功；坤元合德机箴发，五气偏全定吉凶”。

任铁樵注云：“帝载者，天道也；神功者，地道也。天道主阴阳五行之流行，地道主四时寒暑之造化”。在现代八字排盘与全球化跨时区（海外冬夏令时、南半球节气对应）的实践中，大家如何看待“天道流行”与“地道造化”的物理气候差异？

本帖供全球易友探讨五行气象本质，纯学术探讨，严禁广告推销。`,
    replies: [
      {
        id: "REP-002-1",
        author: "David K.",
        authorRole: "Sydney, Australia",
        createdAt: "2026-09-07 18:05",
        content: "Regarding the Southern Hemisphere seasonal inversion: in Australia, when the Northern Hemisphere is in Zi month (Winter), we experience peak Summer heat. The debate between Solar Longitude (Sun at 270°) vs. local temperature equilibrium is directly tied to the Di Tian Sui doctrine of Qi vs. Form.",
        likes: 15
      },
      {
        id: "REP-002-2",
        author: "明真",
        authorRole: "命理史研习者",
        createdAt: "2026-09-07 20:30",
        content: "按徐乐吾《子平真诠评注》与任氏《滴天髓阐微》，干支乃日地运行夹角之代号，重在节气交接点（太阳黄经），非单指地表冷暖。天道不变，地道随方。",
        likes: 11
      }
    ]
  },
  {
    id: "TOPIC-003",
    title: "《葬书》郭璞“气乘风则散，界水则止”在现代都市建筑中的微气候对应",
    author: "峦头客",
    authorRole: "Architectural Heritage",
    category: "Feng Shui",
    createdAt: "2026-09-06 09:15",
    approxDateRef: "东晋 (310 CE)",
    views: 650,
    repliesCount: 2,
    tags: ["葬书", "郭璞", "峦头风水", "环境物理学"],
    content: `东晋郭璞《葬书》首次确立了风水（堪舆）的科学定义：“气乘风则散，界水则止。古人聚之使不散，行之使有止，故谓之风水”。

在现代高密度现代都市（如新加坡、纽约、香港）的建筑微气候设计中，峡谷风效应（Wind Tunnel Effect）与人工水系对地表热岛效应的阻隔，惊人地印证了郭璞一千七百年前的洞察。

大家在阅读《葬书》原文时，有哪些章节让您对当代居住生态产生新思考？`,
    replies: [
      {
        id: "REP-003-1",
        author: "Claire Moreau",
        authorRole: "Urban Planner, Paris",
        createdAt: "2026-09-06 14:22",
        content: "Guo Pu's thesis is astonishingly aligned with contemporary microclimate aerodynamics in bioclimatic urban design. Classical Chinese geomancy is essentially an empirical taxonomy of fluid dynamics.",
        likes: 19
      }
    ]
  },
  {
    id: "TOPIC-004",
    title: "《正统道藏》洞神部三皇文与天师道符箓科仪历史演进脉络",
    author: "紫虚散人",
    authorRole: "Daoist Studies",
    category: "Daoist Canon",
    createdAt: "2026-09-05 14:00",
    approxDateRef: "明正统十年 (1445 CE)",
    views: 420,
    repliesCount: 1,
    tags: ["道藏", "三皇文", "洞神部", "正统道藏"],
    content: `明英宗正统十年官修《正统道藏》五千三百零五卷，其中三洞（洞真、洞玄、洞神）四辅（太玄、太平、太清、正一）之结构，直接继承南朝陆修静《三洞经书目录》。

洞神部以《三皇文》为骨干，后世屡经修整。本馆藏录《道藏》洞神部 369 部典籍，保留了极珍贵的汉魏古道法图式。欢迎同道共同探讨三皇内文在唐宋时期的演变。`,
    replies: [
      {
        id: "REP-004-1",
        author: "道邻",
        authorRole: "文献整理者",
        createdAt: "2026-09-05 17:40",
        content: "陶弘景《真诰》中屡提三皇文与上清真经之授受科仪。AstrologyLib 将这 1,721 部全量挂载并按三洞四辅精细切分，堪称海外汉学研究者的福音。",
        likes: 9
      }
    ]
  }
];
