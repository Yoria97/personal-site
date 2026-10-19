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
      zh: '主导一站式风险治理链路改造，融合策略治理与模型治理；主导 SFT 小尺寸模型基座训练，在提升准召的同时降低机器成本；采用 PDE 模式建成可用的归因平台。',
      en: 'Led the redesign of an end-to-end risk governance pipeline fusing policy- and model-based governance; led SFT of a small foundation model to lift precision/recall while lowering inference cost; shipped an attribution platform using the PDE model.',
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

export const portfolio = [
  {
    title: { zh: '智能客服多智能体助理', en: 'Multi-Agent Customer Assistant' },
    desc: {
      zh: '基于 LLM 的在线对客多智能体系统，独立解决率 0→60%，覆盖安抚与一键申诉场景。',
      en: 'An LLM-powered multi-agent online customer assistant, lifting model-only resolution from 0 to 60%.',
    },
    tag: { zh: 'LLM 智能体', en: 'LLM Agents' },
    link: '#',
  },
  {
    title: { zh: '风险治理归因平台', en: 'Risk Governance Attribution Platform' },
    desc: {
      zh: '融合策略治理与模型治理的一站式风险处置链路，打通检测、处置与效果回流。',
      en: 'An end-to-end risk governance pipeline fusing policy- and model-based governance into one closed loop.',
    },
    tag: { zh: '模型运营', en: 'Model Ops' },
    link: '#',
  },
  {
    title: { zh: '院内 GIS 工具平台', en: 'In-house GIS Tooling Platform' },
    desc: {
      zh: '基于 ArcGIS Pro 开发的内部平台，4 大模块、41 项工具，服务 4000+ 次调用。',
      en: 'An internal platform built on ArcGIS Pro APIs with 4 modules and 41 tools, serving 4,000+ calls.',
    },
    tag: { zh: '软件开发', en: 'Software Dev' },
    link: '#',
  },
  {
    title: { zh: 'AIGC 生产工作流', en: 'AIGC Production Workflow' },
    desc: {
      zh: '测评 9 款主流 AIGC 工具，沉淀 ComfyUI / Stable Diffusion 生产级工作流。',
      en: 'Evaluated 9 mainstream AIGC tools and shipped a ComfyUI/Stable Diffusion production workflow.',
    },
    tag: { zh: 'AIGC', en: 'AIGC' },
    link: '#',
  },
]

export const contact = {
  heading: { zh: '联系我', en: 'Contact' },
  desc: { zh: '欢迎交流想法、合作机会，或者只是打个招呼。', en: 'Open to conversations, collaboration or just a hello.' },
  email: 'xingyue2021@yeah.net',
  wechatHint: { zh: '微信扫码添加', en: 'Scan to add WeChat' },
}
