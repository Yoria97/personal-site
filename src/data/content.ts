export const profile = {
  name: { zh: '邢跃', en: 'Xing Yue' },
  title: {
    zh: 'AI/ML 工程师 · LLM 智能体与流程自动化',
    en: 'AI/ML Engineer · LLM Agents & Workflow Automation',
  },
  tagline: {
    zh: '把模糊的业务问题拆成可衡量的模型能力，并交付上线。',
    en: 'Turning ambiguous business problems into measurable, shippable model capabilities.',
  },
  avatarInitials: 'XY',
  location: { zh: '中国 · 成都', en: 'Chengdu, China' },
  education: {
    zh: 'NUS 可持续设计硕士 · 天津大学城乡规划本科',
    en: 'M.Sc. Sustainable Design, NUS · B.Eng. Urban Planning, Tianjin University',
  },
}

export const education = {
  heading: { zh: '教育经历', en: 'Education' },
  items: [
    {
      school: { zh: '新加坡国立大学', en: 'National University of Singapore' },
      degree: { zh: '可持续设计硕士', en: 'M.Sc. in Sustainable Design' },
      period: { zh: '2021 — 2022', en: '2021 — 2022' },
    },
    {
      school: { zh: '天津大学', en: 'Tianjin University' },
      degree: { zh: '城乡规划学士', en: 'B.Eng. in Urban & Rural Planning' },
      period: { zh: '2016 — 2021', en: '2016 — 2021' },
    },
  ],
}

export const about = {
  heading: { zh: '关于我', en: 'About' },
  paragraphs: [
    {
      zh: '4 年以上 AI 应用与软件交付经验，近 18 个月在字节跳动、快手负责企业级 LLM 智能体、Copilot 与工作流自动化：工单智能化覆盖率 0→30%，在线咨询模型独立解决率 0→60%，机器人转人工率降至 16%，满意度 75%→86%。',
      en: '4+ years in AI application and software delivery, the last 18 months focused on enterprise LLM agents, copilots and workflow automation at ByteDance and Kuaishou — ticket automation coverage 0→30%, model-only resolution 0→60%, human handoff down to 16%, CSAT 75%→86%.',
    },
    {
      zh: '熟悉动态 Prompt（Jinja）、多智能体编排、模型评测、问题归因与小尺寸模型 SFT，能在业务评审中用准召与漏放数据讲清取舍。',
      en: 'Fluent in dynamic prompt engineering (Jinja), multi-agent orchestration, model evaluation, error attribution and small-model SFT, using precision/recall data to make trade-offs clear in business reviews.',
    },
  ],
}

export const timeline = [
  {
    year: { zh: '2026.05 — 至今', en: 'May 2026 — Present' },
    role: { zh: '模型运营', en: 'Model Operations' },
    org: { zh: '快手 · 商业生态与体验', en: 'Kuaishou · Commerce Ecosystem & Experience' },
    desc: {
      zh: '主导 SFT 小尺寸模型基座训练，在提升准召的同时降低机器成本；采用 PDE 模式建成可用的归因平台；参与一站式风险治理链路改造，融合策略治理与模型治理。',
      en: 'Led SFT of a small foundation model to lift precision/recall while lowering inference cost; shipped an attribution platform using the PDE model; took part in the redesign of an end-to-end risk governance pipeline fusing policy- and model-based governance.',
    },
  },
  {
    year: { zh: '2025.06 — 2026.05', en: 'Jun 2025 — May 2026' },
    role: { zh: '机审模型运营专家', en: 'Model Operations Expert' },
    org: { zh: '字节跳动 · 商业生态与安全', en: 'ByteDance · Commerce Ecosystem & Safety' },
    desc: {
      zh: '搭建客服场景 LLM 工作流（智能总结 / 匹配 / 赔付），工单智能化覆盖率 0→30%；设计多智能体在线对客模型 CoTA，独立解决率 0→60%，担任 TIMO 项目 POC，满意度 75%→86%。',
      en: 'Built the LLM workflow layer for customer service (summarization, matching, compensation), raising ticket automation coverage 0→30%; designed a multi-agent assistant (CoTA) with model-only resolution 0→60%, served as POC for the TIMO program, lifting CSAT 75%→86%.',
    },
  },
  {
    year: { zh: '2022.08 — 2025.03', en: 'Aug 2022 — Mar 2025' },
    role: { zh: '规划师 · AI 设计师 · 软件开发', en: 'Planner · AI Designer · Software Developer' },
    org: { zh: '中国建筑西南设计研究院', en: 'CSCEC Southwest Design & Research Institute' },
    desc: {
      zh: '参与 20 余个规划与设计项目，把一线痛点转成院内 GIS 平台需求（4 大模块、41 项工具、4000+ 次调用）；测评 9 款主流 AIGC 工具，沉淀 ComfyUI / Stable Diffusion 生产工作流。',
      en: 'Delivered 20+ planning and design projects, translating practitioner needs into an in-house GIS platform (4 modules, 41 tools, 4,000+ calls); evaluated 9 mainstream AIGC tools and shipped a ComfyUI/Stable Diffusion production workflow.',
    },
  },
  {
    year: { zh: '2021.07 — 2022.07', en: 'Jul 2021 — Jul 2022' },
    role: { zh: '研究助理', en: 'Research Assistant' },
    org: { zh: '新加坡国立大学 · 可持续设计', en: 'National University of Singapore · Sustainable Design' },
    desc: {
      zh: '搭建数据流程与可持续潜力数据库，量化能源与水资源自供给情景。',
      en: 'Built data pipelines and a sustainability-potential database, quantifying energy and water self-supply scenarios.',
    },
  },
]

export const skills = [
  {
    group: { zh: 'LLM 与智能体', en: 'LLM & Agents' },
    items: ['Multi-agent Orchestration', 'Workflow Design', 'Prompt Engineering (Jinja)', 'Agent Evaluation', 'Small-model SFT'],
  },
  {
    group: { zh: 'AI 工具', en: 'AI Tooling' },
    items: ['Coze', 'n8n', 'ComfyUI', 'Stable Diffusion', 'Midjourney', 'Claude', 'Copilot'],
  },
  {
    group: { zh: '工程能力', en: 'Engineering' },
    items: ['Python', 'SQL', 'C#', 'REST / API', 'JSON', 'VS Code'],
  },
  {
    group: { zh: '数据与指标', en: 'Data & Metrics' },
    items: ['Metric Design', 'Precision / Recall', 'Experiment Design', 'Power BI', 'Excel'],
  },
]

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`

export const portfolio = [
  {
    title: { zh: '商审对客 Agent 演进方案', en: 'Customer-Facing Agent Evolution Framework' },
    desc: {
      zh: '主导调研并设计客服智能化 L1→L4 演进路径：从纯人工、AI 辅助采纳，到 AI+人回复，再到 AI 主答+人盯盘的分层协同模式，推动流程从 7 节点压缩到平台内闭环，迭代周期从 1 周缩短到 1-2 天。',
      en: 'Led research and design of an L1→L4 customer-service intelligence roadmap — from fully manual, to AI-suggested replies, to AI+human hybrid, to AI-led with human oversight — cutting the workflow from 7 handoff nodes to a closed-loop platform and shrinking iteration cycles from 1 week to 1-2 days.',
    },
    tag: { zh: '智能客服', en: 'Customer Service AI' },
    link: '#',
    images: [
      asset('images/portfolio/customer-agent-l1.png'),
      asset('images/portfolio/customer-agent-l2.png'),
      asset('images/portfolio/customer-agent-l3.png'),
      asset('images/portfolio/customer-agent-l4.png'),
    ],
    note: {
      zh: '由于数据涉密，展示数据为 mock 内容，平台为场景复现。',
      en: 'Data shown is mocked for confidentiality; the platform is a recreated scenario.',
    },
  },
  {
    title: { zh: '灵轮 · 智能归因工作台', en: 'Linglun · Intelligent Attribution Platform' },
    desc: {
      zh: '模力星探赛道二 Agent 应用：面向多团队协作的一站式归因优化平台，外接智能归因 Agent 提供归因建议，把归因效率从 2h/天/人提升到 30min/天/人，并沉淀精确率看板与数据飞轮。',
      en: 'A "Moli Xingtan" Agent track entry: a one-stop attribution platform for multi-team collaboration, pairing an attribution agent with case analytics to cut per-person attribution time from 2h/day to 30min/day and build a precision dashboard and data flywheel.',
    },
    tag: { zh: 'LLM 智能体', en: 'LLM Agents' },
    link: '#',
    images: [
      asset('images/portfolio/attribution-slide-2.png'),
      asset('images/portfolio/attribution-slide-3.png'),
      asset('images/portfolio/attribution-slide-4.png'),
      asset('images/portfolio/attribution-slide-5.png'),
      asset('images/portfolio/attribution-slide-6.png'),
      asset('images/portfolio/attribution-slide-7.png'),
      asset('images/portfolio/attribution-slide-8.png'),
    ],
  },
  {
    title: { zh: 'GOODGIS规划工具平台', en: 'GoodGIS Planning Tooling Platform' },
    desc: {
      zh: '基于 ArcGIS Pro 接口自研的院内 GIS 产品，涵盖 4 大模块、41 项工具，服务 4000+ 次调用；其中"镇村国空智规平台"已获国家计算机软件著作权登记（登记号 2024SR1463597）。',
      en: 'A self-built in-house GIS product on ArcGIS Pro APIs with 4 modules and 41 tools, serving 4,000+ calls; its "Village & Town Spatial Planning Platform" module holds an official Chinese software copyright registration (No. 2024SR1463597).',
    },
    tag: { zh: '软件开发', en: 'Software Dev' },
    link: '#',
    video: asset('videos/goodgis-demo.mp4'),
  },
  {
    title: { zh: '新加坡组屋能源 / 水资源自供给研究', en: 'HDB Energy & Water Self-Sufficiency Research' },
    desc: {
      zh: '新加坡国立大学可持续设计研究项目：基于 12623 栋 HDB 建筑数据建模，量化屋顶光伏能源供给与非饮用水自供给潜力，产出面积—容积比与产水效率的量化规律。',
      en: 'A sustainable-design research project at NUS: modeled 12,623 HDB building blocks to quantify rooftop solar energy supply and non-potable water self-sufficiency, deriving site-area/plot-ratio efficiency patterns.',
    },
    tag: { zh: '研究 · 数据建模', en: 'Research · Data Modeling' },
    link: '#',
    images: [
      asset('images/portfolio/research-slide-1.png'),
      asset('images/portfolio/research-slide-2.png'),
      asset('images/portfolio/research-slide-3.png'),
      asset('images/portfolio/research-slide-4.png'),
      asset('images/portfolio/research-slide-5.png'),
      asset('images/portfolio/research-slide-6.png'),
      asset('images/portfolio/research-slide-7.png'),
    ],
  },
]

export const honors = [
  { zh: '快手"模力星探" Agent 应用 Top 1（2026）', en: 'Kuaishou "Moli Xingtan" Agent Application, Top 1 (2026)' },
  { zh: '字节跳动 CQC 数智先锋奖（2026.01）', en: 'ByteDance CQC Digital Pioneer Award (2026.01)' },
  { zh: '字节跳动 Spot Bonus 用服智能化奖（2025.09）', en: 'ByteDance Spot Bonus (2025.09)' },
  { zh: '中建西南院"新·质"数字场景大赛二等奖（2024.09）', en: 'CSCEC Digital Scenario Competition, 2nd Prize (2024.09)' },
]

export const contact = {
  heading: { zh: '联系我', en: 'Contact' },
  desc: { zh: '欢迎交流想法、合作机会，或者只是打个招呼。', en: 'Open to conversations, collaboration or just a hello.' },
  email: 'xingyue2021@yeah.net',
  phone: '+86 159 8163 0722',
  wechatHint: { zh: '微信扫码添加', en: 'Scan to add WeChat' },
  wechatQrSrc: `${import.meta.env.BASE_URL}images/wechat-qr.png`,
}
