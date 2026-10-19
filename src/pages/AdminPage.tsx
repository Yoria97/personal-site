import { useEffect, useState } from 'react'
import { fetchVisits, type VisitRow } from '@/lib/analytics'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string | undefined

function fmt(iso: string) {
  return new Date(iso).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
}

function uaShort(ua: string | null) {
  if (!ua) return '—'
  if (/iPhone|iPad|iPod/.test(ua)) return 'iOS'
  if (/Android/.test(ua)) return 'Android'
  if (/Mac/.test(ua)) return 'macOS'
  if (/Windows/.test(ua)) return 'Windows'
  if (/Linux/.test(ua)) return 'Linux'
  return ua.slice(0, 40)
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [rows, setRows] = useState<VisitRow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const expected = ADMIN_PASSWORD || 'admin2024'
    if (password === expected) {
      setAuthed(true)
    } else {
      setError('密码错误 Wrong password')
    }
  }

  useEffect(() => {
    if (!authed) return
    setLoading(true)
    fetchVisits(password)
      .then((data) => setRows(data))
      .catch(() => setError('获取数据失败，请检查 Supabase 配置'))
      .finally(() => setLoading(false))
  }, [authed, password])

  const total = rows.length
  const today = rows.filter(
    (r) => new Date(r.created_at).toDateString() === new Date().toDateString(),
  ).length

  const refererMap: Record<string, number> = {}
  rows.forEach((r) => {
    const ref = r.referrer || '直接访问 (direct)'
    refererMap[ref] = (refererMap[ref] || 0) + 1
  })
  const topReferrers = Object.entries(refererMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  if (!authed) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-xs space-y-4 rounded-xl border border-border p-8"
        >
          <h1 className="text-center text-sm font-medium text-muted-foreground">
            访客统计 · Analytics
          </h1>
          <input
            type="password"
            placeholder="密码 Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-1 focus:ring-accent"
            autoFocus
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            进入 Enter
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-xl font-semibold text-foreground">
        访客统计 <span className="text-sm font-normal text-muted-foreground">· Analytics</span>
      </h1>

      {loading && (
        <p className="text-sm text-muted-foreground">加载中……</p>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          {/* 摘要卡片 */}
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { label: '累计访问 Total visits', value: total },
              { label: '今日访问 Today', value: today },
              { label: '来源数 Referrers', value: Object.keys(refererMap).length },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border p-5"
              >
                <p className="text-2xl font-semibold tabular-nums">{item.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Top 来源 */}
          {topReferrers.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-3 text-sm font-medium text-muted-foreground">Top 来源 · Top referrers</h2>
              <div className="space-y-2">
                {topReferrers.map(([ref, count]) => (
                  <div key={ref} className="flex items-center justify-between rounded-lg border border-border px-4 py-2 text-sm">
                    <span className="truncate text-foreground">{ref}</span>
                    <span className="ml-4 shrink-0 tabular-nums text-muted-foreground">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 明细表格 */}
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">访问明细 · Visit log</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {['时间 Time', '路径 Path', '来源 Referrer', '设备 Device', '语言 Lang'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-medium text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-muted-foreground">
                      暂无数据
                    </td>
                  </tr>
                )}
                {rows.map((r) => (
                  <tr key={r.id} className="border-b border-border/50 last:border-0 hover:bg-muted/20">
                    <td className="whitespace-nowrap px-4 py-2.5 tabular-nums text-muted-foreground">
                      {fmt(r.created_at)}
                    </td>
                    <td className="px-4 py-2.5">{r.path || '/'}</td>
                    <td className="max-w-[180px] truncate px-4 py-2.5 text-muted-foreground">
                      {r.referrer || '—'}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">{uaShort(r.user_agent)}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{r.language || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
