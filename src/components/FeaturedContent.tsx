import { Link } from 'react-router-dom'
import { getFeaturedProjects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { SectionReveal } from './SectionReveal'
import { VideoCard } from './VideoCard'

const frames = ['bg-pink', 'bg-lavender', 'bg-yellow']

export function FeaturedContent() {
  const featured = getFeaturedProjects(siteConfig.featuredSlugs)

  return (
    <section className="overflow-x-clip py-14 sm:py-20 md:py-28">
      <div className="wrap">
        <SectionReveal>
          <p className="font-script text-2xl text-ink">Now</p>
          <h2 className="mt-1 font-serif text-[clamp(2rem,7vw,3.75rem)] font-extrabold tracking-tight">
            Currently creating
          </h2>
        </SectionReveal>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:mt-10 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none">
          {featured.map((project, index) => (
            <SectionReveal
              key={project.slug}
              delay={index * 0.08}
              className="w-[min(72vw,280px)] shrink-0 snap-start md:w-auto"
            >
              <Link to={`/work/${project.slug}`} className={`block rounded-[24px] p-2.5 sm:rounded-[28px] sm:p-3 ${frames[index] ?? 'bg-mint'}`}>
                <div className="aspect-[9/16] overflow-hidden rounded-[18px] bg-ivory sm:rounded-[22px]">
                  <VideoCard
                    media={project.cover}
                    title={project.title}
                    category={project.category}
                    accent={project.accent}
                  />
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
