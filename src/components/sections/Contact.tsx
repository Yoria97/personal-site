import SectionHeading from '@/components/sections/SectionHeading'
import { contact } from '@/data/content'
import { ArrowUpRight, Mail, Phone, QrCode } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [showQr, setShowQr] = useState(false)

  return (
    <section id="contact" className="py-10">
      <SectionHeading title={`${contact.heading.zh} · ${contact.heading.en}`} index="05" />
      <p className="mb-10 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        {contact.desc.zh}
        <br />
        <span className="text-xs text-muted-foreground/70">{contact.desc.en}</span>
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="group relative flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#4DBAD5]/10 text-[#4DBAD5]">
            <Mail className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-muted-foreground/60">邮箱 · Email</p>
            <p className="mt-0.5 truncate text-sm font-medium">{contact.email}</p>
          </div>
          <ArrowUpRight className="absolute right-3 top-3 size-3.5 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-muted-foreground/60" />
        </a>

        {/* Phone */}
        <a
          href={`tel:${contact.phone.replace(/\s/g, '')}`}
          className="group relative flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
            <Phone className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-muted-foreground/60">电话 · Phone</p>
            <p className="mt-0.5 text-sm font-medium">{contact.phone}</p>
          </div>
          <ArrowUpRight className="absolute right-3 top-3 size-3.5 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-muted-foreground/60" />
        </a>

        {/* WeChat */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowQr((v) => !v)}
            onMouseEnter={() => setShowQr(true)}
            onMouseLeave={() => setShowQr(false)}
            className="group relative flex w-full items-start gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <QrCode className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-muted-foreground/60">
                {contact.wechatHint.zh} · {contact.wechatHint.en}
              </p>
              <p className="mt-0.5 text-sm font-medium">扫码添加</p>
            </div>
            <ArrowUpRight className="absolute right-3 top-3 size-3.5 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-muted-foreground/60" />
          </button>
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
