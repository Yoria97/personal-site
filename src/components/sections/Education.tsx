import SectionHeading from '@/components/sections/SectionHeading'
import { education } from '@/data/content'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-10 scroll-mt-20">
      <SectionHeading title={`${education.heading.zh} · ${education.heading.en}`} index="" />
      <div className="space-y-5">
        {education.items.map((item) => (
          <div key={item.school.zh} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#4DBAD5]/10 text-[#4DBAD5]">
              <GraduationCap className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground/50">{item.period.zh}</p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">{item.school.zh}</p>
              <p className="text-xs text-muted-foreground/60">{item.school.en}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.degree.zh}</p>
              <p className="text-xs text-muted-foreground/50">{item.degree.en}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
