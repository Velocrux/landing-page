'use client'

import { Zap, Brain, Code, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, staggerItem } from '@/components/animations/stagger-container'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Brain,
    title: 'AI Development',
    description:
      'Custom AI solutions, machine learning models, and intelligent automation systems tailored to your needs.',
    color: 'cyan' as const,
  },
  {
    icon: Code,
    title: 'Product Development',
    description:
      'Full-stack web and mobile applications built with cutting-edge technologies and best practices.',
    color: 'orange' as const,
  },
  {
    icon: Rocket,
    title: 'Digital Services',
    description:
      'Consulting, system architecture, cloud deployment, and ongoing technical support.',
    color: 'cyan' as const,
  },
  {
    icon: Zap,
    title: 'Innovation Lab',
    description:
      'Research and development of emerging technologies, prototyping, and proof-of-concept solutions.',
    color: 'orange' as const,
  },
]

export function Features() {
  return (
    <section className="py-24 features-section-enhanced">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-electric-cyan font-semibold mb-4 uppercase tracking-wider text-sm">
            Our Core Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-theme-primary">
            From Concept to
            <br />
            <span className="text-gradient-enhanced">Digital Reality</span>
          </h2>
          <p className="text-theme-secondary-bright text-lg max-w-2xl mx-auto">
            Velocrux combines deep technical expertise with innovative thinking to deliver
            solutions that transform businesses and drive growth.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={staggerItem} className="relative">
              <div
                className={cn(
                  "h-full feature-card-wrapper",
                  feature.color === 'cyan' ? 'shiny-glow-border-cyan-enhanced' : 'shiny-glow-border-orange-enhanced'
                )}
              >
                <Card
                  className={cn(
                    "h-full hover:scale-105 transition-all duration-300 relative z-10 feature-card-enhanced",
                    "border-0 rounded-[22.5px]",
                    feature.color === 'cyan' ? 'card-glow-cyan-enhanced' : 'card-glow-orange-enhanced'
                  )}
                >
                <CardHeader>
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative glass-icon-container",
                    feature.color === 'cyan'
                      ? "glass-icon-cyan-enhanced"
                      : "glass-icon-orange-enhanced"
                  )}>
                    <feature.icon
                      className={feature.color === 'cyan' ? 'text-electric-cyan' : 'text-vibrant-orange'}
                      size={28}
                    />
                  </div>
                  <CardTitle className="text-xl text-theme-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-theme-secondary-bright">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
