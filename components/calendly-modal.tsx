'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
  url?: string
}

export function CalendlyModal({ isOpen, onClose, url = 'https://calendly.com/kauser-gigacrux/15min' }: CalendlyModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'

      // Handle ESC key to close modal
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      window.addEventListener('keydown', handleEsc)

      // Load Calendly widget script
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleEsc)
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with theme colors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 cursor-pointer"
          />

          {/* Modal with dark theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex items-center justify-center pointer-events-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-6xl bg-[#0A1628] rounded-3xl shadow-[0_0_60px_rgba(0,163,255,0.3)] border border-electric-cyan/20 overflow-hidden pointer-events-auto"
            >
              {/* Decorative background orbs */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-cyan/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vibrant-orange/5 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button with theme colors */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-electric-cyan/10 hover:bg-electric-cyan/20 border border-electric-cyan/30 hover:border-electric-cyan/50 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,163,255,0.4)] group cursor-pointer"
                aria-label="Close modal"
              >
                <X className="text-electric-cyan group-hover:text-white" size={24} />
              </button>

              {/* Calendly Embed with dark background */}
              <div
                className="calendly-inline-widget w-full h-full relative z-0"
                data-url={url}
                style={{ minWidth: '320px', height: '100%' }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
