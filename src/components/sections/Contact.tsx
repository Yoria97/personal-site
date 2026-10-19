import SectionHeading from '@/components/sections/SectionHeading'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/content'
import { Mail, QrCode } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-20">
      <SectionHeading title={`${contact.heading.zh} · ${contact.heading.en}`} index="05" />
      <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        {contact.desc.zh}
        <br />
        <span className="text-xs text-muted-foreground/70">{contact.desc.en}</span>
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${contact.email}`}>
            <Mail /> {contact.email}
          </a>
        </Button>
        <Button variant="outline">
          <QrCode /> {contact.wechatHint.zh} · {contact.wechatHint.en}
        </Button>
      </div>
    </section>
  )
}
