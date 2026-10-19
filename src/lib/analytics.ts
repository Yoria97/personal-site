// ─── Supabase 访客埋点 ────────────────────────────────────────────────────────
// 填入你的 Supabase 项目信息后，trackVisit() 会在每次页面加载时插入一条记录
// VITE_SUPABASE_URL  = https://xxxx.supabase.co
// VITE_SUPABASE_ANON_KEY = eyJ...

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export async function trackVisit() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return
  const payload = {
    path: window.location.pathname,
    referrer: document.referrer || null,
    user_agent: navigator.userAgent,
    language: navigator.language,
  }
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/visits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    // 静默失败，不影响主站
  }
}

export async function fetchVisits(adminKey: string): Promise<VisitRow[]> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return []
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/visits?order=created_at.desc&limit=200`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        // 把管理员 key 作为自定义头传递，配合 RLS check 可加固
        'x-admin-key': adminKey,
      },
    },
  )
  if (!res.ok) return []
  return res.json()
}

export interface VisitRow {
  id: number
  created_at: string
  path: string | null
  referrer: string | null
  user_agent: string | null
  language: string | null
}
