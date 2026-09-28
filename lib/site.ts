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
  kicker: "LEVEL DESIGN PORTFOLIO",
  role: "游戏关卡策划",
  status: "上海 · 随时到岗",
  email: "1485858833@qq.com",
  phone: "187 5268 2988",
  phoneHref: "tel:+8618752682988",
  location: "上海",
  github: "https://github.com/eson-yao",
  resume: "files/resume.pdf",
  description:
    "姚一心，游戏关卡策划。UE5 灰盒 Demo《雪隐》关卡设计，以及风景园林空间与动线实践。",
  headline: ["把空间叙事，", "做进关卡。"],
  lead:
    "风景园林硕士，转向游戏关卡设计。我把空间规划、人流引导和场景叙事用到关卡里，目前用 Unreal Engine 5 做灰盒关卡，代表作是第三人称 ARPG 线性箱庭 Demo《雪隐》。",
  stats: [
    { value: "01", label: "UE5 关卡 Demo", note: "LEVEL DEMO" },
    { value: "03", label: "景观项目负责人", note: "LANDSCAPE" },
    { value: "15k+", label: "小时游戏经历", note: "PLAYTIME" },
  ],

  nav: [
    { id: "top", num: "01", label: "定位", en: "INDEX" },
    { id: "xueyin", num: "02", label: "作品", en: "WORK" },
    { id: "about", num: "03", label: "经历", en: "ABOUT" },
    { id: "contact", num: "04", label: "联系", en: "CONTACT" },
  ],

  focus: [
    {
      code: "A",
      en: "LEVEL DESIGN",
      title: "关卡设计",
      text: "从主路径、支线奖励和敌人布置出发搭白盒，让玩家不看地图也知道该往哪走。",
    },
    {
      code: "B",
      en: "SPACE & FLOW",
      title: "空间与动线",
      text: "用高差、视线和节点控制移动节奏，这是我在真实场地里练了多年的事。",
    },
    {
      code: "C",
      en: "NARRATIVE",
      title: "场景叙事",
      text: "让建筑群、道具和地形自己讲故事，把规则教学藏进环境里。",
    },
    {
      code: "D",
      en: "TOOLS",
      title: "工具与表达",
      text: "Unreal Engine 5 搭关卡，Rhino、SketchUp 建模，Lumion、D5、Photoshop 出图。",
    },
  ],

  feature: {
    code: "A01",
    kind: "LEVEL DEMO",
    period: "2026",
    title: "《雪隐》",
    subtitle: "第三人称 ARPG 线性箱庭 · UE5 灰盒关卡",
    tags: ["Unreal Engine 5", "灰盒", "ARPG", "线性箱庭", "第三人称", "约 20 分钟"],
    summary:
      "这是一关以雪为母题的潜入与清剿。积雪会留下脚印，隐身敌人因此变得可读。飞雪技能可以扬起雪雾让敌人显形，把积雪方块凝成可踩的台阶，并短时格挡飞箭。主路径始终清楚，支线奖励可以被提前看见。",
    points: [
      {
        title: "三段节奏",
        text: "后山建筑群建立规则，魔教主体建筑加压并限制技能，主峰要求玩家自己制造掩体，再打终局 Boss。",
      },
      {
        title: "空间序列",
        text: "从后山树林、生活区、祭祀台，经过洞天、书画房、丹塔和地牢，直到正殿与主峰。",
      },
      {
        title: "参考与取舍",
        text: "雪地关卡参考《艾尔登法环》《黑神话：悟空》和《双人成行》；飞雪墙的短时格挡参考风墙一类的弹道防护。",
      },
    ],
    image: {
      src: "/images/xueyin.jpg",
      alt: "《雪隐》UE5 灰盒关卡全景：后山建筑群、丹塔与主峰",
      caption: "关卡全景 / UE5 灰盒 1917 × 947 / IMAGE",
      width: 1917,
      height: 947,
    },
    pdf: { label: "阅读完整关卡设计介绍", href: "files/xueyin-level-design.pdf", pages: "18 页 PDF" },
  },

  space: {
    code: "B",
    en: "LANDSCAPE PRACTICE",
    title: "空间设计基础",
    lead:
      "做关卡之前，我在真实场地里处理路径、高差和叙事空间。这些项目练的是同一件事：让人在移动中感到节奏和情绪变化。",
    projects: [
      {
        code: "B01",
        name: "田寺村关君蔚纪念园",
        meta: "乡村纪念园 · 0.35 公顷 · 项目负责人",
        period: "2024.06 — 2026.01",
        description:
          "独立完成方案到施工图。用路径和节点安排叙事，让访客一边走、一边感到空间情绪在变。",
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
          "山地公园。用高差组织垂直方向的探索，并规划多条主题游线，控制节点之间的游览节奏。",
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
          "把商业、广场和自然接在同一条滨水动线上，用空间层次引导人流聚集和分散。",
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
      "风景园林专业训练，加上三段景观设计工作，让我习惯从场地分析、动线和模型出发解决空间问题。",
    timeline: [
      {
        period: "2026.07 — 2026.08",
        org: "上海市政工程设计研究总院",
        role: "景观设计师",
        text: "负责场地分析、空间规划设计、场地模型构建与数据收集分析。",
      },
      {
        period: "2025.07 — 2025.08",
        org: "北京博雅方略文化旅游景观规划设计院",
        role: "实习设计师",
        text: "主导文旅规划整体模型与鸟瞰图，参与旅游动线规划；独立完成浑源古城核心建筑群三维建模。",
      },
      {
        period: "2024.09 — 2024.12",
        org: "清华同衡规划设计研究院",
        role: "实习设计师",
        text: "负责昌平区 7 个村庄改造项目的整体规划与多方协调，独立完成村庄活动广场方案与模型。",
      },
      {
        period: "2023.09 — 2026.06",
        org: "北京林业大学",
        role: "风景园林 硕士",
        text: "空间规划、古典园林与项目管理；2023 年获学业一等奖学金。",
      },
      {
        period: "2017.09 — 2021.06",
        org: "沈阳建筑大学",
        role: "风景园林 学士",
        text: "",
      },
    ],
    skills: [
      { group: "ENGINE", items: ["Unreal Engine 5", "关卡白盒", "Blueprint 基础"] },
      { group: "MODELING", items: ["Rhino", "SketchUp", "AutoCAD"] },
      { group: "RENDER", items: ["Lumion", "D5 Render", "Photoshop"] },
      { group: "DESIGN", items: ["动线与节奏", "环境叙事", "高差与视线控制"] },
    ],
    games: {
      note: "全品类 15,000+ 小时。习惯从动线、战斗空间和节奏拆关卡。",
      items: [
        { name: "英雄联盟", hours: 4500, tag: "MOBA · 钻一" },
        { name: "王者荣耀", hours: 3000, tag: "MOBA" },
        { name: "原神", hours: 2000, tag: "开放世界" },
        { name: "明日方舟", hours: 2000, tag: "塔防 · 集成战略" },
        { name: "古剑奇谭网络版", hours: 1000, tag: "MMORPG · 多个 Boss 首杀" },
        { name: "PUBG", hours: 800, tag: "大逃杀" },
        { name: "三角洲行动", hours: 600, tag: "FPS · 搜打撤" },
        { name: "文明 6", hours: 500, tag: "TBS · 神 AI 通关" },
        { name: "只狼", hours: 150, tag: "ARPG · 全成就" },
        { name: "艾尔登法环", hours: 130, tag: "ARPG · 全成就" },
      ],
    },
  },

  marquee: [
    "LEVEL DESIGN",
    "UNREAL ENGINE 5",
    "灰盒搭建",
    "动线与节奏",
    "环境叙事",
    "风景园林硕士",
    "线性箱庭",
    "空间序列",
  ],
};
