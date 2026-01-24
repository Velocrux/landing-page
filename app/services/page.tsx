import type { Metadata } from 'next'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, staggerItem } from '@/components/animations/stagger-container'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Settings, Users, Cloud, Search, Headphones, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Digital Services - Velocrux',
  description: 'Comprehensive digital services including consulting, architecture, cloud deployment, and ongoing support.',
}

const services = [
  {
    icon: Search,
    title: 'Technical Consulting',
    description: 'Strategic technology guidance to help you make informed decisions about your digital transformation.',
    deliverables: [
      'Technology Assessment',
      'Architecture Planning',
      'Digital Strategy',
      'Risk Analysis',
    ],
    duration: '2-4 weeks',
  },
  {
    icon: Settings,
    title: 'System Architecture',
    description: 'Design scalable, secure, and maintainable system architectures that grow with your business.',
    deliverables: [
      'System Design Documents',
      'Database Architecture',
      'API Specifications',
      'Security Framework',
    ],
    duration: '3-6 weeks',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Seamless migration to cloud platforms with optimized performance, security, and cost-efficiency.',
    deliverables: [
      'Cloud Migration Plan',
      'Infrastructure Setup',
      'CI/CD Pipelines',
      'Monitoring & Alerts',
    ],
    duration: '4-8 weeks',
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Extend your development team with our skilled professionals to accelerate project delivery.',
    deliverables: [
      'Skilled Developers',
      'Project Management',
      'Knowledge Transfer',
      'Quality Assurance',
    ],
    duration: 'Flexible',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Comprehensive maintenance, updates, and technical support to keep your systems running smoothly.',
    deliverables: [
      '24/7 Monitoring',
      'Bug Fixes & Updates',
      'Performance Optimization',
      'Security Patches',
    ],
    duration: 'Ongoing',
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description: 'Complete digital transformation services to modernize your business processes and technology stack.',
    deliverables: [
      'Process Analysis',
      'Technology Modernization',
      'Staff Training',
      'Change Management',
    ],
    duration: '3-12 months',
  },
]

const benefits = [
  {
    title: 'Expert Guidance',
    description: 'Access to seasoned professionals with deep industry knowledge and technical expertise.',
    icon: '🎯',
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduce overhead costs while gaining access to specialized skills and cutting-edge technologies.',
    icon: '💰',
  },
  {
    title: 'Faster Time-to-Market',
    description: 'Accelerate your project timeline with our proven methodologies and experienced team.',
    icon: '⚡',
  },
  {
    title: 'Risk Mitigation',
    description: 'Minimize project risks with our comprehensive planning and quality assurance processes.',
    icon: '🛡️',
  },
]

const industries = [
  { name: 'Healthcare', description: 'HIPAA-compliant solutions and medical software' },
  { name: 'Finance', description: 'Secure financial platforms and compliance systems' },
  { name: 'E-commerce', description: 'Scalable online stores and payment processing' },
  { name: 'Education', description: 'Learning management systems and educational tools' },
  { name: 'Manufacturing', description: 'IoT integration and process optimization' },
  { name: 'Startups', description: 'MVP development and rapid prototyping' },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-theme-primary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-badge mb-8">
              <span className="text-sm text-primary-cyan font-medium uppercase tracking-wider">
                Digital Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Support for
              <br />
              <span className="text-gradient">Your Digital Journey</span>
            </h1>
            <p className="text-xl text-theme-secondary leading-relaxed mb-8">
              From strategic consulting to ongoing support, we provide the expertise and services 
              you need to succeed in the digital landscape.
            </p>
            <Button variant="primary" size="xl">
              Discuss Your Needs
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-theme-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Service Offerings
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              Comprehensive digital services designed to support every stage of your technology journey.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div key={service.title} variants={staggerItem}>
                <Card className="h-full glass-card">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary-cyan/10 border border-primary-cyan/20 flex items-center justify-center mb-4">
                      <service.icon className="text-primary-cyan" size={32} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-theme-primary mb-2">Deliverables:</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable} className="text-theme-secondary text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary-cyan rounded-full mr-2 flex-shrink-0"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-theme-primary/10">
                      <span className="text-xs text-theme-tertiary">Timeline: </span>
                      <span className="text-sm font-medium text-primary-cyan">{service.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-theme-primary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Services
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              Partner with us to leverage our expertise and accelerate your digital transformation.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={staggerItem}>
                <Card className="h-full glass-card text-center">
                  <CardContent className="pt-8">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-theme-secondary text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-theme-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              Our expertise spans across various industries with specialized knowledge and compliance requirements.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <motion.div key={industry.name} variants={staggerItem}>
                <Card className="glass-card hover:scale-105 transition-transform">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2 text-theme-primary">{industry.name}</h3>
                    <p className="text-theme-secondary text-sm">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-theme-primary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Service Process
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              A structured approach that ensures successful outcomes and client satisfaction.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="space-y-8">
              {[
                { step: '01', title: 'Discovery Call', description: 'We discuss your needs, challenges, and goals to understand the scope of work.' },
                { step: '02', title: 'Proposal & Planning', description: 'We create a detailed proposal with timeline, deliverables, and pricing.' },
                { step: '03', title: 'Execution', description: 'Our team executes the project with regular updates and milestone reviews.' },
                { step: '04', title: 'Delivery & Support', description: 'We deliver the completed work and provide ongoing support as needed.' },
              ].map((process, index) => (
                <motion.div key={process.title} variants={staggerItem}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary-cyan/20 text-primary-cyan font-bold text-xl flex items-center justify-center flex-shrink-0">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{process.title}</h3>
                      <p className="text-theme-secondary">{process.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-theme-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-theme-secondary mb-8">
              Ready to take your digital presence to the next level? Let's talk about how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Schedule Consultation
              </Button>
              <Button variant="secondary" size="xl">
                View Case Studies
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}