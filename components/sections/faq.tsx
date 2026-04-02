'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FadeIn } from '@/components/animations/fade-in'
import { MessageCircle, Clock, Code, Sparkles, DollarSign, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const faqCategories = [
  { id: 'general', label: 'General', icon: Sparkles, color: 'orange' },
  { id: 'process', label: 'Process', icon: Code, color: 'cyan' },
  { id: 'timeline', label: 'Timeline', icon: Clock, color: 'orange' },
  { id: 'pricing', label: 'Pricing', icon: DollarSign, color: 'cyan' },
]

const faqs = [
  {
    category: 'general',
    question: 'What services does Gigacrux offer?',
    answer:
      'We specialize in custom AI solutions, rapid prototype development, digital services (consulting, system architecture, cloud deployment), and innovation lab services. We build everything from AI-powered applications to full-stack web and mobile platforms.',
  },
  {
    category: 'general',
    question: 'Which industries do you work with?',
    answer:
      'We have deep expertise in Healthcare, Logistics, Education, Energy, Tourism, and E-Commerce sectors. Our domain-specific knowledge enables us to build solutions that truly understand and solve industry-specific challenges.',
  },
  {
    category: 'process',
    question: 'What is your development approach?',
    answer:
      'We follow an agile methodology with rapid iteration cycles. You\'ll see working prototypes within weeks, receive weekly progress updates, and have direct access to our development team throughout the project lifecycle.',
  },
  {
    category: 'process',
    question: 'How involved will I be in the development?',
    answer:
      'Very involved! We work as an extension of your team. You\'ll have a dedicated project manager, participate in sprint reviews, and can directly communicate with developers. Your feedback drives our development process.',
  },
  {
    category: 'timeline',
    question: 'How quickly can you deliver an MVP?',
    answer:
      'Most MVPs are ready within 2-4 weeks. Complex enterprise solutions may take 6-12 weeks. We prioritize speed without compromising quality, using our proven frameworks and rapid prototyping methodology.',
  },
  {
    category: 'timeline',
    question: 'What happens after the initial launch?',
    answer:
      'We provide ongoing technical support, maintenance, and can scale the solution as your business grows. We also offer continuous deployment pipelines and iterative enhancement based on user feedback.',
  },
  {
    category: 'pricing',
    question: 'How do you structure pricing?',
    answer:
      'We offer flexible engagement models: fixed-price projects for well-defined scopes, time & materials for evolving requirements, and dedicated team arrangements for long-term partnerships. Contact us for a customized quote.',
  },
  {
    category: 'pricing',
    question: 'Do you work with startups?',
    answer:
      'Absolutely! We love working with startups and understand budget constraints. We offer startup-friendly packages and can discuss equity arrangements for the right partnerships. Let\'s talk about your vision!',
  },
]

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general')

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory)

  return (
    <section className="py-24 section-bg-dark overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vibrant-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-electric-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="text-electric-cyan font-semibold mb-4 uppercase tracking-wider text-sm">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-primary">
            Everything You Need to <span className="text-gradient-enhanced">Know</span>
          </h2>
          <p className="text-theme-secondary-bright text-lg max-w-2xl mx-auto">
            Quick answers about our services, process, timelines, and pricing.
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Categories */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-24 space-y-3"
              >
                <h3 className="text-xl font-bold text-theme-primary mb-6 px-2">Browse by Topic</h3>

                {faqCategories.map((category) => {
                  const Icon = category.icon
                  const isActive = activeCategory === category.id

                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveCategory(category.id)}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left",
                        "border backdrop-blur-md",
                        isActive
                          ? category.color === 'cyan'
                            ? 'bg-electric-cyan/10 border-electric-cyan/50 shadow-[0_0_20px_rgba(0,163,255,0.2)]'
                            : 'bg-vibrant-orange/10 border-vibrant-orange/50 shadow-[0_0_20px_rgba(255,107,53,0.2)]'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      )}
                    >
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                          isActive
                            ? category.color === 'cyan'
                              ? 'bg-electric-cyan/20'
                              : 'bg-vibrant-orange/20'
                            : 'bg-white/5'
                        )}
                      >
                        <Icon
                          className={cn(
                            "transition-all duration-300",
                            isActive
                              ? category.color === 'cyan'
                                ? 'text-electric-cyan'
                                : 'text-vibrant-orange'
                              : 'text-theme-secondary-bright'
                          )}
                          size={24}
                        />
                      </div>
                      <span
                        className={cn(
                          "font-semibold text-lg transition-colors duration-300",
                          isActive ? 'text-theme-primary' : 'text-theme-secondary-bright'
                        )}
                      >
                        {category.label}
                      </span>
                    </motion.button>
                  )
                })}

                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-vibrant-orange/10 to-transparent border border-vibrant-orange/30"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-vibrant-orange/20 flex items-center justify-center">
                    <MessageCircle className="text-vibrant-orange" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center text-theme-primary">Still have questions?</h3>
                  <p className="text-theme-secondary-bright mb-4 text-sm text-center">
                    Let&apos;s discuss your project and how we can help bring your vision to life.
                  </p>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full py-3 px-4 bg-vibrant-orange hover:bg-vibrant-orange/90 text-white font-semibold rounded-xl text-center transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.3)]"
                  >
                    Talk to Us
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - FAQ Accordion */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-slate-300 dark:border-white/10 hover:border-electric-cyan/50 dark:hover:border-electric-cyan/30 px-6 rounded-2xl transition-all duration-300 overflow-hidden"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-theme-primary hover:text-electric-cyan transition-colors duration-300 py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-theme-secondary-bright leading-relaxed pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
