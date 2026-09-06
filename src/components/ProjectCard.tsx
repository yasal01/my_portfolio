import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { VideoCard } from './VideoCard'

const accents: Record<Project['accent'], string> = {
  blush: 'bg-blush',
  pink: 'bg-pink',
  lavender: 'bg-lavender',
  lime: 'bg-lime',
  sky: 'bg-sky',
  mint: 'bg-mint',
  yellow: 'bg-yellow',
}

export function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <article className={`rounded-[24px] p-3 sm:rounded-[32px] sm:p-4 md:rounded-[36px] md:p-5 ${accents[project.accent]}`}>
      <div className={`grid items-center gap-4 sm:gap-6 lg:grid-cols-2 ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
        <div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-ivory sm:aspect-[4/5] sm:rounded-[28px]">
          <VideoCard media={project.cover} accent={project.accent} overlay={false} />
        </div>
        <div className="px-1 pb-3 sm:px-2 sm:pb-4 md:px-4">
          <span className="inline-flex max-w-full rounded-full bg-ivory px-3 py-1 text-[10px] font-semibold break-words sm:text-[11px]">
            {project.category}
          </span>
          <h3 className="mt-3 font-serif text-[clamp(1.75rem,6vw,3rem)] font-extrabold tracking-tight sm:mt-4">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-sm text-muted sm:text-base">{project.summary}</p>
          <Link
            to={`/work/${project.slug}`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-ivory transition-transform hover:-translate-y-0.5 sm:mt-6 sm:w-auto"
          >
            View project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
