import { Link } from 'react-router-dom'
import { getAllMedia } from '../data/projects'
import { GlossyStar, Sparkle } from './Decor'
import { DropIn } from './Motion'
import { Polaroid } from './Paper'
import { ScrapHeading } from './ScrapHeading'
import { GlossyHeart, PuffCloud, RainbowBand } from './Stickers'

const tilts = [-7, 5, -3, 8, -6, 4, -2]
const tapes = ['pink', 'lilac', 'sun', 'mint'] as const
const offsets = ['md:mt-0', 'md:mt-16', 'md:-mt-4', 'md:mt-24', 'md:mt-6', 'md:mt-20', 'md:mt-2']

/** Polaroids of real frames from every project, scattered over a diagonal rainbow. */
export function Stills() {
  const stills = getAllMedia().filter(({ media }) => media.poster)

  return (
    <section
      className="bg-sky-lav relative overflow-hidden py-28 sm:py-36"
    >
      <RainbowBand className="top-[38%] left-[-20%] h-40 w-[140%] -rotate-[14deg] sm:h-56" />
      <PuffCloud className="top-[30%] -left-10 w-72" float={18} />
      <PuffCloud className="top-[52%] right-[-30px] w-80" float={22} delay={-6} />
      <GlossyStar className="top-[58%] left-[42%] z-20 h-24 w-24 sm:h-32 sm:w-32" rotate={-14} />
      <GlossyHeart className="top-[20%] right-[12%] h-12 w-12" rotate={12} />
      <Sparkle className="top-[16%] left-[18%] h-4 w-4" tone="white" delay={0.4} />

      <div className="wrap relative">
        <ScrapHeading label="Behind the scenes" tone="lilac" sub="Frames pulled straight from the videos">
          Stills &amp; <span className="highlight">moments</span>
        </ScrapHeading>

        <div className="mt-16 flex flex-wrap items-start justify-center gap-x-2 gap-y-8 sm:gap-x-4">
          {stills.map(({ project, media }, index) => {
            const horizontal = media.orientation === 'horizontal'
            return (
              <DropIn
                key={media.src}
                rotate={tilts[index % tilts.length]}
                delay={index * 0.06}
                className={`relative w-[44%] sm:w-[30%] md:w-[22%] ${horizontal ? 'md:w-[30%]' : ''} ${offsets[index % offsets.length]} hover:z-30`}
              >
                <Link to={`/work/${project.slug}`} className="block transition-transform duration-300 hover:scale-105 hover:rotate-0" aria-label={`${project.title}: view project`}>
                  <Polaroid caption={media.caption ?? project.title} tape={tapes[index % tapes.length]}>
                    <img
                      src={media.poster}
                      alt={media.alt}
                      loading="lazy"
                      className={`w-full object-cover ${horizontal ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}
                    />
                  </Polaroid>
                </Link>
              </DropIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
