import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { getProject, projects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { Sparkle } from './Decor'
import { PhoneFrame } from './MediaFrames'
import { BrowserCard } from './Paper'
import { BubbleWord, ChromeStar, Disc, Doodle, DotPatch, GoldStar, PuffCloud, Smiley, SparkLines } from './Stickers'
import { VideoCard } from './VideoCard'

const ease = [0.22, 1, 0.36, 1] as const

/** A word that rises out of a mask. */
function MaskedWord({ children, delay, reduce }: { children: ReactNode; delay: number; reduce: boolean | null }) {
  return (
    <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
      <motion.span
        className="inline-block"
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const lead = projects[0]
  const workshop = getProject('lip-gloss-workshop')

  // The collage comes apart a little as you scroll: each layer at its own speed.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const slow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])
  const mid = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90])
  const fast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 180])
  const spin = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140])

  const pop = (delay: number, rotate = 0) =>
    reduce
      ? { style: { rotate } }
      : {
          initial: { opacity: 0, scale: 0.7, rotate: rotate - 14 },
          animate: { opacity: 1, scale: 1, rotate },
          transition: { type: 'spring' as const, stiffness: 170, damping: 15, delay },
        }

  return (
    <section ref={ref} className="bg-sky-dots relative -mt-[86px] overflow-hidden pt-[86px]">
      {/* Sky layer */}
      <motion.div style={{ y: slow }} className="pointer-events-none absolute inset-0">
        <PuffCloud className="top-[12%] -left-16 w-64 sm:w-80" float={16} />
        <PuffCloud className="top-[6%] right-[-40px] w-56 sm:w-72" float={20} delay={-6} />
        <PuffCloud className="top-[46%] left-[38%] hidden w-60 lg:block" float={18} delay={-3} />
        <DotPatch className="top-[22%] left-[6%] h-28 w-28" />
        <DotPatch className="top-[58%] right-[4%] h-24 w-32" />
        <Sparkle className="top-[18%] left-[30%] h-4 w-4" tone="white" delay={0.2} />
        <Sparkle className="top-[36%] right-[24%] h-5 w-5" tone="white" delay={1.1} />
        <Sparkle className="top-[64%] left-[12%] h-3 w-3" tone="white" delay={1.8} />
      </motion.div>

      <div className="wrap relative">
        {/* Collage: my full photo (cut out) with my videos in phones and stickers around it */}
        <div className="relative mx-auto h-[600px] max-w-[980px] sm:h-[700px] lg:h-[780px]">
          <Doodle className="top-[30%] left-[-4%] hidden h-28 w-[46%] rotate-[-8deg] sm:block" />
          <Doodle className="right-[-2%] bottom-[18%] hidden h-24 w-[40%] rotate-[160deg] sm:block" />

          {/* my character: my real face on the Bitmoji-style body, at the body's own face scale */}
          <motion.div style={{ y: mid }} className="absolute inset-x-0 bottom-[0%] z-10 flex justify-center">
            <motion.div
              className="relative h-[560px] -translate-x-[6%] sm:h-[660px] lg:h-[740px] lg:-translate-x-[10%]"
              initial={reduce ? false : { scale: 0.3, y: 160, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 75, damping: 13, mass: 0.9, delay: 0.1 }}
              style={{ transformOrigin: '50% 30%' }}
            >
              {/* glossy pastel halo behind the head */}
              <span
                className="absolute top-[-6%] left-1/2 aspect-square w-[130%] -translate-x-1/2 rounded-full opacity-90 ring-[10px] ring-white/50"
                style={{
                  background:
                    'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0) 32%), radial-gradient(circle, #fde3f0 0%, #e7defd 55%, rgba(207,229,255,0) 72%)',
                }}
                aria-hidden="true"
              />
              <span
                className="relative block h-full origin-[50%_100%] motion-reduce:animate-none"
                style={{ animation: reduce ? undefined : 'sway 5s ease-in-out 1.4s infinite' }}
              >
                <img
                  src="/media/yasal-character.webp"
                  alt={`${siteConfig.name} as a character: my face, in a pinstripe top and wide-leg jeans`}
                  className="h-full w-auto max-w-none select-none"
                  style={{
                    filter:
                      'drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff) drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff) drop-shadow(0 24px 30px rgba(110,120,180,0.28))',
                  }}
                  draggable={false}
                />
              </span>
            </motion.div>
          </motion.div>

          {/* clouds at the character's feet */}
          <div className="pointer-events-none absolute inset-x-[-6%] bottom-[-4%] z-[25] h-[22%]" aria-hidden="true">
            <PuffCloud className="bottom-0 left-[18%] w-[38%] min-w-[180px]" float={12} />
            <PuffCloud className="bottom-[-8%] left-[42%] w-[34%] min-w-[160px]" float={15} delay={-4} />
          </div>

          {/* lead clip in a phone */}
          <motion.div
            style={{ y: fast }}
            className="absolute top-[10%] left-1/2 z-20 w-[26%] max-w-[200px] translate-x-[95%] sm:top-[16%] sm:w-[24%] sm:translate-x-[70%]"
          >
            <motion.div {...pop(0.35, 7)}>
              <PhoneFrame>
                <VideoCard media={lead.cover} accent={lead.accent} overlay={false} autoPlay autoPlayOnHover={false} />
              </PhoneFrame>
            </motion.div>
          </motion.div>

          {/* second clip peeking from behind */}
          {workshop ? (
            <motion.div style={{ y: slow }} className="absolute top-[30%] left-[4%] z-0 hidden w-[17%] max-w-[150px] md:block">
              <motion.div {...pop(0.5, -10)}>
                <PhoneFrame>
                  <VideoCard media={workshop.cover} accent={workshop.accent} overlay={false} autoPlay autoPlayOnHover={false} />
                </PhoneFrame>
              </motion.div>
            </motion.div>
          ) : null}

          {/* stickers */}
          <motion.div style={{ y: mid }} className="absolute inset-0 z-30">
            <Smiley className="top-[8%] right-[10%] h-14 w-14 sm:h-20 sm:w-20" rotate={12} />
            <GoldStar className="top-[4%] left-[2%] h-12 w-12 sm:top-[6%] sm:left-[22%] sm:h-16 sm:w-16" rotate={-12} float={5} />
            <GoldStar className="top-[52%] right-[18%] h-10 w-10 sm:h-12 sm:w-12" rotate={14} float={7} delay={-2} />
            <ChromeStar className="top-[48%] left-[2%] h-10 w-10 sm:left-[20%] sm:h-14 sm:w-14" rotate={-18} float={8} />
            <SparkLines className="top-[3%] left-[37%] hidden h-10 w-10 sm:block" />
            <BubbleWord className="top-[66%] right-[2%] hidden text-[2rem] sm:right-[16%] sm:block sm:text-[3rem]" rotate={-8} float={7}>
              STORY FIRST
            </BubbleWord>
          </motion.div>
          <motion.div style={{ rotate: spin }} className="absolute right-[4%] bottom-[8%] z-30 h-16 w-16 sm:h-24 sm:w-24">
            <Disc className="inset-0 h-full w-full" float={0} />
          </motion.div>
        </div>

        {/* Cards overlapping the bottom of the collage */}
        <div className="relative z-40 -mt-16 grid items-start gap-6 pb-20 sm:-mt-20 sm:pb-28 lg:-mt-24 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 40, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
          >
            <BrowserCard>
              <div className="px-6 pt-6 pb-7 sm:px-9 sm:pt-8 sm:pb-9">
                <h1 className="font-display text-[clamp(3rem,10vw,6.4rem)] leading-[0.92] text-ink">
                  <MaskedWord delay={0.7} reduce={reduce}>
                    Hi,
                  </MaskedWord>{' '}
                  <MaskedWord delay={0.78} reduce={reduce}>
                    I&apos;m
                  </MaskedWord>
                  <br />
                  <MaskedWord delay={0.86} reduce={reduce}>
                    <span className="text-rose">{siteConfig.firstName}</span>
                  </MaskedWord>
                </h1>
                <p className="mt-5 font-display text-[clamp(1.25rem,2.6vw,1.75rem)] leading-tight text-ink">
                  I make brands impossible to <span className="highlight">scroll past.</span>
                </p>
                <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-muted sm:text-base">{siteConfig.heroText}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ivory shadow-[0_6px_0_#4a4a4a] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_4px_0_#4a4a4a] active:translate-y-[6px] active:shadow-none"
                  >
                    See my work
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-[#fff0f5] px-6 py-3.5 text-sm font-semibold text-ink ring-2 ring-rose/30 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Let&apos;s talk
                  </a>
                </div>
              </div>
            </BrowserCard>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:mt-24"
            initial={reduce ? false : { opacity: 0, y: 40, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
          >
            <div className="relative rounded-[22px] bg-paper px-6 py-7 shadow-[0_24px_50px_rgba(60,90,140,0.18)] ring-1 ring-ink/5 sm:px-8">
              <GoldStar className="-top-6 -right-4 h-12 w-12" rotate={18} float={6} />
              <p className="font-mono text-xs leading-relaxed tracking-[0.12em] text-ink uppercase sm:text-[13px]">
                Content creator &amp; creative strategist
              </p>
              <span className="my-4 block h-px w-24 bg-ink/40" aria-hidden="true" />
              <ul className="space-y-1.5 font-mono text-xs tracking-[0.1em] text-ink/80 uppercase sm:text-[13px]">
                {siteConfig.disciplines.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-rose" aria-hidden="true">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-ink/70 uppercase">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7ed6a0] motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3fbf77]" />
                </span>
                {siteConfig.availability}
              </p>
              <a
                href="#contact"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-3.5 font-mono text-xs font-medium tracking-[0.18em] text-white uppercase shadow-[0_6px_0_#a85a7c] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_4px_0_#a85a7c] active:translate-y-[6px] active:shadow-none"
              >
                Let&apos;s collaborate
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cloud bank into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" aria-hidden="true">
        <PuffCloud className="bottom-0 left-[-4%] w-72" float={0} />
        <PuffCloud className="bottom-[-10px] left-[30%] w-80" float={0} />
        <PuffCloud className="right-[-4%] bottom-0 w-72" float={0} />
      </div>
    </section>
  )
}
