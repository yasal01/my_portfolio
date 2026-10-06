import { useId, type CSSProperties } from 'react'

/**
 * Decorative pieces for the dreamy pastel layer: glossy stars, tiny sparkles and soft clouds.
 * All are aria-hidden, pointer-events-none, and freeze under prefers-reduced-motion.
 */

const starPath = 'M50 2 C54 31 69 46 98 50 C69 54 54 69 50 98 C46 69 31 54 2 50 C31 46 46 31 50 2 Z'

export function GlossyStar({
  className = '',
  style,
  float = true,
  duration = 7,
  delay = 0,
  rotate = 0,
}: {
  className?: string
  style?: CSSProperties
  float?: boolean
  duration?: number
  delay?: number
  rotate?: number
}) {
  const id = useId().replace(/:/g, '')

  return (
    <span
      className={`pointer-events-none absolute block motion-reduce:animate-none ${className}`}
      style={{
        animation: float ? `float ${duration}s ease-in-out ${delay}s infinite` : undefined,
        ['--float-rotate' as string]: `${rotate}deg`,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible drop-shadow-[0_10px_16px_rgba(130,90,160,0.35)]">
        <defs>
          <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffcdee" />
            <stop offset="45%" stopColor="#d6c0ff" />
            <stop offset="100%" stopColor="#b3d6ff" />
          </linearGradient>
          <radialGradient id={`${id}-shine`} cx="0.38" cy="0.3" r="0.45">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d={starPath} fill={`url(#${id}-fill)`} stroke="#fff" strokeOpacity="0.8" strokeWidth="1.2" />
        <path d={starPath} fill={`url(#${id}-shine)`} />
        <ellipse cx="41" cy="36" rx="5" ry="2.4" fill="#fff" opacity="0.9" transform="rotate(-35 41 36)" />
      </svg>
    </span>
  )
}

export function Sparkle({
  className = '',
  style,
  delay = 0,
  tone = 'ink',
}: {
  className?: string
  style?: CSSProperties
  delay?: number
  tone?: 'ink' | 'white' | 'lilac'
}) {
  const fill = tone === 'white' ? '#ffffff' : tone === 'lilac' ? '#b9a7f0' : '#1d1d1d'

  return (
    <span
      className={`pointer-events-none absolute block h-3 w-3 motion-reduce:animate-none ${className}`}
      style={{ animation: `twinkle 3.2s ease-in-out ${delay}s infinite`, ...style }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path d={starPath} fill={fill} />
      </svg>
    </span>
  )
}

export function Cloud({
  className = '',
  style,
  duration = 18,
  delay = 0,
}: {
  className?: string
  style?: CSSProperties
  duration?: number
  delay?: number
}) {
  return (
    <span
      className={`pointer-events-none absolute block motion-reduce:animate-none ${className}`}
      style={{ animation: `drift ${duration}s ease-in-out ${delay}s infinite`, ...style }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 220 110" className="h-full w-full overflow-visible blur-[1.5px]">
        <g fill="#fff">
          <ellipse cx="70" cy="70" rx="58" ry="34" opacity="0.9" />
          <ellipse cx="118" cy="52" rx="52" ry="42" opacity="0.95" />
          <ellipse cx="165" cy="72" rx="48" ry="30" opacity="0.88" />
          <ellipse cx="110" cy="82" rx="90" ry="24" opacity="0.92" />
        </g>
      </svg>
    </span>
  )
}
