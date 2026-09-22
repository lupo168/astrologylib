// Zhou Yi · 周易 · all 64 hexagrams — original text + own translation.
// Source: public-domain (Sibu Congkan via zh.wikisource). Translation © AstrologyLib.
// Structure per hexagram: { n, zh, py, en, gua, guaEn, lines, yao }
// yao: six-line texts (original + own translation), bottom-to-top; 用九/用六 where present.

export interface HexagramYao {
  pos: string;   // 初九 / 六二 / 上九 / 用九 …
  posEn: string; // First Nine / Second Six / Top Nine / All Nines …
  zh: string;    // original (traditional) text
  en: string;    // own translation
}

export interface Hexagram {
  n: number;
  zh: string;
  py: string;
  en: string;
  gua: string;
  guaEn: string;
  lines: string; // six lines bottom-to-top, '1' = yang (solid), '0' = yin (broken)
  yao: HexagramYao[]; // six line texts (bottom-to-top), plus 用九/用六 where present
}

export const SHANGJING: Hexagram[] = [
  { n: 1, lines: '111111', zh: '乾', py: 'Qián', en: 'The Creative', gua: '乾：元亨。利貞。', guaEn: 'The Creative: sublime success, favorable through perseverance.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '潛龍勿用。', en: 'The hidden dragon does not act.' },

      { pos: '九二', posEn: 'Second Nine', zh: '見龍在田，利見大人。', en: 'The dragon appears in the field; favorable to see the great person.' },

      { pos: '九三', posEn: 'Third Nine', zh: '君子終日乾乾，夕惕若；厲，无咎。', en: 'The noble person is diligent all day; alert in the evening - danger, yet no blame.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '或躍在淵，无咎。', en: 'Sometimes it leaps in the abyss - no blame.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '飛龍在天，利見大人。', en: 'The dragon flies in the sky; favorable to see the great person.' },

      { pos: '上九', posEn: 'Top Nine', zh: '亢龍，有悔。', en: 'The dragon overreaches; there is regret.' },

      { pos: '用九', posEn: 'All Nines', zh: '見羣龍无首，吉。', en: 'See the flock of dragons without a head - good fortune.' }

    ]

  },
  { n: 2, lines: '000000', zh: '坤', py: 'Kūn', en: 'The Receptive', gua: '坤：元亨。利牝馬之貞。君子有攸往，先迷後得主。利西南得朋，東北喪朋。安貞，吉。', guaEn: 'The Receptive: sublime success. Favorable to be steadfast like a mare. When the noble person sets out, they first lose the way, then find a master. Favorable to find friends in the southwest, lose them in the northeast. Steadfast and at peace, good fortune.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '履霜，堅冰至。', en: 'Treading on frost - the hard ice will come.' },

      { pos: '六二', posEn: 'Second Six', zh: '直方大，不習无不利。', en: 'Straight, square, and great - without practice, nothing is unfavorable.' },

      { pos: '六三', posEn: 'Third Six', zh: '含章，可貞。或從王事，无成有終。', en: 'Containing brilliance; one may persevere. If serving the king\'s affairs, no completion yet a good ending.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '括囊，无咎无譽。', en: 'Tied up in a sack - no blame, no praise.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '黃裳，元吉。', en: 'Yellow lower garment - supreme good fortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '龍戰于野，其血玄黃。', en: 'Dragons fight in the wild; their blood is dark and yellow.' },

      { pos: '用六', posEn: 'All Sixes', zh: '利永貞。', en: 'Favorable to be enduringly steadfast.' }

    ]

  },
  { n: 3, lines: '100010', zh: '屯', py: 'Zhūn', en: 'Difficulty at the Beginning', gua: '屯：元亨，利貞。勿用有攸往，利建侯。', guaEn: 'Difficulty at the Beginning: sublime success, favorable to persevere. Do not rush to act; it is favorable to appoint helpers.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '磐桓，利居貞，利建侯。', en: 'Biding and hesitating; favorable to remain steadfast, favorable to appoint helpers.' },

      { pos: '六二', posEn: 'Second Six', zh: '屯如邅如，乘馬班如，匪寇婚媾，女子貞不字，十年乃字。', en: 'Hesitant and entangled; the horses turn round and round. Not bandits but a marriage suit. The maiden stays chaste and does not pledge; in ten years she pledges.' },

      { pos: '六三', posEn: 'Third Six', zh: '即鹿无虞，惟入于林中，君子幾不如舍，往吝。', en: 'Chasing the deer without a forester; one merely enters the woods. The noble person sees this and chooses to let go - to press on brings humiliation.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '乘馬班如，求婚媾，往，吉无不利。', en: 'The horses turn round and round; seeking the marriage suit. Going forward brings good fortune; nothing is unfavorable.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '屯其膏；小貞吉，大貞凶。', en: 'Difficulty gathers its riches; in small matters perseverance is good fortune, in great matters misfortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '乘馬班如，泣血漣如。', en: 'The horses turn round and round; tears of blood flow on and on.' }

    ]

  },
  { n: 4, lines: '010001', zh: '蒙', py: 'Méng', en: 'Youthful Folly', gua: '蒙：亨。匪我求童蒙，童蒙求我。初筮告，再三瀆，瀆則不告。利貞。', guaEn: 'Youthful Folly: success. I do not seek the young fool; the young fool seeks me. At the first divination I answer; ask again and again and it is no longer answered. Favorable to persevere.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '發蒙，利用刑人，用說桎梏，以往吝。', en: 'Releasing the folly; favorable to discipline with punishments, to loosen the fetters - to press on brings humiliation.' },

      { pos: '九二', posEn: 'Second Nine', zh: '包蒙吉，納婦吉，子克家。', en: 'Embracing the folly - good fortune. Taking a wife brings good fortune; the son takes charge of the family.' },

      { pos: '六三', posEn: 'Third Six', zh: '勿用取女，見金夫，不有躬，无攸利。', en: 'Do not take this woman; seeing a man of gold, she loses herself - nothing is favorable.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '困蒙，吝。', en: 'Entangled folly - humiliation.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '童蒙，吉。', en: 'Childlike folly - good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '擊蒙，不利為寇，利禦寇。', en: 'Striking the folly; unfavorable to act as a robber, favorable to ward off robbers.' }

    ]

  },
  { n: 5, lines: '111010', zh: '需', py: 'Xū', en: 'Waiting', gua: '需：有孚，光亨。貞吉，利涉大川。', guaEn: 'Waiting: trust and radiant success. Perseverance brings good fortune; favorable to cross the great river.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '需于郊，利用恆，无咎。', en: 'Waiting at the outskirts; favorable to be constant, no blame.' },

      { pos: '九二', posEn: 'Second Nine', zh: '需于沙，小有言，終吉。', en: 'Waiting on the sand; small words spoken, but ends in good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '需于泥，致寇至。', en: 'Waiting in the mud; bandits draw near.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '需于血，出自穴。', en: 'Waiting in blood; coming out of the cavern.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '需于酒食，貞吉。', en: 'Waiting over wine and food; perseverance brings good fortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '入于穴，有不速之客三人來，敬之終吉。', en: 'Entering the cavern; three uninvited guests arrive - honored, it ends in good fortune.' }

    ]

  },
  { n: 6, lines: '010111', zh: '訟', py: 'Sòng', en: 'Conflict', gua: '訟：有孚，窒，惕，中吉，終凶。利見大人，不利涉大川。', guaEn: 'Conflict: trust blocked, be cautious; midway good fortune, ending misfortune. Favorable to see the great person; not favorable to cross the great river.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '不永所事，小有言，終吉。', en: 'Do not prolong the dispute; small words spoken, ends in good fortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '不克訟，歸而逋，其邑人三百戶无眚。', en: 'Unable to prevail in the dispute; return and flee; the three hundred households of one\'s town are spared calamity.' },

      { pos: '六三', posEn: 'Third Six', zh: '食舊德，貞厲，終吉。或從王事，无成。', en: 'Feeding on the old virtue; perseverance is perilous, but ends in good fortune. If serving the king\'s affairs, there is no completion.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '不克訟，復即命渝，安貞吉。', en: 'Unable to prevail in the dispute; turn back and submit to the decree, change the mind - peaceful perseverance, good fortune.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '訟，元吉。', en: 'The dispute - supreme good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '或錫之鞶帶，終朝三褫之。', en: 'Perhaps granted a leather belt; by the end of the day it is stripped three times.' }

    ]

  },
  { n: 7, lines: '010000', zh: '師', py: 'Shī', en: 'The Army', gua: '師：貞丈人吉，无咎。', guaEn: 'The Army: the elder leads, good fortune, no blame.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '師出以律，否臧，凶。', en: 'The army sets out by regulations; if not ordered well, misfortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '在師中吉，无咎；王三錫命。', en: 'In the midst of the army - good fortune, no blame; the king bestows commands three times.' },

      { pos: '六三', posEn: 'Third Six', zh: '師或輿尸，凶。', en: 'The army carries corpses back - misfortune.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '師左次，无咎。', en: 'The army camps to the left - no blame.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '田有禽，利執言，无咎。長子帥師，弟子輿尸，貞凶。', en: 'There is prey in the field; favorable to seize it, no blame. The eldest son leads the army; the younger carries corpses - perseverance brings misfortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '大君有命，開國承家，小人勿用。', en: 'The great ruler issues commands: found states and households - but do not employ the mean person.' }

    ]

  },
  { n: 8, lines: '000010', zh: '比', py: 'Bǐ', en: 'Holding Together', gua: '比：吉。原筮元永貞，无咎。不寧方來，後夫凶。', guaEn: 'Holding Together: good fortune. Consult the oracle and it endures in perseverance, no blame. Those not at peace come; the one who lags behind comes to misfortune.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '有孚，比之，无咎。有孚盈缶，終來有它，吉。', en: 'With sincerity, draw near - no blame. Sincerity fills the earthen vessel; in the end other things come - good fortune.' },

      { pos: '六二', posEn: 'Second Six', zh: '比之自內，貞吉。', en: 'Drawing near from within - perseverance brings good fortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '比之匪人。', en: 'Drawing near the wrong people.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '外比之，貞吉。', en: 'Drawing near from without - perseverance brings good fortune.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '顯比。王用三驅，失前禽，邑人不誡，吉。', en: 'Manifest closeness. The king hunts from three sides, letting the front prey escape; the townspeople are not warned - good fortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '比之无首，凶。', en: 'Closeness without a head - misfortune.' }

    ]

  },
  { n: 9, lines: '111011', zh: '小畜', py: 'Xiǎo Xù', en: 'Small Taming', gua: '小畜：亨。密雲不雨，自我西郊。', guaEn: 'Small Taming: success. Dense clouds, no rain, from our western region.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '復自道，何其咎，吉。', en: 'Return to the way; what blame could there be? Good fortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '牽復，吉。', en: 'Pulled back - good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '輿說輻，夫妻反目。', en: 'The cart loses its spokes; husband and wife turn against each other.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '有孚，血去惕出，无咎。', en: 'With sincerity, blood departs and fear gives way - no blame.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '有孚攣如，富以其鄰。', en: 'Sincerity linked fast; enrich the neighbor.' },

      { pos: '上九', posEn: 'Top Nine', zh: '既雨既處，尚德載，婦貞厲，月幾望，君子征凶。', en: 'It has rained and settled; virtue is carried. The woman\'s perseverance is perilous; the moon near full - the noble person\'s advance brings misfortune.' }

    ]

  },
  { n: 10, lines: '110111', zh: '履', py: 'Lǚ', en: 'Treading', gua: '履虎尾，不咥人，亨。', guaEn: 'Treading on the tiger’s tail: it does not bite; success.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '素履，往无咎。', en: 'Treading plainly; going forward, no blame.' },

      { pos: '九二', posEn: 'Second Nine', zh: '履道坦坦，幽人貞吉。', en: 'The path is smooth and level; the secluded person\'s perseverance brings good fortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '眇能視，跛能履，履虎尾，咥人，凶。武人為于大君。', en: 'Dim-sighted, yet can see; lame, yet can walk. Treading on the tiger\'s tail - it bites - misfortune. The warrior serves the great ruler.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '履虎尾，愬愬終吉。', en: 'Treading on the tiger\'s tail; cautious and fearful - ends in good fortune.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '夬履，貞厲。', en: 'Resolute treading; perseverance is perilous.' },

      { pos: '上九', posEn: 'Top Nine', zh: '視履考祥，其旋元吉。', en: 'Look back at the tread and examine the omens; turning around, supreme good fortune.' }

    ]

  },
  { n: 11, lines: '111000', zh: '泰', py: 'Tài', en: 'Peace', gua: '泰：小往大來，吉亨。', guaEn: 'Peace: the small departs, the great arrives; good fortune and success.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '拔茅茹以其彙，征吉。', en: 'Pulling up the grass in tufts; advancing brings good fortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '包荒。用馮河，不遐遺；朋亡。得尚于中行。', en: 'Embrace the wilderness; cross the river, leaving nothing behind; the clique dissolves. Gain the middle way.' },

      { pos: '九三', posEn: 'Third Nine', zh: '无平不陂，无往不復，艱貞无咎。勿恤其孚，于食有福。', en: 'No level without slope, no going without return; perseverance in hardship, no blame. Do not worry about sincerity; in food there is blessing.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '翩翩，不富以其鄰；不戒以孚。', en: 'Fluttering, not enriching the neighbor; without warning, with sincerity.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '帝乙歸妹，以祉，元吉。', en: 'Emperor Yi gave his sister in marriage, bringing blessing - supreme good fortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '城復于隍，勿用師，自邑告命，貞吝。', en: 'The city wall falls back into the moat; do not use the army. Announce orders from your own city; perseverance brings humiliation.' }

    ]

  },
  { n: 12, lines: '000111', zh: '否', py: 'Pǐ', en: 'Standstill', gua: '否之匪人，不利君子貞，大往小來。', guaEn: 'Standstill: not the right persons; it is not favorable for the noble person to persist. The great depart, the small arrive.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '拔茅茹以其彙，貞吉。亨。', en: 'Pulling up the grass in tufts; perseverance brings good fortune and success.' },

      { pos: '六二', posEn: 'Second Six', zh: '包承，小人吉，大人否。亨。', en: 'Embracing obedience; the mean person prospers, the noble person is hindered. Success.' },

      { pos: '六三', posEn: 'Third Six', zh: '包羞。', en: 'Embracing shame.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '有命，无咎，疇離祉。', en: 'There is a decree - no blame; companions share in blessing.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '休否，大人吉。其亡其亡，繫于苞桑。', en: 'Rest the standstill; the great person - good fortune. It is falling, it is falling; yet it is bound to the mulberry.' },

      { pos: '上九', posEn: 'Top Nine', zh: '傾否，先否後喜。', en: 'Overturning the standstill; first standstill, then joy.' }

    ]

  },
  { n: 13, lines: '101111', zh: '同人', py: 'Tóng Rén', en: 'Fellowship', gua: '同人于野，亨。利涉大川，利君子貞。', guaEn: 'Fellowship in the open field: success. Favorable to cross the great river, favorable for the noble person to persevere.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '同人于門，無咎。', en: 'Fellowship at the gate - no blame.' },

      { pos: '六二', posEn: 'Second Six', zh: '同人于宗，吝。', en: 'Fellowship within the clan - humiliation.' },

      { pos: '九三', posEn: 'Third Nine', zh: '伏戎于莽，升其高陵，三歲不興。', en: 'Hiding weapons in the thicket; climbing the high hill - for three years it does not rise.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '乘其墉，弗克，攻吉。', en: 'Climbing the rampart; cannot attack - good fortune.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '同人，先號啕而后笑。大師克相遇。', en: 'Fellowship; first weeping and wailing, then laughing. The great army meets in victory.' },

      { pos: '上九', posEn: 'Top Nine', zh: '同人于郊，無悔。', en: 'Fellowship in the outskirts - no regret.' }

    ]

  },
  { n: 14, lines: '111101', zh: '大有', py: 'Dà Yǒu', en: 'Great Possession', gua: '大有：元亨。', guaEn: 'Great Possession: sublime success.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '无交害，匪咎，艱則无咎。', en: 'No harmful dealings; not blameworthy. Hardship brings no blame.' },

      { pos: '九二', posEn: 'Second Nine', zh: '大車以載，有攸往，无咎。', en: 'A great cart loaded; going forward, no blame.' },

      { pos: '九三', posEn: 'Third Nine', zh: '公用亨于天子，小人弗克。', en: 'The duke offers to the Son of Heaven; the mean person cannot do this.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '匪其彭，无咎。', en: 'Not swelling with pride - no blame.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '厥孚交如，威如；吉。', en: 'Sincerity intertwined, majestic - good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '自天佑之，吉无不利。', en: 'Helped from heaven - good fortune, nothing unfavorable.' }

    ]

  },
  { n: 15, lines: '001000', zh: '謙', py: 'Qiān', en: 'Modesty', gua: '謙：亨，君子有終。', guaEn: 'Modesty: success; the noble person brings it to its end.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '謙謙君子，用涉大川，吉。', en: 'The modest noble person crosses the great river - good fortune.' },

      { pos: '六二', posEn: 'Second Six', zh: '鳴謙，貞吉。', en: 'Modesty made known - perseverance brings good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '勞謙君子，有終吉。', en: 'The noble person of toiling modesty - a good ending, good fortune.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '无不利，撝謙。', en: 'Nothing unfavorable; spreading modesty.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '不富，以其鄰，利用侵伐，无不利。', en: 'Not rich, with one\'s neighbors; favorable to use in attacks - nothing unfavorable.' },

      { pos: '上六', posEn: 'Top Six', zh: '鳴謙，利用行師，征邑國。', en: 'Modesty made known; favorable to use in moving the army, to chastise one\'s own towns.' }

    ]

  },
  { n: 16, lines: '000100', zh: '豫', py: 'Yù', en: 'Enthusiasm', gua: '豫：利建侯行師。', guaEn: 'Enthusiasm: favorable to appoint helpers and move the army.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '鳴豫，凶。', en: 'Enthusiasm announced - misfortune.' },

      { pos: '六二', posEn: 'Second Six', zh: '介于石，不終日，貞吉。', en: 'Firm as a rock, not waiting out the day - perseverance brings good fortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '盱豫，悔。遲有悔。', en: 'Gazing up in enthusiasm; regret. Hesitation brings regret.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '由豫，大有得。勿疑。朋盍簪。', en: 'Enthusiasm comes from oneself; great gain. Do not doubt; friends gather like hairpins.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '貞疾，恆不死。', en: 'Perseverance in illness; enduring, not dying.' },

      { pos: '上六', posEn: 'Top Six', zh: '冥豫，成有渝，无咎。', en: 'Dark enthusiasm; what is done may yet change - no blame.' }

    ]

  },
  { n: 17, lines: '100110', zh: '隨', py: 'Suí', en: 'Following', gua: '隨：元亨。利貞。无咎。', guaEn: 'Following: sublime success, favorable to persevere, no blame.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '官有渝，貞吉。出門交有功。', en: 'The office changes; perseverance brings good fortune. Going out the gate, dealings bring merit.' },

      { pos: '六二', posEn: 'Second Six', zh: '系小子，失丈夫。', en: 'Bound to the boy; losing the grown man.' },

      { pos: '六三', posEn: 'Third Six', zh: '系丈夫，失小子。隨，有求得利，居貞。', en: 'Bound to the grown man; losing the boy. Following, seeking and gaining; favorable to remain steadfast.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '隨有獲，貞凶。有孚在道，以明，何咎。', en: 'Following and obtaining; perseverance brings misfortune. With sincerity on the way, clarity - what blame?' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '孚于嘉，吉。', en: 'Sincerity in what is good - good fortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '拘系之，乃從維之。王用亨于西山。', en: 'Seized and bound; then held fast. The king offers sacrifice at the western mountain.' }

    ]

  },
  { n: 18, lines: '011001', zh: '蠱', py: 'Gǔ', en: 'Work on What Has Been Spoiled', gua: '蠱：元亨。利涉大川。先甲三日，後甲三日。', guaEn: 'Work on the Spoiled: sublime success, favorable to cross the great river. Three days before the start, three days after.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '幹父之蠱，有子考，无咎，厲終吉。', en: 'Mending the father\'s work; with a worthy son, no blame - danger, yet ends in good fortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '幹母之蠱，不可貞。', en: 'Mending the mother\'s work; cannot be too firm.' },

      { pos: '九三', posEn: 'Third Nine', zh: '幹父之蠱，小有悔，无大咎。', en: 'Mending the father\'s work; small regret, no great blame.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '裕父之蠱，往見吝。', en: 'Letting the father\'s work slacken - pressing on brings humiliation.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '幹父之蠱，用譽。', en: 'Mending the father\'s work; gaining praise.' },

      { pos: '上九', posEn: 'Top Nine', zh: '不事王侯，高尚其事。', en: 'Not serving the king or lord; holding one\'s own conduct in high regard.' }

    ]

  },
  { n: 19, lines: '110000', zh: '臨', py: 'Lín', en: 'Approach', gua: '臨：元亨。利貞。至于八月有凶。', guaEn: 'Approach: sublime success, favorable to persevere. By the eighth month, misfortune.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '咸臨，貞吉。', en: 'Approach with inspiration - perseverance brings good fortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '咸臨，吉无不利。', en: 'Approach with inspiration - good fortune, nothing unfavorable.' },

      { pos: '六三', posEn: 'Third Six', zh: '甘臨，无攸利。既憂之，无咎。', en: 'Approach with sweetness - nothing favorable. If one is anxious about it, no blame.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '至臨，无咎。', en: 'Approach directly - no blame.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '知臨，大君之宜，吉。', en: 'Approach with wisdom; fitting for the great ruler - good fortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '敦臨，吉无咎。', en: 'Approach with sincerity - good fortune, no blame.' }

    ]

  },
  { n: 20, lines: '000011', zh: '觀', py: 'Guān', en: 'Contemplation', gua: '觀：盥而不荐，有孚顒若。', guaEn: 'Contemplation: wash the hands but do not offer sacrifice - a sincere, reverent presence.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '童觀，小人无咎，君子吝。', en: 'Childlike contemplation - the mean person has no blame, the noble person is humiliated.' },

      { pos: '六二', posEn: 'Second Six', zh: '窺觀，利女貞。', en: 'Peeping contemplation; favorable for the woman to be steadfast.' },

      { pos: '六三', posEn: 'Third Six', zh: '觀我生，進退。', en: 'Observe one\'s own life - advance or retreat.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '觀國之光，利用賓于王。', en: 'Observe the brilliance of the state; favorable to serve the king as a guest.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '觀我生，君子无咎。', en: 'Observe one\'s own life - the noble person has no blame.' },

      { pos: '上九', posEn: 'Top Nine', zh: '觀其生，君子无咎。', en: 'Observe the life of others - the noble person has no blame.' }

    ]

  },
  { n: 21, lines: '100101', zh: '噬嗑', py: 'Shì Kè', en: 'Biting Through', gua: '噬嗑：亨。利用獄。', guaEn: 'Biting Through: success. Favorable to use legal judgment.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '屨校滅趾，无咎。', en: 'Feet in shackles, toes cut off - no blame.' },

      { pos: '六二', posEn: 'Second Six', zh: '噬膚滅鼻，无咎。', en: 'Biting through tender flesh, nose cut off - no blame.' },

      { pos: '六三', posEn: 'Third Six', zh: '噬臘肉，遇毒；小吝，无咎。', en: 'Biting dried meat, meeting poison; small humiliation, no blame.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '噬乾胏，得金矢，利艱貞，吉。', en: 'Biting dried bone, getting a metal arrowhead; favorable to persevere through hardship - good fortune.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '噬乾肉，得黃金，貞厲，无咎。', en: 'Biting dried meat, getting yellow metal; perseverance is perilous, yet no blame.' },

      { pos: '上九', posEn: 'Top Nine', zh: '何校滅耳，凶。', en: 'Neck in cangue, ears cut off - misfortune.' }

    ]

  },
  { n: 22, lines: '101001', zh: '賁', py: 'Bì', en: 'Grace', gua: '賁：亨。小利有攸往。', guaEn: 'Grace: success. Small advantages in moving forward.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '賁其趾，舍車而徒。', en: 'Adorning the toes; giving up the carriage to walk.' },

      { pos: '六二', posEn: 'Second Six', zh: '賁其須。', en: 'Adorning the beard.' },

      { pos: '九三', posEn: 'Third Nine', zh: '賁如濡如，永貞吉。', en: 'Adorned and glossy; enduring perseverance brings good fortune.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '賁如皤如，白馬翰如，匪寇婚媾。', en: 'Adorned and simple; a white horse gallops. Not bandits but a marriage suit.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '賁於丘園，束帛戔戔，吝，終吉。', en: 'Adorning the garden mound; the bolts of silk are sparse - humiliation, yet ends in good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '白賁，无咎。', en: 'Plain adornment - no blame.' }

    ]

  },
  { n: 23, lines: '000001', zh: '剝', py: 'Bō', en: 'Splitting Apart', gua: '剝：不利。有攸往。', guaEn: 'Splitting Apart: it is not favorable to move forward.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '剝牀以足，蔑貞凶。', en: 'The bed stripped at the legs; blotting out the worthy - misfortune.' },

      { pos: '六二', posEn: 'Second Six', zh: '剝牀以辨，蔑貞凶。', en: 'The bed stripped at the frame; blotting out the worthy - misfortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '剝之，无咎。', en: 'Stripped - no blame.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '剝牀以膚，凶。', en: 'The bed stripped to the skin - misfortune.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '貫魚，以宮人寵，无不利。', en: 'Stringing the fish; through the court ladies, favor - nothing unfavorable.' },

      { pos: '上九', posEn: 'Top Nine', zh: '碩果不食，君子得輿，小人剝廬。', en: 'The great fruit not eaten; the noble person gains a carriage, the mean person strips his own roof.' }

    ]

  },
  { n: 24, lines: '100000', zh: '復', py: 'Fù', en: 'Return', gua: '復：亨。出入无疾，朋來无咎。反復其道，七日來復，利有攸往。', guaEn: 'Return: success. Going out and coming in without injury; friends come without blame. The way returns; in seven days it comes again. Favorable to move forward.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '不復遠，无袛悔，元吉。', en: 'Returning from not far; no deep regret - supreme good fortune.' },

      { pos: '六二', posEn: 'Second Six', zh: '休復，吉。', en: 'Resting return - good fortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '頻復，厲无咎。', en: 'Frequent return; danger, no blame.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '中行獨復。', en: 'Walking in the middle, returning alone.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '敦復，无悔。', en: 'Sincere return - no regret.' },

      { pos: '上六', posEn: 'Top Six', zh: '迷復，凶，有災眚。用行師，終有大敗，以其國君，凶；至于十年，不克征。', en: 'Lost in return - misfortune, calamity. Using the army, one ends in great defeat, and with it the ruler - misfortune; for ten years, unable to campaign.' }

    ]

  },
  { n: 25, lines: '100111', zh: '无妄', py: 'Wú Wàng', en: 'Innocence', gua: '无妄：元亨。利貞。其匪正有眚，不利有攸往。', guaEn: 'Innocence: sublime success, favorable to persevere. If it is not genuine, there is misfortune, and it is not favorable to move forward.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '无妄，往吉。', en: 'Without falsehood; going forward, good fortune.' },

      { pos: '六二', posEn: 'Second Six', zh: '不耕穫，不菑畬，則利有攸往。', en: 'Not reaping what was not sown, not clearing land not yet opened - then favorable to go forward.' },

      { pos: '六三', posEn: 'Third Six', zh: '无妄之災，或系之牛，行人之得，邑人之災。', en: 'Disaster without falsehood; perhaps a cow is tied up - the passerby gets it, the townsman suffers.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '可貞，无咎。', en: 'May be steadfast - no blame.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '无妄之疾，勿藥有喜。', en: 'Illness without falsehood; no medicine, and there is joy.' },

      { pos: '上九', posEn: 'Top Nine', zh: '无妄，行有眚，无攸利。', en: 'Without falsehood, yet acting brings calamity - nothing favorable.' }

    ]

  },
  { n: 26, lines: '111001', zh: '大畜', py: 'Dà Xù', en: 'Great Taming', gua: '大畜：利貞，不家食吉，利涉大川。', guaEn: 'Great Taming: favorable to persevere; not eating at home brings good fortune; favorable to cross the great river.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '有厲利已。', en: 'There is danger; favorable to stop.' },

      { pos: '九二', posEn: 'Second Nine', zh: '輿說輹。', en: 'The cart loses its axle.' },

      { pos: '九三', posEn: 'Third Nine', zh: '良馬逐，利艱貞。曰閑輿衛，利有攸往。', en: 'A good horse gallops; favorable to persevere through hardship. Train the chariot and guards; favorable to go forward.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '童牛之牿，元吉。', en: 'The yoke on the young bull - supreme good fortune.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '豶豕之牙，吉。', en: 'The tusk of a gelded boar - good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '何天之衢，亨。', en: 'The highway of heaven opens - success.' }

    ]

  },
  { n: 27, lines: '100001', zh: '頤', py: 'Yí', en: 'Nourishment', gua: '頤：貞吉。觀頤，自求口實。', guaEn: 'Nourishment: perseverance brings good fortune. Watch how one nourishes, and seek food from one’s own mouth.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '舍爾靈龜，觀我朵頤，凶。', en: 'Setting aside your spirit tortoise; watching my open jaws - misfortune.' },

      { pos: '六二', posEn: 'Second Six', zh: '顛頤，拂經，于丘頤，征凶。', en: 'Inverted nourishment; against the way; seeking nourishment on the hill - advancing brings misfortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '拂頤，貞凶，十年勿用，无攸利。', en: 'Against nourishment; perseverance brings misfortune; for ten years do not act - nothing favorable.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '顛頤吉，虎視眈眈，其欲逐逐，无咎。', en: 'Inverted nourishment - good fortune. Glaring like a tiger, desires chasing after - no blame.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '拂經，居貞吉，不可涉大川。', en: 'Against the way; remaining steadfast is good fortune; not favorable to cross the great river.' },

      { pos: '上九', posEn: 'Top Nine', zh: '由頤，厲吉，利涉大川。', en: 'Nourishment from above; danger, yet good fortune; favorable to cross the great river.' }

    ]

  },
  { n: 28, lines: '011110', zh: '大過', py: 'Dà Guò', en: 'Great Exceeding', gua: '大過：棟橈，利有攸往，亨。', guaEn: 'Great Exceeding: the ridgepole bends; favorable to move forward, success.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '藉用白茅，无咎。', en: 'Cushioning with white rushes - no blame.' },

      { pos: '九二', posEn: 'Second Nine', zh: '枯楊生稊，老夫得其女妻，无不利。', en: 'The withered poplar sprouts; the old man gains a young wife - nothing unfavorable.' },

      { pos: '九三', posEn: 'Third Nine', zh: '棟橈，凶。', en: 'The ridgepole bends - misfortune.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '棟隆，吉。有它吝。', en: 'The ridgepole rises - good fortune; yet other things bring humiliation.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '枯楊生華，老婦得其士夫，无咎无譽。', en: 'The withered poplar blooms; the old woman gains a young husband - no blame, no praise.' },

      { pos: '上六', posEn: 'Top Six', zh: '過涉滅頂，凶，无咎。', en: 'Crossing too far, the crown is submerged - misfortune, yet no blame.' }

    ]

  },
  { n: 29, lines: '010010', zh: '坎', py: 'Kǎn', en: 'The Abysmal', gua: '習坎：有孚，維心亨。行有尚。', guaEn: 'The Abysmal, repeated: trust, the heart succeeds; action brings honor.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '習坎，入于坎窞，凶。', en: 'Repeated abysses; entering the pit of the pit - misfortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '坎有險，求小得。', en: 'The abyss is perilous; seek small gain.' },

      { pos: '六三', posEn: 'Third Six', zh: '來之坎坎，險且枕，入于坎窞，勿用。', en: 'Coming and going over the abyss; peril upon peril, entering the pit - do not act.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '樽酒簋貳，用缶，納約自牖，終无咎。', en: 'A jug of wine, two bowls of rice, carried in an earthen vessel; offering through the window - in the end no blame.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '坎不盈，祗既平，无咎。', en: 'The abyss does not fill; the pit levels out - no blame.' },

      { pos: '上六', posEn: 'Top Six', zh: '係用徽纆，寘于叢棘，三歲不得，凶。', en: 'Bound with cords, placed among thorns - for three years not freed - misfortune.' }

    ]

  },
  { n: 30, lines: '101101', zh: '離', py: 'Lí', en: 'The Clinging', gua: '離：利貞。亨。畜牝牛，吉。', guaEn: 'The Clinging: favorable to persevere, success. Nourishing a docile cow brings good fortune.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '履錯然，敬之无咎。', en: 'Treading carefully; respecting it, no blame.' },

      { pos: '六二', posEn: 'Second Six', zh: '黃離，元吉。', en: 'Yellow clinging - supreme good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '日昃之離，不鼓缶而歌，則大耋之嗟，凶。', en: 'The setting sun clings; not beating the pot and singing, then the very old lament - misfortune.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '突如其來如，焚如，死如，棄如。', en: 'Suddenly it comes, burning, dying, cast away.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '出涕沱若，戚嗟若，吉。', en: 'Tears flow; grief and sighs - good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '王用出征，有嘉折首，獲匪其醜，无咎。', en: 'The king goes forth to punish; with merit, heads are taken, the foe captured - no blame.' }

    ]

  },
];

export const XIACJING: Hexagram[] = [
  { n: 31, lines: '001110', zh: '咸', py: 'Xián', en: 'Influence', gua: '咸：亨。利貞。取女吉。', guaEn: 'Influence: success, favorable to persevere. Taking a maiden brings good fortune.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '咸其拇。', en: 'Influence on the big toe.' },

      { pos: '六二', posEn: 'Second Six', zh: '咸其腓，凶，居吉。', en: 'Influence on the calf - misfortune; remaining still brings good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '咸其股，執其隨，往吝。', en: 'Influence on the thigh; holding to what follows - going forward brings humiliation.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '貞吉悔亡，憧憧往來，朋從爾思。', en: 'Perseverance brings good fortune and regret disappears. Restless comings and goings; friends follow your thoughts.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '咸其脢，无悔。', en: 'Influence on the back - no regret.' },

      { pos: '上六', posEn: 'Top Six', zh: '咸其輔，頰，舌。', en: 'Influence on the jaw, cheeks, and tongue.' }

    ]

  },
  { n: 32, lines: '011100', zh: '恆', py: 'Héng', en: 'Duration', gua: '恆：亨，无咎。利貞，利有攸往。', guaEn: 'Duration: success, no blame, favorable to persevere, favorable to move forward.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '浚恆，貞凶，无攸利。', en: 'Digging too deep for duration; perseverance brings misfortune - nothing favorable.' },

      { pos: '九二', posEn: 'Second Nine', zh: '悔亡。', en: 'Regret disappears.' },

      { pos: '九三', posEn: 'Third Nine', zh: '不恆其德，或承之羞，貞吝。', en: 'Not lasting in one\'s virtue; shame is borne - perseverance brings humiliation.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '田无禽。', en: 'No game in the field.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '恆其德，貞，婦人吉，夫子凶。', en: 'Lasting in one\'s virtue; steadfast - the woman is fortunate, the man misfortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '振恆，凶。', en: 'Shaking duration - misfortune.' }

    ]

  },
  { n: 33, lines: '001111', zh: '遯', py: 'Dùn', en: 'Retreat', gua: '遯：亨。小利貞。', guaEn: 'Retreat: success. Small advantages in perseverance.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '遯尾，厲，勿用有攸往。', en: 'Retreat at the tail - danger; do not go forward.' },

      { pos: '六二', posEn: 'Second Six', zh: '執之用黃牛之革，莫之勝說。', en: 'Held fast with ox-hide; nothing can loosen it.' },

      { pos: '九三', posEn: 'Third Nine', zh: '系遯，有疾厲，畜臣妾吉。', en: 'Tangled retreat; illness and danger. Keeping servants and concubines is good fortune.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '好遯君子吉，小人否。', en: 'Good retreat - the noble person is fortunate, the mean person is not.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '嘉遯，貞吉。', en: 'Excellent retreat - perseverance brings good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '肥遯，无不利。', en: 'Flying retreat - nothing unfavorable.' }

    ]

  },
  { n: 34, lines: '111100', zh: '大壯', py: 'Dà Zhuàng', en: 'Great Power', gua: '大壯：利貞。', guaEn: 'Great Power: favorable to persevere.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '壯于趾，征凶，有孚。', en: 'Strength in the toes; advancing brings misfortune, even with sincerity.' },

      { pos: '九二', posEn: 'Second Nine', zh: '貞吉。', en: 'Perseverance brings good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '小人用壯，君子用罔，貞厲。羝羊觸藩，羸其角。', en: 'The mean person uses force; the noble person uses restraint. Perseverance is perilous. The ram butts the fence, his horns entangled.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '貞吉悔亡，藩決不羸，壯于大輿之輹。', en: 'Perseverance brings good fortune and regret disappears; the fence opens, not entangled; strength in the great cart\'s axle.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '喪羊于易，无悔。', en: 'Losing the ram easily - no regret.' },

      { pos: '上六', posEn: 'Top Six', zh: '羝羊觸藩，不能退，不能遂，无攸利，艱則吉。', en: 'The ram butts the fence; cannot retreat, cannot advance - nothing favorable; hardship brings good fortune.' }

    ]

  },
  { n: 35, lines: '000101', zh: '晉', py: 'Jìn', en: 'Progress', gua: '晉：康侯用錫馬蕃庶，晝日三接。', guaEn: 'Progress: the noble son is given horses in abundance and is received three times in a day.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '晉如，摧如，貞吉。罔孚，裕无咎。', en: 'Advancing, then repelled; perseverance brings good fortune. Not yet trusted; be generous, no blame.' },

      { pos: '六二', posEn: 'Second Six', zh: '晉如，愁如，貞吉。受茲介福，于其王母。', en: 'Advancing, then sad; perseverance brings good fortune. Receiving this great blessing from the queen mother.' },

      { pos: '六三', posEn: 'Third Six', zh: '眾允，悔亡。', en: 'All agree - regret disappears.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '晉如鼫鼠，貞厲。', en: 'Advancing like a field rat; perseverance is perilous.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '悔亡，失得勿恤，往吉无不利。', en: 'Regret disappears; do not worry over gain or loss; going forward brings good fortune, nothing unfavorable.' },

      { pos: '上九', posEn: 'Top Nine', zh: '晉其角，維用伐邑，厲吉无咎，貞吝。', en: 'Advancing with the horns; to chastise one\'s own city is fitting - danger, yet good fortune, no blame; perseverance brings humiliation.' }

    ]

  },
  { n: 36, lines: '101000', zh: '明夷', py: 'Míng Yí', en: 'Darkening of the Light', gua: '明夷：利艱貞。', guaEn: 'Darkening of the Light: favorable to persevere through hardship.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '明夷于飛，垂其翼。君子于行，三日不食，有攸往，主人有言。', en: 'Darkening of the light in flight, wings lowered. The noble person on the way goes three days without food; going forward, the host speaks of it.' },

      { pos: '六二', posEn: 'Second Six', zh: '明夷，夷于左股，用拯馬壯，吉。', en: 'Darkening of the light; injured on the left thigh; saved by a strong horse - good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '明夷于南狩，得其大首，不可疾貞。', en: 'Darkening of the light in the southern hunt; the great head is taken; do not be too hasty in perseverance.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '入于左腹，獲明夷之心，于出門庭。', en: 'Entering the left side; getting to the heart of the darkened light; then leaving the gate and courtyard.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '箕子之明夷，利貞。', en: 'The Darkening of Jizi - favorable to persevere.' },

      { pos: '上六', posEn: 'Top Six', zh: '不明晦，初登于天，后入于地。', en: 'Not light but dark; first climbing to heaven, then sinking to earth.' }

    ]

  },
  { n: 37, lines: '101011', zh: '家人', py: 'Jiā Rén', en: 'The Family', gua: '家人：利女貞。', guaEn: 'The Family: favorable for the woman to be steadfast.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '閑有家，悔亡。', en: 'Keeping order in the family - regret disappears.' },

      { pos: '六二', posEn: 'Second Six', zh: '无攸遂，在中饋，貞吉。', en: 'Nothing to decide on one\'s own; attending to the inner provisions - perseverance brings good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '家人嗃嗃，悔厲吉；婦子嘻嘻，終吝。', en: 'The family scolds harshly - regret and danger, yet good fortune. If wife and children giggle, in the end humiliation.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '富家，大吉。', en: 'Enriching the family - great good fortune.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '王假有家，勿恤。吉。', en: 'The king approaches the family; do not worry - good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '有孚威如，終吉。', en: 'With sincerity and dignity - ends in good fortune.' }

    ]

  },
  { n: 38, lines: '110101', zh: '睽', py: 'Kuí', en: 'Opposition', gua: '睽：小事吉。', guaEn: 'Opposition: small matters succeed.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '悔亡，喪馬勿逐，自復；見惡人无咎。', en: 'Regret disappears. The lost horse does not need chasing; it returns of itself. Seeing the evil person - no blame.' },

      { pos: '九二', posEn: 'Second Nine', zh: '遇主于巷，无咎。', en: 'Meeting the master in the lane - no blame.' },

      { pos: '六三', posEn: 'Third Six', zh: '見輿曳，其牛掣，其人天且劓，无初有終。', en: 'Seeing the cart dragged, the ox pulled back, the man disfigured and branded - no beginning, yet an ending.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '睽孤，遇元夫，交孚，厲无咎。', en: 'Opposition and isolation; meeting the great man; sincerity exchanged - danger, yet no blame.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '悔亡，厥宗噬膚，往何咎。', en: 'Regret disappears; the kin bite through flesh - going forward, what blame?' },

      { pos: '上九', posEn: 'Top Nine', zh: '睽孤，見豕負涂，載鬼一車，先張之弧，后說之弧，匪寇婚媾，往遇雨則吉。', en: 'Opposition and isolation; seeing a pig covered with mud, a cart full of ghosts; first drawing the bow, then laying it down. Not bandits but a marriage suit. Going forward, meeting rain, good fortune.' }

    ]

  },
  { n: 39, lines: '001010', zh: '蹇', py: 'Jiǎn', en: 'Obstruction', gua: '蹇：利西南，不利東北；利見大人，貞吉。', guaEn: 'Obstruction: favorable for the southwest, not the northeast; favorable to see the great person; perseverance brings good fortune.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '往蹇，來譽。', en: 'Going forward brings obstruction; coming back brings praise.' },

      { pos: '六二', posEn: 'Second Six', zh: '王臣蹇蹇，匪躬之故。', en: 'The king\'s servant faces obstruction after obstruction; it is not for his own sake.' },

      { pos: '九三', posEn: 'Third Nine', zh: '往蹇來反。', en: 'Going forward brings obstruction; coming back brings return.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '往蹇來連。', en: 'Going forward brings obstruction; coming back brings connection.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '大蹇朋來。', en: 'Great obstruction; friends come.' },

      { pos: '上六', posEn: 'Top Six', zh: '往蹇來碩，吉；利見大人。', en: 'Going forward brings obstruction; coming back brings greatness - good fortune; favorable to see the great person.' }

    ]

  },
  { n: 40, lines: '010100', zh: '解', py: 'Xiè', en: 'Deliverance', gua: '解：利西南，无所往，其來復吉。有攸往，夙吉。', guaEn: 'Deliverance: favorable for the southwest. If there is nothing to do, returning brings good fortune; if there is something to do, early action brings good fortune.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '无咎。', en: 'No blame.' },

      { pos: '九二', posEn: 'Second Nine', zh: '田獲三狐，得黃矢，貞吉。', en: 'In the field, taking three foxes, getting a yellow arrow; perseverance brings good fortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '負且乘，致寇至，貞吝。', en: 'Carrying a burden and riding; bandits draw near; perseverance brings humiliation.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '解而拇，朋至斯孚。', en: 'Freeing the thumb; friends come with sincerity.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '君子維有解，吉；有孚于小人。', en: 'The noble person delivers and unties - good fortune; there is sincerity toward the mean person.' },

      { pos: '上六', posEn: 'Top Six', zh: '公用射隼，于高墉之上，獲之，无不利。', en: 'The duke shoots the falcon from atop the high wall; taking it - nothing unfavorable.' }

    ]

  },
  { n: 41, lines: '110001', zh: '損', py: 'Sǔn', en: 'Decrease', gua: '損：有孚，元吉。无咎，可貞，利有攸往。曷之用？二簋可用享。', guaEn: 'Decrease: with sincerity, sublime good fortune, no blame, favorable to persevere. What to use? Two small offerings suffice for the rite.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '已事遄往，无咎，酌損之。', en: 'Let the matter go and hurry onward - no blame; reduce it in measure.' },

      { pos: '九二', posEn: 'Second Nine', zh: '利貞，征凶，弗損益之。', en: 'Favorable to persevere; advancing brings misfortune. Do not decrease, but increase it.' },

      { pos: '六三', posEn: 'Third Six', zh: '三人行，則損一人；一人行，則得其友。', en: 'Three men walking lose one; one man walking gains a friend.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '損其疾，使遄有喜，无咎。', en: 'Reducing the affliction; hastening brings joy - no blame.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '或益之，十朋之龜弗克違，元吉。', en: 'Perhaps increased by a tortoise worth ten strings that cannot be refused - supreme good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '弗損益之，无咎，貞吉，利有攸往，得臣无家。', en: 'Not decreasing but increasing - no blame, perseverance brings good fortune; favorable to go forward; gain a servant without a home.' }

    ]

  },
  { n: 42, lines: '100011', zh: '益', py: 'Yì', en: 'Increase', gua: '益：利有攸往。利涉大川。', guaEn: 'Increase: favorable to move forward, favorable to cross the great river.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '利用為大作，元吉，无咎。', en: 'Favorable to undertake great works - supreme good fortune, no blame.' },

      { pos: '六二', posEn: 'Second Six', zh: '或益之，十朋之龜弗克違，永貞吉。王用享于帝，吉。', en: 'Perhaps increased by a tortoise worth ten strings that cannot be refused; enduring perseverance brings good fortune. The king offers to the Lord on high - good fortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '益之用凶事，无咎。有孚中行，告公用圭。', en: 'Increase used in calamity - no blame. With sincerity, walk in the middle; announce to the duke with the jade tablet.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '中行，告公從。利用為依遷國。', en: 'Walking in the middle; announce to the duke and follow. Favorable to rely on it in moving the state.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '有孚惠心，勿問元吉。有孚惠我德。', en: 'With sincerity and a gracious heart; without asking, supreme good fortune. With sincerity, grace upon my virtue.' },

      { pos: '上九', posEn: 'Top Nine', zh: '莫益之，或擊之，立心勿恆，凶。', en: 'No one increases it; some strike it. With an inconstant heart - misfortune.' }

    ]

  },
  { n: 43, lines: '111110', zh: '夬', py: 'Guài', en: 'Breakthrough', gua: '夬：揚于王庭，孚號，有厲，告自邑，不利即戎，利有攸往。', guaEn: 'Breakthrough: proclaimed in the king’s court, cried out with sincerity, there is danger. Announce it from your own city; not favorable to take up arms. Favorable to move forward.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '壯于前趾，往不勝為咎。', en: 'Strong in the forefoot; advancing without victory is a fault.' },

      { pos: '九二', posEn: 'Second Nine', zh: '惕號，莫夜有戎，勿恤。', en: 'Alert and crying out; at night there may be soldiers - do not worry.' },

      { pos: '九三', posEn: 'Third Nine', zh: '壯于頄，有凶。君子夬夬，獨行遇雨，若濡有慍，无咎。', en: 'Strong in the cheekbone - misfortune. The noble person resolves resolutely; walking alone meets rain, is drenched and resentful - yet no blame.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '臀无膚，其行次且。牽羊悔亡，聞言不信。', en: 'No skin on the buttocks; the walk drags. Leading the ram, regret disappears; but words are not believed.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '莧陸夬夬，中行无咎。', en: 'The goatweed is resolved decisively; walking in the middle, no blame.' },

      { pos: '上六', posEn: 'Top Six', zh: '无號，終有凶。', en: 'No cry; in the end, misfortune.' }

    ]

  },
  { n: 44, lines: '011111', zh: '姤', py: 'Gòu', en: 'Coming to Meet', gua: '姤：女壯，勿用取女。', guaEn: 'Coming to Meet: the maiden is strong; do not take such a woman.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '系于金柅，貞吉，有攸往，見凶，羸豕孚踟躅。', en: 'Tied to the metal brake; perseverance brings good fortune. Going forward brings danger; a lean pig strains and stumbles.' },

      { pos: '九二', posEn: 'Second Nine', zh: '包有魚，无咎，不利賓。', en: 'There is fish in the bundle - no blame; unfavorable for guests.' },

      { pos: '九三', posEn: 'Third Nine', zh: '臀无膚，其行次且，厲，无大咎。', en: 'No skin on the buttocks; the walk drags; danger, yet no great blame.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '包无魚，起凶。', en: 'No fish in the bundle; rising misfortune.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '以杞包瓜，含章，有隕自天。', en: 'Wrapping the melon with willow; containing brilliance; something falls from heaven.' },

      { pos: '上九', posEn: 'Top Nine', zh: '姤其角，吝，无咎。', en: 'Coming to meet at the horn - humiliation, yet no blame.' }

    ]

  },
  { n: 45, lines: '000110', zh: '萃', py: 'Cuì', en: 'Gathering Together', gua: '萃：亨。王假有廟，利見大人，亨。利貞。用大牲吉，利有攸往。', guaEn: 'Gathering Together: success. The king approaches his temple; favorable to see the great person, success and perseverance. The great offering brings good fortune; favorable to move forward.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '有孚不終，乃亂乃萃，若號一握為笑，勿恤，往无咎。', en: 'Sincerity not lasting; disorder and gathering; if one cries and clenches into laughter, do not worry; going forward, no blame.' },

      { pos: '六二', posEn: 'Second Six', zh: '引吉，无咎，孚乃利用禴。', en: 'Led and drawn - good fortune, no blame; sincerity, and a simple offering.' },

      { pos: '六三', posEn: 'Third Six', zh: '萃如，嗟如，无攸利，往无咎，小吝。', en: 'Gathering and sighing - nothing favorable; going forward, no blame; small humiliation.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '大吉，无咎。', en: 'Great good fortune - no blame.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '萃有位，无咎。匪孚，元永貞，悔亡。', en: 'Gathering in rank - no blame; not trusted; supreme and enduring perseverance; regret disappears.' },

      { pos: '上六', posEn: 'Top Six', zh: '齎咨涕洟，无咎。', en: 'Sighing and weeping - no blame.' }

    ]

  },
  { n: 46, lines: '011000', zh: '升', py: 'Shēng', en: 'Pushing Upward', gua: '升：元亨，用見大人，勿恤，南征吉。', guaEn: 'Pushing Upward: sublime success. See the great person; do not worry. Marching south brings good fortune.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '允升，大吉。', en: 'Rising in trust - great good fortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '孚乃利用禴，无咎。', en: 'Sincerity, and a simple offering - no blame.' },

      { pos: '九三', posEn: 'Third Nine', zh: '升虛邑。', en: 'Rising into the empty town.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '王用亨于岐山，吉无咎。', en: 'The king offers at Mount Qi - good fortune, no blame.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '貞吉，升階。', en: 'Perseverance brings good fortune; ascending the steps.' },

      { pos: '上六', posEn: 'Top Six', zh: '冥升，利于不息之貞。', en: 'Dark rising; favorable for unending perseverance.' }

    ]

  },
  { n: 47, lines: '010110', zh: '困', py: 'Kùn', en: 'Oppression', gua: '困：亨，貞大人吉，无咎，有言不信。', guaEn: 'Oppression: success; the great person in perseverance has good fortune, no blame. Words are not believed.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '臀困于株木，入于幽谷，三歲不覿。', en: 'Stuck at the stump, entering the dark valley - for three years unseen.' },

      { pos: '九二', posEn: 'Second Nine', zh: '困于酒食，朱紱方來，利用亨祀，征凶，无咎。', en: 'Trapped in wine and food; the crimson sash comes; favorable for sacrifice; advancing brings misfortune - yet no blame.' },

      { pos: '六三', posEn: 'Third Six', zh: '困于石，據于蒺藜，入于其宮，不見其妻，凶。', en: 'Trapped by stone, leaning on thorns; entering the house, not seeing the wife - misfortune.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '來徐徐，困于金車，吝，有終。', en: 'Coming slowly, trapped in the golden chariot; humiliation, yet an ending.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '劓刖，困于赤紱，乃徐有說，利用祭祀。', en: 'Nose and feet cut off, trapped by the red sash; then slowly freed; favorable for sacrifice.' },

      { pos: '上六', posEn: 'Top Six', zh: '困于葛藟，于臲卼，曰動悔。有悔，征吉。', en: 'Trapped by creeping vines, on trembling ground; if one says acting brings regret, then with regret, advancing brings good fortune.' }

    ]

  },
  { n: 48, lines: '011010', zh: '井', py: 'Jǐng', en: 'The Well', gua: '井：改邑不改井，无喪无得，往來井井。汔至亦未繘井。羸其瓶，凶。', guaEn: 'The Well: the town may change but the well does not. No loss, no gain; they come and go to the well. If the rope does not reach the water, or the jug breaks, misfortune.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '井泥不食，舊井无禽。', en: 'The well is muddy and not drunk from; the old well has no prey.' },

      { pos: '九二', posEn: 'Second Nine', zh: '井谷射鮒，瓮敝漏。', en: 'The well as a pool shoots at the fish; the jar leaks and breaks.' },

      { pos: '九三', posEn: 'Third Nine', zh: '井渫不食，為我心惻，可用汲，王明，并受其福。', en: 'The well is cleared but not drunk from; my heart grieves. It may be drawn from; if the king is clear, all share the blessing.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '井甃，无咎。', en: 'The well is lined - no blame.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '井冽，寒泉食。', en: 'The well is cold and clear; cold spring, drunk from.' },

      { pos: '上六', posEn: 'Top Six', zh: '井收勿幕，有孚元吉。', en: 'The well is completed; do not cover it; with sincerity, supreme good fortune.' }

    ]

  },
  { n: 49, lines: '101110', zh: '革', py: 'Gé', en: 'Revolution', gua: '革：巳日乃孚，元亨。利貞。悔亡。', guaEn: 'Revolution: when the day is completed, there is trust; sublime success, favorable to persevere; regret disappears.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '鞏用黃牛之革。', en: 'Bound with ox-hide.' },

      { pos: '六二', posEn: 'Second Six', zh: '巳日乃革之，征吉，无咎。', en: 'On the day the change is complete, change - advancing brings good fortune, no blame.' },

      { pos: '九三', posEn: 'Third Nine', zh: '征凶，貞厲，革言三就，有孚。', en: 'Advancing brings misfortune; perseverance is perilous. The words of change are settled three times; there is sincerity.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '悔亡，有孚改命，吉。', en: 'Regret disappears; with sincerity, change the decree - good fortune.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '大人虎變，未占有孚。', en: 'The great person changes like a tiger; before divining, there is trust.' },

      { pos: '上六', posEn: 'Top Six', zh: '君子豹變，小人革面，征凶，居貞吉。', en: 'The noble person changes like a leopard; the mean person changes his face. Advancing brings misfortune; remaining steadfast brings good fortune.' }

    ]

  },
  { n: 50, lines: '011101', zh: '鼎', py: 'Dǐng', en: 'The Cauldron', gua: '鼎：元吉，亨。', guaEn: 'The Cauldron: sublime good fortune, success.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '鼎顛趾，利出否，得妾以其子，无咎。', en: 'The cauldron tips its foot; favorable to empty out the stale; taking a concubine for the sake of her son - no blame.' },

      { pos: '九二', posEn: 'Second Nine', zh: '鼎有實，我仇有疾，不我能即，吉。', en: 'The cauldron has substance; my rival has an ailment and cannot reach me - good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '鼎耳革，其行塞，雉膏不食，方雨虧悔，終吉。', en: 'The cauldron\'s ears are changed; its going is blocked; the pheasant fat is not eaten. When rain comes, regret diminishes - in the end, good fortune.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '鼎折足，覆公餗，其形渥，凶。', en: 'The cauldron breaks its leg, spilling the duke\'s food; the look of it is shameful - misfortune.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '鼎黃耳金鉉，利貞。', en: 'The cauldron with yellow ears and golden rings - favorable to persevere.' },

      { pos: '上九', posEn: 'Top Nine', zh: '鼎玉鉉，大吉，无不利。', en: 'The cauldron with jade rings - great good fortune, nothing unfavorable.' }

    ]

  },
  { n: 51, lines: '100100', zh: '震', py: 'Zhèn', en: 'The Arousing', gua: '震：亨。震來虩虩，笑言啞啞。震驚百里，不喪匕鬯。', guaEn: 'The Arousing: success. Thunder comes, terrifying; then laughing and talking. The shock reaches a hundred li, yet the ladle of sacrificial wine is not spilled.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '震來虩虩，后笑言啞啞，吉。', en: 'Thunder comes, terrifying; then laughing and talking - good fortune.' },

      { pos: '六二', posEn: 'Second Six', zh: '震來厲，億喪貝，躋于九陵，勿逐，七日得。', en: 'Thunder comes with danger; losing treasures in abundance; climbing the nine hills; do not pursue; in seven days it is recovered.' },

      { pos: '六三', posEn: 'Third Six', zh: '震蘇蘇，震行无眚。', en: 'Thunder comes, dazed; moving in thunder, no calamity.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '震遂泥。', en: 'Thunder sinks into mud.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '震往來厲，億无喪，有事。', en: 'Thunder comes and goes with danger; nothing is lost; there are affairs.' },

      { pos: '上六', posEn: 'Top Six', zh: '震索索，視矍矍，征凶。震不于其躬，于其鄰，无咎。婚媾有言。', en: 'Thunder comes, trembling; looking about, startled; advancing brings misfortune. Thunder strikes not oneself but the neighbor - no blame; the marriage suit has words.' }

    ]

  },
  { n: 52, lines: '001001', zh: '艮', py: 'Gèn', en: 'Keeping Still', gua: '艮：艮其背，不獲其身，行其庭，不見其人，无咎。', guaEn: 'Keeping Still: keeping to the back, not grasping the body; walking in the courtyard, not seeing the person - no blame.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '艮其趾，无咎，利永貞。', en: 'Keeping still at the toes - no blame; favorable for enduring perseverance.' },

      { pos: '六二', posEn: 'Second Six', zh: '艮其腓，不拯其隨，其心不快。', en: 'Keeping still at the calves; not saving what follows; the heart is displeased.' },

      { pos: '九三', posEn: 'Third Nine', zh: '艮其限，列其夤，厲薰心。', en: 'Keeping still at the waist; splitting the spine; danger, the heart burns.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '艮其身，无咎。', en: 'Keeping still at the body - no blame.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '艮其輔，言有序，悔亡。', en: 'Keeping still at the jaw; words in order; regret disappears.' },

      { pos: '上九', posEn: 'Top Nine', zh: '敦艮，吉。', en: 'Sincere stillness - good fortune.' }

    ]

  },
  { n: 53, lines: '001011', zh: '漸', py: 'Jiàn', en: 'Development', gua: '漸：女歸吉，利貞。', guaEn: 'Development: the maiden’s return brings good fortune; favorable to persevere.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '鴻漸于干，小子厲，有言，无咎。', en: 'The wild goose gradually nears the shore; the young one is in danger - words spoken, yet no blame.' },

      { pos: '六二', posEn: 'Second Six', zh: '鴻漸于磐，飲食衎衎，吉。', en: 'The wild goose gradually nears the rock; eating and drinking joyfully - good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '鴻漸于陸，夫征不復，婦孕不育，凶；利禦寇。', en: 'The wild goose gradually nears the highland; the husband goes forth and does not return, the wife conceives but does not bear - misfortune; favorable to ward off robbers.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '鴻漸于木，或得其桷，无咎。', en: 'The wild goose gradually nears the tree; perhaps finding a branch - no blame.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '鴻漸于陵，婦三歲不孕，終莫之勝，吉。', en: 'The wild goose gradually nears the mound; the wife for three years does not conceive; in the end nothing prevails - good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '鴻漸于陸，其羽可用為儀，吉。', en: 'The wild goose gradually nears the heights; its feathers may be used as ornaments - good fortune.' }

    ]

  },
  { n: 54, lines: '110100', zh: '歸妹', py: 'Guī Mèi', en: 'The Marrying Maiden', gua: '歸妹：征凶，无攸利。', guaEn: 'The Marrying Maiden: to move forward is misfortune; nothing is favorable.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '歸妹以娣，跛能履，征吉。', en: 'The marrying maiden as a younger sister; lame yet can walk; advancing brings good fortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '眇能視，利幽人之貞。', en: 'Dim-sighted yet can see; favorable for the secluded person\'s perseverance.' },

      { pos: '六三', posEn: 'Third Six', zh: '歸妹以須，反歸以娣。', en: 'The marrying maiden waits; then returns as a younger sister.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '歸妹愆期，遲歸有時。', en: 'The marrying maiden delays the date; the late marriage has its time.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '帝乙歸妹，其君之袂，不如其娣之袂良，月幾望，吉。', en: 'Emperor Yi gave his sister in marriage; her sleeves were not as fine as the sister\'s; the moon near full - good fortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '女承筐无實，士刲羊无血，无攸利。', en: 'The woman carries a basket with nothing in it; the man stabs the sheep but there is no blood - nothing favorable.' }

    ]

  },
  { n: 55, lines: '101100', zh: '豐', py: 'Fēng', en: 'Abundance', gua: '豐：亨。王假之，勿憂，宜日中。', guaEn: 'Abundance: success. The king arrives; do not worry. It is fitting to be at midday.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '遇其配主，雖旬无咎，往有尚。', en: 'Meeting the match; though equal, no blame; going forward brings honor.' },

      { pos: '六二', posEn: 'Second Six', zh: '豐其蔀，日中見斗，往得疑疾，有孚發若，吉。', en: 'Abundance veils it; at midday the Dipper is seen; going forward draws suspicion and illness; with sincerity and clarity - good fortune.' },

      { pos: '九三', posEn: 'Third Nine', zh: '豐其沛，日中見沫，折其右肱，无咎。', en: 'Abundance veils it; at midday the small star is seen; breaking the right arm - no blame.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '豐其蔀，日中見斗，遇其夷主，吉。', en: 'Abundance veils it; at midday the Dipper is seen; meeting the one who is equal - good fortune.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '來章，有慶譽，吉。', en: 'Brilliance comes; there is celebration and praise - good fortune.' },

      { pos: '上六', posEn: 'Top Six', zh: '豐其屋，蔀其家，窺其戶，闃其无人，三歲不觌，凶。', en: 'Abundance in the house, veiling the household; peering at the door, silent and empty - for three years unseen - misfortune.' }

    ]

  },
  { n: 56, lines: '001101', zh: '旅', py: 'Lǚ', en: 'The Wanderer', gua: '旅：小亨，旅貞吉。', guaEn: 'The Wanderer: small success; perseverance of the wanderer brings good fortune.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '旅瑣瑣，斯其所取災。', en: 'The wanderer is petty and mean; this brings disaster upon himself.' },

      { pos: '六二', posEn: 'Second Six', zh: '旅即次，懷其資，得童僕貞。', en: 'The wanderer lodges; bearing his goods, gaining a faithful servant.' },

      { pos: '九三', posEn: 'Third Nine', zh: '旅焚其次，喪其童僕，貞厲。', en: 'The wanderer\'s lodging burns; losing the faithful servant; perseverance is perilous.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '旅于處，得其資斧，我心不快。', en: 'The wanderer rests; gaining his ax and goods, yet my heart is not at ease.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '射雉一矢亡，終以譽命。', en: 'Shooting the pheasant, one arrow lost; in the end honor and reputation.' },

      { pos: '上九', posEn: 'Top Nine', zh: '鳥焚其巢，旅人先笑后號咷。喪牛于易，凶。', en: 'The bird\'s nest burns; the wanderer first laughs, then wails. Losing the ox easily - misfortune.' }

    ]

  },
  { n: 57, lines: '011011', zh: '巽', py: 'Xùn', en: 'The Gentle', gua: '巽：小亨。利有攸往。利見大人。', guaEn: 'The Gentle: small success; favorable to move forward, favorable to see the great person.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '進退，利武人之貞。', en: 'Advancing and retreating; favorable for the warrior\'s perseverance.' },

      { pos: '九二', posEn: 'Second Nine', zh: '巽在牀下，用史巫紛若，吉无咎。', en: 'The gentle penetrates beneath the bed; using shamans and scribes in profusion - good fortune, no blame.' },

      { pos: '九三', posEn: 'Third Nine', zh: '頻巽，吝。', en: 'Repeated gentleness - humiliation.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '悔亡，田獲三品。', en: 'Regret disappears; in the field, taking game of three kinds.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '貞吉悔亡，无不利。无初有終，先庚三日，后庚三日，吉。', en: 'Perseverance brings good fortune and regret disappears; nothing unfavorable. No beginning, yet an ending; three days before the change, three days after - good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '巽在牀下，喪其資斧，貞凶。', en: 'The gentle penetrates beneath the bed; losing the ax and goods; perseverance brings misfortune.' }

    ]

  },
  { n: 58, lines: '110110', zh: '兌', py: 'Duì', en: 'The Joyous', gua: '兌：亨。利貞。', guaEn: 'The Joyous: success; favorable to persevere.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '和兌，吉。', en: 'Harmonious joy - good fortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '孚兌，吉，悔亡。', en: 'Joy with sincerity - good fortune, regret disappears.' },

      { pos: '六三', posEn: 'Third Six', zh: '來兌，凶。', en: 'Joy that comes - misfortune.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '商兌，未寧，介疾有喜。', en: 'Joy that negotiates; not settled; when the ailment passes, there is joy.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '孚于剝，有厲。', en: 'Sincerity toward what is stripping - there is danger.' },

      { pos: '上六', posEn: 'Top Six', zh: '引兌。', en: 'Joy that draws others.' }

    ]

  },
  { n: 59, lines: '010011', zh: '渙', py: 'Huàn', en: 'Dispersion', gua: '渙：亨。王假有廟，利涉大川，利貞。', guaEn: 'Dispersion: success. The king approaches his temple; favorable to cross the great river, favorable to persevere.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '用拯馬壯，吉。', en: 'Saved by a strong horse - good fortune.' },

      { pos: '九二', posEn: 'Second Nine', zh: '渙奔其机，悔亡。', en: 'Dispersion; rushing to the support - regret disappears.' },

      { pos: '六三', posEn: 'Third Six', zh: '渙其躬，无悔。', en: 'Dispersing oneself - no regret.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '渙其群，元吉。渙有丘，匪夷所思。', en: 'Dispersing the group - supreme good fortune; dispersion to the mound - beyond common thought.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '渙汗其大號，渙王居，无咎。', en: 'Dispersion as the great proclamation sweats out; dispersing the king\'s residence - no blame.' },

      { pos: '上九', posEn: 'Top Nine', zh: '渙其血，去逖出，无咎。', en: 'Dispersion of the blood; departing far away - no blame.' }

    ]

  },
  { n: 60, lines: '110010', zh: '節', py: 'Jié', en: 'Limitation', gua: '節：亨。苦節不可貞。', guaEn: 'Limitation: success. Bitter limitation cannot be persisted in.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '不出戶庭，无咎。', en: 'Not leaving the courtyard and door - no blame.' },

      { pos: '九二', posEn: 'Second Nine', zh: '不出門庭，凶。', en: 'Not leaving the gate and courtyard - misfortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '不節若，則嗟若，无咎。', en: 'Without restraint, then sighing - no blame.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '安節，亨。', en: 'Restraint at ease - success.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '甘節，吉；往有尚。', en: 'Sweet restraint - good fortune; going forward brings honor.' },

      { pos: '上六', posEn: 'Top Six', zh: '苦節，貞凶，悔亡。', en: 'Bitter restraint; perseverance brings misfortune; regret disappears.' }

    ]

  },
  { n: 61, lines: '110011', zh: '中孚', py: 'Zhōng Fú', en: 'Inner Truth', gua: '中孚：豚魚吉，利涉大川，利貞。', guaEn: 'Inner Truth: the pig and the fish bring good fortune; favorable to cross the great river, favorable to persevere.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '虞吉，有他不燕。', en: 'Being careful - good fortune; other concerns unsettle.' },

      { pos: '九二', posEn: 'Second Nine', zh: '鳴鶴在陰，其子和之，我有好爵，吾與爾靡之。', en: 'The crane calls in the shade; its young answers. I have a good cup; we share it with you.' },

      { pos: '六三', posEn: 'Third Six', zh: '得敵，或鼓或罷，或泣或歌。', en: 'Meeting the rival; sometimes drumming, sometimes stopping; sometimes weeping, sometimes singing.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '月几望，馬匹亡，无咎。', en: 'The moon near full; the horse\'s mate is lost - no blame.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '有孚攣如，无咎。', en: 'Sincerity linked fast - no blame.' },

      { pos: '上九', posEn: 'Top Nine', zh: '翰音登于天，貞凶。', en: 'The crowing sounds reaches heaven; perseverance brings misfortune.' }

    ]

  },
  { n: 62, lines: '001100', zh: '小過', py: 'Xiǎo Guò', en: 'Small Exceeding', gua: '小過：亨。利貞。可小事，不可大事。飛鳥遺之音，不宜上宜下，大吉。', guaEn: 'Small Exceeding: success, favorable to persevere. Small matters can be done, great matters cannot. A flying bird leaves its song; it is better to go down than up; great good fortune.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '飛鳥以凶。', en: 'The flying bird brings misfortune.' },

      { pos: '六二', posEn: 'Second Six', zh: '過其祖，遇其妣；不及其君，遇其臣；无咎。', en: 'Passing the grandfather, meeting the grandmother; not reaching the ruler, meeting the minister - no blame.' },

      { pos: '九三', posEn: 'Third Nine', zh: '弗過防之，從或戕之，凶。', en: 'Not passing, yet guarding against it; if one follows, perhaps harmed - misfortune.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '无咎，弗過遇之。往厲必戒，勿用永貞。', en: 'No blame; not passing, but meeting it. Going forward is perilous, so be wary; do not use it for enduring perseverance.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '密云不雨，自我西郊，公弋取彼在穴。', en: 'Dense clouds, no rain, from our western region; the duke shoots the one in the cave.' },

      { pos: '上六', posEn: 'Top Six', zh: '弗遇過之，飛鳥離之，凶，是謂災眚。', en: 'Not meeting but passing; the flying bird departs - misfortune; this is called calamity.' }

    ]

  },
  { n: 63, lines: '101010', zh: '既濟', py: 'Jì Jì', en: 'After Completion', gua: '既濟：亨小。利貞。初吉終亂。', guaEn: 'After Completion: small success. Favorable to persevere; good fortune at the start, disorder at the end.',

    yao: [

      { pos: '初九', posEn: 'First Nine', zh: '曳其輪，濡其尾，无咎。', en: 'Dragging the wheel; wetting the tail - no blame.' },

      { pos: '六二', posEn: 'Second Six', zh: '婦喪其茀，勿逐，七日得。', en: 'The woman loses her curtain; do not pursue; in seven days it is recovered.' },

      { pos: '九三', posEn: 'Third Nine', zh: '高宗伐鬼方，三年克之，小人勿用。', en: 'Emperor Gao Zong attacks the Gui region; in three years he subdues it; do not employ the mean person.' },

      { pos: '六四', posEn: 'Fourth Six', zh: '繻有衣袽，終日戒。', en: 'The fine cloth has patches; guard against it all day.' },

      { pos: '九五', posEn: 'Fifth Nine', zh: '東鄰殺牛，不如西鄰之禴祭，實受其福。', en: 'The eastern neighbor kills the ox, but the western neighbor\'s simple offering truly receives the blessing.' },

      { pos: '上六', posEn: 'Top Six', zh: '濡其首，厲。', en: 'Wetting the head - danger.' }

    ]

  },
  { n: 64, lines: '010101', zh: '未濟', py: 'Wèi Jì', en: 'Before Completion', gua: '未濟：亨。小狐汔濟，濡其尾，无攸利。', guaEn: 'Before Completion: success. But the small fox, almost across, wets its tail - nothing is favorable.',

    yao: [

      { pos: '初六', posEn: 'First Six', zh: '濡其尾，吝。', en: 'Wetting the tail - humiliation.' },

      { pos: '九二', posEn: 'Second Nine', zh: '曳其輪，貞吉。', en: 'Dragging the wheel - perseverance brings good fortune.' },

      { pos: '六三', posEn: 'Third Six', zh: '未濟，征凶，利涉大川。', en: 'Not yet across; advancing brings misfortune; favorable to cross the great river.' },

      { pos: '九四', posEn: 'Fourth Nine', zh: '貞吉，悔亡，震用伐鬼方，三年有賞于大國。', en: 'Perseverance brings good fortune and regret disappears. With thunder, attack the Gui region; in three years, reward from the great state.' },

      { pos: '六五', posEn: 'Fifth Six', zh: '貞吉，无悔，君子之光，有孚，吉。', en: 'Perseverance brings good fortune and no regret. The light of the noble person, with sincerity - good fortune.' },

      { pos: '上九', posEn: 'Top Nine', zh: '有孚于飲酒，无咎，濡其首，有孚失是。', en: 'Sincerity in drinking; no blame. Wetting the head; sincerity is lost.' }

    ]

  },
];

export const ZHOUYI = [...SHANGJING, ...XIACJING];
