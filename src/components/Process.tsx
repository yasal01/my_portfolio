import { siteConfig } from '../data/siteConfig'
import { SectionHeading } from './SectionHeading'
import { SectionReveal } from './SectionReveal'

const colors = ['bg-blush', 'bg-sky', 'bg-lime', 'bg-lavender']

export function Process() {
  return (
    <section className="bg-[#fbfbfb] py-20 sm:py-28 md:py-32">
      <div className="wrap">
        <SectionHeading
          eyebrow="Process"
          title="From idea to scroll-stopper."
          text="A process built for stories, not decks: small circle, sharp brief, honest cut."
        />
        <div className="mt-12 grid gap-3 sm:mt-16 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
