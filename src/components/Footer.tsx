import { siteConfig } from '../data/siteConfig'
import { Polaroid } from './Paper'
import { GoldStar, PuffCloud, Smiley } from './Stickers'

/** Footer: a pink cloud bank with a portrait sticker and the social links. */
export function Footer() {
  return (
    <footer className="bg-pink-cream relative overflow-hidden pt-16 pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28" aria-hidden="true">
        <PuffCloud className="-top-10 left-[-5%] w-80" float={0} />
        <PuffCloud className="-top-14 left-[35%] w-96" float={0} />
        <PuffCloud className="-top-10 right-[-5%] w-80" float={0} />
      </div>

      <div className="wrap relative flex flex-col items-center text-center">
        <div className="relative w-36">
          <Polaroid tape="sun" rotate={-5}>
            <img src={siteConfig.portrait} alt="" className="aspect-square w-full object-cover" />
          </Polaroid>
          <Smiley className="-right-8 -bottom-4 h-12 w-12" rotate={14} />
          <GoldStar className="-top-6 -left-8 h-10 w-10" rotate={-14} />
        </div>

        <p className="font-display mt-8 text-3xl">{siteConfig.name}</p>
        <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-ink/60 uppercase">
          Made with ideas, good light &amp; a lot of retakes.
        </p>

        <nav className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink/70" aria-label="Footer">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 flex gap-3">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-br from-[#ffd6ea] via-[#e9dcff] to-[#d4e8ff] px-5 py-2 font-mono text-xs font-medium tracking-[0.16em] text-ink uppercase shadow-[0_4px_0_rgba(201,106,140,0.35)] ring-1 ring-white transition-transform hover:-translate-y-0.5"
          >
            Instagram ↗
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-[0_4px_0_rgba(224,96,126,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Email
          </a>
        </div>

        <p className="mt-8 font-mono text-[10px] tracking-[0.16em] text-ink/45 uppercase">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
