import SectionHeading from '@/components/sections/SectionHeading'
import { skills } from '@/data/content'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-2xl px-6 py-20">
      <SectionHeading title="技能 · Skills" index="03" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group.zh}>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {group.group.zh} · {group.group.en}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
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
