import type { ReactNode } from 'react'
import { Tape } from './Stickers'

/** White "browser window" card with traffic-light dots and a little address pill. */
export function BrowserCard({
  children,
  address = 'yasal ✦ portfolio',
  className = '',
}: {
  children: ReactNode
  address?: string
  className?: string
}) {
  return (
    <div className={`overflow-hidden rounded-[22px] bg-paper shadow-[0_24px_50px_rgba(60,90,140,0.18)] ring-1 ring-ink/5 ${className}`}>
      <div className="flex items-center gap-3 border-b border-ink/5 bg-white px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff8a8a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#7ed6a0]" />
        </span>
        <span className="mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-full bg-[#f1f3f8] px-3 py-1 font-mono text-[10px] text-ink/55 sm:text-[11px]">
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          {address}
        </span>
        <span className="w-8" aria-hidden="true" />
      </div>
      {children}
    </div>
  )
}

/** A taped paper strip with the project name, typewriter style. */
export function NameTape({ children, className = '', rotate = -2 }: { children: ReactNode; className?: string; rotate?: number }) {
  return (
    <div className={`relative mx-auto w-fit ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <Tape className="-top-3 -left-6 h-5 w-14" tone="pink" rotate={-20} />
      <Tape className="-top-3 -right-6 h-5 w-14" tone="lilac" rotate={18} />
      <p className="bg-paper px-8 py-2 font-mono text-xs font-medium tracking-[0.2em] text-ink uppercase shadow-[0_4px_10px_rgba(0,0,0,0.08)] sm:text-sm">
        {children}
      </p>
    </div>
  )
}

/** Pink three-cell fact card (format / role / deliverables — never invented stats). */
export function FactCard({ facts, className = '' }: { facts: { label: string; value: string }[]; className?: string }) {
  return (
    <dl
      className={`grid grid-cols-3 divide-x divide-rose/25 rounded-2xl border-2 border-rose/30 bg-[#fff0f5] px-2 py-3 text-center shadow-[0_8px_20px_rgba(224,96,126,0.12)] ${className}`}
    >
      {facts.map((fact) => (
        <div key={fact.label} className="px-2">
          <dd className="font-display text-lg leading-tight text-rose sm:text-xl">{fact.value}</dd>
          <dt className="mt-1 font-mono text-[9px] tracking-[0.18em] text-ink/50 uppercase sm:text-[10px]">{fact.label}</dt>
        </div>
      ))}
    </dl>
  )
}

/** A small coloured pill with an optional emoji/icon. */
export function Chip({ children, tone = 'sun', className = '' }: { children: ReactNode; tone?: 'sun' | 'lilac' | 'mint' | 'pink' | 'sky'; className?: string }) {
  const tones = {
    sun: 'bg-[#ffe4d6] text-ink ring-[#f5c2a8]',
    lilac: 'bg-[#e6dcff] text-ink ring-[#c4b0f5]',
    mint: 'bg-[#e3ebff] text-ink ring-[#b7c6f2]',
    pink: 'bg-[#ffd9ea] text-ink ring-[#f2a3c8]',
    sky: 'bg-[#d7ebff] text-ink ring-[#9cc9f5]',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-medium tracking-[0.14em] uppercase ring-1 sm:text-[11px] ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}

/** Polaroid print with a tape strip and a handwritten caption. */
export function Polaroid({
  children,
  caption,
  className = '',
  rotate = 0,
  tape = 'pink',
}: {
  children: ReactNode
  caption?: string
  className?: string
  rotate?: number
  tape?: 'pink' | 'lilac' | 'sun' | 'mint'
}) {
  return (
    <figure
      className={`relative bg-white p-2.5 pb-3 shadow-[0_18px_36px_rgba(80,60,110,0.22)] sm:p-3 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Tape className="-top-3 left-1/2 -ml-10" tone={tape} rotate={-4} />
      <div className="overflow-hidden bg-[#f3f3f3]">{children}</div>
      {caption ? <figcaption className="font-script mt-2 text-center text-xl leading-none text-ink/80">{caption}</figcaption> : null}
    </figure>
  )
}

/** Kraft clipboard with a metal clip, holding whatever is inside. */
export function Clipboard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[22px] p-4 pt-12 shadow-[0_26px_50px_rgba(150,110,90,0.22)] sm:rounded-[28px] sm:p-6 sm:pt-16 ${className}`}
      style={{
        background:
          'repeating-linear-gradient(92deg, rgba(255,255,255,0.12) 0 3px, transparent 3px 11px), linear-gradient(160deg, #f7e6d2, #ecd2b6 60%, #e2c2a2)',
      }}
    >
      <span
        className="absolute top-0 left-1/2 flex h-12 w-36 -translate-x-1/2 -translate-y-3 items-center justify-center rounded-b-xl rounded-t-md shadow-[0_6px_10px_rgba(0,0,0,0.25)] sm:h-14 sm:w-44"
        style={{ background: 'linear-gradient(180deg, #f5f7fb, #b9c1d0 55%, #8e98ab)' }}
        aria-hidden="true"
      >
        <span className="h-4 w-16 rounded-full bg-[#6f788a] shadow-inner sm:w-20" />
      </span>
      {children}
    </div>
  )
}

/** Pink note with torn top and bottom edges. */
export function TornNote({ children, className = '', rotate = -4 }: { children: ReactNode; className?: string; rotate?: number }) {
  return (
    <div
      className={`relative bg-[#fde3ee] px-6 py-7 shadow-[0_14px_30px_rgba(180,110,160,0.18)] ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        clipPath:
          'polygon(0 4%, 6% 0, 12% 3%, 19% 0, 26% 4%, 33% 1%, 40% 4%, 47% 0, 54% 3%, 61% 0, 68% 4%, 75% 1%, 82% 4%, 89% 0, 95% 3%, 100% 0, 100% 96%, 94% 100%, 87% 96%, 80% 100%, 73% 97%, 66% 100%, 59% 96%, 52% 100%, 45% 97%, 38% 100%, 31% 96%, 24% 100%, 17% 97%, 10% 100%, 4% 96%, 0 100%)',
      }}
    >
      {children}
    </div>
  )
}
