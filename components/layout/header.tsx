'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { siteConfig } from '@/config/site'
import { HEADER_HEIGHT_PX } from '@/lib/constants'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { MobileMenu } from './mobile-menu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const isScrolled = scrollY > 50

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    
    if (element) {
      const headerHeight = HEADER_HEIGHT_PX
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-theme-primary/90 backdrop-blur-lg border-b border-theme-primary shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity group"
            >
              <div className="relative w-[5.5rem] h-[5.5rem] sm:w-24 sm:h-24 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Gigacrux Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-3xl font-bold text-theme-primary hidden sm:block tracking-tight">
                {siteConfig.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.mainNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-theme-secondary hover:text-theme-primary transition-colors relative group cursor-pointer"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA Button & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle variant="icon" />
              <Button 
                variant="secondary" 
                size="md"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(e as any, '#contact')
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
