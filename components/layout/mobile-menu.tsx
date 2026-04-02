'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { siteConfig } from '@/config/site'
import { HEADER_HEIGHT_PX } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
    
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-theme-secondary border-l border-theme-primary z-50 md:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Logo */}
              <div className="mb-8">
                <a
                  href="#home"
                  className="flex items-center space-x-3 group"
                  onClick={(e) => handleNavClick(e, '#home')}
                >
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image 
                      src="/logo.png" 
                      alt="Gigacrux Logo" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-2xl font-bold text-theme-primary tracking-tight">
                    {siteConfig.name}
                  </span>
                </a>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 mb-8">
                {siteConfig.mainNav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-4 py-3 rounded-lg text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary/20 transition-all cursor-pointer"
                    >
                      {item.title}
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-3"
              >
                <ThemeToggle variant="minimal" className="w-full justify-center" />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  onClick={(e: any) => handleNavClick(e, '#contact')}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={(e: any) => handleNavClick(e, '#contact')}
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
