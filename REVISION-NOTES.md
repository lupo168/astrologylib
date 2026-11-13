# 修订说明 / Revision Notes

**日期**：2026-11-13
**范围**：`src/data/zhouyi.ts`（11 处数据修正）、`src/data/glossary.ts`（250 处修订，涉及 203 条术语）
**原则**：只改数据内容，不改代码结构与字段顺序；全部修改可逐条追溯（见 `scripts/glossary_changelog.json`）

---

## 一、zhouyi.ts 修正（11 处）

| 卦 | 修改 | 理由 |
|---|---|---|
| 07 师卦 | guaEn 补入 "steadfastness"（贞） | 原文「師：貞丈人吉」中的「贞」（守正）在英译中被遗漏 |
| 10 履卦 | gua 补「履：」前缀 | 其余各卦均有卦名前缀，此三条漏加，格式不一致 |
| 12 否卦 | gua 补「否：」前缀 | 同上 |
| 13 同人卦 | gua 补「同人：」前缀 | 同上 |
| 18 蛊卦 | "before the start" → "before the jia day" | 「先甲三日，後甲三日」的「甲」指天干甲日（十日之始），"the start" 含义模糊且丢失干支信息 |
| 23 剥卦 | 「不利。有攸往。」→「不利有攸往。」 | 通行本作一句连读，误断为两句 |
| 27 颐卦 | "seek food from one's own mouth" → "seek your own sustenance" | 「自求口實」的「口实」意为口中食物、自谋生计，原译"从自己嘴里找食物"是字面误译 |
| 31 咸卦 | "Taking a maiden" → "Marrying a maiden" | 「取女」之「取」通「娶」，义为婚娶 |
| 35 晋卦 | "the noble son" → "the honored lord" | 「康侯」是受赐的诸侯（安邦之侯），非"noble son" |
| 44 姤卦 | "do not take such a woman" → "do not marry such a woman" | 「勿用取女」同上，取＝娶 |
| 53 渐卦 | "the maiden's return" → "for a young woman to marry" | 「女歸」之「归」是出嫁（于归），不是"返回" |

## 二、glossary.ts 修订

### 1. 误译纠正（en 字段）

| 词条 | 原译 | 改为 | 理由 |
|---|---|---|---|
| xiao-shen 枭神 | Starving God | **Owl Spirit** | 「枭」为猫头鹰（不孝鸟），「枭神」即偏印之别称，英译通作 Owl（Spirit）。"Starving" 属误读 |
| yang-ren 羊刃 | Sheep Blade / Yang Blade 混用 | **Yang Blade** | 「羊」为「阳」之借字（阳刃），与羊无关；两处混用统一 |
| hong-luan 红鸾 | Red Phoenix | **Red Luan Bird** | 鸾（luan）是与凤不同的神鸟，译 Phoenix 丢失专名 |
| san-fang-si-zheng 三方四正 | Triangular & Polar Assembly | **Trine and Opposition** | 三合方（trine）加对宫（opposition）共四正；"polar assembly" 不达意 |
| jian-lu / lu-shen 建禄/禄神 | Established Salary / Salary Star | **Established Prosperity / Prosperity Star** | 「禄」为俸禄、福禄，古义非现代"工资" |
| kui-gang 魁罡 | Kui Gang | **Kui Gang (Four Majestic Day Pillars)** | 补足语义，让读者知道这是四个特定干支日柱 |
| shen-sha 神煞 | Stars / Gods & Killers | **Spirits & Killers** | 「神煞」＝神（吉神）＋煞（凶煞），统一为 Spirits & Killers |
| xian-shen 闲神 | Neutral God | **Idle God** | 「闲」是闲置不作用，通译 Idle；Neutral（中和）是另一概念 |
| yao-ci 爻辞 | Line Commentary | **Line Statements** | 与 gua-ci（Hexagram Judgment）配套，"statements" 更贴「辞」 |

### 2. 术语统一（消除一词多译）

- **ming-gong 命宫**："Palace of Destiny" 与他处 "Life Palace" 并存 → 统一为 **Life Palace (BaZi · Ming Gong)**，紫微词条（ming-gong-ziwei）保持 Life Palace 并互相交叉引用
- **shen-gong 身宫**："Palace of Self" → **Body Palace (Shen Gong)**，与紫微词条统一
- **liu-nian 流年**："Annual Year Luck"（年度·年·运，语义重复）→ **Annual Luck (Liu Nian)**
- **xi-shen 喜神**："Favorable Element" → **Favorable God (Xi Shen)**，与 Ten Gods 系列的 God 后缀统一（喜神在十神语境下指吉神，非五行喜用）
- **chou-shen 仇神**、**xiao-shen 枭神** 等加注拼音，格式统一

### 3. 补齐缺失的英文释义（shortDef 127 处）

原数据约 40% 词条的 shortDef 为空或为中文（如 fu-yin「柱重现」、fan-yin「柱相冲」、xiao-yun「逐年推运」等），全部补为英文一句话定义。现在 **203 条全部有英文 shortDef**，无空值、无纯中文值。

### 4. 简繁统一（zh 字段 87 处 → 繁体）

站内 glossary 其余部分及 zhouyi.ts 均用繁体，但 87 处 zh/categoryZh 为简体（如 命宫/冲/杀/禄/驿马/红鸾）。统一为繁体（命宮/衝/殺/祿/驛馬/紅鸞）。英文释义括注中的汉字（祿權科忌、變爻、本宮首卦等）一并统一。

### 5. 学派限定与表述审慎

- **si-hua 四化**：detailedDef 注明这是紫微斗数体系的概念（八字不用四化），避免跨体系误用
- **shen-gong-ziwei 身宫**：注明"约 35 岁后影响力增强"是部分流派的断法，非铁律
- 涉及"必定""最好"等绝对化表述改为审慎措辞

### 6. 交叉引用

命宫（八字）↔ 命宫（紫微）、身宫（八字）↔ 身宫（紫微）、建禄 ↔ 禄神 ↔ 建禄格 等成组概念互相引用，方便读者跳转。

## 三、校验方法

1. 全部 203 个对象逐条 JSON 解析通过（无语法错误）
2. 与 HEAD 版本做"骨架对比"（把所有字符串替换为占位符后比对结构）：结构完全一致，仅字符串内容变化
3. zhouyi.ts 的 diff 恰为 11 处预定修正，无其他改动
4. 64 卦卦辞已逐条核对通行本《周易》原文

## 四、未改动事项

- 词条的 source / sourceLink / learnLink 一律未动
- 不新增、不删除词条（203 条不变）
- detailedDef 原有内容除上述误译与简繁外未重写
