'use client'

import { Zap, Globe, Workflow, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, staggerItem } from '@/components/animations/stagger-container'
import { GlowEffect } from '@/components/animations/glow-effect'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Globe,
    title: 'Seamless Integrations',
    description:
      'Integrate Slack, HubSpot, Zendesk & more—automate data flow instantly.',
    color: 'cyan' as const,
  },
  {
    icon: MessageSquare,
    title: 'Conversational Actions',
    description:
      'Create records, assign tasks & queue emails with a simple prompt in seconds flat.',
    color: 'orange' as const,
  },
  {
    icon: Workflow,
    title: 'Visual Workflow Designer',
    description:
      'Drag & drop AI actions to build workflows visually— no coding required.',
    color: 'cyan' as const,
  },
  {
    icon: Zap,
    title: 'Multi‑Channel Automation',
    description:
      'Trigger email, SMS & chat messages automatically on schedule.',
    color: 'orange' as const,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-primary-navy">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-primary-cyan font-semibold mb-4 uppercase tracking-wider text-sm">
            AI-Driven Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build, scale and manage
            <br />
            <span className="text-white">entire AI workforce</span>
          </h2>
          <p className="text-neutral-light-gray text-lg max-w-2xl mx-auto">
            Velocrux helps you tackle data bottlenecks, streamline analysis, and
            make smarter decisions with ease.
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
