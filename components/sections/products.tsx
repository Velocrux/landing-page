'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/animations/fade-in'
import { motion } from 'framer-motion'
import { ArrowRight, FileCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const products = [
  {
    id: 'arabaudit',
    name: 'ArabAudit',
    tagline: 'Your AI Audit Co-Pilot',
    description:
      'Your AI-powered audit co-pilot for the Saudi and Arab markets. ArabAudit streamlines internal and external audits with intelligent workflows, evidence collection, and real-time dashboards. Stay compliant with NCA (National Cybersecurity Authority) requirements, SAMA (Saudi Central Bank) regulations for financial institutions, and other GCC frameworks. We help you meet local standards, automate control testing, and produce audit-ready reports—so you get transparency, compliance, and clarity without the overhead.',
    logo: '/arabaudit-ai-logo.png',
    logoAlt: 'ArabAudit AI — Your AI Audit Co-Pilot',
    href: '/arabaudit.com',
    accentColor: 'green' as const,
    icon: FileCheck,
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 section-bg overflow-hidden relative">
      <div className="w-full max-w-none mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-electric-cyan font-semibold mb-4 uppercase tracking-wider text-sm">
            What We Build
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-theme-primary">
            Our <span className="text-gradient-enhanced">Products</span>
          </h2>
          <p className="text-theme-secondary-bright text-lg max-w-2xl mx-auto">
            Products and platforms we&apos;ve built to solve real problems and drive growth.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 w-full">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={product.href}
                className={cn(
                  'group block h-full overflow-hidden',
                  'rounded-3xl md:rounded-[1.75rem]',
                  'bg-white/5 dark:bg-white/[0.06] border border-white/10 dark:border-white/10',
                  'hover:border-electric-cyan/30 hover:shadow-[0_0_40px_rgba(0,163,255,0.15)]',
                  'transition-all duration-300'
                )}
              >
                <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8 min-h-[20rem] md:min-h-[24rem]">
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <product.icon
                        className={cn(
                          'w-5 h-5 flex-shrink-0',
                          product.accentColor === 'green'
                            ? 'text-emerald-500'
                            : 'text-electric-cyan'
                        )}
                      />
                      <span className="text-sm font-semibold uppercase tracking-wider text-theme-secondary-bright">
                        Product
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-theme-primary mb-1 group-hover:text-electric-cyan transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium text-electric-cyan/90 mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-theme-secondary-bright text-sm leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 text-electric-cyan font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="relative w-full md:w-[40%] md:flex-shrink-0 md:self-stretch flex items-center justify-center min-h-[10rem] md:min-h-0 rounded-2xl overflow-hidden" style={{ backgroundColor: '#E8F2EF' }}>
                    <div className="relative w-full h-36 md:h-[95%] max-h-full rounded-xl">
                      <Image
                        src={product.logo}
                        alt={product.logoAlt}
                        fill
                        className="object-contain object-center rounded-3xl"
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
