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
  phone: "+86 18752682988",
  phoneHref: "tel:+8618752682988",
  location: "上海",
  github: "https://github.com/eson-yao",
  resume: "files/resume.pdf",
  description:
    "姚一心，游戏关卡策划。独立完成 UE5 第三人称 ARPG 白模切片《雪隐》：场景布局、动线引导、战斗节奏与关卡事件；风景园林硕士，三个景观项目负责人，习惯把方案跟进到落地。",
  headline: ["把空间叙事，", "做进关卡。"],
  lead:
    "你好，我是姚一心，硕士就读于北京林业大学风景园林专业。此前长期从事景观空间设计工作，在空间布局、动线组织与氛围营造方面积累较多，也习惯把方案推进到可落地、可核对的程度。而在日常中我的游戏经历比较丰富，对不同类型玩法都有接触，逐渐形成了对关卡可读性、节奏与体验问题的敏感度。如今我希望把这些能力迁移到游戏关卡设计中。我能独立使用 UE5 完成白模搭建，统筹场景引导、战斗节奏与关卡事件，并输出可供地编、美术协作核对的设计文档。",
  nav: [
    { id: "top", num: "01", label: "首页", en: "HOME" },
    { id: "xueyin", num: "02", label: "作品", en: "WORK" },
    { id: "about", num: "03", label: "经历", en: "ABOUT" },
    { id: "contact", num: "04", label: "联系", en: "CONTACT" },
  ],

  feature: {
    code: "A",
    kind: "LEVEL DEMO",
    period: "2026.08 — 2026.09",
    title: "《雪隐》",
    subtitle: "第三人称 ARPG 线性箱庭 · UE5 白模切片 · 约 20 分钟 · 独立完成",
    tags: ["Unreal Engine 5", "白模", "ARPG", "线性箱庭", "第三人称", "约 20 分钟", "关卡事件"],
    summary:
      "这是以雪为主题的线性箱庭关卡，介绍了一位宗门弟子雪夜潜入、暗杀复仇的冒险故事。关卡以飘雪的轻柔与积雪的厚重为核心，创造出“飞雪”这一玩家技能，结合场地的积雪互动，衍生出观察、反隐、凝实、格挡等功能。整体玩法设计按“玩法教学——场地限制——机制组合——综合考验”形成机制闭环，结合空间设计控制玩家心流，逐步提升直到最终复仇完成、掩埋敌人的高潮结局。",
    points: [
      {
        title: "关卡空间与动线",
        text: "构建“后山建筑群 —— 魔教主体 —— 主峰”三段主路径，明确主线推进与支线分流；用主峰 POI、奖励预告、面包屑与负向引导建立空间预期，降低迷路成本并维持探索动机。",
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
      "大学期间，我作为导师工作室项目负责人在真实场地里处理路径、高差和叙事空间，并把方案跟进到施工图和落地。这些实地的景观设计给予了我大量的空间设计、场景叙事和流线引导经验，对于游戏关卡设计帮助极大。",
    projects: [
      {
        code: "B01",
        name: "北京门头沟田寺村纪念园",
        meta: "乡村纪念园 · 0.35 公顷 · 项目负责人 · 方案到施工图",
        period: "2024.06 — 2026.01",
        description:
          "独立负责从方案到施工图的全过程设计，通过精巧布局与路径设计营造叙事性空间，引导访客在行进和空间变化中了解关君蔚院士与中国水利的发展历史。",
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
          "主导山地公园整体方案设计，通过地形分析与空间布局，利用高差创造丰富的垂直探索体验，规划多条主题游线引导游客在节点间的游览节奏。设计引导访客在行进中感受空间情绪变化的动线，强化空间体验的节奏感与沉浸感。",
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
          "主导滨水商业区景观规划，设计流畅滨水动线，将商业空间、公共广场与自然景观衔接，通过多层次空间划分引导人流、激发区域活力。",
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
    timeline: [
      {
        period: "2026.07 — 2026.08 · 2025.10 — 2025.11",
        org: "上海市政工程设计研究总院",
        role: "景观设计师",
        text: "在实地项目中负责场地分析、空间规划设计、场地模型构建、效果渲染、文本表格制作、数据收集分析等工作。",
      },
      {
        period: "2025.07 — 2025.08",
        org: "北京博雅方略文化旅游景观规划设计院",
        role: "景观设计师（实习）",
        text: "主导文旅规划整体模型构建与鸟瞰图绘制，完成前期调研、场地分析与分析图制作，为动线规划提供数据支撑。参与旅游动线规划，通过空间布局引导人流在不同节点间的游览节奏，优化游客体验路径。独立完成浑源古城核心建筑群三维建模，精准还原古城空间肌理，为旅游动线规划与虚拟漫游提供空间数据基础。",
      },
      {
        period: "2024.09 — 2024.12",
        org: "清华同衡规划设计研究院",
        role: "景观设计师（实习）",
        text: "负责昌平区 7 个村庄改造项目的整体规划与多方需求协调，有效管理设计进度与交付质量，展现了出色的项目管理与跨职能沟通能力。独立完成村庄活动广场的方案设计，主导核心区域的模型搭建与场景效果呈现，具备从概念构思到最终落地的全流程执行力。",
      },
      {
        period: "2023.09 — 2026.06",
        org: "北京林业大学",
        role: "风景园林 硕士",
        text: "核心能力迁移：硕士期间的空间规划、人流分析、场景叙事及环境心理学应用，为游戏关卡的空间布局、玩家动线引导及氛围营造奠定了坚实基础。主修课程：空间规划方法与实践、中国古典园林建筑设计、项目管理与公司组织等",
      },
      {
        period: "2017.09 — 2021.06",
        org: "沈阳建筑大学",
        role: "风景园林 学士",
        text: "",
      },
    ],
    skills: [
      { group: "空间与关卡设计", items: ["空间布局", "动线规划", "场景氛围营造", "UE5 关卡白盒搭建"] },
      { group: "建模", items: ["Rhino", "SketchUp", "AutoCAD"] },
      { group: "渲染绘图", items: ["Lumion", "D5", "Photoshop"] },
      { group: "协同办公", items: ["Office", "飞书", "Cursor"] },
    ],
    games: {
      note: "全品类 15,000+ 小时。未标注时长的游戏进度为版本毕业或深度体验。",
      groups: [
        {
          name: "二次元手游",
          items: [
            { name: "明日方舟", hours: 2000, tag: "120 级" },
            { name: "原神", hours: 2000, tag: "60 级" },
            { name: "崩坏：星穹铁道", hours: 800, tag: "70 级" },
            { name: "绝区零", hours: 500, tag: "60 级" },
            { name: "终末地", hours: 350, tag: "60 级" },
          ],
          more: ["重返未来1999", "永远的七日之都", "尘白禁区", "猫之城", "雷索纳斯", "崩坏3", "少前：云图计划", "来自星尘"],
        },
        {
          name: "MOBA",
          items: [
            { name: "英雄联盟", hours: 4500, tag: "钻一" },
            { name: "王者荣耀", hours: 3000, tag: "三十余赛季" },
          ],
        },
        {
          name: "FPS / TPS",
          items: [
            { name: "PUBG", hours: 800 },
            { name: "三角洲行动", hours: 600 },
            { name: "守望先锋", hours: 500 },
            { name: "无畏契约", hours: 300 },
            { name: "绝地潜兵 2", hours: 100 },
          ],
          more: ["彩虹六号：围攻", "CF", "CS:GO"],
        },
        {
          name: "MMORPG",
          items: [
            { name: "古剑奇谭网络版", hours: 1000, tag: "多个 Boss 首杀" },
            { name: "诛仙世界", hours: 500, tag: "PVP 化圣 · PVE 第一梯队" },
          ],
          more: ["逆水寒手游"],
        },
        {
          name: "ARPG / RPG",
          items: [
            { name: "只狼", hours: 150, tag: "全成就" },
            { name: "艾尔登法环", hours: 130, tag: "全成就" },
            { name: "遗迹 2", hours: 73 },
            { name: "33号远征队", hours: 68, tag: "全成就" },
            { name: "黑神话：悟空", hours: 60, tag: "双结局" },
            { name: "赛博朋克 2077", hours: 55 },
          ],
          more: ["GTA 系列", "蝙蝠侠：阿卡姆骑士", "霍格沃兹之遗", "剑星", "空洞骑士", "艾希"],
        },
        {
          name: "Roguelike",
          items: [
            { name: "杀戮尖塔 2", hours: 120, tag: "通关 N10" },
            { name: "失落城堡 2", hours: 60, tag: "最高难度真结局" },
            { name: "哥布林弹球", hours: 60 },
            { name: "风暴怕死队", hours: 50 },
          ],
          more: ["明日方舟：集成战略（高难多结局）", "月圆之夜（最高难度）", "元气骑士", "死亡细胞"],
        },
        {
          name: "策略",
          items: [{ name: "文明 6", hours: 500, tag: "白板过神" }],
          more: ["部落冲突", "皇室战争", "星际争霸 2"],
        },
        {
          name: "生存",
          items: [],
          more: ["深海迷航系列（通关）", "我的世界", "幻兽帕鲁", "饥荒"],
        },
        {
          name: "双人 / 多人",
          items: [],
          more: ["双人成行（通关）", "双影奇境（通关）", "泡姆泡姆", "人类一败涂地（通关）", "糖豆人", "大富翁 11"],
        },
        {
          name: "解谜休闲",
          items: [],
          more: ["纪念碑谷系列", "造桥模拟器"],
        },
      ],
    },
  },

  marquee: [
    "关卡设计",
    "制作跟进",
    "空间架构",
    "环境叙事",
    "玩家体验",
  ],
};
