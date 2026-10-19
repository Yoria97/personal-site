import { useEffect, useState } from 'react'

interface ImageCarouselProps {
  images: string[]
  alt: string
  intervalMs?: number
}

export default function ImageCarousel({ images, alt, intervalMs = 3000 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [images.length, intervalMs])

  if (images.length === 0) return null

  return (
    <div className="space-y-2">
      <div className="relative w-full overflow-hidden rounded-md border border-border">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className={`w-full transition-opacity duration-500 ${
              i === index ? 'relative opacity-100' : 'absolute inset-0 opacity-0'
            }`}
          />
        ))}
      </div>
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
