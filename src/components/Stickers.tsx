import { useId, type CSSProperties, type ReactNode } from 'react'

/**
 * Original scrapbook stickers, all inline SVG.
 * Every sticker is decorative (aria-hidden), ignores the pointer, and floats unless reduced motion is on.
 */

type StickerProps = {
  className?: string
  style?: CSSProperties
  rotate?: number
  /** seconds; 0 disables the float */
  float?: number
  delay?: number
}

function Sticker({ className = '', style, rotate = 0, float = 6, delay = 0, children }: StickerProps & { children: ReactNode }) {
  return (
    <span
      className={`pointer-events-none absolute block select-none motion-reduce:animate-none ${className}`}
      style={{
        animation: float ? `float ${float}s ease-in-out ${delay}s infinite` : undefined,
        ['--float-rotate' as string]: `${rotate}deg`,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

const star5 = 'M50 4 L62 36 L96 38 L69 59 L79 93 L50 73 L21 93 L31 59 L4 38 L38 36 Z'

export function GoldStar(props: StickerProps) {
  const id = useId().replace(/:/g, '')
  return (
    <Sticker {...props}>
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible drop-shadow-[0_6px_10px_rgba(130,110,170,0.3)]">
        <defs>
          <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff6fb" />
            <stop offset="0.35" stopColor="#ffd6ec" />
            <stop offset="0.65" stopColor="#dcd2ff" />
            <stop offset="1" stopColor="#bfdcff" />
          </linearGradient>
        </defs>
        <path d={star5} fill="#fff" stroke="#fff" strokeWidth="14" strokeLinejoin="round" />
        <path d={star5} fill={`url(#${id}g)`} stroke="#a7b0c6" strokeWidth="2" strokeLinejoin="round" />
        <path d="M44 30 L50 16 L54 28" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </Sticker>
  )
}

export function ChromeStar(props: StickerProps) {
  const id = useId().replace(/:/g, '')
  return (
    <Sticker {...props}>
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible drop-shadow-[0_8px_10px_rgba(60,70,100,0.3)]">
        <defs>
          <linearGradient id={`${id}c`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.35" stopColor="#c9d2e3" />
            <stop offset="0.55" stopColor="#f4f7ff" />
            <stop offset="0.8" stopColor="#9aa6bf" />
            <stop offset="1" stopColor="#e5ebf7" />
          </linearGradient>
        </defs>
        <path d={star5} fill={`url(#${id}c)`} stroke="#8e9ab3" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="40" cy="38" rx="9" ry="4" fill="#fff" opacity="0.85" transform="rotate(-30 40 38)" />
      </svg>
    </Sticker>
  )
}

export function Smiley(props: StickerProps) {
  return (
    <Sticker {...props}>
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible drop-shadow-[0_6px_8px_rgba(29,29,29,0.18)]">
        <circle cx="50" cy="50" r="46" fill="#fff" />
        <circle cx="50" cy="50" r="40" fill="#ffe2d2" stroke="#1d1d1d" strokeWidth="3" />
        <ellipse cx="37" cy="42" rx="4.5" ry="7" fill="#1d1d1d" />
        <ellipse cx="63" cy="42" rx="4.5" ry="7" fill="#1d1d1d" />
        <path d="M30 58 Q50 78 70 58" fill="none" stroke="#1d1d1d" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="34" cy="26" rx="8" ry="4" fill="#ffffff" opacity="0.8" transform="rotate(-25 34 26)" />
      </svg>
    </Sticker>
  )
}

export function Disc(props: StickerProps) {
  return (
    <Sticker {...props}>
      <span
        className="block h-full w-full rounded-full shadow-[0_10px_20px_rgba(60,60,100,0.25)] ring-2 ring-white/80"
        style={{
          background:
            'radial-gradient(circle, #f4f4f8 0 13%, #c8cbd6 13% 15%, transparent 15%), conic-gradient(from 20deg, #e8ecf5, #ffd1ec, #c9f0ff, #fff3c4, #d9ccff, #e8ecf5, #dfe6ff, #ffd1ec, #e8ecf5)',
        }}
      />
    </Sticker>
  )
}

export function GlossyHeart(props: StickerProps) {
  const id = useId().replace(/:/g, '')
  return (
    <Sticker {...props}>
      <svg viewBox="0 0 100 92" className="h-full w-full overflow-visible drop-shadow-[0_8px_12px_rgba(200,60,120,0.3)]">
        <defs>
          <radialGradient id={`${id}h`} cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stopColor="#ffd6ea" />
            <stop offset="0.5" stopColor="#ff7fb5" />
            <stop offset="1" stopColor="#e0457f" />
          </radialGradient>
        </defs>
        <path
          d="M50 88 C20 66 4 50 4 30 C4 14 16 4 30 4 C40 4 47 10 50 18 C53 10 60 4 70 4 C84 4 96 14 96 30 C96 50 80 66 50 88 Z"
          fill={`url(#${id}h)`}
        />
        <ellipse cx="28" cy="24" rx="10" ry="5" fill="#fff" opacity="0.8" transform="rotate(-30 28 24)" />
      </svg>
    </Sticker>
  )
}

/** Puffy bubble-letter word with a white sticker outline. */
export function BubbleWord({ children, ...props }: StickerProps & { children: string }) {
  return (
    <Sticker {...props}>
      <span
        className="font-display block text-[1em] leading-none whitespace-nowrap"
        style={{
          background: 'linear-gradient(180deg, #ffd1ec 0%, #d6c0ff 50%, #a9d3ff 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          WebkitTextStroke: '1.5px #ffffff',
          filter: 'drop-shadow(0 3px 0 #ffffff) drop-shadow(0 6px 10px rgba(120,90,160,0.3))',
        }}
      >
        {children}
      </span>
    </Sticker>
  )
}

/** Semi-transparent washi tape strip. */
export function Tape({ className = '', tone = 'pink', rotate = -6 }: { className?: string; tone?: 'pink' | 'lilac' | 'sun' | 'mint'; rotate?: number }) {
  const colors = {
    pink: 'rgba(249,198,223,0.85)',
    lilac: 'rgba(214,192,255,0.85)',
    sun: 'rgba(255,214,196,0.85)',
    mint: 'rgba(214,226,255,0.9)',
  }
  return (
    <span
      className={`pointer-events-none absolute block h-6 w-20 ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        background: `repeating-linear-gradient(45deg, ${colors[tone]} 0 6px, rgba(255,255,255,0.45) 6px 9px)`,
        clipPath: 'polygon(3% 0, 97% 4%, 100% 50%, 96% 100%, 2% 96%, 0 50%)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
      }}
      aria-hidden="true"
    />
  )
}

export function Paperclip({ className = '', rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <span className={`pointer-events-none absolute block ${className}`} style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
      <svg viewBox="0 0 30 90" className="h-full w-full overflow-visible drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">
        <path
          d="M10 22 L10 70 Q10 82 20 82 Q28 82 28 70 L28 14 Q28 4 18 4 Q6 4 6 14 L6 62"
          fill="none"
          stroke="#aeb6c6"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path d="M10 22 L10 70 Q10 82 20 82" fill="none" stroke="#eef2f9" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

/** Hand-drawn dashed swirl. */
export function Doodle({ className = '', color = '#ffffff' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 300 120" className={`pointer-events-none absolute overflow-visible ${className}`} aria-hidden="true">
      <path
        d="M5 90 C 60 20, 110 120, 150 60 S 230 0, 260 50 S 290 110, 296 70"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="8 9"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Three little "spark lines" like a cartoon emphasis mark. */
export function SparkLines({ className = '', color = '#1d1d1d' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <g stroke={color} strokeWidth="3" strokeLinecap="round">
        <path d="M6 30 L16 22" />
        <path d="M14 8 L20 20" />
        <path d="M30 6 L26 19" />
      </g>
    </svg>
  )
}

/** Diagonal pastel rainbow band. */
export function RainbowBand({ className = '' }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute block ${className}`}
      style={{
        background:
          'linear-gradient(180deg, #ffb3c7 0 16.6%, #ffd3a8 16.6% 33.3%, #fff1a3 33.3% 50%, #c2f0c8 50% 66.6%, #b7dbff 66.6% 83.3%, #d6c0ff 83.3% 100%)',
        filter: 'blur(0.5px)',
        opacity: 0.9,
      }}
      aria-hidden="true"
    />
  )
}

/** Puffy cartoon cloud with a soft shadow. */
export function PuffCloud({ className = '', style, float = 14, delay = 0 }: { className?: string; style?: CSSProperties; float?: number; delay?: number }) {
  return (
    <span
      className={`pointer-events-none absolute block motion-reduce:animate-none ${className}`}
      style={{ animation: float ? `drift ${float}s ease-in-out ${delay}s infinite` : undefined, ...style }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 240 120" className="h-full w-full overflow-visible drop-shadow-[0_10px_14px_rgba(90,130,190,0.18)]">
        <path
          d="M30 100 C8 100 4 74 24 68 C18 44 46 32 62 44 C70 18 112 12 124 38 C138 20 176 24 178 52 C204 46 226 66 214 86 C230 92 224 104 206 104 Z"
          fill="#fff"
        />
        <path d="M40 92 C60 98 120 100 200 96" fill="none" stroke="#e6f0fb" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </span>
  )
}

/** A dotted grid patch, like the dot panels in a sticker sheet. */
export function DotPatch({ className = '', color = 'rgba(255,255,255,0.8)' }: { className?: string; color?: string }) {
  return (
    <span
      className={`pointer-events-none absolute block ${className}`}
      style={{ backgroundImage: `radial-gradient(${color} 2px, transparent 2.4px)`, backgroundSize: '14px 14px' }}
      aria-hidden="true"
    />
  )
}
