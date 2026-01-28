'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations/fade-in'
import { Quote, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Velocrux delivered our education AI platform in just 6 weeks. Their expertise in the education domain and rapid prototyping approach exceeded our expectations.',
    name: 'Javeed Pasha',
    title: 'Managing Director, MCA',
    industry: 'Education',
    rating: 5,
    featured: true,
  },
  {
    quote:
      'The logistics optimization system they built reduced our delivery times by 35%. Professional team, clear communication, exceptional results.',
    name: 'Michael Torres',
    title: 'Operations Director',
    industry: 'Logistics',
    rating: 5,
  },
  {
    quote:
      'Their custom e-commerce platform handles 100K+ transactions daily. Scalable, secure, and beautifully designed.',
    name: 'Lisa Kumar',
    title: 'Founder, ShopFlow',
    industry: 'E-Commerce',
    rating: 5,
  },
  {
    quote:
      'Working with Velocrux felt like having an extended team. They understood our vision and brought it to life with cutting-edge AI technology.',
    name: 'James Anderson',
    title: 'CEO, EduLearn',
    industry: 'Education',
    rating: 5,
  },
  {
    quote:
      'From prototype to production in record time. Their innovation lab helped us test multiple approaches before committing to a full build.',
    name: 'Priya Patel',
    title: 'Product Manager',
    industry: 'Energy',
    rating: 5,
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const featuredTestimonial = testimonials.find(t => t.featured) || testimonials[0]
  const otherTestimonials = testimonials.filter(t => !t.featured)

  return (
    <section className="py-24 section-bg overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="text-vibrant-orange font-semibold mb-4 uppercase tracking-wider text-sm">
            Client Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-primary">
            Trusted by <span className="text-gradient-enhanced">Innovators</span>
          </h2>
          <p className="text-theme-secondary-bright text-lg max-w-2xl mx-auto">
            Real results from real partnerships. See how we&apos;ve helped businesses
            transform their ideas into impactful digital solutions.
          </p>
        </FadeIn>

        <div className="max-w-7xl mx-auto">
          {/* Featured Testimonial - Large Center Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="relative p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 overflow-hidden group hover:border-vibrant-orange/50 transition-all duration-500">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/0 via-vibrant-orange/10 to-electric-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Large quote icon */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-vibrant-orange/10 rounded-full flex items-center justify-center">
                <Quote className="text-vibrant-orange" size={40} />
              </div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 justify-center md:justify-start">
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-vibrant-orange fill-vibrant-orange" size={20} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-light text-theme-primary leading-relaxed mb-8 text-center md:text-left">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </blockquote>

                {/* Author info */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-vibrant-orange/20 to-electric-cyan/20 flex items-center justify-center text-3xl backdrop-blur-md border border-white/10">
                    {featuredTestimonial.name.charAt(0)}
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-xl font-bold text-theme-primary">{featuredTestimonial.name}</p>
                    <p className="text-theme-secondary-bright">{featuredTestimonial.title}</p>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vibrant-orange/20 border border-vibrant-orange/30">
                      <div className="w-2 h-2 rounded-full bg-vibrant-orange" />
                      <span className="text-sm text-vibrant-orange font-medium">{featuredTestimonial.industry}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid of Other Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div
                  className={cn(
                    "h-full p-6 rounded-2xl backdrop-blur-md",
                    "bg-gradient-to-br from-white/5 to-transparent dark:from-white/5 dark:to-transparent",
                    "border border-slate-300 dark:border-white/10 hover:border-electric-cyan/50 dark:hover:border-electric-cyan/30",
                    "transition-all duration-300",
                    "hover:shadow-[0_0_30px_rgba(0,163,255,0.15)]"
                  )}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-electric-cyan fill-electric-cyan" size={14} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-theme-secondary-bright text-sm leading-relaxed mb-6 line-clamp-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-cyan/20 to-vibrant-orange/20 flex items-center justify-center text-lg backdrop-blur-md border border-slate-300 dark:border-white/10">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-theme-primary text-sm">{testimonial.name}</p>
                        <p className="text-xs text-theme-secondary-bright">{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                      <span className="text-xs text-electric-cyan font-medium">{testimonial.industry}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
