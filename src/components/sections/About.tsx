import SectionHeading from '@/components/sections/SectionHeading'
import { about } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-2xl px-6 py-20">
      <SectionHeading title={about.heading} index="01" />
      <div className="space-y-4">
        {about.paragraphs.map((p) => (
          <p key={p} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}
