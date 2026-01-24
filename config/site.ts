export const siteConfig = {
  name: 'Velocrux',
  description: 'Innovative Software Lab - AI Solutions, Product Development & Custom Services',
  url: 'https://velocrux.com',
  ogImage: 'https://velocrux.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/velocrux',
    github: 'https://github.com/velocrux',
    linkedin: 'https://linkedin.com/company/velocrux',
  },
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Products',
      href: '/products',
    },
    {
      title: 'Services',
      href: '/services',
    },
    {
      title: 'AI Solutions',
      href: '/ai-solutions',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
}

export type SiteConfig = typeof siteConfig
