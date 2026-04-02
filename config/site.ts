export const siteConfig = {
  name: "Gigacrux",
  description:
    "Innovative Software Lab - AI Solutions, Product Development & Custom Services",
  url: "https://gigacrux.com",
  ogImage: "https://gigacrux.com/og.jpg",
  links: {
    twitter: "https://twitter.com/giga_crux",
    github: "https://github.com/gigacrux",
    linkedin: "https://linkedin.com/company/gigacrux",
  },
  mainNav: [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "Products",
      href: "#products",
    },
    {
      title: "Services",
      href: "#features",
    },
    {
      title: "Why Us",
      href: "#why-us",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],
};

export type SiteConfig = typeof siteConfig
