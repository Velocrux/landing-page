import type { Metadata } from 'next'
import { FadeIn } from '@/components/animations/fade-in'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us - Velocrux',
  description: 'Get in touch with our team. We\'re here to help with any questions about AI automation.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-gradient">touch</span>
            </h1>
            <p className="text-xl text-neutral-light-gray">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <FadeIn className="md:col-span-2">
              <ContactForm />
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2} className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-cyan" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-neutral-medium-gray text-sm">
                        support@velocrux.com
                      </p>
                      <p className="text-neutral-medium-gray text-sm">
                        sales@velocrux.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-neutral-medium-gray text-sm">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-neutral-medium-gray text-sm">
                        Mon-Fri 9am-6pm PST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-neutral-medium-gray text-sm">
                        123 Innovation Drive
                      </p>
                      <p className="text-neutral-medium-gray text-sm">
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary-cyan/20 to-accent-orange/20 border-primary-cyan/30">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Need immediate help?</h3>
                  <p className="text-neutral-light-gray text-sm mb-4">
                    Check out our documentation and community forum
                  </p>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-primary-cyan hover:underline text-sm font-medium"
                    >
                      View Documentation →
                    </a>
                    <a
                      href="#"
                      className="block text-primary-cyan hover:underline text-sm font-medium"
                    >
                      Join Community Forum →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
