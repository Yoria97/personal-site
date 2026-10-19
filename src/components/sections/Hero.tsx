import { Button } from '@/components/ui/button'
import { profile } from '@/data/content'
import { ArrowDown, GraduationCap, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex min-h-[88vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 flex size-16 items-center justify-center rounded-full border border-border text-lg font-medium text-foreground">
        {profile.avatarInitials}
      </div>
      <h1 className="animate-in fade-in slide-in-from-bottom-3 duration-700 mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name.zh}
        <span className="ml-2 text-2xl font-normal text-muted-foreground sm:text-3xl">{profile.name.en}</span>
      </h1>
      <p className="animate-in fade-in slide-in-from-bottom-3 duration-700 mt-3 text-base text-accent sm:text-lg">
        {profile.title.zh}
        <span className="mx-1.5 text-muted-foreground">·</span>
        {profile.title.en}
      </p>
      <p className="animate-in fade-in slide-in-from-bottom-3 duration-700 mt-2 flex items-center gap-1.5 text-xs text-muted-foreground/80 sm:text-sm">
        <GraduationCap className="size-3.5 shrink-0" />
        {profile.education.zh}
        <span className="text-muted-foreground/40">·</span>
        {profile.education.en}
      </p>
      <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        {profile.tagline.zh}
        <br />
        {profile.tagline.en}
      </p>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 mt-9 flex items-center gap-3">
        <Button asChild>
          <a href="#portfolio">
            查看作品 · Portfolio
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="#contact">
            <Mail /> 联系我 · Contact
          </a>
        </Button>
      </div>
      <a
        href="#about"
        className="mt-16 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="向下滚动"
      >
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
