'use client'

import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/animations/fade-in'
import { FloatAnimation } from '@/components/animations/float-animation'

export function CTA() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
          {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Start Your AI Automation
              <br />
              <span className="text-gradient">Journey Today</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-neutral-light-gray mb-10 max-w-2xl mx-auto">
              Sign up for Velocrux and let AI handle your routine tasks—no credit
              card needed.
            </p>
          </FadeIn>


          {/* Floating Decoration Elements */}
          <FloatAnimation
            duration={4}
            delay={0}
            yOffset={20}
            className="absolute top-0 left-10 hidden lg:block"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-cyan/20 border border-primary-cyan/30 rotate-12" />
          </FloatAnimation>

          <FloatAnimation
            duration={3.5}
            delay={0.5}
            yOffset={25}
            className="absolute top-20 right-10 hidden lg:block"
          >
            <div className="w-16 h-16 rounded-full bg-accent-orange/20 border border-accent-orange/30" />
          </FloatAnimation>

          <FloatAnimation
            duration={4.5}
            delay={1}
            yOffset={15}
            className="absolute bottom-10 left-20 hidden lg:block"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-gold/20 border border-accent-gold/30 -rotate-12" />
          </FloatAnimation>
        </div>
      </div>
    </section>
  )
}
