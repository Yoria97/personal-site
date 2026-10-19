import SectionHeading from '@/components/sections/SectionHeading'
import { portfolio } from '@/data/content'
import { ArrowUpRight } from 'lucide-react'

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-2xl px-6 py-20">
      <SectionHeading title="作品" index="04" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {portfolio.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="group flex flex-col justify-between rounded-lg border border-border p-5 transition-colors hover:border-accent/50"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
            <span className="mt-4 inline-block text-xs font-medium text-accent">{item.tag}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
