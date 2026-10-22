import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Sparkle } from '../components/Decor'
import { PhoneFrame } from '../components/MediaFrames'
import { DropIn } from '../components/Motion'
import { BrowserCard, Chip, Clipboard, FactCard, NameTape, Polaroid, TornNote } from '../components/Paper'
import { ChromeStar, GlossyHeart, GoldStar, PuffCloud, Smiley, Tape } from '../components/Stickers'
import { VideoCard } from '../components/VideoCard'
import { getNextProject, getProject, projectNumber } from '../data/projects'

const ease = [0.22, 1, 0.36, 1] as const
const chipTones = ['sun', 'lilac', 'mint', 'pink'] as const

/** A numbered paper page of the case study. */
function Page({
  num,
  title,
  lead,
  rotate,
  lined = false,
  children,
}: {
  num: string
  title: string
  lead: string
  rotate: number
  lined?: boolean
  children: ReactNode
}) {
  return (
    <DropIn rotate={rotate}>
      <section
        className={`relative rounded-[18px] px-6 pt-9 pb-9 shadow-[0_22px_44px_rgba(200,80,130,0.18)] ring-1 ring-ink/5 sm:px-12 sm:pt-11 sm:pb-11 ${lined ? 'paper-lined pl-14 sm:pl-16' : 'bg-paper'}`}
      >
        <Tape className="-top-3 left-1/2 -ml-10" tone={chipTones[Number(num) % chipTones.length]} rotate={rotate * 2} />
        <p className="font-display text-3xl text-rose">{num}</p>
        <h2 className="font-display mt-1 text-[clamp(1.9rem,4.4vw,2.8rem)] leading-none">
          <span className="highlight">{title}</span>
        </h2>
        <p className="mt-2 font-mono text-[11px] tracking-[0.18em] text-ink/50 uppercase">{lead}</p>
        <div className="mt-6">{children}</div>
      </section>
    </DropIn>
  )
}

export function Project() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  const reduce = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])

  if (!project) return <Navigate to="/" replace />

  const next = getNextProject(project.slug)
  const previewMedia = project.websitePreview
    ? {
        type: 'image' as const,
        src: project.websitePreview,
        alt: `${project.title} website homepage`,
        orientation: 'horizontal' as const,
      }
    : project.cover
  const horizontal = previewMedia.orientation === 'horizontal'
  const roleLine = project.websiteRoles?.length ? project.websiteRoles : project.roles
  const roleChips = project.websiteRoles?.length ? project.websiteRoles : project.role
  const titleWords = project.title.split(' ')

  return (
    <main className="overflow-x-clip">
      {/* Sky header */}
      <section ref={heroRef} className="bg-sky-dots relative -mt-[86px] overflow-hidden pt-[86px] pb-24 sm:pb-32">
        <PuffCloud className="top-24 -left-20 w-80" float={18} />
        <PuffCloud className="top-[40%] right-[-60px] w-96" float={22} delay={-6} />
        <Sparkle className="top-[26%] left-[40%] h-4 w-4" tone="white" delay={0.4} />

        <div className="wrap relative pt-6 sm:pt-10">
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium shadow-[0_4px_0_rgba(60,90,140,0.25)] transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> All work
          </Link>

          <div className={`mt-10 grid items-center gap-14 ${horizontal ? '' : 'lg:grid-cols-12'}`}>
            <div className={horizontal ? 'max-w-3xl' : 'lg:col-span-7'}>
              <div className="flex flex-wrap items-center gap-3">
                <Chip tone="sun">{project.chip}</Chip>
                {project.websiteUrl ? <Chip tone="sky">Website</Chip> : null}
                <span className="font-script text-2xl text-ink/60">({projectNumber(project)})</span>
              </div>
              <h1 className="font-display mt-4 text-[clamp(3rem,10vw,6.6rem)] leading-[0.92]">
                {titleWords.map((word, index) => (
                  <span key={`${word}-${index}`} className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
                    <motion.span
                      className="inline-block"
                      initial={reduce ? false : { y: '110%' }}
                      animate={{ y: '0%' }}
                      transition={{ duration: 0.9, delay: 0.1 + index * 0.07, ease }}
                    >
                      {word}
                      {index < titleWords.length - 1 ? ' ' : ''}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <p className="mt-3 font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">{project.category}</p>
              <p className="mt-3 inline-flex flex-wrap items-center gap-x-2 rounded-full bg-white/80 px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-ink uppercase shadow-[0_6px_14px_rgba(60,90,140,0.12)] sm:text-xs">
                <span className="text-rose">My role</span>
                {roleLine.join(' · ')}
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
                {project.websitePurpose ?? project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Chip key={tag} tone={chipTones[index % chipTones.length]}>
                    {tag}
                  </Chip>
                ))}
                {project.websiteTech?.map((tech) => (
                  <Chip key={tech} tone="mint">
                    {tech}
                  </Chip>
                ))}
              </div>
              {project.websiteUrl ? (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ivory shadow-[0_5px_0_#4a4a4a] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_3px_0_#4a4a4a]"
                >
                  Explore website <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:rotate-45" />
                </a>
              ) : null}
            </div>

            <motion.div style={{ y: mediaY }} className={`relative ${horizontal ? '' : 'mx-auto w-full max-w-[230px] sm:max-w-[300px] lg:col-span-5'}`}>
              <DropIn rotate={horizontal ? -1 : 4}>
                {horizontal ? (
                  <Clipboard>
                    <div className="rounded-xl bg-paper p-2 sm:p-3">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <VideoCard media={previewMedia} accent={project.accent} overlay={false} autoPlay />
                      </div>
                    </div>
                  </Clipboard>
                ) : (
                  <PhoneFrame>
                    <VideoCard media={previewMedia} accent={project.accent} overlay={false} autoPlay />
                  </PhoneFrame>
                )}
              </DropIn>
              <Smiley className="-top-6 -right-6 z-10 h-16 w-16" rotate={12} />
              <GoldStar className="bottom-16 -left-8 z-10 h-12 w-12" rotate={-14} />
              <NameTape className="relative z-10 -mt-4">{project.title}</NameTape>
              <FactCard facts={project.facts} className="mx-auto mt-4 max-w-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pink pages */}
      <div className="bg-sky-lav relative overflow-hidden pt-16 pb-28 sm:pt-20">
        <PuffCloud className="top-[20%] -right-24 w-80" float={22} />
        <PuffCloud className="top-[60%] -left-24 w-80" float={26} delay={-5} />

        <div className="wrap relative mx-auto grid max-w-4xl gap-14">
          <Page num="01" title="The Project" lead="What I created" rotate={-1}>
            <p className="font-display text-[clamp(1.3rem,2.6vw,1.9rem)] leading-snug">
              {project.websitePurpose ?? project.summary}
            </p>
          </Page>

          <Page num="02" title="The Idea" lead="The creative direction behind it" rotate={1} lined>
            <p className="text-[1.02rem] leading-[28px] text-ink/80">{project.idea}</p>
          </Page>

          <Page
            num="03"
            title={project.websiteHighlights?.length ? 'Design decisions' : 'The Content'}
            lead={project.websiteHighlights?.length ? 'Layout, interface & usability choices' : 'What was produced'}
            rotate={-0.8}
          >
            {project.websiteHighlights?.length ? (
              <ul className="grid gap-2.5">
                {project.websiteHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[1rem]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-rose text-rose">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {project.websiteTech?.length ? (
              <div className={`${project.websiteHighlights?.length ? 'mt-6' : ''} flex flex-wrap gap-2`}>
                {project.websiteTech.map((tech) => (
                  <Chip key={tech} tone="mint">
                    {tech}
                  </Chip>
                ))}
              </div>
            ) : null}
            {project.contentCreated.length > 0 ? (
              <>
                {project.websiteHighlights?.length ? (
                  <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-ink/50 uppercase">What shipped</p>
                ) : null}
                <ul className={`grid gap-2.5 sm:grid-cols-2 ${project.websiteHighlights?.length ? 'mt-3' : ''}`}>
                  {project.contentCreated.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[1rem]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-rose text-rose">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {project.gallery.length > 0 ? (
              <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10">
                {project.gallery.map((media, index) => (
                  <DropIn key={media.src} rotate={index % 2 === 0 ? -5 : 5} delay={index * 0.08} className="w-[44%] max-w-[220px]">
                    <Polaroid caption={media.caption} tape={index % 2 === 0 ? 'pink' : 'lilac'}>
                      <div className="aspect-[9/16]">
                        <VideoCard media={media} accent={project.accent} overlay={false} autoPlay />
                      </div>
                    </Polaroid>
                  </DropIn>
                ))}
              </div>
            ) : null}
          </Page>

          <div className="relative">
            <DropIn rotate={-2}>
              <TornNote className="mx-auto max-w-2xl px-8 py-10 sm:px-12" rotate={0}>
                <p className="font-display text-3xl text-rose">04</p>
                <h2 className="font-display mt-1 text-[clamp(1.9rem,4.4vw,2.8rem)] leading-none">The Goal</h2>
                <p className="mt-2 font-mono text-[11px] tracking-[0.18em] text-ink/50 uppercase">
                  {project.websiteUrl ? 'What the website set out to do' : 'What the content set out to do'}
                </p>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-ink">{project.goal}</p>
              </TornNote>
            </DropIn>
            <GlossyHeart className="-top-6 right-[10%] h-14 w-14" rotate={14} />
          </div>

          <Page num="05" title="My Role" lead="Hands on, start to finish" rotate={1.2} lined>
            <div className="flex flex-wrap gap-2">
              {roleChips.map((item, index) => (
                <Chip key={item} tone={chipTones[index % chipTones.length]}>
                  {item}
                </Chip>
              ))}
            </div>
          </Page>

          {/* Next project */}
          <div className="relative">
            <ChromeStar className="-top-8 -left-4 z-10 h-14 w-14" rotate={-12} />
            <Link to={`/work/${next.slug}`} className="group block">
              <BrowserCard address={`next / ${next.slug}`} className="transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-0.5deg]">
                <div className="flex items-center gap-6 px-6 py-7 sm:px-10">
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-ink/50 uppercase">Next project</p>
                    <p className="font-display mt-2 text-[clamp(2rem,6vw,3.6rem)] leading-none text-rose transition-transform duration-500 group-hover:translate-x-2">
                      {next.title}
                    </p>
                    <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-ink/60 uppercase">{next.category}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-ivory shadow-[0_4px_0_#4a4a4a] transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </BrowserCard>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
