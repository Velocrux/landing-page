'use client'

import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, staggerItem } from '@/components/animations/stagger-container'
import { GlowEffect } from '@/components/animations/glow-effect'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const integrations = [
  { name: 'Slack', logo: '💬' },
  { name: 'HubSpot', logo: '🎯' },
  { name: 'Salesforce', logo: '☁️' },
  { name: 'Google Workspace', logo: '📧' },
  { name: 'Microsoft Teams', logo: '👥' },
  { name: 'Zendesk', logo: '🎫' },
  { name: 'Asana', logo: '✅' },
  { name: 'Notion', logo: '📝' },
  { name: 'Stripe', logo: '💳' },
  { name: 'Shopify', logo: '🛍️' },
  { name: 'WhatsApp', logo: '📱' },
  { name: 'Zoom', logo: '🎥' },
]

export function Integrations() {
  return (
    <section className="py-24 bg-primary-navy-light">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-primary-cyan font-semibold mb-4 uppercase tracking-wider">
            Powerful Integrations
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Seamlessly Integrate
            <br />
            <span className="text-gradient">Every App</span>
          </h2>
          <p className="text-neutral-light-gray text-lg max-w-2xl mx-auto">
            Connect with 50+ apps and services. More integrations added every week.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration) => (
            <motion.div key={integration.name} variants={staggerItem}>
              <GlowEffect color="cyan" intensity="low">
                <div className="bg-neutral-darker-gray border border-white/10 p-6 rounded-xl text-center hover:scale-105 hover:border-primary-cyan/30 transition-all duration-300 cursor-pointer">
                  <div className="text-4xl mb-3">{integration.logo}</div>
                  <p className="font-medium text-neutral-light-gray">
                    {integration.name}
                  </p>
                </div>
              </GlowEffect>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center">
          <Button variant="outline" size="lg">
            Explore All Integrations
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
