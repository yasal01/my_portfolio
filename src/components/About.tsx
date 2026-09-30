import { siteConfig } from '../data/siteConfig'
import { SectionReveal } from './SectionReveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-mint/70 py-20 sm:py-28 md:py-36">
      <div className="wrap grid items-center gap-10 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionReveal>
          <div className="mx-auto aspect-[3/4] max-w-[420px] overflow-hidden rounded-[28px] bg-lavender sm:rounded-[40px] lg:max-w-none">
            {siteConfig.portrait ? (
              <img
                src={siteConfig.portrait}
                alt={`${siteConfig.name} portrait`}
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center text-center">
                <p className="font-script text-3xl text-ink/70">Portrait</p>
                <p className="mt-2 text-[11px] tracking-[0.2em] text-muted uppercase">Add photo in /public/media</p>
              </div>
            )}
          </div>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <p className="font-script text-2xl">Hey! That’s me.</p>
          <h2 className="mt-2 font-serif text-[clamp(2.2rem,6.2vw,4.4rem)] leading-[0.98] font-extrabold tracking-[-0.03em]">
            {siteConfig.aboutHeading}
          </h2>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            {siteConfig.about}
          </p>
          <div className="mt-6 sm:mt-8">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-muted uppercase">What I do</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {siteConfig.aboutSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-ivory px-3 py-1.5 text-sm text-ink sm:px-4 sm:py-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
