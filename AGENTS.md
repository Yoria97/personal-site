# AGENTS.md

> [!IMPORTANT]
> **用户认证、数据库操作、部署等详细说明，请读取并使用 `pde-agent` skill，本文件不重复记录。**

> 本文件遵循 [agents.md](https://agents.md/) 规范，为 AI Agent 提供项目上下文。

## 项目概览

本项目基于 `pde-agent` skill 构建的快手内部全栈 React 模板。

- **前端**：Vite 8 + React 18 + TypeScript 5
- **UI**：shadcn/ui + TailwindCSS v4
- **路由**：React Router v7
- **状态管理**：Zustand v5
- **数据请求**：Fetch API
- **后端 / 部署**：参见 `pde-agent` skill

## 目录结构

```
src/
├── pages/            # 页面组件（每个路由对应一个文件）
├── components/
│   └── ui/           # shadcn/ui 组件（用 npx shadcn@latest add 添加，不要手动修改）
├── lib/
│   ├── appwrite.ts   # Appwrite client、account、databases、storage、loginWithKuaishou 导出（endpoint 已固定，禁止修改）
│   └── utils.ts      # cn() 工具函数（tailwind-merge + clsx）
├── App.tsx           # 路由配置（React Router <Routes>）
├── main.tsx          # 应用入口（BrowserRouter 包裹）
└── index.css         # 全局样式（TailwindCSS 入口）
```

## 路由开发规范

路由统一在 `src/App.tsx` 的 `<Routes>` 中配置，页面组件放在 `src/pages/` 目录。

### 新增页面步骤

1. 在 `src/pages/` 下创建页面组件文件（如 `ProfilePage.tsx`）
2. 在 `src/App.tsx` 中添加对应的 `<Route>`

### App.tsx 示例

```tsx
import { Routes, Route } from 'react-router'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
  )
}
```

### 页面内跳转

```tsx
import { Link, useNavigate, useParams } from 'react-router'

// 声明式跳转
<Link to="/about">关于</Link>

// 编程式跳转
const navigate = useNavigate()
navigate('/about')
navigate(-1) // 返回上一页

// 动态路由参数
const { id } = useParams<{ id: string }>()
```

## 构建与启动命令

```bash
# 安装依赖（必须使用快手内部 npm 源）
pnpm install

# 启动开发服务器
pnpm dev

# 构建产物
pnpm build

# 预览构建产物
pnpm preview
```

## 已安装的 shadcn/ui 组件

`button` `card`

添加更多组件：
```bash
npx shadcn@latest add <component-name>
```

## 安全约束（禁止违反）

| 规则 | ✅ 允许 | ❌ 禁止 |
|------|---------|---------|
| 登录方式 | 无需实现，由最新版 `@codeflicker/appwrite` 默认内置快手 SSO | 手写 `createOAuth2Session` / token 兑换等 appwrite 登录样板代码 |
| Appwrite SDK | `@codeflicker/appwrite` | 官方 `appwrite` npm 包 |
| 数据库 CLI | `appwrite-cf` | 官方 `appwrite` CLI |
| UI 组件库 | shadcn/ui + TailwindCSS（推荐） | — |
| npm 源 | `https://npm.corp.kuaishou.com/` | npmjs.org 直连（网络受限）|
| Endpoint | 禁止手动修改 | 硬编码其他 URL 字符串 |
| project_id 格式 | 纯字母数字下划线 | 含连字符 `-` |
| `appwrite-cf.config.json` | 只读，由 `appwrite-cf` 工具自动管理 | 手动修改文件内容 |
| `.static-site-deploy.json` | 只读，由部署工具自动管理 | 手动修改文件内容 |

> 用户认证、数据库操作、部署等详细说明，请读取并使用 `pde-agent` skill。

## 测试指令

- **开发中**：`pnpm dev` 启动后，使用浏览器自动化工具验证无白屏、无 JS 报错
- **构建验证**：`pnpm build`（无报错即通过）
- **代码检查**：`pnpm lint`

## 本项目补充说明（个人网页）

- **页面结构**：单页布局，不使用路由；`src/pages/HomePage.tsx` 组合 `src/components/sections/` 下的 Hero / About / Timeline / Skills / Portfolio / Contact / Footer 六个区块。
- **内容数据**：所有文案集中在 `src/data/content.ts`（占位内容，后续替换为真实简介、经历、作品链接、联系方式即可，无需改动组件代码）。
- **视觉主题**：极简轻量风格（近黑文字 + 纯白背景 + 单一强调色），强调色取自用户品牌色 `#4DBAD5`，已换算为 `oklch(0.737 0.105 217.011)` 写入 `src/index.css` 的 `--accent` / `--ring` / `--chart-1`，浅色与暗色模式均已适配。
- **部署**：已通过 `@codeflicker/frontend-cloud-cli` 部署，项目 ID `xingyue03-personal-site`，配置文件见根目录 `.static-site-deploy.json`；后续更新内容后重新 `pnpm build` 再执行部署命令即可覆盖发布。
- **访问权限**：默认白名单访问，需要在 https://myflicker.corp.kuaishou.com/web-artifacts/detail?id=24221&tab=AccessControl 调整为公开或增减白名单成员。

## 公网部署补充说明（GitHub Pages）

- 为了能在 GitHub Actions（公网环境）中构建，已移除内网专属依赖 `@codeflicker/appwrite` 及 `.npmrc` 内网源配置，改用公共 npm 源 `https://registry.npmjs.org`，并以 `package-lock.json` + `npm ci` 作为 CI 安装方式（原 `pnpm-lock.yaml` 已移除，不再使用 pnpm）。
- 线上地址：https://yoria97.github.io/personal-site/ ，对应 GitHub 仓库 `Yoria97/personal-site`，`main` 分支推送后由 `.github/workflows/deploy.yml` 自动构建并发布到 GitHub Pages。
- `vite.config.ts` 中已设置 `base: '/personal-site/'`，与 GitHub Pages 的子路径一致；若仓库改名，需同步修改该 `base` 值。
