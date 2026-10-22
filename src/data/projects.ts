/**
 * ============================================================
 * PROJECTS
 * Drop your images/videos in /public/media then set `src` here.
 *
 * Examples:
 *   src: '/media/soft-glow-hair-reveal.mp4'
 *   poster: '/media/soft-glow-hair-reveal-poster.jpg'
 *   type: 'video' | 'image' | 'placeholder'
 * ============================================================
 */

export type MediaType = 'video' | 'image' | 'placeholder'

export type ProjectMedia = {
  type: MediaType
  src?: string
  poster?: string
  alt: string
  /** Frame shape of the source. Defaults to 'vertical' (9:16). */
  orientation?: 'vertical' | 'horizontal'
  /** Short label shown under gallery items on the project page */
  caption?: string
}

export type Project = {
  slug: string
  title: string
  category: string
  /** Short chip shown on cards, e.g. "Beauty" */
  chip: string
  /** My role on this project, shown as a line on every card (only what I actually did) */
  roles: string[]
  summary: string
  idea: string
  /** What the content set out to communicate — an intention, never a claimed result */
  goal: string
  tags: string[]
  role: string[]
  contentCreated: string[]
  /** Three facts for the little info card under each project (no invented stats) */
  facts: { label: string; value: string }[]
  /** 'short' = vertical phone-first work, 'long' = horizontal / cinematic work */
  format: 'short' | 'long'
  cover: ProjectMedia
  gallery: ProjectMedia[]
  accent: 'blush' | 'pink' | 'lavender' | 'lime' | 'sky' | 'mint' | 'yellow'
  /** Live website URL when this project also includes a site I designed/built */
  websiteUrl?: string
  /** Short line for the websites section (falls back to summary) */
  websiteBlurb?: string
  /** Purpose of the live website (not the social content set) */
  websitePurpose?: string
  /** My contribution on the website build */
  websiteRoles?: string[]
  /** Technologies verified in the project source */
  websiteTech?: string[]
  /** Design / development decisions demonstrated in the build */
  websiteHighlights?: string[]
  /** Real homepage screenshot of the live website (preferred over video poster for UI work) */
  websitePreview?: string
}

export const projects: Project[] = [
  {
    slug: 'soft-glow-oil',
    title: 'Soft Glow Oil',
    category: 'Haircare · Social + Website',
    chip: 'Haircare',
    roles: ['Social media content', 'Video editing', 'Website UI'],
    summary: 'A haircare content set planned and edited as one social story — plus a warm, shoppable brand website with the same soft glow.',
    idea: 'Lead with the result, then the reason. The reveal reel opens on the hair itself (length, shine, movement) before revealing the bottle behind it, with “the hair vs the product I use” doing the hook. A warm product film and a tactile unboxing round out the set, so the brand gets a hero clip, a proof point and a how-to.',
    goal: 'Make the oil feel like a believable ritual on social — and give Soft Glow a warm, shoppable website that matches the same brand mood.',
    tags: ['Reels', 'Product film', 'Haircare', 'Web UI'],
    role: ['Creative direction', 'Concept & hooks', 'Video editing', 'Website UI & build', 'Product styling'],
    contentCreated: ['Hair reveal reel', 'Cinematic product film', 'Unboxing & application clip', 'Brand website'],
    facts: [
      { label: 'Format', value: '9:16 + web' },
      { label: 'Clips', value: '3' },
      { label: 'Role', value: 'Edit + UI' },
    ],
    format: 'short',
    cover: {
      type: 'video',
      src: '/media/soft-glow-hair-reveal.mp4',
      poster: '/media/soft-glow-hair-reveal-poster.jpg',
      alt: 'Long hair reveal ending on the Soft Glow Oil bottle, captioned “the hair vs the product I use”',
    },
    gallery: [
      {
        type: 'video',
        src: '/media/oil.mp4',
        poster: '/media/oil-poster.jpg',
        alt: 'Soft Glow Oil bottle glowing in warm light',
        caption: 'Product film',
      },
      {
        type: 'video',
        src: '/media/sgoigc.mp4',
        poster: '/media/sgoigc-poster.jpg',
        alt: 'Hands unboxing Soft Glow Oil and applying a few drops',
        caption: 'Unboxing & application',
      },
    ],
    accent: 'blush',
    websiteUrl: 'https://soft-glow-oil.vercel.app/',
    websiteBlurb: 'A warm, feminine haircare storefront: product pages, ingredients, reviews and a soft shopping flow that matches the brand’s glow.',
    websitePurpose: 'Give Soft Glow Oil a soft, shoppable brand site that feels as gentle as the product — from homepage story to product detail.',
    websiteRoles: ['UI design', 'Website development', 'Responsive layout', 'Product & cart experience'],
    websiteTech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    websitePreview: '/media/soft-glow-site.jpg',
    websiteHighlights: [
      'Warm cream/gold palette with clear hierarchy: announcement bar, nav, hero, CTA',
      'Section order planned for scanning: product, ingredients, story, reviews, FAQ',
      'Simple shop flow: product detail, purchase panel and cart drawer',
      'Responsive nav and components that stay readable on phone and desktop',
    ],
  },
  {
    slug: 'lip-gloss-workshop',
    title: 'Lip Gloss Workshop',
    category: 'Event · Social content',
    chip: 'Event',
    roles: ['Event content', 'Video editing', 'Captions & styling'],
    summary: 'A cosy café workshop turned into a reel that makes you wish you’d been there.',
    idea: 'Event content lives or dies on atmosphere. I captured the room first (the long table, the recipe cards, the jars of glitter and charms), then the small moments: mixing shades, the “Draw Yourself” wall, a final swatch, and the café cat stealing the ending. Soft pink captions keep it playful and on-theme.',
    goal: 'Capture the mood of the day so the people who missed it want to be at the next one.',
    tags: ['Event coverage', 'Reels', 'Lifestyle', 'Captions'],
    role: ['Event coverage', 'Filming', 'Shot planning on the day', 'Editing', 'Captions & text styling'],
    contentCreated: ['Event recap reel', 'Detail & B-roll shots', 'Story-ready vertical cuts'],
    facts: [
      { label: 'Format', value: '9:16' },
      { label: 'Type', value: 'Recap' },
      { label: 'Role', value: 'Film + edit' },
    ],
    format: 'short',
    cover: {
      type: 'video',
      src: '/media/lip-gloss-workshop.mp4',
      poster: '/media/lip-gloss-workshop-poster.jpg',
      alt: 'Guests making lip gloss at a café workshop table',
    },
    gallery: [],
    accent: 'yellow',
  },
  {
    slug: 'beauty-ugc',
    title: 'Beauty Reels',
    category: 'Beauty · Short-form',
    chip: 'Beauty',
    roles: ['Video editing', 'Product content', 'Social content'],
    summary: 'Get-ready and product moments cut into short-form beauty content that feels relatable and still looks editorial.',
    idea: 'Beauty that feels lived-in. Texture close-ups, product moments and everyday makeup, edited with quick pacing so they stop the scroll without losing honesty.',
    goal: 'Show makeup in a way that feels honest and everyday, while still looking polished enough to stop the scroll.',
    tags: ['Beauty', 'Reels', 'Product', 'Editing'],
    role: ['Creative direction', 'Video editing', 'Product styling', 'Social content'],
    contentCreated: ['Short-form reels', 'Product moments', 'Social media assets'],
    facts: [
      { label: 'Format', value: '9:16' },
      { label: 'Style', value: 'Reels' },
      { label: 'Role', value: 'Edit' },
    ],
    format: 'short',
    cover: {
      type: 'video',
      src: '/media/beauty-ugc.mp4',
      poster: '/media/beauty-ugc-poster.jpg',
      alt: 'Short-form beauty video with product close-ups',
    },
    gallery: [],
    accent: 'pink',
  },
  {
    slug: 'faceless-review',
    title: 'Faceless Product Review',
    category: 'Product review · Video',
    chip: 'Skincare',
    roles: ['Scripting', 'Video editing', 'Product content'],
    summary: 'A product review where the product, the hands and the voice do the work. Scripted, filmed and edited horizontally for YouTube, ads and websites.',
    idea: 'Not every brand needs a face on camera. A playful flower cover-up keeps the identity private while the framing stays on what matters: holding the bottle, showing it up close, and talking it through like a friend would. Shot horizontally so it works for YouTube, ads and website embeds.',
    goal: 'Show that a review can feel personal without showing a face, keeping every second of attention on the product and the voice.',
    tags: ['Product review', 'Skincare', 'Horizontal', 'Editing'],
    role: ['Scripting', 'Filming', 'Video editing', 'On-camera hands & voice'],
    contentCreated: ['Horizontal review video', 'Ad-ready product talk', 'Website & YouTube cut'],
    facts: [
      { label: 'Format', value: '16:9' },
      { label: 'Style', value: 'Faceless' },
      { label: 'Role', value: 'Script + film' },
    ],
    format: 'long',
    cover: {
      type: 'video',
      src: '/media/faceless-review.mp4',
      poster: '/media/faceless-review-poster.jpg',
      alt: 'A product review with a flower covering the face, holding a skincare bottle',
      orientation: 'horizontal',
    },
    gallery: [],
    accent: 'lavender',
  },
  {
    slug: 'noirel',
    title: 'NOIREL',
    category: 'Fashion / AI Film / Web Design',
    chip: 'Fashion',
    roles: ['Visual direction', 'Video editing', 'AI film'],
    summary: 'A cinematic brand world for a fictional black-on-black fashion label, built around my own AI-generated film.',
    idea: 'NOIREL makes clothing for the in-between hours: sharp tailoring, fluid layers and black-on-black pieces. I built the whole world in charcoal, graphite and silver, with brutalist architecture, slow camera moves and a scroll-driven website, so the label feels like a mood before it feels like a product.',
    goal: 'Create a complete fashion label from nothing (name, palette, film and website) to show how AI tools and editorial direction can work together.',
    tags: ['Fashion', 'AI film', 'Google Flow', 'Web design'],
    role: ['Concept & naming', 'Art direction', 'AI film (Google Flow)', 'Web design & build'],
    contentCreated: ['Hero campaign film', 'Editorial scroll website', 'Palette & typography system'],
    facts: [
      { label: 'Format', value: '16:9' },
      { label: 'Made with', value: 'AI' },
      { label: 'Role', value: 'Direction' },
    ],
    format: 'long',
    cover: {
      type: 'video',
      src: '/media/noirel-film.mp4',
      poster: '/media/noirel-film-poster.jpg',
      alt: 'A model in black standing in a vast concrete hall as the camera slowly moves in',
      orientation: 'horizontal',
    },
    gallery: [],
    accent: 'sky',
    websiteUrl: 'https://noirel-aura.vercel.app/',
    websiteBlurb: 'A scroll-driven editorial site in charcoal, graphite and silver — brutalist frames, film scenes and a cinematic first impression for the label.',
    websitePurpose: 'Build a complete fashion-label world online: dark editorial UI, film-led chapters and a scroll experience that feels like walking through a campaign.',
    websiteRoles: ['Concept & art direction', 'UI/UX design', 'Website development', 'Scroll choreography'],
    websiteTech: ['Next.js', 'React', 'TypeScript', 'GSAP', 'Lenis'],
    websitePreview: '/media/noirel-site.jpg',
    websiteHighlights: [
      'Dark monochrome UI with strong type hierarchy (display serif + utility sans)',
      'Chapter rail and scroll cues so long-form browsing stays oriented',
      'Scroll-driven scenes (GSAP + Lenis) for a film-like path through the brand',
      'Editorial frames and CTAs designed to stay clear across screen sizes',
    ],
  },
  {
    slug: 'socutesy',
    title: 'SoCutesy',
    category: 'E-commerce · Website',
    chip: 'Shop',
    roles: ['Website development', 'UI/UX design', 'Frontend build'],
    summary: 'A boutique e-commerce site for customisable Polaroid-style gifts — shop pages, product flows and a soft, scrapbook-inspired storefront.',
    idea: 'SoCutesy needed a storefront that feels as personal as the gifts: magazine-style hero moments, clear product browsing, and a customisation path that still feels light and friendly on mobile.',
    goal: 'Ship a responsive React shop front that makes browsing and ordering feel simple, while keeping the brand’s cute, gift-led personality.',
    tags: ['E-commerce', 'React', 'Vite', 'UI/UX'],
    role: ['UI design', 'Frontend development', 'Responsive layouts', 'Shop & product flows'],
    contentCreated: ['Shop homepage', 'Product browsing UI', 'Responsive storefront'],
    facts: [
      { label: 'Stack', value: 'Vite' },
      { label: 'Type', value: 'Shop' },
      { label: 'Role', value: 'Build + UI' },
    ],
    format: 'long',
    cover: {
      type: 'image',
      src: '/media/socutesy-site.jpg',
      alt: 'SoCutesy gift shop homepage with soft pastel UI and shop CTAs',
      orientation: 'horizontal',
    },
    gallery: [],
    accent: 'mint',
    websiteUrl: 'https://socutesy.vercel.app/',
    websiteBlurb: 'A soft boutique shop for Polaroid-style gifts, built as a responsive React storefront.',
    websitePurpose: 'Give SoCutesy a live shop experience: browse gifts, explore products and move through a friendly ordering flow on any screen.',
    websiteRoles: ['Website development', 'UI/UX design', 'Responsive frontend'],
    websiteTech: ['Vite', 'React', 'Tailwind CSS', 'Framer Motion'],
    websitePreview: '/media/socutesy-site.jpg',
    websiteHighlights: [
      'Pastel boutique UI with clear hierarchy: announcement, nav, hero, shop CTA',
      'Category chips and product browsing laid out for quick scanning',
      'Phone mockups and gift flows designed to feel personal on mobile',
      'Consistent spacing, type and soft colour system across the storefront',
    ],
  },
]

/** Projects that have a live website to showcase. */
export function getWebsiteProjects() {
  return projects.filter((project) => Boolean(project.websiteUrl))
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

/** Two-digit index used as the project's number across the site, e.g. "01". */
export function projectNumber(project: Project) {
  return String(projects.indexOf(project) + 1).padStart(2, '0')
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return projects[0]
  return projects[(index + 1) % projects.length]
}

/** Every clip and its poster across all projects, for the stills wall. */
export function getAllMedia() {
  return projects.flatMap((project) => [project.cover, ...project.gallery].map((media) => ({ project, media })))
}
