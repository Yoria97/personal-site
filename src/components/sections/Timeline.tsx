import SectionHeading from '@/components/sections/SectionHeading'
import { timeline } from '@/data/content'

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-2xl px-6 py-20">
      <SectionHeading title="经历" index="02" />
      <div className="space-y-0 border-l border-border">
        {timeline.map((item) => (
          <div key={item.year} className="relative pb-10 pl-6 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 size-[9px] rounded-full border-2 border-accent bg-background" />
            <p className="text-xs font-medium text-muted-foreground">{item.year}</p>
            <h3 className="mt-1 text-base font-medium text-foreground">
              {item.role} · <span className="text-muted-foreground">{item.org}</span>
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
