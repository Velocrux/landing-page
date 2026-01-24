'use client'

import { Zap, Brain, Code, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, staggerItem } from '@/components/animations/stagger-container'
import { GlowEffect } from '@/components/animations/glow-effect'
import { motion } from 'framer-motion'

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
    <section className="py-24 bg-primary-navy">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-primary-cyan font-semibold mb-4 uppercase tracking-wider text-sm">
            Our Core Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
            <motion.div key={feature.title} variants={staggerItem}>
              <GlowEffect color={feature.color} intensity="low">
                <Card className="h-full hover:scale-105 hover:border-primary-cyan/30 transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary-cyan/10 border border-primary-cyan/20 flex items-center justify-center mb-4">
                      <feature.icon className="text-primary-cyan" size={28} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </GlowEffect>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
