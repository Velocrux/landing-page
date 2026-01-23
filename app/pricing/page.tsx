'use client'

import { Check, X } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, staggerItem } from '@/components/animations/stagger-container'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { CTA } from '@/components/sections/cta'

const pricingTiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for individuals and small teams getting started',
    features: [
      '5 AI agents',
      '1,000 tasks/month',
      '5 app integrations',
      'Basic workflow builder',
      'Email support',
      'Community access',
    ],
    limitations: [
      'No custom workflows',
      'No priority support',
      'No advanced analytics',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$49',
    period: '/month',
    description: 'For growing businesses that need more power',
    features: [
      '25 AI agents',
      '10,000 tasks/month',
      'Unlimited integrations',
      'Advanced workflow builder',
      'Priority email support',
      'Custom workflows',
      'Advanced analytics',
      'Team collaboration',
    ],
    limitations: [],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited AI agents',
      'Unlimited tasks',
      'All integrations',
      'Enterprise workflow builder',
      '24/7 phone support',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
      'On-premise deployment',
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
  },
]

const comparisonFeatures = [
  { name: 'AI Agents', starter: '5', pro: '25', enterprise: 'Unlimited' },
  { name: 'Tasks per month', starter: '1,000', pro: '10,000', enterprise: 'Unlimited' },
  { name: 'App Integrations', starter: '5', pro: 'Unlimited', enterprise: 'All' },
  { name: 'Custom Workflows', starter: false, pro: true, enterprise: true },
  { name: 'Advanced Analytics', starter: false, pro: true, enterprise: true },
  { name: 'Priority Support', starter: false, pro: true, enterprise: true },
  { name: 'Team Collaboration', starter: false, pro: true, enterprise: true },
  { name: 'SLA Guarantee', starter: false, pro: false, enterprise: true },
  { name: 'On-premise Deployment', starter: false, pro: false, enterprise: true },
]

const faqs = [
  {
    question: 'Can I change my plan later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, Professional and Enterprise plans come with a 14-day free trial. No credit card required.',
  },
  {
    question: 'What happens if I exceed my task limit?',
    answer: 'We\'ll notify you when you reach 80% of your limit. You can upgrade or purchase additional tasks as needed.',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, transparent
              <br />
              <span className="text-gradient">pricing</span>
            </h1>
            <p className="text-xl text-neutral-light-gray">
              Choose the plan that fits your needs. No hidden fees, cancel anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-primary-navy">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div key={tier.name} variants={staggerItem}>
                <Card
                  className={`h-full relative hover:scale-105 transition-all duration-300 ${
                    tier.popular ? 'border-2 border-primary-cyan shadow-lg shadow-primary-cyan/20' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="default" className="px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-5xl font-bold">{tier.price}</span>
                      <span className="text-neutral-medium-gray">{tier.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Button
                      variant={tier.popular ? 'primary' : 'secondary'}
                      size="lg"
                      className="w-full mb-6"
                    >
                      {tier.cta}
                    </Button>

                    <div className="space-y-3">
                      <p className="font-semibold text-sm uppercase text-neutral-medium-gray mb-4">
                        What&apos;s included:
                      </p>
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <Check className="text-primary-cyan flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-neutral-light-gray text-sm">{feature}</span>
                        </div>
                      ))}

                      {tier.limitations.length > 0 && (
                        <>
                          <div className="border-t border-neutral-dark-gray my-4" />
                          {tier.limitations.map((limitation) => (
                            <div key={limitation} className="flex items-start space-x-3">
                              <X className="text-neutral-dark-gray flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-neutral-medium-gray text-sm">{limitation}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-primary-navy-light">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compare <span className="text-gradient">plans</span>
            </h2>
            <p className="text-neutral-light-gray text-lg">
              See what&apos;s included in each plan
            </p>
          </FadeIn>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full glass-morphism rounded-xl">
              <thead>
                <tr className="border-b border-neutral-dark-gray">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold bg-primary-cyan/10">
                    Professional
                  </th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-neutral-dark-gray ${
                      index % 2 === 0 ? 'bg-white/5' : ''
                    }`}
                  >
                    <td className="p-4 text-neutral-light-gray">{feature.name}</td>
                    <td className="p-4 text-center">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <Check className="text-primary-cyan mx-auto" size={20} />
                        ) : (
                          <X className="text-neutral-dark-gray mx-auto" size={20} />
                        )
                      ) : (
                        <span className="text-neutral-light-gray">{feature.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-primary-cyan/5">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <Check className="text-primary-cyan mx-auto" size={20} />
                        ) : (
                          <X className="text-neutral-dark-gray mx-auto" size={20} />
                        )
                      ) : (
                        <span className="text-neutral-light-gray">{feature.pro}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <Check className="text-primary-cyan mx-auto" size={20} />
                        ) : (
                          <X className="text-neutral-dark-gray mx-auto" size={20} />
                        )
                      ) : (
                        <span className="text-neutral-light-gray">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-primary-navy">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pricing <span className="text-gradient">FAQ</span>
            </h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass-morphism px-6 rounded-lg"
                  >
                    <AccordionTrigger className="text-left text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  )
}
