export const siteConfig = {
  name: 'Velocrux',
  description: 'Automate Your AI Workflows with AI Agent',
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
      title: 'About',
      href: '/about',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
}

export type SiteConfig = typeof siteConfig
