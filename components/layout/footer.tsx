'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Main Page',
      links: [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { title: 'Integration', href: '/integration' },
        { title: 'Teams', href: '/teams' },
        { title: 'Career', href: '/career' },
        { title: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { title: 'Privacy Policy', href: '/privacy' },
        { title: 'Terms & Conditions', href: '/terms' },
        { title: 'Waitlist', href: '/waitlist' },
        { title: 'Changelog', href: '/changelog' },
      ],
    },
  ]

  return (
    <footer className="bg-primary-navy-light border-t border-neutral-dark-gray">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-bold text-gradient">
                {siteConfig.name}
              </div>
            </Link>
            <p className="text-neutral-medium-gray mb-6 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-cyan hover:border-primary-cyan transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-cyan hover:border-primary-cyan transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-cyan hover:border-primary-cyan transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-medium-gray hover:text-primary-cyan transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-dark-gray">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-medium-gray text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-neutral-medium-gray text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
