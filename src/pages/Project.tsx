import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
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
          <div className="aspect-[3/4] overflow-hidden rounded-[24px] bg-blush sm:rounded-[2rem] md:aspect-[16/9]">
            <VideoCard media={project.cover} accent={project.accent} overlay={false} />
          </div>
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

      <section className="wrap mt-12 sm:mt-16">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {project.gallery.map((media, index) => (
            <SectionReveal key={`${project.slug}-${index}`} delay={index * 0.05}>
              <div className={`overflow-hidden rounded-[20px] bg-blush sm:rounded-[1.6rem] ${index === 0 ? 'aspect-[3/4] md:aspect-[4/5]' : 'aspect-[4/5] md:aspect-[16/10]'}`}>
                <VideoCard media={media} accent={project.accent} overlay={false} />
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

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
