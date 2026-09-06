import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 w-full overflow-x-clip border-b transition-[padding,background-color,border-color] duration-300 ${
        scrolled
          ? 'border-line bg-ivory/90 py-3 backdrop-blur-md'
          : 'border-transparent bg-blush/80 py-4 backdrop-blur-sm sm:py-5'
      }`}
    >
      <div className="wrap flex items-center justify-between gap-3">
        <Link to="/" className="shrink-0 font-serif text-[1.35rem] font-extrabold tracking-tight text-ink sm:text-2xl">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex xl:gap-8" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm text-ivory transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Let&apos;s Collaborate
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-line bg-ivory text-ink sm:h-11 sm:w-11 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ivory lg:hidden"
            aria-label="Mobile"
          >
            <div className="wrap flex flex-col gap-1 py-5">
              {siteConfig.nav.map((item) => (
                <a key={item.href} href={item.href} className="py-3 text-lg" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-ivory"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Collaborate
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
