import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { accents } from '../components/accents'
import { SectionReveal } from '../components/SectionReveal'
import { VideoCard } from '../components/VideoCard'
import { getNextProject, getProject } from '../data/projects'

export function Project() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <Navigate to="/" replace />

  const next = getNextProject(project.slug)

  return (
    <main className="overflow-x-clip pb-16 sm:pb-20">
      <section className="wrap pt-6 sm:pt-8 md:pt-12">
        <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
          <ArrowLeft size={16} /> All work
        </Link>
        <SectionReveal>
          <p className="mt-6 text-[10px] tracking-[0.16em] text-muted uppercase sm:mt-8 sm:text-[11px] sm:tracking-[0.22em]">
            {project.category}
          </p>
          <h1 className="mt-3 font-serif text-[clamp(2.2rem,9vw,4.5rem)] font-extrabold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">{project.summary}</p>
        </SectionReveal>
        <SectionReveal className="mt-8 sm:mt-10">
          {project.cover.orientation === 'horizontal' ? (
            <div className={`rounded-[24px] p-2.5 sm:rounded-[2rem] sm:p-4 ${accents[project.accent]}`}>
              <div className="aspect-video overflow-hidden rounded-[18px] bg-ivory sm:rounded-[1.6rem]">
                <VideoCard media={project.cover} accent={project.accent} overlay={false} autoPlay />
              </div>
            </div>
          ) : (
            <div className={`rounded-[24px] px-4 py-6 sm:rounded-[2rem] sm:py-10 md:py-14 ${accents[project.accent]}`}>
              <div className="mx-auto aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-[20px] bg-ivory shadow-[0_18px_50px_rgba(29,29,29,0.08)] sm:rounded-[28px]">
                <VideoCard media={project.cover} accent={project.accent} overlay={false} autoPlay />
              </div>
            </div>
          )}
        </SectionReveal>
      </section>

      <section className="wrap mt-12 grid gap-8 sm:mt-16 sm:gap-12 md:grid-cols-3 md:gap-16">
        <SectionReveal>
          <p className="text-[11px] tracking-[0.2em] text-muted uppercase">The idea</p>
          <p className="mt-3 leading-relaxed text-muted">{project.idea}</p>
        </SectionReveal>
        <SectionReveal delay={0.06}>
          <p className="text-[11px] tracking-[0.2em] text-muted uppercase">My role</p>
          <ul className="mt-3 space-y-1 text-muted">
            {project.role.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-[11px] tracking-[0.2em] text-muted uppercase">Content created</p>
          <ul className="mt-3 space-y-1 text-muted">
            {project.contentCreated.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionReveal>
      </section>

      {project.gallery.length > 0 ? (
        <section className="wrap mt-12 sm:mt-16">
          <SectionReveal>
            <p className="text-[11px] tracking-[0.2em] text-muted uppercase">More from this project</p>
          </SectionReveal>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
            {project.gallery.map((media, index) => (
              <SectionReveal
                key={media.src ?? index}
                delay={index * 0.05}
                className={media.orientation === 'horizontal' ? 'col-span-2' : ''}
              >
                <figure>
                  <div
                    className={`overflow-hidden rounded-[20px] ${accents[project.accent]} sm:rounded-[1.6rem] ${media.orientation === 'horizontal' ? 'aspect-video' : 'aspect-[9/16]'}`}
                  >
                    <VideoCard media={media} accent={project.accent} overlay={false} autoPlay />
                  </div>
                  {media.caption ? (
                    <figcaption className="mt-2 text-[10px] tracking-[0.18em] text-muted uppercase sm:text-[11px]">
                      {media.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </SectionReveal>
            ))}
          </div>
        </section>
      ) : null}

      <div className="wrap mt-12 border-t border-line pt-8 sm:mt-16 sm:pt-10">
        <Link to={`/work/${next.slug}`} className="group inline-flex max-w-full items-start gap-3">
          <div className="min-w-0">
            <p className="text-[11px] tracking-[0.2em] text-muted uppercase">Next project</p>
            <p className="font-serif text-[clamp(1.8rem,6vw,2.25rem)] font-extrabold tracking-tight break-words group-hover:opacity-70">
              {next.title}
            </p>
          </div>
          <ArrowRight className="mt-6 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  )
}
