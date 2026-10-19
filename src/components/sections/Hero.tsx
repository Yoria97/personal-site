import { Button } from '@/components/ui/button'
import { profile } from '@/data/content'
import { ArrowDown, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* 全宽封面横幅 */}
      <div
        aria-hidden="true"
        className="h-52 w-full sm:h-64"
        style={{
          background: [
            'linear-gradient(135deg,',
            'oklch(0.60 0.14 210) 0%,',
            'oklch(0.70 0.12 230) 20%,',
            'oklch(0.78 0.09 250) 40%,',
            'oklch(0.65 0.13 190) 60%,',
            'oklch(0.55 0.10 220) 80%,',
            'oklch(0.72 0.11 200) 100%)',
          ].join(' '),
        }}
      />

      {/* 头像 + 姓名区块 */}
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* 头像叠压在横幅底部 */}
        <div className="relative -mt-12 mb-5 flex items-end gap-5">
          <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full border-4 border-background bg-accent text-2xl font-bold text-accent-foreground shadow-md sm:size-28">
            {profile.avatarInitials}
          </div>
        </div>

        {/* 姓名 + 职位 */}
        <div className="pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.name.zh}
            <span className="ml-3 text-2xl font-normal text-muted-foreground sm:text-3xl">{profile.name.en}</span>
          </h1>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {profile.title.zh}
            <span className="mx-2 text-muted-foreground/40">·</span>
            {profile.title.en}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground/80">
            {profile.tagline.zh}
          </p>
          <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted-foreground/55">
            {profile.tagline.en}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              查看作品 · Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="size-3.5" /> 联系我 · Contact
            </a>
          </div>
        </div>

        <div className="border-t border-border" />
      </div>

      {/* 向下滚动提示 */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground/30 transition-colors hover:text-muted-foreground/60"
        aria-label="向下滚动"
      >
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
