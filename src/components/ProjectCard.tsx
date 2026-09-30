import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/projects'
import { accents } from './accents'
import { SectionReveal } from './SectionReveal'
import { WorkMedia } from './WorkMedia'

function projectNumber(project: Project) {
  return String(projects.indexOf(project) + 1).padStart(2, '0')
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-script text-2xl leading-none">({projectNumber(project)})</span>
      <span className="inline-flex max-w-full rounded-full bg-ivory px-3 py-1 text-[10px] font-semibold break-words ring-1 ring-line sm:text-[11px]">
        {project.category}
      </span>
    </div>
  )
}

function ViewLink({ slug, className = '' }: { slug: string; className?: string }) {
  return (
    <Link to={`/work/${slug}`} className={`group/link inline-flex items-center gap-3 text-sm font-semibold ${className}`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-ivory transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:-rotate-45">
        <ArrowRight size={16} />
      </span>
      <span className="link-underline">View case study</span>
    </Link>
  )
}

/** Lead case study: large clip on the left, story and supporting clips staggered on the right. */
export function FeatureProject({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <SectionReveal className="lg:col-span-7">
        <div className={`rounded-[28px] p-2.5 sm:rounded-[36px] sm:p-3 ${accents[project.accent]}`}>
          <WorkMedia project={project} className="aspect-[4/5] rounded-[22px] sm:rounded-[28px]" />
        </div>
      </SectionReveal>

      <div className="flex flex-col lg:col-span-5 lg:pt-4">
        <SectionReveal delay={0.08}>
          <ProjectMeta project={project} />
          <h3 className="mt-5 font-serif text-[clamp(2.1rem,5vw,3.6rem)] leading-[0.98] font-extrabold tracking-[-0.03em]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">{project.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.role.slice(0, 4).map((item) => (
              <li key={item} className="rounded-full border border-line bg-ivory px-3 py-1 text-xs text-ink">
                {item}
              </li>
            ))}
          </ul>
        </SectionReveal>

        {project.gallery.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-auto lg:pt-10">
            {project.gallery.map((media, index) => (
              <SectionReveal key={media.src} delay={0.14 + index * 0.08} className={index % 2 === 1 ? 'mt-10' : ''}>
                <figure>
                  <WorkMedia
                    project={project}
                    media={media}
                    label={media.caption}
                    detail={false}
                    className="aspect-[9/16] rounded-[18px] sm:rounded-[22px]"
                  />
                  {media.caption ? (
                    <figcaption className="mt-2.5 text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
                      {media.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </SectionReveal>
            ))}
          </div>
        ) : null}

        <SectionReveal delay={0.2} className="mt-8">
          <ViewLink slug={project.slug} />
        </SectionReveal>
      </div>
    </article>
  )
}

/** Full-width horizontal moment for 16:9 work. */
export function WideProject({ project }: { project: Project }) {
  return (
    <article>
      <SectionReveal>
        <div className={`rounded-[28px] p-2.5 sm:rounded-[40px] sm:p-3 ${accents[project.accent]}`}>
          <WorkMedia project={project} className="aspect-video rounded-[22px] sm:rounded-[32px]" />
        </div>
      </SectionReveal>
      <SectionReveal delay={0.08} className="mt-6 grid gap-5 sm:mt-8 md:grid-cols-12 md:items-end md:gap-8">
        <div className="md:col-span-5">
          <ProjectMeta project={project} />
          <h3 className="mt-4 font-serif text-[clamp(2.1rem,5vw,3.6rem)] leading-[0.98] font-extrabold tracking-[-0.03em]">
            {project.title}
          </h3>
        </div>
        <p className="max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base md:col-span-4">{project.summary}</p>
        <div className="md:col-span-3 md:justify-self-end">
          <ViewLink slug={project.slug} />
        </div>
      </SectionReveal>
    </article>
  )
}

/** Smaller card for More Projects; alternates between a wide column and an offset narrow one. */
export function SupportingProject({ project, index }: { project: Project; index: number }) {
  const offset = index % 2 === 1

  return (
    <SectionReveal delay={offset ? 0.1 : 0} className={offset ? 'md:col-span-5 md:mt-40' : 'md:col-span-7'}>
      <article>
        <div className={`rounded-[26px] p-2.5 sm:rounded-[32px] sm:p-3 ${accents[project.accent]}`}>
          <WorkMedia
            project={project}
            detail={!offset}
            className="aspect-[4/5] rounded-[20px] sm:rounded-[24px]"
          />
        </div>
        <div className="mt-5 px-1 sm:mt-6">
          <ProjectMeta project={project} />
          <h3 className="mt-4 font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1] font-extrabold tracking-[-0.03em]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>
          <ViewLink slug={project.slug} className="mt-6" />
        </div>
      </article>
    </SectionReveal>
  )
}
