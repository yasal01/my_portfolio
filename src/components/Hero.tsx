import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { VideoCard } from './VideoCard'

const ease = [0.22, 1, 0.36, 1] as const

const cardColors: Record<string, string> = {
  lavender: 'bg-lavender',
  mint: 'bg-mint',
  yellow: 'bg-yellow',
}

export function Hero() {
  const reduce = useReducedMotion()
  const featured = projects[0]
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease },
        }

  return (
    <section className="overflow-x-clip bg-blush">
      <div className="wrap grid items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div className="min-w-0">
          <motion.p
            className="text-[10px] tracking-[0.14em] text-ink/55 uppercase sm:text-[11px] sm:tracking-[0.2em]"
            {...fade(0.04)}
          >
            {siteConfig.availability}
          </motion.p>
          <motion.h1
            className="mt-3 w-full max-w-full font-serif text-[clamp(1.85rem,8vw,5.6rem)] leading-[1.08] font-extrabold tracking-tight sm:mt-4 sm:leading-[0.94]"
            {...fade(0.1)}
          >
            <span className="font-script text-[0.72em] font-semibold">Hello!</span>
            <br />
            I&apos;m {siteConfig.firstName},
            {siteConfig.portrait ? (
              <img
                src={siteConfig.portrait}
                alt=""
                className="mx-1.5 mb-1 inline-block h-10 w-10 max-w-10 shrink-0 rounded-full object-cover outline-3 outline-white/80 sm:mx-2 sm:mb-2 sm:h-14 sm:w-14 sm:max-w-14 sm:outline-4 lg:h-[72px] lg:w-[72px] lg:max-w-[72px]"
              />
            ) : null}
            <br />
            <span className="inline">a content creator.</span>
          </motion.h1>
          <motion.p className="mt-5 max-w-md text-[0.92rem] leading-relaxed text-pretty text-muted sm:mt-6 sm:text-base md:text-lg" {...fade(0.18)}>
            {siteConfig.intro}
          </motion.p>
          <motion.div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row" {...fade(0.26)}>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm text-ivory transition-transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-ivory px-6 py-3.5 text-sm transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s Collaborate
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[280px] min-[400px]:max-w-[320px] sm:max-w-[360px] lg:max-w-none"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.65, delay: 0.18, ease },
              })}
        >
          <div
            className="absolute inset-0 hidden rounded-[2.5rem] sm:block"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
            aria-hidden="true"
          />
          <p className="font-script absolute top-2 left-1 z-10 hidden rotate-[-8deg] text-xl text-ink min-[400px]:block sm:top-4 sm:left-3 sm:text-2xl">
            story first
          </p>
          <p className="font-script absolute top-4 right-3 z-10 hidden text-2xl sm:top-8 sm:right-6 sm:block sm:text-3xl">✦</p>
          <p className="font-script absolute right-2 bottom-4 z-10 hidden rotate-6 text-xl text-ink min-[400px]:block sm:right-4 sm:bottom-8 sm:text-2xl">
            always filming
          </p>
          <div className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-[46%_54%_48%_52%/52%_44%_56%_48%] bg-pink shadow-[0_18px_50px_rgba(29,29,29,0.08)]">
            <VideoCard
              media={featured.cover}
              accent={featured.accent}
              autoPlay
              autoPlayOnHover={false}
              overlay={false}
            />
          </div>
        </motion.div>
      </div>

      <div className="wrap grid gap-3 pb-10 sm:gap-4 sm:pb-12 md:grid-cols-3">
        {siteConfig.introCards.map((card, index) => (
          <motion.a
            key={card.title}
            href={card.href}
            className={`flex min-h-[200px] flex-col rounded-[24px] p-5 transition-transform hover:-translate-y-1 sm:min-h-[240px] sm:rounded-[28px] sm:p-7 ${cardColors[card.accent]}`}
            {...fade(0.3 + index * 0.06)}
          >
            <span className="inline-flex w-fit rounded-full bg-ivory px-3 py-1 text-[11px] font-semibold">
              0{index + 1}
            </span>
            <h2 className="mt-4 font-serif text-[1.7rem] font-extrabold tracking-tight sm:mt-5 sm:text-3xl">{card.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
            <span className="mt-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory">
              <ArrowUpRight size={18} />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
