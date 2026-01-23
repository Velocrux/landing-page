'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/animations/fade-in'
import { MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What is Velocrux and how does it work?',
    answer:
      'Velocrux is an AI-powered automation platform that connects your favorite apps and tools. It uses intelligent agents to handle repetitive tasks, analyze data, and streamline workflows without requiring any coding knowledge.',
  },
  {
    question: 'Which apps can I integrate?',
    answer:
      'Velocrux supports 50+ integrations, including Slack, HubSpot, Zendesk, Salesforce, Google Workspace, WhatsApp, Zapier, and more. We\'re constantly adding new integrations based on user feedback.',
  },
  {
    question: 'How does Velocrux AI automate tasks?',
    answer:
      'Our AI agents use natural language processing and machine learning to understand your workflows. You can set up triggers, define actions, and let the AI handle the rest. It learns from your patterns and suggests optimizations over time.',
  },
  {
    question: 'Is my data secure with Velocrux AI?',
    answer:
      'Absolutely. We use enterprise-grade encryption, comply with SOC 2 and GDPR standards, and never share your data with third parties. All connections use secure OAuth protocols.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We provide 24/7 email support, live chat during business hours, comprehensive documentation, video tutorials, and a dedicated community forum. Enterprise plans include priority support and a dedicated account manager.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-primary-navy">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-primary-cyan font-semibold mb-4 uppercase tracking-wider">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently asked
            <br />
            <span className="text-gradient">questions</span>
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="md:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-neutral-darker-gray border border-white/10 px-6 rounded-lg"
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

          {/* Contact Card */}
          <FadeIn delay={0.3}>
            <Card className="h-fit sticky top-24 bg-primary-cyan/10 border-primary-cyan/30">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-cyan/20 flex items-center justify-center">
                  <MessageCircle className="text-primary-cyan" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Got any Questions?</h3>
                <p className="text-neutral-medium-gray mb-6 text-sm">
                  Let us know! Reach out and our team will get right back to you.
                </p>
                <Button variant="primary" size="lg" className="w-full">
                  Contact us
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
