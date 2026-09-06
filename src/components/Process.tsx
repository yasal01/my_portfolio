import { siteConfig } from '../data/siteConfig'
import { SectionReveal } from './SectionReveal'

const colors = ['bg-blush', 'bg-sky', 'bg-lime', 'bg-lavender']

export function Process() {
  return (
    <section className="bg-[#fbfbfb] py-14 sm:py-20 md:py-28">
      <div className="wrap">
        <SectionReveal className="grid gap-3 md:grid-cols-2 md:items-end">
          <h2 className="font-serif text-[clamp(2rem,7vw,3.75rem)] font-extrabold tracking-tight">
            From idea to scroll-stopper.
          </h2>
          <p className="text-sm text-muted sm:text-base">
            A process built for stories, not decks — small circle, sharp brief, honest cut.
          </p>
        </SectionReveal>
        <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.process.map((step, index) => (
            <SectionReveal key={step.num} delay={index * 0.08}>
              <article className={`min-h-[200px] rounded-[20px] p-5 sm:min-h-[240px] sm:rounded-[24px] sm:p-6 ${colors[index]}`}>
                <p className="font-script text-2xl">({step.num})</p>
                <h3 className="mt-4 font-serif text-xl font-extrabold tracking-tight sm:mt-5 sm:text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
