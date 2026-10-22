import { CalendarDays, Clapperboard, Code2, LayoutGrid, Palette, PenLine, Scissors, Sparkles } from 'lucide-react'
import { DropIn } from './Motion'
import { ScrapHeading } from './ScrapHeading'
import { GoldStar, PuffCloud } from './Stickers'

const formats = [
  { label: 'Content calendars', icon: CalendarDays, tint: '#ffd9ea' },
  { label: 'Instagram management', icon: LayoutGrid, tint: '#ffe4d6' },
  { label: 'Website development', icon: Code2, tint: '#e6dcff' },
  { label: 'Captions & hooks', icon: PenLine, tint: '#e3ebff' },
  { label: 'Reels editing', icon: Scissors, tint: '#d7ebff' },
  { label: 'Promo & product videos', icon: Clapperboard, tint: '#ffd9ea' },
  { label: 'UI/UX design', icon: Palette, tint: '#ffe4d6' },
  { label: 'Visual storytelling', icon: Sparkles, tint: '#e6dcff' },
]

const tilts = [-3, 2, -1.5, 3, 2.5, -2, 1.5, -3]

/** A sticker-sheet grid of what I do (management, editing, creation), in tilted white tiles. */
export function Formats() {
  return (
    <section className="bg-sky-dots relative overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-28">
      <PuffCloud className="top-24 -right-16 w-60" float={18} />
      <PuffCloud className="bottom-10 -left-20 w-72" float={22} delay={-5} />
      <div className="wrap relative">
        <ScrapHeading label="What I do" tone="sun" sub="From content calendars and edits to brand websites and clear UI — one creative toolkit.">
          Plan. Design. <span className="highlight">Create.</span>
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
