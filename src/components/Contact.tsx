import { Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { SectionReveal } from './SectionReveal'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-blush py-20 sm:py-28 md:py-36">
      <div className="wrap">
        <SectionReveal>
          <p className="font-script text-2xl">Let’s work together</p>
          <h2 className="mt-3 max-w-[16ch] font-serif text-[clamp(2.4rem,8vw,5.6rem)] leading-[0.95] font-extrabold tracking-[-0.035em]">
            Have a product that deserves to be seen?
          </h2>
          <p className="mt-5 max-w-md text-base text-muted sm:mt-6 sm:text-lg">
            Let&apos;s create something people actually want to watch.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink px-8 py-4 text-ivory transition-transform hover:-translate-y-0.5 sm:mt-10 sm:w-auto"
          >
            Start a Collaboration
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group/link mt-6 block w-fit max-w-full font-serif text-[clamp(1.2rem,3.4vw,1.9rem)] font-bold tracking-tight break-all sm:mt-8"
          >
            <span className="link-underline">{siteConfig.email}</span>
          </a>
          <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-10">
            <a
              href={siteConfig.instagram}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-4 py-2.5 text-sm"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon /> Instagram
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-4 py-2.5 text-sm break-all"
            >
              <Mail size={16} className="shrink-0" /> Email
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
