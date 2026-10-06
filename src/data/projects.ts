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
}

export const projects: Project[] = [
  {
    slug: 'soft-glow-oil',
    title: 'Soft Glow Oil',
    category: 'Haircare · Social content',
    chip: 'Haircare',
    roles: ['Social media content', 'Video editing', 'Creative direction'],
    summary: 'A haircare content set planned and edited as one social story: a hair-first reveal reel, a glowing product film and a hands-on unboxing.',
    idea: 'Lead with the result, then the reason. The reveal reel opens on the hair itself (length, shine, movement) before revealing the bottle behind it, with “the hair vs the product I use” doing the hook. A warm product film and a tactile unboxing round out the set, so the brand gets a hero clip, a proof point and a how-to.',
    goal: 'Make the oil feel like a believable ritual: show the hair first so the product earns its moment, and give the brand content for both organic posts and ads.',
    tags: ['Reels', 'Product film', 'Haircare', 'Editing'],
    role: ['Creative direction', 'Concept & hooks', 'Video editing', 'Filming', 'Product styling', 'On camera for the reveal'],
    contentCreated: ['Hair reveal reel', 'Cinematic product film', 'Unboxing & application clip', 'Social cut-downs'],
    facts: [
      { label: 'Format', value: '9:16' },
      { label: 'Clips', value: '3' },
      { label: 'Role', value: 'Edit + direct' },
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
  },
]

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
