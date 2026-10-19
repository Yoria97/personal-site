import { useEffect, useState } from 'react'

interface ImageCarouselProps {
  images: string[]
  thumbnails?: string[]
  alt: string
  intervalMs?: number
}

export default function ImageCarousel({ images, thumbnails, alt, intervalMs = 3000 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const [loadedHighRes, setLoadedHighRes] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [images.length, intervalMs])

  if (images.length === 0) return null

  const hasThumbs = Boolean(thumbnails && thumbnails.length === images.length)

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => {
          if (hasThumbs) {
            setLoadedHighRes((prev) => new Set(prev).add(index))
          }
        }}
        className="relative block w-full cursor-zoom-in overflow-hidden rounded-md border border-border"
        aria-label="点击查看高清大图"
      >
        {images.map((src, i) => {
          const showHighRes = !hasThumbs || loadedHighRes.has(i)
          const displaySrc = showHighRes ? src : thumbnails![i]
          return (
            <img
              key={src}
              src={displaySrc}
              alt={`${alt} ${i + 1}`}
              loading="lazy"
              className={`w-full transition-opacity duration-500 ${
                i === index ? 'relative opacity-100' : 'absolute inset-0 opacity-0'
              }`}
            />
          )
        })}
        {hasThumbs && !loadedHighRes.has(index) && (
          <span className="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white">
            点击查看高清 · Tap for HD
          </span>
        )}
      </button>
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${alt} ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-accent' : 'w-1.5 bg-border'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
