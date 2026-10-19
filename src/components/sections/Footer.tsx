import { profile } from '@/data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name.zh} · {profile.name.en}
        </span>
        <span>{profile.location.zh} · {profile.location.en}</span>
      </div>
    </footer>
  )
}
