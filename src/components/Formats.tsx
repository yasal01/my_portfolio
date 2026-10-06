import { Bot, Clapperboard, Drama, Lightbulb, Mic, PartyPopper, ShoppingBag, Sparkles } from 'lucide-react'
import { DropIn } from './Motion'
import { ScrapHeading } from './ScrapHeading'
import { GoldStar, PuffCloud } from './Stickers'

const formats = [
  { label: 'UGC videos', icon: Clapperboard, tint: '#ffd9ea' },
  { label: 'Product films', icon: ShoppingBag, tint: '#ffe4d6' },
  { label: 'Event reels', icon: PartyPopper, tint: '#e6dcff' },
  { label: 'Faceless reviews', icon: Drama, tint: '#e3ebff' },
  { label: 'Talking head', icon: Mic, tint: '#d7ebff' },
  { label: 'AI films', icon: Bot, tint: '#ffd9ea' },
  { label: 'Hooks & ideas', icon: Lightbulb, tint: '#ffe4d6' },
  { label: 'Social content', icon: Sparkles, tint: '#e6dcff' },
]

const tilts = [-3, 2, -1.5, 3, 2.5, -2, 1.5, -3]

/** A sticker-sheet grid of the formats I make, in tilted white tiles. */
export function Formats() {
  return (
    <section className="bg-sky-dots relative overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-28">
      <PuffCloud className="top-24 -right-16 w-60" float={18} />
      <PuffCloud className="bottom-10 -left-20 w-72" float={22} delay={-5} />
      <div className="wrap relative">
        <ScrapHeading label="What I make" tone="sun" sub="Pick a format, or mix a few. Every piece is made for the feed it lives on.">
          Formats I <span className="highlight">love</span>
        </ScrapHeading>

        <div className="relative mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          <GoldStar className="-top-8 -left-4 z-10 h-12 w-12" rotate={-14} />
          {formats.map(({ label, icon: Icon, tint }, index) => (
            <DropIn key={label} rotate={tilts[index]} delay={index * 0.05}>
              <div className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-[22px] bg-paper p-4 text-center shadow-[0_14px_30px_rgba(60,90,140,0.16)] ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-ink/5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:h-16 sm:w-16"
                  style={{ background: tint }}
                >
                  <Icon size={26} strokeWidth={1.6} />
                </span>
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] text-ink uppercase sm:text-xs">{label}</span>
              </div>
            </DropIn>
          ))}
        </div>
      </div>
    </section>
  )
}
