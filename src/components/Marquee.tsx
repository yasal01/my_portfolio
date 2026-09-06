import { siteConfig } from '../data/siteConfig'

export function Marquee() {
  const items = [...siteConfig.marquee, ...siteConfig.marquee]

  return (
    <div className="overflow-hidden border-y border-line bg-sky py-3.5" aria-hidden="true">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-10 motion-reduce:animate-none">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="text-sm font-semibold tracking-[0.14em] text-ink uppercase">
            {item}
            <span className="ml-10 text-ink/35">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
