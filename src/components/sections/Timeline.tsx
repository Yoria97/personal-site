import SectionHeading from '@/components/sections/SectionHeading'
import { timeline } from '@/data/content'

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-2xl px-6 py-20">
      <SectionHeading title="经历 · Experience" index="02" />
      <div className="space-y-0 border-l border-border">
        {timeline.map((item) => (
          <div key={item.year.zh} className="relative pb-10 pl-6 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 size-[9px] rounded-full border-2 border-accent bg-background" />
            <p className="text-xs font-medium text-muted-foreground">
              {item.year.zh} <span className="text-muted-foreground/70">· {item.year.en}</span>
            </p>
            <h3 className="mt-1 text-base font-medium text-foreground">
              {item.role.zh} · <span className="text-muted-foreground">{item.org.zh}</span>
              <br />
              <span className="text-sm text-muted-foreground/70">
                {item.role.en} · {item.org.en}
              </span>
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc.zh}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground/70">{item.desc.en}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
