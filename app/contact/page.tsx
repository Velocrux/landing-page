'use client'
import { FadeIn } from '@/components/animations/fade-in'
import { Mail, MessageSquare, Calendar, Zap, ArrowRight, Clock, Globe, Code } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-form'
import { CalendlyModal } from '@/components/calendly-modal'
import { useState } from 'react'

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'Quick Chat',
    description: 'Schedule a 15-min discovery call',
    action: 'Book a Call',
    color: 'orange',
    type: 'calendly',
  },
  {
    icon: Mail,
    title: 'Send Email',
    description: 'Write to us about your project',
    action: 'kauser@velocrux.com',
    color: 'cyan',
    link: 'mailto:kauser@velocrux.com',
  },
  {
    icon: Calendar,
    title: 'Full Consultation',
    description: 'In-depth project discussion',
    action: 'Schedule Meeting',
    color: 'orange',
    type: 'calendly',
  },
]

const quickInfo = [
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
  },
  {
    icon: Globe,
    label: 'Time Zone',
    value: 'UTC+0 to UTC+12',
  },
  {
    icon: Code,
    label: 'Tech Stack',
    value: 'AI, Web, Mobile, Cloud',
  },
  {
    icon: Zap,
    label: 'MVP Timeline',
    value: '2-4 weeks',
  },
]

export default function ContactPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const handleMethodClick = (method: typeof contactMethods[0]) => {
    if (method.type === 'calendly') {
      setIsCalendlyOpen(true)
    } else if (method.link) {
      window.location.href = method.link
    }
  }

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-[#000000] via-[#0A1628] to-[#000000]">
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
      {/* Hero Section with Split Design */}
      <section className="py-16 md:py-24 overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-vibrant-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-electric-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vibrant-orange/20 border border-vibrant-orange/30 mb-6">
              <Zap className="text-vibrant-orange" size={16} />
              <span className="text-sm font-semibold text-vibrant-orange">Let&apos;s Build Together</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-theme-primary">
              Ready to <span className="text-gradient-enhanced">Transform</span>
              <br />Your Idea?
            </h1>
            <p className="text-xl md:text-2xl text-theme-secondary-bright max-w-3xl mx-auto">
              From rapid prototypes to full-scale AI solutions.
              Let&apos;s discuss how we can bring your vision to life.
            </p>
          </FadeIn>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <FadeIn key={method.title} delay={index * 0.1}>
                  <button
                    onClick={() => handleMethodClick(method)}
                    className={`group w-full text-left p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:-translate-y-2 ${method.color === 'cyan'
                      ? 'bg-electric-cyan/5 border-electric-cyan/20 hover:border-electric-cyan/50 hover:shadow-[0_0_30px_rgba(0,163,255,0.2)]'
                      : 'bg-vibrant-orange/5 border-vibrant-orange/20 hover:border-vibrant-orange/50 hover:shadow-[0_0_30px_rgba(255,107,53,0.2)]'
                      }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${method.color === 'cyan'
                        ? 'bg-electric-cyan/20'
                        : 'bg-vibrant-orange/20'
                        }`}
                    >
                      <Icon
                        className={method.color === 'cyan' ? 'text-electric-cyan' : 'text-vibrant-orange'}
                        size={28}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-theme-primary">{method.title}</h3>
                    <p className="text-theme-secondary-bright text-sm mb-4">{method.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className={method.color === 'cyan' ? 'text-electric-cyan' : 'text-vibrant-orange'}>
                        {method.action}
                      </span>
                      <ArrowRight
                        className={`transition-transform duration-300 group-hover:translate-x-1 ${method.color === 'cyan' ? 'text-electric-cyan' : 'text-vibrant-orange'
                          }`}
                        size={16}
                      />
                    </div>
                  </button>
                </FadeIn>
              )
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <FadeIn className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden">
                {/* Decorative gradient orb */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-vibrant-orange/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-theme-primary">Tell Us About Your Project</h2>
                  <p className="text-theme-secondary-bright mb-8 text-base">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </FadeIn>

            {/* Quick Info Sidebar */}
            <FadeIn delay={0.2} className="lg:col-span-5 space-y-6">
              {/* Quick Info Cards */}
              <div className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                <h3 className="text-xl font-bold mb-6 text-theme-primary">What to Expect</h3>
                <div className="space-y-4">
                  {quickInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-electric-cyan/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-electric-cyan" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-theme-secondary-bright mb-1">{info.label}</p>
                          <p className="font-semibold text-theme-primary">{info.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Industries Card */}
              <div className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-vibrant-orange/10 to-transparent border border-vibrant-orange/20">
                <h3 className="text-xl font-bold mb-4 text-theme-primary">Industries We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {['Healthcare', 'Logistics', 'Education', 'Energy', 'Tourism', 'E-Commerce'].map((industry) => (
                    <span
                      key={industry}
                      className="px-3 py-1.5 rounded-full bg-vibrant-orange/20 border border-vibrant-orange/30 text-sm text-theme-primary"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {/* Next Steps Card */}
              <div className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-electric-cyan/10 to-transparent border border-electric-cyan/20">
                <h3 className="text-xl font-bold mb-4 text-theme-primary">After You Reach Out</h3>
                <ol className="space-y-3">
                  {['Initial consultation call', 'Project scope & timeline', 'Proposal & agreement', 'Development kickoff'].map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-electric-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-electric-cyan">{index + 1}</span>
                      </div>
                      <span className="text-theme-secondary-bright text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
