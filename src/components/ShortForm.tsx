import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/projects'
import { Sparkle } from './Decor'
import { PhoneFrame } from './MediaFrames'
import { DropIn, Parallax } from './Motion'
import { Chip, FactCard, NameTape } from './Paper'
import { ScrapHeading } from './ScrapHeading'
import { GlossyHeart, GoldStar, PuffCloud, Smiley } from './Stickers'
import { VideoCard } from './VideoCard'

const chipTones = ['sun', 'lilac', 'mint'] as const

function ShortProject({ project, index }: { project: Project; index: number }) {
  const tilt = index % 2 === 0 ? -3 : 3
  const peek = project.gallery[0]

  return (
    <article className={`relative mx-auto w-full max-w-[250px] sm:max-w-[320px] ${index === 1 ? 'md:mt-28' : ''}`}>
      <Parallax speed={index === 1 ? 50 : 30}>
        <div className="relative">
          {peek ? (
            <DropIn rotate={-12} delay={0.2} className="absolute top-10 -left-10 z-0 w-[46%] sm:-left-14">
              <PhoneFrame>
                <VideoCard media={peek} accent={project.accent} overlay={false} autoPlay />
              </PhoneFrame>
            </DropIn>
          ) : null}

          <DropIn rotate={tilt} className="relative z-10">
            <Link to={`/work/${project.slug}`} className="group block" aria-label={`${project.title}: view project`}>
              <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
                <PhoneFrame>
                  <VideoCard media={project.cover} accent={project.accent} overlay={false} autoPlay />
                </PhoneFrame>
              </div>
            </Link>
          </DropIn>

          {index === 0 ? <Smiley className="-top-6 -right-6 z-20 h-14 w-14" rotate={14} /> : null}
          {index === 1 ? <GoldStar className="-top-5 -left-6 z-20 h-12 w-12" rotate={-10} /> : null}
          {index === 2 ? <GlossyHeart className="top-1/3 -right-8 z-20 h-12 w-12" rotate={12} /> : null}
          <div className="absolute top-[18%] -right-4 z-20 rotate-6 rounded-2xl rounded-bl-sm bg-white px-3 py-2 font-mono text-[10px] font-medium tracking-[0.12em] text-ink uppercase shadow-[0_8px_18px_rgba(60,90,140,0.18)] sm:-right-10">
            ▶ {project.facts[0]?.value}
          </div>
        </div>

        <NameTape className="relative z-20 -mt-5" rotate={index % 2 === 0 ? -2 : 2}>
          {project.title}
        </NameTape>
        <p className="mt-3 text-center font-mono text-[10px] leading-relaxed tracking-[0.14em] text-ink/70 uppercase sm:text-[11px]">
          <span className="text-rose">My role ·</span> {project.roles.join(' · ')}
        </p>
        <FactCard facts={project.facts} className="relative z-10 mt-4" />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Chip tone={chipTones[index % chipTones.length]}>{project.chip}</Chip>
          <Link
            to={`/work/${project.slug}`}
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-ivory shadow-[0_4px_0_#4a4a4a] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_2px_0_#4a4a4a]"
          >
            View project <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:rotate-45" />
          </Link>
          {project.websiteUrl ? (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-xs font-semibold text-ink shadow-[0_4px_0_rgba(60,90,140,0.2)] ring-1 ring-ink/10 transition-all duration-200 hover:translate-y-[1px] hover:shadow-[0_2px_0_rgba(60,90,140,0.2)]"
            >
              Explore website <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:rotate-45" />
            </a>
          ) : null}
        </div>
      </Parallax>
    </article>
  )
}

/** Short-form work: big phone mockups on the sky, each with a taped name label and fact card. */
export function ShortForm() {
  const short = projects.filter((project) => project.format === 'short')

  return (
    <section id="work" className="bg-sky-dots relative scroll-mt-20 overflow-hidden pt-10 pb-28 sm:pb-36">
      <PuffCloud className="top-[20%] -left-24 w-80" float={20} />
      <PuffCloud className="top-[55%] right-[-80px] w-96" float={24} delay={-7} />
      <PuffCloud className="bottom-[6%] left-[30%] w-72" float={18} delay={-3} />
      <Sparkle className="top-[30%] right-[20%] h-4 w-4" tone="white" delay={0.5} />
      <Sparkle className="top-[70%] left-[10%] h-3 w-3" tone="white" delay={1.4} />

      <div className="wrap relative">
        <ScrapHeading label="Video editing · Short-form" tone="pink" sub="Reels and short-form videos I planned and edited for brands. Tap any phone to open the project.">
          Edits that <span className="highlight">stop</span> the scroll
        </ScrapHeading>

        <div className="mt-16 grid gap-20 sm:mt-20 md:grid-cols-3 md:gap-10">
          {short.map((project, index) => (
            <ShortProject key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
