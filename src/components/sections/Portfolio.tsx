import ImageCarousel from '@/components/sections/ImageCarousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import SectionHeading from '@/components/sections/SectionHeading'
import { portfolio } from '@/data/content'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Play } from 'lucide-react'

const cardAccents = [
  { bg: 'bg-[#4DBAD5]/10', border: 'border-[#4DBAD5]/20', dot: 'bg-[#4DBAD5]' },
  { bg: 'bg-violet-500/10', border: 'border-violet-500/20', dot: 'bg-violet-400' },
  { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', dot: 'bg-emerald-400' },
  { bg: 'bg-amber-500/10', border: 'border-amber-500/20', dot: 'bg-amber-400' },
]

function LazyVideo({ src, poster }: { src: string; poster?: string }) {
  const [playing, setPlaying] = useState(false)

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="group relative block w-full overflow-hidden rounded-md border border-border"
        aria-label="播放视频"
      >
        {poster ? (
          <img src={poster} alt="视频封面" className="w-full" />
        ) : (
          <div className="aspect-video w-full bg-secondary" />
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
          <span className="flex size-14 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform group-hover:scale-105">
            <Play className="size-6 fill-foreground text-foreground" />
          </span>
        </span>
      </button>
    )
  }

  return (
    <video
      src={src}
      poster={poster}
      controls
      autoPlay
      className="w-full rounded-md border border-border"
    />
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-14 scroll-mt-20">
      <SectionHeading title="作品 · Portfolio" index="04" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {portfolio.map((item, idx) => {
          const accent = cardAccents[idx % cardAccents.length]
          const hasMedia = Boolean(item.images?.length || item.video)
          const card = (
            <div className={`group flex h-full flex-col justify-between rounded-xl border ${accent.border} bg-background p-5 text-left transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}>
              {/* 封面色块 */}
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${accent.bg}`}>
                <span className={`size-2.5 rounded-full ${accent.dot}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {item.title.zh}
                  </h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/40 transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground/60">{item.title.en}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc.zh}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground/55">{item.desc.en}</p>
              </div>
              <span className={`mt-5 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${accent.bg} text-foreground/70`}>
                {item.tag.zh} · {item.tag.en}
              </span>
            </div>
          )

          if (!hasMedia) {
            return (
              <a key={item.title.zh} href={item.link}>
                {card}
              </a>
            )
          }

          return (
            <Dialog key={item.title.zh}>
              <DialogTrigger asChild>
                <button type="button" className="w-full">
                  {card}
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>
                  {item.title.zh} · {item.title.en}
                </DialogTitle>
                <DialogDescription>
                  {item.desc.zh}
                  <br />
                  {item.desc.en}
                </DialogDescription>
                <div className="mt-4 space-y-3">
                  {item.video && <LazyVideo src={item.video} poster={item.videoPoster} />}
                  {item.images && item.images.length > 0 && (
                    <ImageCarousel
                      images={item.images}
                      thumbnails={item.thumbnails}
                      alt={item.title.zh}
                    />
                  )}
                  {item.note && (
                    <p className="text-xs leading-relaxed text-muted-foreground/70">
                      {item.note.zh}
                      <br />
                      {item.note.en}
                    </p>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )
        })}
      </div>
    </section>
  )
}
