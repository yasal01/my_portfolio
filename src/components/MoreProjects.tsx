import { projects } from '../data/projects'
import { SupportingProject } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function MoreProjects() {
  const supporting = projects.filter((project) => project.size === 'supporting')
  if (supporting.length === 0) return null

  return (
    <section className="bg-[#fbfbfb] py-20 sm:py-28 md:py-36">
      <div className="wrap">
        <SectionHeading
          eyebrow="More projects"
          title="Smaller stories, same care."
          text="Events, get-ready moments and everyday beauty, shot to feel lived-in rather than staged."
        />
        <div className="mt-12 grid gap-16 sm:mt-16 md:grid-cols-12 md:gap-x-8 md:gap-y-20">
          {supporting.map((project, index) => (
            <SupportingProject key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
