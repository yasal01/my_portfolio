/**
 * ============================================================
 * EDIT YOUR DETAILS HERE
 * Name, bio, socials, email, featured slots.
 * ============================================================
 */

export const siteConfig = {
  name: 'Yasal',
  firstName: 'Yasal',
  role: 'Social Media Manager & Video Editor',
  tagline: 'I plan, create & edit content that makes brands stand out.',
  heroText:
    'From the content calendar to the final cut: I manage your social presence, shape the ideas and edit them into videos people actually stop for.',
  /** What I do, in order of focus */
  disciplines: ['Social media management', 'Video editing', 'Content creation', 'Creative strategy'],
  about: [
    "I'm a social media manager and video editor who loves the whole journey of a post: planning the calendar, shaping the idea, and cutting the final edit so it lands in the first second.",
    "I plan content with a reason to exist, edit with an eye for pacing, text and transitions, and keep experimenting with AI and new creative tools to push ideas further. The goal is always the same: help brands show up consistently and feel more human, memorable and worth following.",
  ],
  availability: 'Available for collaborations',
  location: '',

  // Add your portrait: '/media/portrait.jpg'
  portrait: '/media/portrait.jpg',

  // Replace these with your real links
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

  /** Things I love doing — shown in About */
  aboutLoves: [
    'Planning content with a purpose',
    'Editing: pacing, text & transitions',
    'Turning briefs into creative concepts',
    'Experimenting with AI & creative tools',
    'Making brands feel human',
  ],

  process: [
    { num: '01', title: 'Plan', text: 'Understand the brand, audience and goals, then map the content plan.' },
    { num: '02', title: 'Concept', text: 'Hooks, formats, captions and a content calendar that fits the brand.' },
    { num: '03', title: 'Create & edit', text: 'Shoot or source the footage, then edit with pacing, text and transitions.' },
    { num: '04', title: 'Publish & refine', text: 'Deliver platform-ready posts and keep refining the content direction.' },
  ],

}
