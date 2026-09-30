import { projects } from '../data/projects'
import { FeatureProject, WideProject } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function SelectedWork() {
  const featured = projects.filter((project) => project.size === 'feature')
  const wide = projects.filter((project) => project.size === 'wide')

  return (
    <section id="work" className="scroll-mt-20 bg-[#fbfbfb] pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-36">
      <div className="wrap">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Case studies, <span className="font-script font-semibold tracking-normal">not</span> just clips.
            </>
          }
          text="Real products, real people, real rooms. Each project starts with one hook and one feeling, then gets filmed, styled and cut for the feed."
        />
        <div className="mt-12 grid gap-20 sm:mt-16 md:gap-28">
          {featured.map((project) => (
            <FeatureProject key={project.slug} project={project} />
          ))}
          {wide.map((project) => (
            <WideProject key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
