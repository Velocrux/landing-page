'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { siteConfig } from '@/config/site'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
                <Link
                  href="/"
                  className="text-2xl font-bold text-gradient"
                  onClick={onClose}
                >
                  {siteConfig.name}
                </Link>
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
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block px-4 py-3 rounded-lg text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary/20 transition-all"
                    >
                      {item.title}
                    </Link>
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
                <Button variant="primary" size="lg" className="w-full">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="w-full">
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
