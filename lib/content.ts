export const profile = {
  name: "姚一心",
  role: "游戏关卡策划",
  location: "上海",
  availability: "随时到岗",
  phone: "187 5268 2988",
  phoneHref: "tel:+8618752682988",
  email: "1485858833@qq.com",
  lead:
    "风景园林硕士。我把空间规划、人流引导和场景叙事用到关卡里，目前用 Unreal Engine 5 做灰盒关卡。代表作是第三人称 ARPG 线性箱庭 Demo《雪隐》，以及以循环为母题的箱庭 Demo《“新律”》。",
};

export const navItems = [
  { id: "index", label: "定位", href: "#index", index: "01" },
  { id: "work", label: "雪隐", href: "#work", index: "02" },
  { id: "xinlv", label: "“新律”", href: "#xinlv", index: "03" },
  { id: "space", label: "空间", href: "#space", index: "04" },
  { id: "about", label: "经历", href: "#about", index: "05" },
  { id: "contact", label: "联系", href: "#contact", index: "06" },
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
};

export const xueyin: FeaturedProject = {
  id: "work",
  index: "02 / WORK",
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
};

export const xinlv: FeaturedProject = {
  id: "xinlv",
  index: "03 / WORK",
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
