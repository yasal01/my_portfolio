import type { ReactNode } from 'react'

/** A slim phone mockup for vertical clips. Children fill the 9:16 screen. */
export function PhoneFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[2.1rem] bg-ink p-[5px] shadow-[0_24px_60px_rgba(80,60,110,0.22)] ring-1 ring-white/40 sm:rounded-[2.4rem] sm:p-[6px] ${className}`}
    >
      <span
        className="absolute top-[11px] left-1/2 z-10 h-[14px] w-[30%] -translate-x-1/2 rounded-full bg-ink sm:top-[13px] sm:h-[18px]"
        aria-hidden="true"
      />
      <div className="aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-ivory sm:rounded-[2rem]">{children}</div>
    </div>
  )
}

/** A glassy editorial "window" with a little title bar, for wide or feature clips. */
export function WindowFrame({
  children,
  label,
  className = '',
  bodyClassName = '',
}: {
  children: ReactNode
  label: string
  className?: string
  bodyClassName?: string
}) {
  return (
    <div className={`glass rounded-[24px] p-2 sm:rounded-[30px] sm:p-2.5 ${className}`}>
      <div className="flex items-center gap-3 px-2 pt-1 pb-2.5 sm:px-3 sm:pb-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-pink ring-1 ring-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow ring-1 ring-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky ring-1 ring-ink/10" />
        </span>
        <span className="truncate text-[9px] font-semibold tracking-[0.1em] text-ink/55 uppercase sm:text-[10px] sm:tracking-[0.16em]">{label}</span>
      </div>
      <div className={`overflow-hidden rounded-[18px] sm:rounded-[22px] ${bodyClassName}`}>{children}</div>
    </div>
  )
}
