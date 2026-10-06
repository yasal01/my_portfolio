import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'

type MenuItem = (typeof siteConfig.menu)[number]

const ease = [0.22, 1, 0.36, 1] as const
const sectionIds = siteConfig.menu.map((item) => item.id).filter((id) => id !== 'home')

/** Which menu item is "current": the section in view on the home page, Work on case studies. */
function useActiveItem(pathname: string) {
  const [section, setSection] = useState('home')

  useEffect(() => {
    if (pathname !== '/') return
    const update = () => {
      const line = window.innerHeight * 0.35
      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setSection(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])

  if (pathname === '/') return section
  if (pathname.startsWith('/work/')) return 'work'
  return null
}

/** Text that rolls up on hover to reveal the same word in the script face. */
function RollText({ children, scriptClassName = '' }: { children: string; scriptClassName?: string }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:-translate-y-full">
        {children}
      </span>
      <span
        className={`font-script absolute inset-0 flex translate-y-full items-center justify-center font-semibold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:translate-y-0 ${scriptClassName}`}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
}

/** Nudges its child a few pixels toward the cursor. */
function Magnetic({ children, strength = 0.25 }: { children: ReactNode; strength?: number }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 })

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * strength)
    y.set((event.clientY - rect.top - rect.height / 2) * strength)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  )
}

export function Navbar() {
  const reduce = useReducedMotion()
  const location = useLocation()
  const active = useActiveItem(location.pathname)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  // Tied to the location key, so the menu closes by itself on any route change.
  const [openKey, setOpenKey] = useState<string | null>(null)
  const open = openKey === location.key
  const isHome = location.pathname === '/'
  const isCaseStudy = location.pathname.startsWith('/work/')

  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenKey(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  /** On the home page, scroll smoothly instead of routing (also works when clicking the same link twice). */
  function go(event: MouseEvent<HTMLAnchorElement>, item: MenuItem) {
    setOpenKey(null)
    if (!isHome) return
    event.preventDefault()
    const scroll = () => {
      if (item.id === 'home') window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      else document.getElementById(item.id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      window.history.replaceState(window.history.state, '', item.href)
    }
    // Let the menu release its scroll lock first.
    window.setTimeout(scroll, open ? 60 : 0)
  }

  const pill = scrolled && !open
  const indicator = hovered ?? active

  return (
    <header
      className={`sticky top-0 z-50 w-full py-3 transition-colors duration-500 ${
        pill || open || isHome || isCaseStudy ? 'bg-transparent' : 'bg-ivory'
      }`}
    >
      <div
        className={`relative mx-auto flex w-[min(1180px,calc(100%-2rem))] items-center justify-between gap-3 rounded-full py-2 transition-[max-width,padding,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-[380px]:w-[calc(100%-1.25rem)] ${
          pill
            ? 'glass max-w-[900px] pr-2 pl-5'
            : 'max-w-[1180px] border border-transparent bg-transparent px-0'
        }`}
      >
        <Link to="/" onClick={(event) => go(event, siteConfig.menu[0])} className="group/logo relative z-10 flex shrink-0 items-center gap-1.5" aria-label={`${siteConfig.name}, home`}>
          <span className="font-display flex text-[1.5rem] leading-none text-ink sm:text-[1.65rem]">
            {siteConfig.name.split('').map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/logo:-translate-y-1"
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span
            className="inline-block animate-[spin_9s_linear_infinite] text-sm text-ink transition-colors group-hover/logo:animate-[spin_1.6s_linear_infinite] motion-reduce:animate-none"
            aria-hidden="true"
          >
            ✦
          </span>
        </Link>

        <LayoutGroup id="desktop-nav">
          <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block" aria-label="Primary" onMouseLeave={() => setHovered(null)}>
            <ul className="flex items-center gap-1">
              {siteConfig.menu.map((item) => (
                <li key={item.id}>
                  <Magnetic>
                    <Link
                      to={item.href}
                      onClick={(event) => go(event, item)}
                      onMouseEnter={() => setHovered(item.id)}
                      onFocus={() => setHovered(item.id)}
                      onBlur={() => setHovered(null)}
                      aria-current={active === item.id ? (isHome ? 'location' : 'page') : undefined}
                      className="group/roll relative isolate block rounded-full px-4 py-2 text-sm font-medium text-ink"
                    >
                      {indicator === item.id ? (
                        <motion.span
                          layoutId="nav-pill"
                          className={`absolute inset-0 -z-10 rounded-full ring-1 ring-ink/5 ${item.accent}`}
                          transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                      <RollText scriptClassName="text-[1.2rem]">{item.label}</RollText>
                    </Link>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </nav>
        </LayoutGroup>

        <div className="relative z-10 flex items-center gap-2">
          <Magnetic strength={0.15}>
            <Link
              to="/#contact"
              onClick={(event) => go(event, siteConfig.menu[siteConfig.menu.length - 1])}
              className="group/roll hidden items-center gap-2 rounded-full bg-ink py-2.5 pr-2.5 pl-5 text-sm font-medium text-ivory transition-transform duration-300 lg:inline-flex"
            >
              <RollText scriptClassName="text-[1.15rem]">Let&apos;s collaborate</RollText>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ivory text-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </Magnetic>

          <button
            type="button"
            className="group/roll flex h-11 items-center gap-2.5 rounded-full bg-ink py-1.5 pr-1.5 pl-4 text-sm font-medium text-ivory lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpenKey(open ? null : location.key)}
          >
            <span className="w-[3.1rem] text-center">
              <RollText scriptClassName="text-[1.1rem]">{open ? 'Close' : 'Menu'}</RollText>
            </span>
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-ivory" aria-hidden="true">
              <motion.span
                className="absolute h-[1.5px] w-3.5 rounded-full bg-ink"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
                transition={{ duration: reduce ? 0 : 0.35, ease }}
              />
              <motion.span
                className="absolute h-[1.5px] w-3.5 rounded-full bg-ink"
                animate={open ? { rotate: -45, y: 0, width: 14 } : { rotate: 0, y: 3, width: 9 }}
                transition={{ duration: reduce ? 0 : 0.35, ease }}
              />
            </span>
          </button>
        </div>

        {/* The small surprise: a dot that travels along the pill as you scroll the page. */}
        <span
          className={`pointer-events-none absolute inset-x-8 -bottom-px h-px transition-opacity duration-500 ${pill ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
        >
          <span className="absolute inset-0 bg-ink/5" />
          <motion.span
            className="absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
            style={{ left: progress }}
          />
        </span>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 -z-10 overflow-y-auto bg-blush lg:hidden"
            initial={reduce ? { opacity: 0 } : { clipPath: 'circle(0% at calc(100% - 44px) 36px)' }}
            animate={reduce ? { opacity: 1 } : { clipPath: 'circle(150% at calc(100% - 44px) 36px)' }}
            exit={reduce ? { opacity: 0 } : { clipPath: 'circle(0% at calc(100% - 44px) 36px)' }}
            transition={{ duration: reduce ? 0.2 : 0.7, ease }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '42px 42px',
              }}
              aria-hidden="true"
            />
            <div className="wrap relative flex min-h-full flex-col pt-24 pb-8 sm:pt-28">
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-muted uppercase">
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                Menu
              </p>
              <nav className="mt-6" aria-label="Mobile">
                <ul>
                  {siteConfig.menu.map((item, index) => (
                    <li key={item.id} className="border-b border-ink/10">
                      <Link
                        to={item.href}
                        onClick={(event) => go(event, item)}
                        aria-current={active === item.id ? (isHome ? 'location' : 'page') : undefined}
                        className="group flex items-center gap-4 py-3 sm:py-4"
                      >
                        <span className="font-script w-9 text-xl text-ink/60">(0{index + 1})</span>
                        <span className="block overflow-hidden">
                          <motion.span
                            className="block font-serif text-[clamp(2.4rem,11vw,4rem)] leading-[1.05] font-extrabold tracking-[-0.03em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2"
                            initial={reduce ? false : { y: '110%' }}
                            animate={{ y: '0%' }}
                            transition={{ duration: 0.7, delay: 0.18 + index * 0.06, ease }}
                          >
                            {item.label}
                          </motion.span>
                        </span>
                        <span
                          className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-ink/10 transition-transform duration-300 ${item.accent} ${
                            active === item.id ? 'scale-100' : 'scale-0 group-hover:scale-75'
                          }`}
                          aria-hidden="true"
                        >
                          <span className="h-2 w-2 rounded-full bg-ink" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <motion.div
                className="mt-auto grid gap-5 pt-10"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease }}
              >
                <p className="inline-flex w-fit items-center gap-2 rounded-full bg-ivory/70 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-ink/70 uppercase">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/30 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
                  </span>
                  {siteConfig.availability}
                </p>
                <a href={`mailto:${siteConfig.email}`} className="w-fit font-serif text-xl font-bold tracking-tight break-all">
                  {siteConfig.email}
                </a>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="w-fit text-sm font-semibold text-muted">
                  Instagram ↗
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
