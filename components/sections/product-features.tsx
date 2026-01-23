'use client'

import { Check } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'
import { Parallax } from '@/components/animations/parallax'

const productFeatures = [
  {
    title: 'Instant, One-Command Actions',
    description:
      'Type an action once—Velocrux AI executes it across Slack, WhatsApp, HubSpot, Calendar, and more.',
    features: [
      'Draft & send multi-channel messages',
      'Create CRM contacts on the fly',
      'Cancel meetings or raise issues instantly',
    ],
    image: 'workflow-1',
  },
  {
    title: 'No-Code Workflow Builder',
    description:
      'Design complex, multi-step automations with drag-and-drop ease—no coding required.',
    features: [
      'Visual workflow canvas',
      'Pre-built action blocks',
      'Conditional logic & branching',
    ],
    image: 'workflow-2',
  },
  {
    title: 'Natural-Language Interaction',
    description:
      'Chat with your AI agents to run tasks, query data, or generate content—just type what you need.',
    features: [
      'Context-aware Q&A',
      'Instant task execution',
      'Follow-up action chaining',
    ],
    image: 'workflow-3',
  },
]

export function ProductFeatures() {
  return (
    <section className="py-24 bg-primary-navy">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-primary-cyan font-semibold mb-4 uppercase tracking-wider">
            Product Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Build Workflows, Track Insights,
            <br />
            <span className="text-gradient">Connect Tools</span>
          </h2>
        </FadeIn>

        <div className="space-y-24">
          {productFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <FadeIn
                direction={index % 2 === 0 ? 'left' : 'right'}
                className={index % 2 === 1 ? 'md:order-2' : ''}
              >
                <div>
                  <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-neutral-light-gray text-lg mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-primary-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-primary-cyan" size={14} />
                        </div>
                        <span className="text-neutral-light-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <Parallax
                speed={0.3}
                className={index % 2 === 1 ? 'md:order-1' : ''}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 p-1 shadow-xl">
                  <div className="aspect-video rounded-xl bg-neutral-dark-gray flex items-center justify-center border border-white/5">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-neutral-medium-gray">
                        {feature.image}
                      </p>
                    </div>
                  </div>
                </div>
              </Parallax>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
