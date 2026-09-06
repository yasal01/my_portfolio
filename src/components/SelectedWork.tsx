import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionReveal } from './SectionReveal'

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 bg-[#fbfbfb] py-14 sm:py-20 md:py-28">
      <div className="wrap">
        <SectionReveal className="mb-8 grid gap-3 sm:mb-10 md:mb-14 md:grid-cols-2 md:items-end">
          <h2 className="font-serif text-[clamp(2rem,7vw,3.75rem)] font-extrabold tracking-tight">Selected work</h2>
          <p className="text-sm text-muted sm:text-base">
            A few things I&apos;ve created — UGC, campaigns, and social stories for brands.
          </p>
        </SectionReveal>
        <div className="grid gap-4 sm:gap-5">
          {projects.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
