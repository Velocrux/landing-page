'use client'

import { Target, Link2, Zap } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    icon: Target,
    title: 'Select a trigger',
    description: 'Choose an event or schedule that kicks off your workflow.',
  },
  {
    number: '2',
    icon: Link2,
    title: 'Connect your apps',
    description: 'Sync Gigacrux with your tools—CRM, email, Slack, and more.',
  },
  {
    number: '3',
    icon: Zap,
    title: 'Let AI do the work',
    description: 'Lets Gigacrux AI execute tasks automatically.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-primary-navy-light">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-primary-cyan font-semibold mb-4 uppercase tracking-wider">
            AI-Driven Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Automate workflows in
            <br />
            <span className="text-gradient">three simple steps</span>
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary-cyan via-accent-orange to-primary-cyan opacity-30" />

            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center relative"
                >
                  {/* Step Number Badge */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-cyan flex items-center justify-center text-2xl font-bold relative z-10 shadow-lg shadow-primary-cyan/30">
                    {step.number}
                  </div>

                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-neutral-darker-gray border border-primary-cyan/20 flex items-center justify-center">
                    <step.icon className="text-primary-cyan" size={36} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-neutral-light-gray leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
