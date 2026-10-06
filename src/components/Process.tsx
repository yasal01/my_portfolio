import { siteConfig } from '../data/siteConfig'
import { DropIn } from './Motion'
import { ScrapHeading } from './ScrapHeading'
import { ChromeStar, GlossyHeart, Tape } from './Stickers'

const tilts = [-2.5, 2, -1.5, 2.5]
const tapes = ['pink', 'lilac', 'sun', 'mint'] as const

/** Process as torn-out notebook pages, each taped on with a highlighted title. */
export function Process() {
  return (
    <section className="bg-cream-lav relative overflow-hidden pt-10 pb-28 sm:pb-36">
      <div className="wrap relative">
        <ScrapHeading label="How we work" tone="mint" sub="Small circle, sharp brief, honest cut.">
          From idea to <span className="highlight">scroll-stopper</span>
        </ScrapHeading>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
          <GlossyHeart className="top-[46%] left-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 sm:block" rotate={-10} />
          <ChromeStar className="-top-10 right-4 z-20 h-14 w-14" rotate={14} />
          {siteConfig.process.map((step, index) => (
            <DropIn key={step.num} rotate={tilts[index % tilts.length]} delay={index * 0.08} className={index % 2 === 1 ? 'sm:mt-14' : ''}>
              <article className="paper-lined relative rounded-md px-6 pt-8 pb-8 pl-14 shadow-[0_18px_36px_rgba(200,80,130,0.18)]">
                <Tape className="-top-3 left-1/2 -ml-10" tone={tapes[index % tapes.length]} rotate={index % 2 === 0 ? -4 : 5} />
                <span className="absolute top-0 bottom-0 left-3 flex flex-col justify-around" aria-hidden="true">
                  {Array.from({ length: 4 }).map((_, hole) => (
                    <span key={hole} className="h-3.5 w-3.5 rounded-full bg-[#f6b5d4] shadow-inner" />
                  ))}
                </span>
                <p className="font-display text-3xl text-rose">{step.num}</p>
                <h3 className="font-display mt-1 text-[1.7rem] leading-tight">
                  <span className="highlight">{step.title}</span>
                </h3>
                <p className="mt-3 text-[0.98rem] leading-[28px] text-ink/80">{step.text}</p>
              </article>
            </DropIn>
          ))}
        </div>
      </div>
    </section>
  )
}
