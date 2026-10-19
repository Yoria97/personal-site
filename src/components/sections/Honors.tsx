import { honors } from '@/data/content'

export default function Honors() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-4">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-t border-border pt-6 text-center">
        {honors.map((h) => (
          <span key={h.zh} className="text-[11px] leading-relaxed text-muted-foreground/60">
            {h.zh} · {h.en}
          </span>
        ))}
      </div>
    </section>
  )
}
