import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { Sparkle } from './Decor'
import { DropIn } from './Motion'
import { GoldStar, PuffCloud, Smiley, Tape } from './Stickers'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  )
}

const handle = siteConfig.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, '@').replace(/\/$/, '')

/** Contact: a taped paper card with social rows and one big button. */
export function Contact() {
  return (
    <section id="contact" className="bg-pink-lav relative scroll-mt-20 overflow-hidden pt-10 pb-28 sm:pb-36">
      <PuffCloud className="top-16 -left-20 w-80" float={20} />
      <PuffCloud className="right-[-40px] bottom-24 w-72" float={24} delay={-4} />
      <Sparkle className="top-[24%] right-[16%] h-4 w-4" tone="white" delay={0.3} />

      <div className="wrap relative">
        <DropIn rotate={-1} className="relative mx-auto max-w-2xl">
          <div className="relative rounded-[22px] bg-paper px-6 pt-12 pb-10 shadow-[0_26px_50px_rgba(200,80,130,0.22)] ring-1 ring-ink/5 sm:px-12 sm:pt-14 sm:pb-12">
            <Tape className="-top-3 left-10" tone="sun" rotate={-8} />
            <Tape className="-top-3 right-10" tone="lilac" rotate={7} />
            <h2 className="font-display text-[clamp(2.6rem,8vw,4.8rem)] leading-[0.92] text-rose">
              Ready to create
              <br />
              together?
            </h2>
            <p className="mt-6 max-w-md font-mono text-xs leading-relaxed tracking-[0.12em] text-ink/80 uppercase sm:text-[13px]">
              Send me the product, the mood or just a feeling. I&apos;ll turn it into something people watch twice.
            </p>

            <ul className="mt-8 grid gap-3">
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl px-2 py-1.5 transition-colors hover:bg-[#fff0f5]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffc7dc] via-[#e3c8f7] to-[#bcd6ff] text-ink ring-1 ring-white shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <InstagramIcon />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[0.98rem] text-ink">{handle}</span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-ink/50 uppercase">Follow along ✦</span>
                  </span>
                  <ArrowUpRight size={16} className="ml-auto text-ink/40 transition-transform duration-300 group-hover:rotate-45 group-hover:text-ink" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-4 rounded-2xl px-2 py-1.5 transition-colors hover:bg-[#fff0f5]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                    <Mail size={18} />
                  </span>
                  <span className="text-[0.98rem] break-all text-ink">{siteConfig.email}</span>
                  <ArrowUpRight size={16} className="ml-auto shrink-0 text-ink/40 transition-transform duration-300 group-hover:rotate-45 group-hover:text-ink" />
                </a>
              </li>
            </ul>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-9 flex w-full items-center justify-center gap-2 rounded-2xl bg-rose px-6 py-5 font-mono text-sm font-medium tracking-[0.18em] text-white uppercase shadow-[0_7px_0_#a85a7c] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_5px_0_#a85a7c] active:translate-y-[7px] active:shadow-none"
            >
              Let&apos;s create something
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>
          <GoldStar className="-top-8 -right-6 h-16 w-16" rotate={16} />
          <Smiley className="-bottom-8 -left-6 h-16 w-16" rotate={-12} />
        </DropIn>
      </div>
    </section>
  )
}
