import { Button } from '@/components/ui/button'
import { profile } from '@/data/content'
import { ArrowDown, Mail } from 'lucide-react'

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* 全宽封面横幅 */}
      <div
        aria-hidden="true"
        className="h-52 w-full bg-cover bg-center sm:h-64"
        style={{
          backgroundImage: `url(${asset('images/hero/banner-cat.jpg')})`,
        }}
      />

      {/* 头像 + 姓名区块 */}
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* 头像叠压在横幅底部 */}
        <div className="relative -mt-12 mb-5 flex items-end gap-5">
          <img
            src={asset('images/hero/avatar.jpg')}
            alt={profile.name.zh}
            className="relative size-24 shrink-0 rounded-full border-4 border-background object-cover shadow-md sm:size-28"
          />
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
