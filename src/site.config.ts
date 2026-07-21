// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Christian Kirkeby',
  role: 'Full Stack Web Developer',
  email: 'contact@christiankirkeby.com',
  tagline: 'Embracing the web platform',
  description:
    'Portfolio of Christian Kirkeby - passionate about open source and UX.',
  status: null,
  social: [
    { label: 'GitHub', href: 'https://github.com/c-kirkeby' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christian-kirkeby' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
