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
    <section className="py-24 bg-theme-primary">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-primary-cyan font-semibold mb-4 uppercase tracking-wider text-sm">
            Our Core Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-theme-primary">
            From Concept to
            <br />
            <span className="text-gradient">Digital Reality</span>
          </h2>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            Velocrux combines deep technical expertise with innovative thinking to deliver
            solutions that transform businesses and drive growth.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={staggerItem} className="relative">
              <div
                className={cn(
                  "h-full",
                  feature.color === 'cyan' ? 'shiny-glow-border-cyan' : 'shiny-glow-border-orange'
                )}
              >
                <Card
                  className={cn(
                    "h-full hover:scale-105 transition-all duration-300 relative z-10",
                    "bg-theme-secondary border-0 rounded-[22.5px]",
                    feature.color === 'cyan' ? 'edge-glow-cyan' : 'edge-glow-orange'
                  )}
                >
                <CardHeader>
                  <div className={cn(
                    "w-14 h-14 rounded-lg flex items-center justify-center mb-4",
                    feature.color === 'cyan'
                      ? "bg-primary-cyan/10 border border-primary-cyan/30"
                      : "bg-accent-orange/10 border border-accent-orange/30"
                  )}>
                    <feature.icon
                      className={feature.color === 'cyan' ? 'text-primary-cyan' : 'text-accent-orange'}
                      size={28}
                    />
                  </div>
                  <CardTitle className="text-xl text-theme-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-theme-secondary">
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
