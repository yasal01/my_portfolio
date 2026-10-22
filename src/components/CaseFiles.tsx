import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, projectNumber } from '../data/projects'
import { PhoneFrame } from './MediaFrames'
import { DropIn } from './Motion'
import { BrowserCard, Chip, FactCard } from './Paper'
import { ScrapHeading } from './ScrapHeading'
import { GoldStar, PuffCloud } from './Stickers'
import { VideoCard } from './VideoCard'

const chipTones = ['sun', 'mint', 'lilac', 'pink', 'sky'] as const
const ease = [0.22, 1, 0.36, 1] as const

/** Case studies as expandable browser windows — click one to open the story behind it. */
export function CaseFiles() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<string | null>(projects[0]?.slug ?? null)

  return (
    <section className="bg-sky-dots relative overflow-hidden pb-28 sm:pb-36">
      <PuffCloud className="top-24 -left-20 w-72" float={20} />
      <PuffCloud className="bottom-16 -right-16 w-80" float={22} delay={-4} />

      <div className="wrap relative">
        <ScrapHeading label="Case studies" tone="sun" sub="Click to open each project">
          Behind the <span className="highlight">work</span>
        </ScrapHeading>

        <div className="relative mx-auto mt-14 grid max-w-3xl gap-5">
          <GoldStar className="-top-8 -right-6 z-10 h-14 w-14" rotate={16} />
          {projects.map((project, index) => {
            const isOpen = open === project.slug
            const previewMedia = project.websitePreview
              ? {
                  type: 'image' as const,
                  src: project.websitePreview,
                  alt: `${project.title} website homepage`,
                  orientation: 'horizontal' as const,
                }
              : project.cover
            const horizontal = previewMedia.orientation === 'horizontal'
            const roleLine = project.websiteRoles?.length ? project.websiteRoles : project.roles
            return (
              <DropIn key={project.slug} rotate={index % 2 === 0 ? -0.6 : 0.6} delay={index * 0.04}>
                <BrowserCard address={`case-study / ${project.slug}`} className={isOpen ? 'ring-2 ring-rose/30' : ''}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                    aria-expanded={isOpen}
                    aria-controls={`case-${project.slug}`}
                    onClick={() => setOpen(isOpen ? null : project.slug)}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Chip tone={chipTones[index % chipTones.length]}>{project.chip}</Chip>
                        {project.websiteUrl ? <Chip tone="sky">Website</Chip> : null}
                        <span className="font-script text-xl text-ink/50">({projectNumber(project)})</span>
                      </div>
                      <h3 className="font-display mt-2 text-[clamp(1.6rem,4vw,2.4rem)] leading-none text-rose">{project.title}</h3>
                      <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-ink/60 uppercase sm:text-[11px]">
                        My role · {roleLine.join(' · ')}
                      </p>
                    </div>
                    <FactCard facts={project.facts} className="hidden w-64 shrink-0 md:grid" />
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6dcff] text-ink ring-1 ring-[#c4b0f5] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`case-${project.slug}`}
                        key="body"
                        initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease }}
                        className="overflow-hidden"
                      >
                        <div className={`grid gap-6 border-t border-ink/5 px-5 pt-6 pb-7 sm:px-7 ${horizontal ? '' : 'sm:grid-cols-[200px_1fr] sm:items-start'}`}>
                          <div className={horizontal ? '' : 'mx-auto w-[60%] max-w-[200px] sm:w-full'}>
                            {horizontal ? (
                              <div className="aspect-video overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                                <VideoCard media={previewMedia} accent={project.accent} overlay={false} autoPlay />
                              </div>
                            ) : (
                              <PhoneFrame>
                                <VideoCard media={previewMedia} accent={project.accent} overlay={false} autoPlay />
                              </PhoneFrame>
                            )}
                          </div>
                          <div>
                            <FactCard facts={project.facts} className="mb-5 md:hidden" />
                            <h4 className="font-display text-xl sm:text-2xl">
                              {project.websiteUrl ? 'Project goal & design' : 'What I made & why it worked'}
                            </h4>
                            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                              {project.websitePurpose ?? project.idea}
                            </p>
                            {project.websiteHighlights?.length ? (
                              <ul className="mt-3 grid gap-1.5 text-[0.9rem] leading-snug text-ink/80">
                                {project.websiteHighlights.map((item) => (
                                  <li key={item} className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                            {project.websiteTech?.length ? (
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.websiteTech.map((tech) => (
                                  <Chip key={tech} tone="mint">
                                    {tech}
                                  </Chip>
                                ))}
                              </div>
                            ) : null}
                            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink">
                              <span className="font-mono text-[11px] tracking-[0.16em] text-ink/50 uppercase">The goal · </span>
                              {project.goal}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                              <Link
                                to={`/work/${project.slug}`}
                                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ivory shadow-[0_5px_0_#4a4a4a] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_3px_0_#4a4a4a]"
                              >
                                Open case study <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:rotate-45" />
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
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </BrowserCard>
              </DropIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
