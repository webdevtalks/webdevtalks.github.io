import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'
import { cn } from '../../lib/utils'

interface CarouselImage {
  src: string
  alt: string
}

export function Carousel({
  images,
  interval = 5000,
  className,
}: {
  images: CarouselImage[]
  interval?: number
  className?: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [images.length, interval])

  const show = (nextIndex: number) => {
    const total = images.length
    setIndex((nextIndex + total) % total)
  }

  return (
    <div className={cn('relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-2xl', className)}>
      <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
        {images.map((image, imageIndex) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
              imageIndex === index ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 items-center justify-between p-4 hidden sm:flex">
        <div className="flex gap-2 rounded-full bg-brand/70 px-3 py-2 backdrop-blur">
          {images.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => show(imageIndex)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition',
                imageIndex === index ? 'bg-white' : 'bg-white/35 hover:bg-white/60',
              )}
              aria-label={`Go to slide ${imageIndex + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full bg-white/85" onClick={() => show(index - 1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full bg-white/85" onClick={() => show(index + 1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
