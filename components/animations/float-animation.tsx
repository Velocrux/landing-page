'use client'

import { motion } from 'framer-motion'

interface FloatAnimationProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  yOffset?: number
  className?: string
}

export function FloatAnimation({
  children,
  duration = 3,
  delay = 0,
  yOffset = 20,
  className,
}: FloatAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
