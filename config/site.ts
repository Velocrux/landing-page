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
      href: '#home',
    },
    {
      title: 'Products',
      href: '#products',
    },
    {
      title: 'Services',
      href: '#features',
    },
    {
      title: 'Why Us',
      href: '#why-us',
    },
    {
      title: 'Testimonials',
      href: '#testimonials',
    },
    {
      title: 'FAQ',
      href: '#faq',
    },
    {
      title: 'Contact',
      href: '#contact',
    },
  ],
}

export type SiteConfig = typeof siteConfig
