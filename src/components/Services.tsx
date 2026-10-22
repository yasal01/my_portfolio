import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, CalendarDays, Check, Code2, Palette, Scissors } from 'lucide-react'
import { useState } from 'react'
import { services } from '../data/services'
import { GlossyStar } from './Decor'
import { Paperclip, PuffCloud, Smiley } from './Stickers'
import { ScrapHeading } from './ScrapHeading'
import { SectionReveal } from './SectionReveal'

const tabColors = ['#ffd9ea', '#e6dcff', '#d7ebff', '#e3ebff']

const icons = {
  calendar: CalendarDays,
  scissors: Scissors,
  code: Code2,
  palette: Palette,
}

/** Services as folder tabs: pick a tab, the paper-clipped card swaps. No prices — quoted on request. */
export function Services() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const service = services[active]
  const Icon = icons[service.icon]

  return (
    <section id="services" className="bg-pink-cream relative scroll-mt-20 overflow-hidden pt-10 pb-28 sm:pb-36">
      <PuffCloud className="top-[30%] -right-20 w-80" float={20} />
      <PuffCloud className="bottom-10 -left-16 w-72" float={24} delay={-6} />

      <div className="wrap relative">
        <ScrapHeading label="Services" tone="sky" sub="Social media, video, websites and UI/UX — one creative toolkit. Every brief is quoted on its own.">
          How I can <span className="highlight">help</span>
        </ScrapHeading>

        <SectionReveal className="relative mx-auto mt-14 max-w-3xl">
          {/* Folder tabs */}
          <div role="tablist" aria-label="Services" className="relative z-10 flex gap-1.5 overflow-x-auto px-3 [scrollbar-width:none] sm:gap-2">
            {services.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                id={`service-tab-${index}`}
                aria-selected={active === index}
                aria-controls="service-panel"
                onClick={() => setActive(index)}
                className={`shrink-0 rounded-t-2xl px-4 pt-3 pb-4 text-left font-mono text-[10px] leading-tight font-medium tracking-[0.12em] uppercase ring-1 ring-ink/10 transition-transform duration-300 sm:px-5 sm:text-[11px] ${
                  active === index ? 'translate-y-2 bg-paper text-ink' : 'translate-y-4 text-ink/70 hover:translate-y-3'
                }`}
                style={active === index ? undefined : { background: tabColors[index % tabColors.length] }}
              >
                0{index + 1}.
                <br />
                {item.title}
              </button>
            ))}
          </div>

          {/* Paper card */}
          <div className="relative rounded-[22px] bg-paper px-6 pt-10 pb-8 shadow-[0_26px_50px_rgba(200,80,130,0.2)] ring-1 ring-ink/5 sm:px-10 sm:pt-12 sm:pb-10">
            <Paperclip className="-top-8 right-10 h-20 w-7" rotate={8} />
            <AnimatePresence mode="wait">
              <motion.div
                key={service.title}
                id="service-panel"
                role="tabpanel"
                aria-labelledby={`service-tab-${active}`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24, rotate: 1 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24, rotate: -1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-display flex items-center gap-3 text-[clamp(1.8rem,5vw,2.8rem)] leading-none">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f3eeff] text-ink ring-1 ring-ink/5">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <span className="highlight">{service.title}</span>
                </h3>
                <span className="mt-5 block h-px w-full bg-ink/10" aria-hidden="true" />
                <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted">{service.text}</p>
                <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-ink/50 uppercase">What&apos;s included</p>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[0.98rem] text-ink">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#c4b0f5] text-[#8b6fe0]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-ink/15 pt-6">
                  <p className="font-mono text-xs tracking-[0.14em] text-ink/60 uppercase">
                    Pricing <span className="font-display ml-2 text-2xl tracking-normal text-ink normal-case">Get a quote</span>
                  </p>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-white uppercase shadow-[0_6px_0_#a85a7c] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_4px_0_#a85a7c]"
                  >
                    Let&apos;s create something
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
            <GlossyStar className="-bottom-8 -left-8 h-16 w-16" rotate={-12} />
            <Smiley className="-right-5 bottom-24 h-12 w-12" rotate={10} />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
