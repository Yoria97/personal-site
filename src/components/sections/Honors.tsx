import { honors } from '@/data/content'

export default function Honors() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-6 sm:px-10">
      <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-1.5 border-t border-border pt-6">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/40 mr-2">荣誉 · Honors</span>
        {honors.map((h) => (
          <span key={h.zh} className="text-[11px] leading-relaxed text-muted-foreground/60">
            {h.zh} · {h.en}
          </span>
        ))}
      </div>
    </section>
  )
}
