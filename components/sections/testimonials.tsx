'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/animations/fade-in'

const testimonials = [
  {
    quote:
      'Seamless Slack and Salesforce integrations keep our team in sync. Velocrux ensures everyone&apos;s on the same page.',
    name: 'Mat Mursmark',
    title: 'Chief Growth Officer',
    avatar: '👨‍💼',
  },
  {
    quote:
      'Velocrux cut our onboarding time by 50%—setup was effortless, and our AI agents are now core to daily ops.',
    name: 'Chris Milkulin',
    title: 'Performance Marketer',
    avatar: '👨‍💻',
  },
  {
    quote:
      'Automating lead follow‑ups boosted our conversion rate by 30% without adding headcount. Velocrux is a game‑changer.',
    name: 'Audrey Madden',
    title: 'Chief Growth Officer',
    avatar: '👩‍💼',
  },
  {
    quote:
      'Real‑time insights from AI agents help us spot trends before they emerge—our decisions are smarter and faster.',
    name: 'Jamal Richardson',
    title: 'Head of Analytics',
    avatar: '👨‍🔬',
  },
  {
    quote:
      'Seamless Slack and Salesforce integrations keep our team in sync. Velocrux ensures everyone&apos;s on the same page.',
    name: 'Priya Desai',
    title: 'Customer Success Manager',
    avatar: '👩‍💻',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-primary-navy overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-primary-cyan font-semibold mb-4 uppercase tracking-wider">
            Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hear from our customers &
            <br />
            <span className="text-gradient">their success stories</span>
          </h2>
        </FadeIn>

        {/* Infinite Scroll Row 1 */}
        <div className="relative mb-6">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex space-x-6"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[350px] md:w-[400px] hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <p className="text-neutral-light-gray leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-neutral-medium-gray">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Infinite Scroll Row 2 (Reverse Direction) */}
        <div className="relative">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex space-x-6"
          >
            {[...testimonials.reverse(), ...testimonials].map(
              (testimonial, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[350px] md:w-[400px] hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <p className="text-neutral-light-gray leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-neutral-medium-gray">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
