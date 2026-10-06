import { Check } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { Sparkle } from './Decor'
import { DropIn, Parallax } from './Motion'
import { Polaroid } from './Paper'
import { SectionReveal } from './SectionReveal'
import { GlossyHeart, PuffCloud, Smiley, SparkLines } from './Stickers'

/** About: a lined-notebook letter with a taped portrait polaroid. */
export function About() {
  return (
    <section id="about" className="bg-lav-pink relative scroll-mt-20 overflow-hidden py-28 sm:py-36">
      <PuffCloud className="top-12 -left-16 w-72" float={18} />
      <PuffCloud className="right-[-60px] bottom-16 w-80" float={22} delay={-5} />
      <Sparkle className="top-[20%] right-[18%] h-4 w-4" tone="white" delay={0.6} />

      <div className="wrap relative">
        <div className="relative mx-auto max-w-4xl">
          {/* Portrait taped over the corner of the letter */}
          <div className="relative z-20 mx-auto mb-[-60px] w-56 sm:absolute sm:-top-16 sm:-right-6 sm:mb-0 sm:w-60 lg:-right-20">
            <Parallax speed={30}>
              <DropIn rotate={6}>
                <Polaroid caption="hi, it's me!" tape="lilac">
                  <img src={siteConfig.portrait} alt={`${siteConfig.name} portrait`} className="aspect-[4/5] w-full object-cover" />
                </Polaroid>
              </DropIn>
              <GlossyHeart className="-bottom-5 -left-6 h-12 w-12" rotate={-14} />
            </Parallax>
          </div>

          <SectionReveal>
            <div className="paper-lined relative rounded-[18px] pt-20 pr-6 pb-10 pl-14 shadow-[0_26px_50px_rgba(200,80,130,0.18)] sm:rotate-[-1deg] sm:px-14 sm:pt-12 sm:pb-14">
              {/* punch holes */}
              <span className="absolute top-0 bottom-0 left-3 hidden flex-col justify-around sm:flex" aria-hidden="true">
                {Array.from({ length: 6 }).map((_, index) => (
                  <span key={index} className="h-4 w-4 rounded-full bg-[#f6b5d4] shadow-inner" />
                ))}
              </span>

              <p className="font-mono text-[11px] tracking-[0.2em] text-rose uppercase">About me</p>
              <h2 className="font-display mt-3 text-[clamp(2.6rem,7vw,5rem)] leading-[0.95] sm:max-w-[70%]">
                Hi, it&apos;s me <span className="text-rose">✦</span>
                <br />
                <span className="highlight">{siteConfig.firstName}</span>
              </h2>
              <SparkLines className="top-10 left-[46%] hidden h-10 w-10 sm:block" color="#c96a8c" />

              <div className="mt-6 grid max-w-2xl gap-4 text-[0.98rem] leading-[28px] text-ink/80 sm:text-[1.05rem]">
                {siteConfig.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-8 font-mono text-[11px] tracking-[0.2em] text-ink/50 uppercase">Things I love</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {siteConfig.aboutLoves.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.98rem] text-ink">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-rose text-rose">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Smiley className="right-8 -bottom-7 h-14 w-14" rotate={-12} />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
