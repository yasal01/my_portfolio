import { ArrowUpRight, Check, Clapperboard } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/projects'
import { DropIn, Parallax } from './Motion'
import { Chip, Clipboard, FactCard, NameTape, TornNote } from './Paper'
import { SectionReveal } from './SectionReveal'
import { ChromeStar, PuffCloud, Smiley } from './Stickers'
import { VideoCard } from './VideoCard'

const notes = ['Paced for watch time', 'Made for YouTube, ads & websites', 'Cinematic, never chaotic']

function LongProject({ project, index }: { project: Project; index: number }) {
  const isWebsite = Boolean(project.websiteUrl)
  const previewMedia = project.websitePreview
    ? {
        type: 'image' as const,
        src: project.websitePreview,
        alt: `${project.title} website homepage`,
        orientation: 'horizontal' as const,
      }
    : project.cover
  const roleLine = project.websiteRoles?.length ? project.websiteRoles : project.roles

  return (
    <article className={index % 2 === 1 ? 'lg:mt-32' : ''}>
      <DropIn rotate={index % 2 === 0 ? -1.5 : 1.5}>
        <Link to={`/work/${project.slug}`} className="group block" aria-label={`${project.title}: view project`}>
          <Clipboard className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
            <div className="rounded-xl bg-paper p-2 shadow-[0_6px_14px_rgba(0,0,0,0.12)] sm:p-3">
              <div className="aspect-video overflow-hidden rounded-lg">
                <VideoCard media={previewMedia} accent={project.accent} overlay={false} autoPlay={!isWebsite} />
              </div>
              <div className="flex items-center justify-center gap-2 pt-3 pb-1">
                <Chip tone="sun">
                  <Clapperboard size={12} /> {project.chip}
                </Chip>
                <Chip tone={isWebsite ? 'sky' : 'lilac'}>{isWebsite ? 'Website' : 'Long form'}</Chip>
              </div>
            </div>
          </Clipboard>
        </Link>
      </DropIn>
      <div className="mx-auto max-w-sm">
        <NameTape className="relative z-10 -mt-4">{project.title}</NameTape>
        <p className="mt-3 text-center font-mono text-[10px] leading-relaxed tracking-[0.14em] text-ink/70 uppercase sm:text-[11px]">
          <span className="text-rose">My role ·</span> {roleLine.join(' · ')}
        </p>
        <FactCard facts={project.facts} className="mt-4" />
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <Link
            to={`/work/${project.slug}`}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ivory shadow-[0_5px_0_#4a4a4a] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_3px_0_#4a4a4a]"
          >
            {isWebsite ? 'View project' : project.cover.type === 'video' ? 'Watch full video' : 'View project'}{' '}
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:rotate-45" />
          </Link>
          {project.websiteUrl ? (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink shadow-[0_5px_0_rgba(60,90,140,0.2)] ring-1 ring-ink/10 transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_3px_0_rgba(60,90,140,0.2)]"
            >
              Explore website <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:rotate-45" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

/** Long-form / cinematic work: videos on clipboards with a torn checklist note. */
export function LongForm() {
  const long = projects.filter((project) => project.format === 'long')
  if (long.length === 0) return null

  return (
    <section className="bg-sky-dots relative overflow-hidden pb-28 sm:pb-36">
      <PuffCloud className="top-10 -right-20 w-80" float={20} />
      <PuffCloud className="top-[45%] -left-24 w-80" float={24} delay={-6} />

      <div className="wrap relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-7">
            <div className="rounded-[26px] bg-paper p-7 shadow-[0_24px_50px_rgba(60,90,140,0.16)] ring-1 ring-ink/5 sm:p-10">
              <Chip tone="pink">Long-form · Websites</Chip>
              <h2 className="font-display mt-4 text-[clamp(2.4rem,6.5vw,4.6rem)] leading-[0.95]">
                Stories with room to <span className="highlight">breathe</span>
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">
                Horizontal films and brand websites that need more space: product reviews, fashion worlds and shop fronts designed for the screen they live on.
              </p>
            </div>
          </SectionReveal>

          <div className="relative lg:col-span-5">
            <Parallax speed={40}>
              <DropIn rotate={-5}>
                <TornNote className="mx-auto max-w-xs" rotate={0}>
                  <ul className="space-y-3">
                    {notes.map((note) => (
                      <li key={note} className="font-display flex items-center gap-3 text-lg leading-tight text-ink sm:text-xl">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-rose">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </TornNote>
              </DropIn>
              <Smiley className="right-[8%] -bottom-6 h-14 w-14" rotate={-10} />
              <ChromeStar className="-top-8 left-[6%] h-14 w-14" rotate={16} />
            </Parallax>
          </div>
        </div>

        <div className="mt-20 grid gap-20 lg:grid-cols-2 lg:gap-12">
          {long.map((project, index) => (
            <LongProject key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
