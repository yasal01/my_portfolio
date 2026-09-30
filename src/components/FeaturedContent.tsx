import { getReelClips } from '../data/projects'
import { accents } from './accents'
import { SectionHeading } from './SectionHeading'
import { SectionReveal } from './SectionReveal'
import { WorkMedia } from './WorkMedia'

/** "Content in motion": every vertical clip as a staggered reel strip on a dark panel. */
export function FeaturedContent() {
  const clips = getReelClips()

  return (
    <section className="bg-[#fbfbfb] px-2 sm:px-4">
      <div className="overflow-hidden rounded-[28px] bg-ink py-20 text-ivory sm:rounded-[40px] sm:py-28">
        <div className="wrap">
          <SectionHeading
            dark
            eyebrow="Content in motion"
            title={
              <>
                Made for the <span className="font-script font-semibold tracking-normal">feed.</span>
              </>
            }
            text="Every clip here is real work, playing the way it would on your phone. Each one opens its full project."
          />
          <div className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mt-16 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
            {clips.map(({ project, media }, index) => (
              <SectionReveal
                key={media.src}
                delay={index * 0.07}
                className={`w-[58vw] max-w-[240px] shrink-0 snap-start lg:w-auto lg:max-w-none ${index % 2 === 1 ? 'lg:mt-16' : ''}`}
              >
                <div
                  className={`rounded-[22px] p-1.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 ${accents[project.accent]}`}
                >
                  <WorkMedia
                    project={project}
                    media={media}
                    label={media.caption}
                    detail={false}
                    className="aspect-[9/16] rounded-[17px]"
                  />
                </div>
                <p className="mt-3 text-[10px] font-semibold tracking-[0.2em] text-ivory/50 uppercase">
                  {media.caption ?? project.category}
                </p>
                <p className="mt-1 font-serif text-lg leading-tight font-bold">{project.title}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
