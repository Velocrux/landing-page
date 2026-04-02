'use client'

import { Zap, Target, Users, Sparkles } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const approaches = [
  {
    icon: Zap,
    number: '01',
    title: 'Rapid Development Cycles',
    description:
      'We deliver working prototypes within weeks, not months. Our agile approach ensures you see progress fast and can iterate based on real feedback.',
    highlights: [
      'MVP ready in 2-4 weeks',
      'Continuous deployment pipeline',
      'Weekly progress updates',
    ],
    color: 'orange' as const,
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Target,
    number: '02',
    title: 'Industry-Specific Expertise',
    description:
      'Deep understanding of logistics, healthcare, education, energy, tourism, and e-commerce sectors enables us to build solutions that truly fit your domain.',
    highlights: [
      'Domain-aware AI models',
      'Regulatory compliance built-in',
      'Industry best practices',
    ],
    color: 'cyan' as const,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Users,
    number: '03',
    title: 'Collaborative Partnership',
    description:
      'Your vision, our execution. We work as an extension of your team, ensuring every solution aligns perfectly with your business goals and user needs.',
    highlights: [
      'Dedicated project manager',
      'Direct access to developers',
      'Transparent communication',
    ],
    color: 'orange' as const,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Future-Ready Technology',
    description:
      'We build with scalability in mind, using cutting-edge AI frameworks, cloud infrastructure, and modern development practices that grow with your business.',
    highlights: [
      'Latest AI/ML frameworks',
      'Scalable cloud architecture',
      'Continuous innovation',
    ],
    color: 'cyan' as const,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80',
  },
]

export function ProductFeatures() {
  return (
    <section className="py-24 section-bg-alt overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-20">
          <p className="text-vibrant-orange font-semibold mb-4 uppercase tracking-wider text-sm">
            Why Gigacrux
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-primary">
            Built on <span className="text-gradient-enhanced">Excellence</span>
          </h2>
          <p className="text-theme-secondary-bright text-lg max-w-2xl mx-auto">
            Our proven methodology combines speed, expertise, and innovation to deliver
            exceptional results that exceed expectations.
          </p>
        </FadeIn>

        <div className="space-y-32 max-w-7xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "relative grid md:grid-cols-2 gap-12 items-center",
                index % 2 === 1 && "md:grid-flow-dense"
              )}
            >
              {/* Large Decorative Number */}
              <div
                className={cn(
                  "absolute -z-10 text-[200px] md:text-[300px] font-bold opacity-[0.03] select-none",
                  index % 2 === 0 ? "-left-20" : "-right-20",
                  "top-1/2 -translate-y-1/2"
                )}
              >
                {approach.number}
              </div>

              {/* Content Side */}
              <div className={cn(index % 2 === 1 && "md:col-start-2")}>
                <div className="flex items-start gap-4 mb-6">
                  {/* Icon with animated background */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden",
                        "backdrop-blur-md border",
                        approach.color === 'cyan'
                          ? 'bg-electric-cyan/10 border-electric-cyan/30'
                          : 'bg-vibrant-orange/10 border-vibrant-orange/30'
                      )}
                    >
                      {/* Animated glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={cn(
                          "absolute inset-0 blur-xl",
                          approach.color === 'cyan' ? 'bg-electric-cyan' : 'bg-vibrant-orange'
                        )}
                      />
                      <approach.icon
                        className={cn(
                          "relative z-10",
                          approach.color === 'cyan' ? 'text-electric-cyan' : 'text-vibrant-orange'
                        )}
                        size={32}
                      />
                    </motion.div>
                  </div>

                  {/* Number Badge */}
                  <div
                    className={cn(
                      "px-4 py-1 rounded-full text-sm font-bold",
                      approach.color === 'cyan'
                        ? 'bg-electric-cyan/20 text-electric-cyan'
                        : 'bg-vibrant-orange/20 text-vibrant-orange'
                    )}
                  >
                    {approach.number}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-theme-primary">
                  {approach.title}
                </h3>
                <p className="text-theme-secondary-bright text-lg mb-8 leading-relaxed">
                  {approach.description}
                </p>

                {/* Highlights with custom styling */}
                <div className="space-y-4">
                  {approach.highlights.map((highlight, i) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          approach.color === 'cyan'
                            ? 'bg-electric-cyan group-hover:w-8 group-hover:shadow-[0_0_10px_rgba(0,163,255,0.6)]'
                            : 'bg-vibrant-orange group-hover:w-8 group-hover:shadow-[0_0_10px_rgba(255,107,53,0.6)]'
                        )}
                      />
                      <span className="text-theme-secondary-bright font-medium">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Element Side */}
              <div className={cn(index % 2 === 1 && "md:col-start-1 md:row-start-1")}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  {/* Main visual container with image */}
                  <div
                    className={cn(
                      "relative rounded-3xl overflow-hidden backdrop-blur-md",
                      "border transition-all duration-500 aspect-[4/3]",
                      approach.color === 'cyan'
                        ? 'border-electric-cyan/20 hover:border-electric-cyan/40 hover:shadow-[0_0_40px_rgba(0,163,255,0.2)]'
                        : 'border-vibrant-orange/20 hover:border-vibrant-orange/40 hover:shadow-[0_0_40px_rgba(255,107,53,0.2)]'
                    )}
                  >
                    {/* Image */}
                    <Image
                      src={approach.image}
                      alt={approach.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Gradient overlay */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t opacity-60",
                        approach.color === 'cyan'
                          ? 'from-electric-cyan/20 via-transparent to-electric-cyan/10'
                          : 'from-vibrant-orange/20 via-transparent to-vibrant-orange/10'
                      )}
                    />

                    {/* Decorative corner accent */}
                    <div
                      className={cn(
                        "absolute bottom-0 right-0 w-32 h-32 blur-3xl opacity-50",
                        approach.color === 'cyan' ? 'bg-electric-cyan' : 'bg-vibrant-orange'
                      )}
                    />
                  </div>

                  {/* Floating accent */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={cn(
                      "absolute -top-6 -right-6 w-24 h-24 rounded-2xl blur-2xl opacity-30",
                      approach.color === 'cyan' ? 'bg-electric-cyan' : 'bg-vibrant-orange'
                    )}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
