/**
 * ============================================================
 * EDIT YOUR DETAILS HERE
 * Name, bio, socials, email, featured slots.
 * ============================================================
 */

export const siteConfig = {
  name: 'Yasal',
  firstName: 'Yasal',
  role: 'Social Media · Video · Web & UI/UX',
  tagline: 'I plan content, edit video, and design brand websites that feel clear and consistent.',
  heroText:
    'From content calendars and scroll-stopping edits to responsive websites and clear UI — I combine social media management, video editing, website development and UI/UX design so brands feel consistent everywhere they show up.',
  /** What I do, in order of focus */
  disciplines: [
    'Social media management',
    'Video editing',
    'Website development',
    'UI/UX design',
  ],
  about: [
    "I'm a social media manager and video editor who also designs and builds brand websites — so the story stays consistent from the feed to the site.",
    'I care about layout, hierarchy, typography, colour and spacing as much as pacing in a reel. Soft Glow Oil, NOIREL and SoCutesy show that interface and website work in practice: clear navigation, responsive layouts and usable UI.',
  ],
  availability: 'Available for collaborations',
  location: '',

  portrait: '/media/portrait.jpg',

  email: 'yasalshabbir05@gmail.com',
  instagram: 'https://www.instagram.com/yasaall__/',

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/#contact' },
  ],

  /** Header menu. `id` matches the section id on the home page; `accent` colours its active pill. */
  menu: [
    { id: 'home', label: 'Home', href: '/', accent: 'bg-pink' },
    { id: 'work', label: 'Work', href: '/#work', accent: 'bg-lavender' },
    { id: 'about', label: 'About', href: '/#about', accent: 'bg-mint' },
    { id: 'services', label: 'Services', href: '/#services', accent: 'bg-sky' },
    { id: 'contact', label: 'Contact', href: '/#contact', accent: 'bg-yellow' },
  ],

  /** Things I love doing — shown in About (includes all four skill areas) */
  aboutLoves: [
    'Social media planning & content strategy',
    'Video editing: pacing, text & transitions',
    'Website development with React',
    'UI/UX: layouts, hierarchy & usability',
    'Responsive, brand-led interfaces',
    'Making brands feel human online',
  ],

  process: [
    { num: '01', title: 'Plan', text: 'Understand the brand, audience and goals, then map content and site structure.' },
    { num: '02', title: 'Concept', text: 'Hooks, layouts, captions and a direction that fits the brand on feed and web.' },
    { num: '03', title: 'Create & build', text: 'Edit video with pacing and text, and shape clear UI with responsive layouts.' },
    { num: '04', title: 'Polish & refine', text: 'Ship platform-ready work, then tighten spacing, hierarchy and usability.' },
  ],
}
