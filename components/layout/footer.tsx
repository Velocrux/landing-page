'use client'

import Image from 'next/image'
import { Github, Linkedin, Twitter, Mail, MapPin, Zap } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)

    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const quickLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Products', href: '#products' },
    { title: 'Features', href: '#features' },
    { title: 'Why Choose Us', href: '#why-us' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Contact', href: '#contact' },
  ]

  const services = [
    'AI Solutions',
    'Prototype Development',
    'Digital Services',
    'Innovation Lab',
    'ArabAudit',
    'Custom Development',
    'Consulting',
  ]

  const industries = [
    'Healthcare',
    'Logistics',
    'Education',
    'Energy',
    'Tourism',
    'E-Commerce',
  ]

  return (
    <footer className="relative footer-bg border-t border-slate-300 dark:border-white/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-electric-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-vibrant-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="inline-block mb-6 group">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Velocrux Logo"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-2xl font-bold text-gradient-enhanced">
                  {siteConfig.name}
                </span>
              </div>
            </a>
            <p className="text-theme-secondary-bright mb-6 text-sm leading-relaxed">
              Transforming ideas into impactful digital solutions with AI-powered innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:kauser@velocrux.com"
                className="flex items-center gap-2 text-theme-secondary-bright hover:text-electric-cyan transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-electric-cyan/10 flex items-center justify-center group-hover:bg-electric-cyan/20 transition-colors">
                  <Mail size={14} className="text-electric-cyan" />
                </div>
                <span>kauser@velocrux.com</span>
              </a>
              <div className="flex items-center gap-2 text-theme-secondary-bright text-sm">
                <div className="w-8 h-8 rounded-lg bg-vibrant-orange/10 flex items-center justify-center">
                  <MapPin size={14} className="text-vibrant-orange" />
                </div>
                <span>Global • Remote First</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 flex items-center justify-center hover:bg-electric-cyan/20 hover:border-electric-cyan/50 transition-all group"
                aria-label="Twitter"
              >
                <Twitter size={16} className="text-slate-700 dark:text-white group-hover:text-electric-cyan transition-colors" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 flex items-center justify-center hover:bg-electric-cyan/20 hover:border-electric-cyan/50 transition-all group"
                aria-label="GitHub"
              >
                <Github size={16} className="text-slate-700 dark:text-white group-hover:text-electric-cyan transition-colors" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 flex items-center justify-center hover:bg-electric-cyan/20 hover:border-electric-cyan/50 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-slate-700 dark:text-white group-hover:text-electric-cyan transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Zap size={16} className="text-electric-cyan" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-theme-secondary-bright hover:text-electric-cyan transition-colors text-sm inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-1 h-1 bg-electric-cyan rounded-full group-hover:w-2 transition-all" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-electric-cyan to-vibrant-orange rounded-sm" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-theme-secondary-bright text-sm inline-flex items-center gap-2">
                    <span className="w-1 h-1 bg-vibrant-orange rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold text-white mb-6">Industries We Serve</h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-3 py-1.5 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-theme-secondary-bright text-xs hover:border-electric-cyan/50 hover:text-electric-cyan transition-all cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-300 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-theme-secondary text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
