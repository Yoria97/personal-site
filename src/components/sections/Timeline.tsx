import SectionHeading from '@/components/sections/SectionHeading'
import { timeline } from '@/data/content'

export default function Timeline() {
  return (
    <section id="timeline" className="py-10 scroll-mt-20">
      <SectionHeading title="经历 · Experience" index="02" />
      <div className="space-y-0 border-l border-border">
        {timeline.map((item) => (
          <div key={item.year.zh} className="group relative pb-10 pl-6 last:pb-0">
            <span className="absolute -left-[4px] top-2 size-2 rounded-full bg-muted-foreground/40 transition-colors group-hover:bg-accent" />
            <p className="text-xs text-muted-foreground/50 italic">
              {item.year.zh} · {item.year.en}
            </p>
            <h3 className="mt-1 text-base font-bold text-foreground">
              {item.role.zh}
            </h3>
            <p className="text-sm text-muted-foreground">{item.org.zh}</p>
            <p className="text-xs text-muted-foreground/50">{item.role.en} · {item.org.en}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">{item.desc.zh}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground/55">{item.desc.en}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
