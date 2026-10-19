import SectionHeading from '@/components/sections/SectionHeading'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/content'
import { Mail, Phone, QrCode } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [showQr, setShowQr] = useState(false)

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
        <Button asChild variant="outline">
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
            <Phone /> {contact.phone}
          </a>
        </Button>
        <div className="relative">
          <Button
            variant="outline"
            onClick={() => setShowQr((v) => !v)}
            onMouseEnter={() => setShowQr(true)}
            onMouseLeave={() => setShowQr(false)}
          >
            <QrCode /> {contact.wechatHint.zh} · {contact.wechatHint.en}
          </Button>
          {showQr && (
            <div
              className="absolute left-0 top-full z-10 mt-2 rounded-lg border border-border bg-background p-3 shadow-lg"
              onMouseEnter={() => setShowQr(true)}
              onMouseLeave={() => setShowQr(false)}
            >
              <img
                src={contact.wechatQrSrc}
                alt="WeChat QR code"
                className="size-40 rounded-md object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
