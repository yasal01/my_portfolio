import { Clapperboard, Package, Share2, Sparkles, WandSparkles } from 'lucide-react'
import { services } from '../data/services'
import { SectionReveal } from './SectionReveal'

const icons = {
  sparkles: Sparkles,
  clapperboard: Clapperboard,
  package: Package,
  wand: WandSparkles,
  share: Share2,
}

const colors = ['bg-blush', 'bg-sky', 'bg-lime', 'bg-lavender', 'bg-mint', 'bg-yellow']

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-14 sm:py-20 md:py-28">
      <div className="wrap">
        <SectionReveal>
          <h2 className="max-w-xl font-serif text-[clamp(2rem,7vw,3.75rem)] font-extrabold tracking-tight">
            What I can create for your brand
          </h2>
        </SectionReveal>
        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <SectionReveal key={service.title} delay={index * 0.06}>
                <article className={`h-full min-h-[180px] rounded-[20px] p-5 transition-transform duration-500 hover:-translate-y-1 sm:min-h-[200px] sm:rounded-[24px] sm:p-7 ${colors[index]}`}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-ink">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <span className="mt-4 inline-flex rounded-full bg-ivory/80 px-3 py-1 text-[11px] font-semibold sm:mt-5">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-extrabold tracking-tight sm:text-2xl">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
                </article>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
