import { useEffect, useRef, useState } from 'react'
import type { ProjectMedia } from '../data/projects'

const accents: Record<string, string> = {
  blush: 'bg-blush',
  pink: 'bg-pink',
  lavender: 'bg-lavender',
  lime: 'bg-lime',
  sky: 'bg-sky',
  mint: 'bg-mint',
  yellow: 'bg-yellow',
}

export function MediaPlaceholder({
  label = 'YOUR VIDEO HERE',
  className = '',
  accent = 'blush',
}: {
  label?: string
  className?: string
  accent?: string
}) {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden ${accents[accent] ?? accents.blush} ${className}`}
    >
      <div className="pointer-events-none absolute inset-8 rounded-[2rem] border border-ink/10" />
      <p className="font-script text-3xl text-ink/70">{label}</p>
      <p className="mt-2 text-[11px] tracking-[0.22em] text-muted uppercase">Drop file in /public/media</p>
    </div>
  )
}

export function VideoCard({
  media,
  title,
  category,
  accent = 'blush',
  className = '',
  overlay = true,
  autoPlayOnHover = true,
  autoPlay = false,
}: {
  media: ProjectMedia
  title?: string
  category?: string
  accent?: string
  className?: string
  overlay?: boolean
  autoPlayOnHover?: boolean
  autoPlay?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const hasVideo = media.type === 'video' && Boolean(media.src)
  const hasImage = media.type === 'image' && Boolean(media.src)

  useEffect(() => {
    if (!autoPlay || !hasVideo) return
    const video = videoRef.current
    if (!video) return
    video.muted = true
    void video.play().then(() => setPlaying(true)).catch(() => undefined)
  }, [autoPlay, hasVideo, media.src])

  function play() {
    if (!hasVideo) return
    const video = videoRef.current
    if (!video) return
    void video.play().then(() => setPlaying(true)).catch(() => undefined)
  }

  function pause() {
    if (autoPlay) return
    const video = videoRef.current
    if (!video) return
    video.pause()
    setPlaying(false)
  }

  function toggleMobile() {
    if (!hasVideo) return
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play().then(() => setPlaying(true)).catch(() => undefined)
    } else {
      pause()
    }
  }

  return (
    <div
      className={`group relative h-full w-full overflow-hidden ${className}`}
      onMouseEnter={autoPlayOnHover ? play : undefined}
      onMouseLeave={autoPlayOnHover ? pause : undefined}
    >
      {hasVideo ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          src={media.src}
          poster={media.poster}
          muted
          loop
          playsInline
          autoPlay={autoPlay}
          preload={autoPlay ? 'auto' : 'metadata'}
          aria-label={media.alt}
        />
      ) : hasImage ? (
        <img
          src={media.src}
          alt={media.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <MediaPlaceholder accent={accent} />
      )}

      {hasVideo ? (
        <button
          type="button"
          className="absolute inset-0 z-10 md:hidden"
          onClick={toggleMobile}
          aria-label={playing ? `Pause ${title ?? 'video'}` : `Play ${title ?? 'video'}`}
        />
      ) : null}

      {overlay && (title || category) ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute right-5 bottom-5 left-5 text-ivory">
            {category ? (
              <p className="mb-1 text-[11px] tracking-[0.2em] uppercase opacity-80">{category}</p>
            ) : null}
            {title ? <p className="font-serif text-2xl font-bold">{title}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}
