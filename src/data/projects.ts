/**
 * ============================================================
 * PROJECTS
 * Drop your images/videos in /public/media then set `src` here.
 *
 * Examples:
 *   src: '/media/soft-glow-oil.mp4'
 *   poster: '/media/soft-glow-oil.jpg'
 *   type: 'video' | 'image' | 'placeholder'
 * ============================================================
 */

export type MediaType = 'video' | 'image' | 'placeholder'

export type ProjectMedia = {
  type: MediaType
  src?: string
  poster?: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  summary: string
  idea: string
  role: string[]
  contentCreated: string[]
  cover: ProjectMedia
  gallery: ProjectMedia[]
  accent: 'blush' | 'pink' | 'lavender' | 'lime' | 'sky' | 'mint' | 'yellow'
  size: 'large' | 'tall' | 'wide' | 'regular'
}

export const projects: Project[] = [
  {
    slug: 'soft-glow-oil',
    title: 'Soft Glow Oil',
    category: 'Beauty / Haircare / UGC',
    year: '',
    summary: 'Warm, tactile UGC that lets the product glow in real light — not a studio set.',
    idea: 'The idea was to treat the oil like a ritual, not a pitch. Soft morning light, hair in motion, and close product moments that feel like a story you’d actually save.',
    role: ['Content creation', 'Creative direction', 'UGC', 'Product styling', 'Editing'],
    contentCreated: ['UGC videos', 'Product photography', 'Short-form reels', 'Social media assets'],
    cover: {
      type: 'video',
      src: '/media/oil.mp4',
      alt: 'Soft Glow Oil UGC video',
    },
    gallery: [
      { type: 'placeholder', alt: 'Soft Glow Oil still 1 — add media' },
      { type: 'placeholder', alt: 'Soft Glow Oil still 2 — add media' },
      { type: 'placeholder', alt: 'Soft Glow Oil still 3 — add media' },
    ],
    accent: 'blush',
    size: 'large',
  },
  {
    slug: 'beauty-ugc',
    title: 'Beauty UGC',
    category: 'Beauty / Makeup / Lifestyle',
    year: '',
    summary: 'Relatable get-ready and lifestyle beauty content that still looks editorial.',
    idea: 'Beauty that feels lived-in. Talking to camera, texture close-ups, and everyday makeup moments styled so they stop the scroll without losing honesty.',
    role: ['Content creation', 'Creative direction', 'UGC', 'Product styling', 'Editing'],
    contentCreated: ['UGC videos', 'Product photography', 'Short-form reels', 'Social media assets'],
    cover: {
      type: 'video',
      src: '/media/beauty-ugc.mp4',
      alt: 'Beauty UGC video',
    },
    gallery: [
      { type: 'placeholder', alt: 'Beauty UGC still 1 — add media' },
      { type: 'placeholder', alt: 'Beauty UGC still 2 — add media' },
    ],
    accent: 'pink',
    size: 'tall',
  },
  {
    slug: 'product-campaigns',
    title: 'Product Campaigns',
    category: 'Product Content',
    year: '',
    summary: 'Cinematic product moments designed for feeds, ads, and launch days.',
    idea: 'Each campaign starts with one hook and one feeling. Then the product is styled, filmed, and cut so it can live as a hero clip and a set of shorter social cuts.',
    role: ['Content creation', 'Creative direction', 'UGC', 'Product styling', 'Editing'],
    contentCreated: ['UGC videos', 'Product photography', 'Short-form reels', 'Social media assets'],
    cover: {
      type: 'video',
      src: '/media/sgoigc.mp4',
      alt: 'Product Campaigns video',
    },
    gallery: [
      { type: 'placeholder', alt: 'Product campaign still 1 — add media' },
      { type: 'placeholder', alt: 'Product campaign still 2 — add media' },
    ],
    accent: 'lavender',
    size: 'regular',
  },
  {
    slug: 'social-media-content',
    title: 'Social Media Content',
    category: 'Reels / TikTok / Instagram',
    year: '',
    summary: 'Scroll-first concepts built for Reels, TikTok, and Instagram.',
    idea: 'Platform-native storytelling — hooks in the first second, a clear visual world, and captions that sound like a person, not a brand deck.',
    role: ['Content creation', 'Creative direction', 'UGC', 'Product styling', 'Editing'],
    contentCreated: ['UGC videos', 'Product photography', 'Short-form reels', 'Social media assets'],
    cover: {
      type: 'video',
      src: '/media/self.mp4',
      alt: 'Social Media Content video',
    },
    gallery: [
      { type: 'placeholder', alt: 'Social still 1 — add media' },
      { type: 'placeholder', alt: 'Social still 2 — add media' },
    ],
    accent: 'yellow',
    size: 'wide',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return projects[0]
  return projects[(index + 1) % projects.length]
}

export function getFeaturedProjects(slugs: string[]) {
  return slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project))
}
