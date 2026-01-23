'use client'

import { motion } from 'framer-motion'

export function TrustBar() {
  const logos = [
    'Company A',
    'Company B',
    'Company C',
    'Company D',
    'Company E',
    'Company F',
  ]

  return (
    <section className="py-12 border-y border-neutral-dark-gray bg-primary-navy-light/50">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex space-x-12 md:space-x-16"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[150px]"
              >
                <div className="text-neutral-medium-gray font-semibold hover:text-white transition-colors">
                  {logo}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
