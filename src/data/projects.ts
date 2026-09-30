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
  year: string
  summary: string
  idea: string
  role: string[]
  contentCreated: string[]
  cover: ProjectMedia
  gallery: ProjectMedia[]
  accent: 'blush' | 'pink' | 'lavender' | 'lime' | 'sky' | 'mint' | 'yellow'
  /**
   * Placement on the home page:
   *  feature    — lead case study in Selected Work, with its gallery clips alongside
   *  wide       — full-width horizontal moment in Selected Work
   *  supporting — smaller asymmetric card in More Projects
   */
  size: 'feature' | 'wide' | 'supporting'
}

export const projects: Project[] = [
  {
    slug: 'soft-glow-oil',
    title: 'Soft Glow Oil',
    category: 'Haircare / UGC / Product',
    year: '',
    summary: 'A haircare story told three ways: a hair-first UGC reveal, a glowing product film, and a hands-on unboxing.',
    idea: 'Lead with the result, then the reason. The UGC reel opens on the hair itself (length, shine, movement) before revealing the bottle behind it, with “the hair vs the product I use” doing the hook. A warm product film and a tactile unboxing round out the set, so the brand gets a hero clip, a proof point and a how-to.',
    role: ['Concept & hook', 'On-camera talent', 'Product styling', 'Filming', 'Editing'],
    contentCreated: ['Hair reveal UGC reel', 'Cinematic product film', 'Unboxing & application clip', 'Organic social cuts'],
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
    size: 'feature',
  },
  {
    slug: 'faceless-review',
    title: 'Faceless Product Review',
    category: 'Beauty / Talking-head UGC',
    year: '',
    summary: 'A talk-to-camera review where the product, the hands and the voice do the work. No face required.',
    idea: 'Not every creator wants to be on camera, and not every brand needs a face. A playful flower cover-up keeps the identity private while the framing stays on what matters: holding the bottle, showing it up close, and talking it through like a friend would. Shot horizontally so it works for YouTube, ads and website embeds.',
    role: ['Scripting', 'On-camera talent', 'Filming', 'Editing'],
    contentCreated: ['Horizontal review video', 'Ad-ready product talk', 'Website & YouTube cut'],
    cover: {
      type: 'video',
      src: '/media/faceless-review.mp4',
      poster: '/media/faceless-review-poster.jpg',
      alt: 'Creator with a flower covering their face talking about a skincare bottle',
      orientation: 'horizontal',
    },
    gallery: [],
    accent: 'lavender',
    size: 'wide',
  },
  {
    slug: 'lip-gloss-workshop',
    title: 'Lip Gloss Workshop',
    category: 'Event / Experience Reel',
    year: '',
    summary: 'A cosy café workshop turned into a reel that makes you wish you’d been there.',
    idea: 'Event content lives or dies on atmosphere. I captured the room first (the long table, the recipe cards, the jars of glitter and charms), then the small moments: mixing shades, the “Draw Yourself” wall, a final swatch, and the café cat stealing the ending. Soft pink captions keep it playful and on-theme.',
    role: ['Event coverage', 'Filming', 'Shot planning on the day', 'Editing', 'Captions & text styling'],
    contentCreated: ['Event recap reel', 'Detail & B-roll shots', 'Story-ready vertical cuts'],
    cover: {
      type: 'video',
      src: '/media/lip-gloss-workshop.mp4',
      poster: '/media/lip-gloss-workshop-poster.jpg',
      alt: 'Guests making lip gloss at a café workshop table',
    },
    gallery: [],
    accent: 'yellow',
    size: 'supporting',
  },
  {
    slug: 'beauty-ugc',
    title: 'Beauty UGC',
    category: 'Beauty / Makeup / Lifestyle',
    year: '',
    summary: 'Relatable get-ready and lifestyle beauty content that still looks editorial.',
    idea: 'Beauty that feels lived-in. Talking to camera, texture close-ups, and everyday makeup moments styled so they stop the scroll without losing honesty.',
    role: ['Content creation', 'Creative direction', 'UGC', 'Product styling', 'Editing'],
    contentCreated: ['UGC videos', 'Short-form reels', 'Social media assets'],
    cover: {
      type: 'video',
      src: '/media/beauty-ugc.mp4',
      poster: '/media/beauty-ugc-poster.jpg',
      alt: 'Talk-to-camera beauty UGC video',
    },
    gallery: [],
    accent: 'pink',
    size: 'supporting',
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

/** Every vertical clip across all projects, for the "Content in motion" reel strip. */
export function getReelClips() {
  return projects.flatMap((project) =>
    [project.cover, ...project.gallery]
      .filter((media) => media.type === 'video' && media.orientation !== 'horizontal')
      .map((media) => ({ project, media })),
  )
}
