import { Button } from '@/components/ui/button'
import { profile } from '@/data/content'
import { ArrowDown, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex min-h-[88vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 flex size-16 items-center justify-center rounded-full border border-border text-lg font-medium text-foreground">
        {profile.avatarInitials}
      </div>
      <h1 className="animate-in fade-in slide-in-from-bottom-3 duration-700 mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="animate-in fade-in slide-in-from-bottom-3 duration-700 mt-3 text-base text-accent sm:text-lg">
        {profile.title}
      </p>
      <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        {profile.tagline}
      </p>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 mt-9 flex items-center gap-3">
        <Button asChild>
          <a href="#portfolio">
            查看作品
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="#contact">
            <Mail /> 联系我
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
