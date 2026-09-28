export type Project = {
  code: string;
  name: string;
  meta: string;
  period: string;
  description: string;
  image: { src: string; alt: string; caption: string; width: number; height: number };
};

export const site = {
  name: "姚一心",
  initials: "YYX",
  portrait: {
    src: "/images/portrait.png",
    alt: "姚一心",
    width: 274,
    height: 329,
  },
  kicker: "LEVEL DESIGN PORTFOLIO",
  role: "游戏关卡策划",
  scope: "关卡设计 · 制作跟进",
  status: "上海 · 随时到岗",
  email: "1485858833@qq.com",
  phone: "187 5268 2988",
  phoneHref: "tel:+8618752682988",
  location: "上海",
  github: "https://github.com/eson-yao",
  resume: "files/resume.pdf",
  description:
    "姚一心，游戏关卡策划。独立完成 UE5 第三人称 ARPG 白模切片《雪隐》：场景布局、动线引导、战斗节奏与关卡事件；风景园林硕士，三个景观项目负责人，习惯把方案跟进到落地。",
  headline: ["把空间叙事，", "做进关卡。"],
  lead:
    "你好，我是姚一心，硕士就读于北京林业大学风景园林专业。此前长期从事景观空间设计工作，在空间布局、动线组织与氛围营造方面积累较多，也习惯把方案推进到可落地、可核对的程度。而在日常中我的游戏经历比较丰富，对不同类型玩法都有接触，逐渐形成了对关卡可读性、节奏与体验问题的敏感度。如今我希望把这些能力迁移到游戏关卡设计中。我能独立使用 UE5 完成白模搭建，统筹场景引导、战斗节奏与关卡事件，并输出可供地编、美术协作核对的设计文档。",
  stats: [
    { value: "01", label: "UE5 白模切片《雪隐》", note: "LEVEL DEMO" },
    { value: "03", label: "景观项目负责人", note: "LANDSCAPE" },
    { value: "15k+", label: "小时游戏经历", note: "PLAYTIME" },
  ],

  nav: [
    { id: "top", num: "01", label: "首页", en: "HOME" },
    { id: "xueyin", num: "02", label: "作品", en: "WORK" },
    { id: "about", num: "03", label: "经历", en: "ABOUT" },
    { id: "contact", num: "04", label: "联系", en: "CONTACT" },
  ],

  focus: [
    {
      code: "A",
      en: "BLOCKOUT",
      title: "白模搭建",
      text: "用 UE5 独立搭关卡白模。门洞、台阶、掩体按角色肩宽、步速和跳跃高度反推，先保证能走、能打、能看见目标。",
    },
    {
      code: "B",
      en: "SPACE & FLOW",
      title: "场景与动线",
      text: "用高差、视线和节点安排主路径与支线，让玩家不看地图也知道该往哪走。这是我在真实场地里练了多年的事。",
    },
    {
      code: "C",
      en: "PACING & EVENTS",
      title: "节奏与关卡事件",
      text: "按“教学 → 限制 → 组合 → 综合”排机制闭环；用吊桥、仙剑、战场痕迹这类事件同时交代敌情、改动线、改技能条件。",
    },
    {
      code: "D",
      en: "COLLABORATION",
      title: "协作与验收",
      text: "方案、规格和节奏写成文档和表格；会用 Rhino、SketchUp、Photoshop，能按尺寸核对场景资产是否挡动线、破掩体。",
    },
  ],

  feature: {
    code: "A01",
    kind: "LEVEL DEMO",
    period: "2026.08 — 2026.09",
    title: "《雪隐》",
    subtitle: "第三人称 ARPG 线性箱庭 · UE5 白模切片 · 约 20 分钟 · 独立完成",
    tags: ["Unreal Engine 5", "白模", "ARPG", "线性箱庭", "第三人称", "约 20 分钟", "关卡事件"],
    summary:
      "以雪为主题的潜入与清剿关。飘雪的轻柔与积雪的厚重是核心：积雪留下脚印，隐身敌人因此可读；飞雪技能扬起雪雾让敌人显形，把积雪凝成可踩的台阶，并短时格挡飞箭。按“教学 → 限制 / 升级 → 组合 → 综合”排成机制闭环，主路径始终清楚，支线奖励可以被提前看见。",
    points: [
      {
        title: "关卡空间与动线",
        text: "构建“后山建筑群 → 魔教主体 → 主峰”三段主路径，明确主线推进与支线分流；用主峰 POI、奖励预告、面包屑与负向引导建立空间预期，降低迷路成本并维持探索动机。",
      },
      {
        title: "环境叙事与节奏",
        text: "玩法与环境叙事同步递进：牢笼吊桥、破顶仙剑、战场痕迹既交代敌情与空间状态，也改写动线与技能条件。紧张与舒缓交替，保证约 20 分钟切片节奏连贯。",
      },
      {
        title: "白模规格与文档",
        text: "角色体型、步速、跳跃高度与门洞、台阶、道路宽度统一成一张规格表，白模按表搭建；设计说明、节奏曲线与参考整理成 18 页文档，方便地编和美术核对。",
      },
    ],
    image: {
      src: "/images/xueyin.jpg",
      alt: "《雪隐》UE5 白模关卡全景：后山建筑群、丹塔与主峰",
      caption: "关卡全景 / UE5 白模 1917 × 947 / IMAGE",
      width: 1917,
      height: 947,
    },
    pdf: { label: "阅读完整关卡设计介绍", href: "files/xueyin-level-design.pdf", pages: "18 页 PDF" },
    // file 留空表示视频尚未上传；填入 mp4 直链后按钮自动变为可点击
    video: {
      preview: "/xueyin/",
      file: "https://github.com/eson-yao/eson-yao.github.io/releases/download/video-v1/xueyin.mp4",
      filename: "雪隐.mp4",
      size: "649 MB",
      length: "17:31",
    },
  },

  space: {
    code: "B",
    en: "LANDSCAPE PRACTICE",
    title: "空间设计基础",
    lead:
      "做关卡之前，我作为项目负责人在真实场地里处理路径、高差和叙事空间，并把方案跟进到施工图和落地。这些项目练的是同一件事：让人在移动中感到节奏和情绪变化，也让我习惯按尺寸核对图纸和模型。",
    projects: [
      {
        code: "B01",
        name: "田寺村关君蔚纪念园",
        meta: "乡村纪念园 · 0.35 公顷 · 项目负责人 · 方案到施工图",
        period: "2024.06 — 2026.01",
        description:
          "独立负责从方案到施工图的全过程。用布局与路径安排叙事，让访客在行进和空间变化中了解关君蔚院士与中国水利的发展历史。",
        image: {
          src: "/images/guanjunwei-memorial.jpg",
          alt: "关君蔚纪念园鸟瞰效果图：台地草坪与纪念广场",
          caption: "鸟瞰效果图 1160 × 653 / IMAGE",
          width: 1160,
          height: 653,
        },
      },
      {
        code: "B02",
        name: "湖州腊山公园",
        meta: "城市综合公园 · 8.3 公顷 · 项目负责人",
        period: "2023.04 — 2025.06",
        description:
          "山地公园。通过地形分析利用高差创造垂直探索，规划多条主题游线控制节点间的游览节奏。这段训练直接对应《雪隐》的三段节奏与主峰引导。",
        image: {
          src: "/images/lashan-park.jpg",
          alt: "腊山公园水景广场效果图，远处为山体与塔",
          caption: "入口水景效果图 1163 × 655 / IMAGE",
          width: 1163,
          height: 655,
        },
      },
      {
        code: "B03",
        name: "凤凰湾滨河绿带",
        meta: "滨水商业景观 · 13.1 公顷 · 项目负责人",
        period: "2023.04 — 2025.06",
        description:
          "主导滨水商业区景观规划。用一条流畅的滨水动线把商业、公共广场与自然景观接在一起，通过多层次空间划分引导人流聚集与分散。",
        image: {
          src: "/images/fenghuangwan.jpg",
          alt: "凤凰湾滨河绿带鸟瞰效果图：河道、草坪与观景桥",
          caption: "滨河鸟瞰效果图 1171 × 659 / IMAGE",
          width: 1171,
          height: 659,
        },
      },
    ] satisfies Project[],
    pdf: { label: "查看景观作品集", href: "files/landscape-portfolio.pdf", pages: "32 页 PDF" },
  },

  about: {
    code: "C",
    en: "EDUCATION & EXPERIENCE",
    title: "教育与经历",
    lead:
      "风景园林专业训练，加上四段景观设计工作。我习惯从场地分析、动线和模型出发解决空间问题，也习惯和多方协调、把设计推进到交付。",
    timeline: [
      {
        period: "2026.07 — 2026.08 · 2025.10 — 2025.11",
        org: "上海市政工程设计研究总院",
        role: "景观设计师 · 两段任职",
        text: "负责场地分析、空间规划设计、场地模型构建、文本表格制作与数据收集分析。",
      },
      {
        period: "2025.07 — 2025.08",
        org: "北京博雅方略文化旅游景观规划设计院",
        role: "景观设计师",
        text: "主导文旅规划整体模型与鸟瞰图，完成前期调研与分析图，为动线规划提供数据支撑；独立完成浑源古城核心建筑群三维建模。",
      },
      {
        period: "2024.09 — 2024.12",
        org: "清华同衡规划设计研究院",
        role: "景观设计师",
        text: "负责昌平区 7 个村庄改造项目的整体规划与多方需求协调，管理设计进度与交付质量；独立完成村庄活动广场方案与核心区模型。",
      },
      {
        period: "2023.09 — 2026.06",
        org: "北京林业大学",
        role: "风景园林 硕士",
        text: "空间规划方法、中国古典园林建筑设计、项目管理；空间规划、人流分析与环境心理学是我做关卡布局和动线引导的基础。",
      },
      {
        period: "2017.09 — 2021.06",
        org: "沈阳建筑大学",
        role: "风景园林 学士",
        text: "",
      },
    ],
    skills: [
      { group: "LEVEL", items: ["UE5 白模搭建", "场景布局与引导", "战斗节奏与关卡事件"] },
      { group: "MODELING", items: ["Rhino", "SketchUp", "AutoCAD"] },
      { group: "RENDER", items: ["Lumion", "D5 Render", "Photoshop"] },
      { group: "COLLAB", items: ["设计文档 / 表格", "飞书 / Office", "Cursor 等 AI 工具", "按尺寸核对资产"] },
    ],
    games: {
      note: "全品类 15,000+ 小时，单机 ARPG 是主线：《只狼》《艾尔登法环》全成就，《黑神话：悟空》双结局。习惯从捷径、存档点与战斗场地拆立体箱庭。",
      items: [
        { name: "英雄联盟", hours: 4500, tag: "MOBA · 钻一" },
        { name: "王者荣耀", hours: 3000, tag: "MOBA" },
        { name: "原神", hours: 2000, tag: "开放世界 ARPG" },
        { name: "明日方舟", hours: 2000, tag: "塔防 · 集成战略" },
        { name: "古剑奇谭网络版", hours: 1000, tag: "MMORPG · 多个 Boss 首杀" },
        { name: "PUBG", hours: 800, tag: "大逃杀" },
        { name: "三角洲行动", hours: 600, tag: "FPS · 搜打撤" },
        { name: "文明 6", hours: 500, tag: "TBS · 白板过神" },
        { name: "只狼", hours: 150, tag: "ARPG · 全成就" },
        { name: "艾尔登法环", hours: 130, tag: "ARPG · 全成就" },
        { name: "黑神话：悟空", hours: 60, tag: "ARPG · 双结局" },
      ],
    },
  },

  marquee: [
    "LEVEL DESIGN",
    "UNREAL ENGINE 5",
    "白模搭建",
    "场景与动线",
    "战斗节奏",
    "关卡事件",
    "环境叙事",
    "制作跟进",
    "风景园林硕士",
  ],
};
