import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project, ProjectMedia } from '../data/projects'
import { VideoCard } from './VideoCard'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * A project clip that links to its case study.
 * Eases in from a slight zoom when scrolled into view; on hover (pointer devices)
 * a soft gradient reveals the category, title and what was made.
 */
export function WorkMedia({
  project,
  media = project.cover,
  label,
  detail = true,
  className = '',
}: {
  project: Project
  media?: ProjectMedia
  /** Replaces the category line in the hover reveal */
  label?: string
  /** Show the "content created" line in the hover reveal (hide on narrow cards) */
  detail?: boolean
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <Link
      to={`/work/${project.slug}`}
      aria-label={`${project.title}: view case study`}
      className={`group/work relative isolate block overflow-hidden bg-ivory ${className}`}
    >
      <motion.div
        className="h-full w-full"
        initial={reduce ? false : { scale: 1.08 }}
        whileInView={reduce ? undefined : { scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease }}
      >
        <VideoCard media={media} accent={project.accent} overlay={false} autoPlay />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-ink/65 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/work:opacity-100 md:block">
        <div className="absolute inset-x-4 bottom-4 flex translate-y-3 items-end justify-between gap-4 text-ivory transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/work:translate-y-0 lg:inset-x-6 lg:bottom-6">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase opacity-80">{label ?? project.category}</p>
            <p className="mt-1 font-serif text-xl leading-tight font-extrabold tracking-tight lg:text-2xl">{project.title}</p>
            {detail ? (
              <p className="mt-1.5 text-xs opacity-75 lg:text-sm">{project.contentCreated.slice(0, 3).join(' · ')}</p>
            ) : null}
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory text-ink lg:h-11 lg:w-11">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  )
}
