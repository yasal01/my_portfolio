import type { ReactNode } from 'react'
import { SectionReveal } from './SectionReveal'

export function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  text?: string
  dark?: boolean
  className?: string
}) {
  const muted = dark ? 'text-ivory/60' : 'text-muted'

  return (
    <SectionReveal className={`grid gap-5 md:grid-cols-12 md:items-end md:gap-8 ${className}`}>
      <div className="md:col-span-7">
        <p className={`flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase ${muted}`}>
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-[clamp(2.2rem,6.2vw,4.4rem)] leading-[0.98] font-extrabold tracking-[-0.03em] text-balance sm:mt-5">
          {title}
        </h2>
      </div>
      {text ? (
        <p className={`max-w-sm text-sm leading-relaxed sm:text-base md:col-span-4 md:col-start-9 md:justify-self-end ${muted}`}>
          {text}
        </p>
      ) : null}
    </SectionReveal>
  )
}
