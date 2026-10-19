import SectionHeading from '@/components/sections/SectionHeading'
import { skills } from '@/data/content'

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <SectionHeading title="技能 · Skills" index="03" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group.zh}>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              {group.group.zh} · {group.group.en}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
