export const profile = {
  name: "姚一心",
  role: "游戏关卡策划",
  location: "上海",
  availability: "随时到岗",
  phone: "187 5268 2988",
  phoneHref: "tel:+8618752682988",
  email: "1485858833@qq.com",
  lead: [
    "热爱游戏，长期沉浸式体验多品类游戏，关注市场趋势、玩法演进与玩家反馈。善于从玩家视角捕捉操作手感、空间感知与关卡节奏偏好，具备良好的玩家共情与洞察能力，熟悉新手引导、难度分层与心流控制逻辑，能够挖掘不同类型玩家在关卡中的卡点与爽点，分析并提出优化方案，提升关卡的可读性与游玩体验。",
    "具备关卡从设计到落地的完整能力，曾参与Steam独立游戏与个人关卡Demo的开发工作，涉及主题设定、箱庭结构搭建、机制递进编排、动线引导与版本迭代等内容，擅长结合玩家反馈识别关卡问题，制定优化方案并跟进落地。熟练使用Unreal Engine进行关卡白盒搭建、蓝图逻辑实现与关卡配置，具备机制拆解、数值推演与体验复盘能力，逻辑清晰、执行力强，细心负责。",
    "擅长玩法创意包装与机制表达，熟练运用 AI 工具辅助设计灵感发散、内容创作与方案论证，能够把设计想法快速转换为可在引擎中运行的原型，提升关卡设计落地效率。",
  ],
};

export const navItems = [
  { id: "index", label: "定位", href: "#index", index: "01" },
  { id: "bangbang", label: "坦克", href: "#bangbang", index: "02" },
  { id: "work", label: "雪隐", href: "#work", index: "03" },
  { id: "xinlv", label: "“新律”", href: "#xinlv", index: "04" },
  { id: "play", label: "游戏", href: "#play", index: "05" },
  { id: "space", label: "空间", href: "#space", index: "06" },
  { id: "about", label: "经历", href: "#about", index: "07" },
  { id: "contact", label: "联系", href: "#contact", index: "08" },
] as const;

export type FeatureNote = {
  title: string;
  body: string;
};

export type FeaturedProject = {
  id: string;
  index: string;
  title: string;
  tags: string[];
  summary: string;
  notesHeading?: string;
  notes: FeatureNote[];
  cover: {
    src: string;
    alt: string;
    caption: string;
    ratio?: string;
  };
  pdfHref: string;
  pdfLabel: string;
  pdfMeta: string;
  videoHref?: string;
  videoLabel?: string;
  videoMeta?: string;
  variant?: "demo" | "shipped";
  kicker?: string;
};

export const bangbang: FeaturedProject = {
  id: "bangbang",
  index: "02 / SHIPPED",
  title: "《棒棒坦克》",
  variant: "shipped",
  kicker: "商业项目 · Steam 已上线",
  tags: ["LiFou Games", "已上线", "物理肉鸽", "俯视", "阵型", "单局约 30 分钟"],
  summary:
    "《棒棒坦克》是以上架Steam的独立游戏，玩家指挥坦克部队对抗“邪恶洋葱头”的入侵军：玩家控制车队走位，坦克自动开火。玩家可以在每一轮结束后通关商店购买坦克及藏品，结合坦克升级、反物质增益等内容，形成自己的阵容和藏品构筑，最终击败boss。",
  notesHeading: "工作内容",
  notes: [
    {
      title: "地图空间与地形机制",
      body: "基于田字格结构的单张战场——在四角分别布置荒地、沙漠、科技、未来四种元素地形，各带伸缩掩体与地形机制；玩家可利用角落躲避弹幕或借地形辅助击杀，但限制自身移动与逃跑空间。",
    },
    {
      title: "地形Buff与构筑联动",
      body: "安排藏品中地形交互陷阱的空间位置，让玩家根据自身Build自主选择改变关卡地形与打法。",
    },
    {
      title: "关卡波次与节奏编排",
      body: "设计“分批战斗 + 阶段Boss”结构，设计每波敌人出怪量和种类内容，确保难度曲线合理，实现长线体验可玩性。",
    },
  ],
  cover: {
    src: "/images/bangbang/cover.jpg",
    alt: "《棒棒坦克》战场与坦克阵型",
    caption: "实机画面 / Steam",
    ratio: "16 / 9",
  },
  pdfHref: "https://store.steampowered.com/app/3987640/%E6%A3%92%E6%A3%92%E5%9D%A6%E5%85%8B/",
  pdfLabel: "打开 Steam 商店页",
  pdfMeta: "已上线",
  videoHref: "https://www.bilibili.com/video/BV14k9kBAEkx/",
  videoLabel: "观看上线视频",
  videoMeta: "哔哩哔哩",
};

export const xueyin: FeaturedProject = {
  id: "work",
  index: "03 / WORK",
  title: "《雪隐》",
  tags: ["Unreal Engine 5", "白模", "ARPG", "线性箱庭", "第三人称", "约 20 分钟", "关卡事件"],
  summary:
    "这是以雪为主题的线性箱庭关卡，介绍了一位宗门弟子雪夜潜入、暗杀复仇的冒险故事。关卡以飘雪的轻柔与积雪的厚重为核心，创造出“飞雪”这一玩家技能，结合场地的积雪互动，衍生出观察、反隐、凝实、格挡等功能。整体玩法设计按“玩法教学——场地限制——机制组合——综合考验”形成机制闭环，结合空间设计控制玩家心流，逐步提升直到最终复仇完成、掩埋敌人的高潮结局。",
  notes: [
    {
      title: "关卡空间与动线",
      body: "构建“后山建筑群——魔教主体——主峰”三段主路径，明确主线推进与支线分流；用主峰 POI、奖励预告、面包屑与负向引导建立空间预期，降低迷路成本并维持探索动机。",
    },
    {
      title: "环境叙事与节奏",
      body: "玩法与环境叙事同步递进：牢笼吊桥、破顶仙剑、战场痕迹既交代敌情与空间状态，也改写动线与技能条件。紧张与舒缓交替，保证约 20 分钟切片节奏连贯。",
    },
    {
      title: "白模规格与文档",
      body: "角色体型、步速、跳跃高度与门洞、台阶、道路宽度统一成一张规格表，白模按表搭建；设计说明、节奏曲线与参考整理成 18 页文档，方便地编和美术核对。",
    },
  ],
  cover: {
    src: "/images/xueyin/cover.jpg",
    alt: "《雪隐》关卡全景",
    caption: "关卡全景 / UE5 白模",
    ratio: "12 / 5",
  },
  pdfHref: "/files/xueyin-level-design.pdf",
  pdfLabel: "阅读完整关卡设计介绍",
  pdfMeta: "18 页 PDF",
  videoHref: "/xueyin/",
  videoLabel: "观看关卡 Demo 视频",
  videoMeta: "1080p · 17:31",
};

export const xinlv: FeaturedProject = {
  id: "xinlv",
  index: "04 / WORK",
  title: "《“新律”》",
  tags: ["Unreal Engine 5", "灰盒", "箱庭", "循环解谜", "第三人称", "约 10–15 分钟"],
  summary:
    "“新律”以循环为主题，基于《明日方舟：终末地》的3C设计的线性箱庭关卡。玩家沿线性路径进入寂语修会的研究事故现场，发现不断循环变化的“循环域”，玩家需要逐步学习控制循环域，最终进入全新律法的内部循环空间中，完成整个剧情故事。玩家可以通过长按 R 在回溯、停滞和激活之间选择，进而干预循环域变化，实现把堵住的路退回可通行的状态、把机关停在需要的位置、加快循环找出差别等功能。此外还有将踩下的压力板记进循环，供下一次使用等后续进阶内容。整体游玩节奏从教学推到复合解谜，再进入空间循环，最后在裂隙前面对失控的“新律”，在关卡叙事中完成整个游戏。",
  notes: [
    {
      title: "设计主题与关卡内容",
      body: "以“循环”为主题，依托明日方舟：终末地3C设计的箱庭关卡。玩家面对失控后不断循环的空间环境，从外部控制循环到自身进入循环，形成完整的关卡体验曲线。",
    },
    {
      title: "特色解谜——单核机制递进",
      body: "以“循环域”为核心，玩家通过暂停、倒带、加速三种指令改变循环域内空间，达成清理障碍、控制按钮、形成道路等多种功能；按“基础教学—行为叠加—跨区域复合—进入空间循环”递进，控制玩家心流。",
    },
    {
      title: "将关卡叙事融入空间战斗",
      body: "从轻度接触循环域、到进入环形空间的循环自然过渡剧情，并把循环运用在敌人设计交互上，通过解谜与战斗逐渐理解世界观。",
    },
  ],
  cover: {
    src: "/images/xinlv/overview.jpg",
    alt: "《“新律”》关卡全景",
    caption: "关卡全景 / UE5 灰盒",
    ratio: "12 / 5",
  },
  pdfHref: "/files/xinlv-level-design.pdf",
  pdfLabel: "阅读完整关卡设计介绍",
  pdfMeta: "11 页 PDF",
  videoHref: "/videos/xinlv-demo.mp4",
  videoLabel: "观看关卡 Demo 视频",
  videoMeta: "720p · 12:34",
};

export type PlayEntry = {
  name: string;
  /** 进度备注，如「60 级」「全成就」 */
  note?: string;
  /** 游玩小时数，用于柱状图长度；无小时数据时不画柱 */
  hours?: number;
  /** 展示在右侧的时长文案 */
  label: string;
};

export type PlayCategory = {
  title: string;
  entries: PlayEntry[];
  more?: string;
};

export const playCategories: PlayCategory[] = [
  {
    title: "二次元",
    entries: [
      { name: "《原神》", note: "60 级", hours: 2000, label: "2000h+" },
      { name: "《明日方舟》", note: "120 级", hours: 2000, label: "2000h+" },
      { name: "《崩坏：星穹铁道》", note: "70 级", hours: 800, label: "800h+" },
      { name: "《明日方舟：终末地》", note: "60 级", hours: 500, label: "500h+" },
      { name: "《绝区零》", note: "60 级", hours: 500, label: "500h+" },
    ],
    more: "另有《重返未来 1999》《永远的七日之都》《尘白禁区》《猫之城》《雷索纳斯》《崩坏 3》《少女前线：云图计划》《来自星尘》多款版本毕业或深度体验。",
  },
  {
    title: "MOBA",
    entries: [
      { name: "《英雄联盟》", note: "钻石一", hours: 4500, label: "4500h+" },
      { name: "《王者荣耀》", note: "S3 起三十余赛季", hours: 3000, label: "3000h+" },
    ],
  },
  {
    title: "FPS / TPS",
    entries: [
      { name: "《PUBG》", hours: 800, label: "800h+" },
      { name: "《三角洲行动》", hours: 600, label: "600h+" },
      { name: "《守望先锋》", hours: 500, label: "500h+" },
      { name: "《无畏契约》", hours: 300, label: "300h+" },
      { name: "《绝地潜兵 2》", hours: 100, label: "100h+" },
    ],
    more: "另有《彩虹六号：围攻》《CF》《CS:GO》长期游玩。",
  },
  {
    title: "MMORPG",
    entries: [
      { name: "《古剑奇谭网络版》", note: "多个 Boss 首杀", hours: 1000, label: "1000h+" },
      { name: "《诛仙世界》", note: "PVP 化圣 · PVE 第一梯队", hours: 500, label: "500h+" },
    ],
    more: "另有《燕云十六声》《逆水寒手游》。",
  },
  {
    title: "ARPG / RPG",
    entries: [
      { name: "《只狼》", note: "全成就", hours: 150, label: "150h" },
      { name: "《艾尔登法环》", note: "全成就", hours: 130, label: "130h" },
      { name: "《遗迹 2》", hours: 73, label: "73h" },
      { name: "《33 号远征队》", note: "全成就", hours: 68, label: "68h" },
      { name: "《黑神话：悟空》", note: "双结局", hours: 60, label: "60h" },
      { name: "《赛博朋克 2077》", hours: 55, label: "55h" },
      { name: "《影之刃零》", note: "全成就", hours: 40, label: "40h" },
    ],
    more: "另有《GTA 系列》《蝙蝠侠：阿卡姆骑士》《霍格沃兹之遗》《剑星》《空洞骑士》《艾希》。",
  },
  {
    title: "Roguelike",
    entries: [
      { name: "《杀戮尖塔 2》", note: "N10 通关", hours: 150, label: "150h+" },
      { name: "《失落城堡 2》", note: "最高难度真结局", hours: 60, label: "60h+" },
      { name: "《哥布林弹球》", hours: 60, label: "60h+" },
      { name: "《风暴怕死队》", hours: 50, label: "50h+" },
    ],
    more: "另有《明日方舟：集成战略》《月圆之夜》《元气骑士》《死亡细胞》。",
  },
  {
    title: "策略",
    entries: [{ name: "《文明 6》", note: "白板过神", hours: 500, label: "500h+" }],
    more: "另有《部落冲突》（18 本）《皇室战争》《星际争霸 2》。",
  },
  {
    title: "其他",
    entries: [
      { name: "《深海迷航》系列", label: "已有内容通关" },
      { name: "《双人成行》", label: "通关" },
      { name: "《双影奇境》", label: "通关" },
      { name: "《人类一败涂地》", label: "往期版本通关" },
    ],
    more: "另有《我的世界》《幻兽帕鲁》《饥荒》《泡姆泡姆》《糖豆人》《大富翁 11》《纪念碑谷》系列、《造桥模拟器》。",
  },
];

export const landscapeProjects = [
  {
    title: "田寺村关君蔚纪念园",
    meta: "乡村纪念园 · 0.35 公顷 · 项目负责人",
    description:
      "独立完成方案到施工图。用路径和节点安排叙事，让访客一边走、一边感到空间情绪在变。",
    image: "/images/landscape/tiansi.jpg",
    alt: "田寺村纪念园台阶与山石效果图",
  },
  {
    title: "湖州腊山公园",
    meta: "城市综合公园 · 8.3 公顷 · 项目负责人",
    description:
      "山地公园。用高差组织垂直方向的探索，并规划多条主题游线，控制节点之间的游览节奏。",
    image: "/images/landscape/lashan.jpg",
    alt: "腊山公园草坪与建筑效果图",
  },
  {
    title: "凤凰湾滨河绿带",
    meta: "滨水商业景观 · 13.1 公顷 · 项目负责人",
    description:
      "把商业、广场和自然接在同一条滨水动线上，用空间层次引导人流聚集和分散。",
    image: "/images/landscape/fenghuang.jpg",
    alt: "凤凰湾滨河绿带鸟瞰效果图",
  },
];

export const skills = [
  "Unreal Engine 5",
  "关卡白盒",
  "动线规划",
  "环境叙事",
  "Rhino",
  "SketchUp",
  "Lumion",
  "D5",
  "Photoshop",
];
