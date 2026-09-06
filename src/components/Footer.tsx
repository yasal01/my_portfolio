import { siteConfig } from '../data/siteConfig'

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-ivory sm:py-12">
      <div className="wrap flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl font-extrabold tracking-tight sm:text-3xl">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-ivory/65">Content Creator • UGC Creative</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ivory/70" aria-label="Footer">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ivory">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ivory/70">
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-ivory">
            Instagram
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-ivory">
            Email
          </a>
        </div>
      </div>
      <p className="wrap mt-8 text-xs break-words text-ivory/45 sm:mt-10">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  )
}
