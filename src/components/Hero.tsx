import { ArrowRight } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useRef, useSyncExternalStore, type PointerEvent, type ReactNode } from 'react'
import { getProject, projects, type Project, type ProjectMedia } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { VideoCard } from './VideoCard'

const ease = [0.22, 1, 0.36, 1] as const

const desktopQuery = '(min-width: 1024px)'

/** Scroll depth only on large screens; on phones the stacked layout has no room for it. */
function useIsDesktop() {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(desktopQuery)
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    },
    () => window.matchMedia(desktopQuery).matches,
    () => false,
  )
}

/** A word that rises out of a mask. */
function MaskedWord({ children, delay, reduce }: { children: ReactNode; delay: number; reduce: boolean | null }) {
  return (
    <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
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

/** A small framed clip that floats around the main hero video. */
function FloatingClip({
  media,
  accent,
  label,
  className,
  scrollY,
  x,
  y,
  rotate,
  delay,
  reduce,
}: {
  media: ProjectMedia
  accent: Project['accent']
  label: string
  className: string
  scrollY: MotionValue<number> | number
  x: MotionValue<number>
  y: MotionValue<number>
  rotate: number
  delay: number
  reduce: boolean | null
}) {
  return (
    <motion.div style={{ y: scrollY }} className={`absolute z-20 ${className}`}>
      <motion.div
        style={{ x, y, rotate }}
        initial={reduce ? false : { opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay, ease }}
        className="rounded-[18px] bg-ivory p-1.5 shadow-[0_22px_50px_rgba(29,29,29,0.14)] sm:rounded-[22px]"
      >
        <div className="aspect-[9/16] overflow-hidden rounded-[13px] sm:rounded-[16px]">
          <VideoCard media={media} accent={accent} overlay={false} autoPlay autoPlayOnHover={false} />
        </div>
        <p className="px-1.5 pt-1.5 pb-0.5 text-[8px] font-semibold tracking-[0.12em] whitespace-nowrap text-muted uppercase sm:text-[10px] sm:tracking-[0.18em]">
          {label}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const isDesktop = useIsDesktop()
  const depth = isDesktop && !reduce
  const ref = useRef<HTMLElement>(null)

  const lead = projects[0]
  const workshop = getProject('lip-gloss-workshop')
  const productFilm = lead.gallery[0]

  // Depth on scroll: the three clips drift at different speeds as the hero leaves.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const mainScroll = useTransform(scrollYProgress, [0, 1], [0, 70])
  const backScroll = useTransform(scrollYProgress, [0, 1], [0, -50])
  const frontScroll = useTransform(scrollYProgress, [0, 1], [0, 140])

  // Depth on pointer (mouse only): layers shift a few pixels in opposite directions.
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 60, damping: 18 })
  const smoothY = useSpring(pointerY, { stiffness: 60, damping: 18 })
  const mainX = useTransform(smoothX, (v) => v * 8)
  const mainY = useTransform(smoothY, (v) => v * 8)
  const backX = useTransform(smoothX, (v) => v * -16)
  const backY = useTransform(smoothY, (v) => v * -16)
  const frontX = useTransform(smoothX, (v) => v * 22)
  const frontY = useTransform(smoothY, (v) => v * 22)

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (reduce || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function onPointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
  }

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        }

  const words = siteConfig.headline.split(' ')
  const accentWords = siteConfig.headlineAccent.split(' ')

  return (
    <section ref={ref} className="relative overflow-x-clip bg-blush" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div className="wrap grid items-center gap-12 pt-8 pb-6 sm:pt-12 lg:min-h-[calc(100svh-160px)] lg:grid-cols-12 lg:gap-10 lg:py-10">
        <div className="min-w-0 lg:col-span-7">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full bg-ivory/70 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-ink/70 uppercase sm:text-[11px]"
            {...fade(0.02)}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/30 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            {siteConfig.availability}
          </motion.p>

          <motion.div className="mt-7 flex items-center gap-3 sm:mt-9" {...fade(0.08)}>
            {siteConfig.portrait ? (
              <img
                src={siteConfig.portrait}
                alt=""
                className="h-11 w-11 shrink-0 rounded-full object-cover outline-3 outline-white/80 sm:h-12 sm:w-12"
              />
            ) : null}
            <p className="leading-tight">
              <span className="font-script text-[1.55rem] text-ink sm:text-[1.7rem]">Hello! I&apos;m {siteConfig.firstName},</span>
              <br />
              <span className="text-sm text-muted">content creator &amp; UGC creative</span>
            </p>
          </motion.div>

          <h1 className="mt-5 font-serif text-[clamp(2.35rem,7.2vw,6.1rem)] leading-[0.95] font-extrabold tracking-[-0.035em] sm:mt-6">
            {words.map((word, index) => (
              <span key={`${word}-${index}`}>
                <MaskedWord delay={0.14 + index * 0.06} reduce={reduce}>
                  {word}
                </MaskedWord>{' '}
              </span>
            ))}
            <span className="relative inline-block whitespace-nowrap">
              {accentWords.map((word, index) => (
                <span key={`${word}-${index}`}>
                  {index > 0 ? ' ' : null}
                  <MaskedWord delay={0.14 + (words.length + index) * 0.06} reduce={reduce}>
                    {word}
                  </MaskedWord>
                </span>
              ))}
              <svg
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-[0.1em] left-0 h-[0.2em] w-full text-ink"
                aria-hidden="true"
              >
                <motion.path
                  d="M3 13 C 60 5, 120 3, 170 9 S 262 17, 297 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.95, ease }}
                />
              </svg>
            </span>
          </h1>

          <motion.p
            className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-pretty text-muted sm:mt-8 sm:text-base md:text-lg"
            {...fade(0.5)}
          >
            {siteConfig.heroText}
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-10" {...fade(0.6)}>
            <a
              href="#work"
              className="group/cta inline-flex items-center gap-4 rounded-full bg-ink py-2 pr-2 pl-6 text-sm font-semibold text-ivory transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore My Work
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:rotate-90">
                <ArrowRight size={16} />
              </span>
            </a>
            <a href="#contact" className="group/link text-sm font-semibold">
              <span className="link-underline">Let&apos;s collaborate</span>
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] min-[400px]:max-w-[380px] sm:max-w-[440px] lg:col-span-5 lg:max-w-[500px]">
          <motion.div
            className="absolute inset-[4%] rounded-[2.5rem]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
            aria-hidden="true"
            {...fade(0.1)}
          />

          <motion.div style={{ y: depth ? mainScroll : 0 }} className="absolute inset-0 z-10 flex items-center justify-center">
            <motion.div
              style={{ x: mainX, y: mainY }}
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease }}
              className="aspect-[9/16] w-[58%] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-pink shadow-[0_24px_60px_rgba(29,29,29,0.12)]"
            >
              <VideoCard media={lead.cover} accent={lead.accent} autoPlay autoPlayOnHover={false} overlay={false} />
            </motion.div>
          </motion.div>

          {workshop ? (
            <FloatingClip
              media={workshop.cover}
              accent={workshop.accent}
              label="Event reel"
              className="top-[3%] left-0 w-[28%]"
              scrollY={depth ? backScroll : 0}
              x={backX}
              y={backY}
              rotate={-7}
              delay={0.55}
              reduce={reduce}
            />
          ) : null}
          {productFilm ? (
            <FloatingClip
              media={productFilm}
              accent={lead.accent}
              label="Product film"
              className="right-0 bottom-[6%] w-[28%]"
              scrollY={depth ? frontScroll : 0}
              x={frontX}
              y={frontY}
              rotate={6}
              delay={0.7}
              reduce={reduce}
            />
          ) : null}

          <motion.p
            className="font-script absolute top-[6%] right-[4%] z-20 rotate-6 text-xl text-ink sm:text-2xl"
            {...fade(0.85)}
          >
            story first ✦
          </motion.p>
          <motion.p
            className="font-script absolute bottom-[3%] left-[3%] z-20 -rotate-6 text-xl text-ink sm:text-2xl"
            {...fade(0.95)}
          >
            always filming
          </motion.p>
        </div>
      </div>

      <motion.div className="wrap flex items-end justify-between gap-6 pb-8 sm:pb-10" {...fade(1)}>
        <a
          href="#work"
          className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-ink/60 uppercase transition-colors hover:text-ink sm:text-[11px]"
        >
          <span className="relative h-10 w-px overflow-hidden bg-ink/15" aria-hidden="true">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_1.8s_cubic-bezier(0.65,0,0.35,1)_infinite] bg-ink motion-reduce:animate-none" />
          </span>
          Scroll to explore
        </a>
        <p className="hidden text-[11px] font-semibold tracking-[0.22em] text-ink/45 uppercase sm:block">
          {String(projects.length).padStart(2, '0')} case studies below
        </p>
      </motion.div>
    </section>
  )
}
