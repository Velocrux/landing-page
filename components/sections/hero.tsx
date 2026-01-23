'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/animations/fade-in'
import { FloatAnimation } from '@/components/animations/float-animation'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary-cyan/30 bg-primary-cyan/5 mb-8">
              <span className="text-sm text-primary-cyan font-medium uppercase tracking-wider">
                Supercharge Your AI Workflows
              </span>
            </div>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Automate Your AI Workflows
              <br />
              <span className="text-gradient">with AI Agent</span>
            </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-neutral-light-gray mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect your favorite apps, set triggers and watch AI handle the
              rest - no coding required. Get up and running in minutes.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button variant="primary" size="xl">
                Get Started - Free
              </Button>
              <Button variant="secondary" size="xl">
                View Pricing
              </Button>
            </div>
          </FadeIn>

          {/* Trust Badge */}
          <FadeIn delay={0.5}>
            <p className="text-sm text-neutral-medium-gray mb-12">
              Trusted by 150,000+ users worldwide
            </p>
          </FadeIn>

          {/* Dashboard Mockup with Floating Elements */}
          <FadeIn delay={0.6}>
            <div className="relative mt-16">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-darker-gray p-1">
                <div className="aspect-video rounded-xl bg-neutral-dark-gray p-8 flex items-center justify-center border border-white/5">
                  <div className="text-center">
                    <div className="inline-block px-6 py-3 rounded-lg bg-primary-cyan/10 border border-primary-cyan/30 mb-4">
                      <p className="text-primary-cyan font-semibold">
                        GPT 4.5 • Chat
                      </p>
                    </div>
                    <p className="text-neutral-light-gray">
                      Dashboard Preview
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating UI Elements */}
              <FloatAnimation
                duration={3}
                delay={0}
                yOffset={15}
                className="absolute -top-8 -left-8 hidden lg:block"
              >
                <div className="px-4 py-3 rounded-xl bg-neutral-darker-gray border border-primary-cyan/50 shadow-lg shadow-primary-cyan/20">
                  <p className="text-sm font-medium">Launch Workflow</p>
                </div>
              </FloatAnimation>

              <FloatAnimation
                duration={3.5}
                delay={0.5}
                yOffset={20}
                className="absolute -top-4 -right-8 hidden lg:block"
              >
                <div className="px-4 py-3 rounded-xl bg-neutral-darker-gray border border-accent-orange/50 shadow-lg shadow-accent-orange/20">
                  <p className="text-sm font-medium">Data Analysis</p>
                </div>
              </FloatAnimation>

              <FloatAnimation
                duration={4}
                delay={1}
                yOffset={18}
                className="absolute -bottom-6 left-1/4 hidden md:block"
              >
                <div className="px-4 py-3 rounded-xl bg-neutral-darker-gray border border-accent-gold/50 shadow-lg shadow-accent-gold/20">
                  <p className="text-sm font-medium">AI Powered</p>
                </div>
              </FloatAnimation>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-neutral-medium-gray" size={24} />
      </motion.div>
    </section>
  )
}
