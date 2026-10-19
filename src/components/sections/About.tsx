import SectionHeading from '@/components/sections/SectionHeading'
import { about } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-2xl px-6 py-20 scroll-mt-20">
      <SectionHeading title={`${about.heading.zh} · ${about.heading.en}`} index="01" />
      <div className="space-y-6">
        {about.paragraphs.map((p) => (
          <p key={p.zh} className="text-sm leading-[1.85] text-foreground/80 sm:text-base">
            {p.zh}
            <br />
            <span className="text-xs leading-relaxed text-muted-foreground/60 sm:text-sm">{p.en}</span>
          </p>
        ))}
      </div>
    </section>
  )
}
