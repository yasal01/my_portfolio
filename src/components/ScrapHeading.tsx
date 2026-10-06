import type { ReactNode } from 'react'
import { Chip } from './Paper'
import { SectionReveal } from './SectionReveal'

/** Pill label + heavy italic headline (+ optional typewriter subline), the scrapbook section header. */
export function ScrapHeading({
  label,
  children,
  sub,
  tone = 'pink',
  align = 'center',
  className = '',
}: {
  label: string
  children: ReactNode
  sub?: string
  tone?: 'sun' | 'lilac' | 'mint' | 'pink' | 'sky'
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <SectionReveal className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start'} ${className}`}>
      <Chip tone={tone}>{label}</Chip>
      <h2 className="font-display mt-4 text-[clamp(2.4rem,7vw,5rem)] leading-[0.95] text-ink">{children}</h2>
      {sub ? <p className="mt-4 max-w-md font-mono text-[11px] tracking-[0.14em] text-ink/60 uppercase sm:text-xs">{sub}</p> : null}
    </SectionReveal>
  )
}
