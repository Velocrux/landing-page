'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowEffectProps {
  children: React.ReactNode
  color?: 'cyan' | 'orange' | 'gold'
  intensity?: 'low' | 'medium' | 'high'
  className?: string
}

export function GlowEffect({
  children,
  color = 'cyan',
  intensity = 'medium',
  className,
}: GlowEffectProps) {
  const glowColors = {
    cyan: {
      low: 'hover:shadow-[0_0_15px_rgba(0,163,255,0.3)]',
      medium: 'hover:shadow-[0_0_25px_rgba(0,163,255,0.5),0_0_50px_rgba(0,163,255,0.3)]',
      high: 'hover:shadow-[0_0_35px_rgba(0,163,255,0.7),0_0_70px_rgba(0,163,255,0.5)]',
    },
    orange: {
      low: 'hover:shadow-[0_0_15px_rgba(255,107,53,0.3)]',
      medium: 'hover:shadow-[0_0_25px_rgba(255,107,53,0.5),0_0_50px_rgba(255,107,53,0.3)]',
      high: 'hover:shadow-[0_0_35px_rgba(255,107,53,0.7),0_0_70px_rgba(255,107,53,0.5)]',
    },
    gold: {
      low: 'hover:shadow-[0_0_15px_rgba(255,184,0,0.3)]',
      medium: 'hover:shadow-[0_0_25px_rgba(255,184,0,0.5),0_0_50px_rgba(255,184,0,0.3)]',
      high: 'hover:shadow-[0_0_35px_rgba(255,184,0,0.7),0_0_70px_rgba(255,184,0,0.5)]',
    },
  }

  return (
    <motion.div
      className={cn(
        'transition-shadow duration-300',
        glowColors[color][intensity],
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
