import { profile } from '@/data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-2 text-[11px] tracking-wide text-muted-foreground/50 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name.zh} · {profile.name.en}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-1.5 rounded-full bg-[#4DBAD5]/50" />
          {profile.location.zh} · {profile.location.en}
        </span>
      </div>
    </footer>
  )
}
