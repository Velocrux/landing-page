import type { Metadata } from 'next'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, staggerItem } from '@/components/animations/stagger-container'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Smartphone, Globe, Database, Shield, Zap, Code } from 'lucide-react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Product Development - Velocrux',
  description: 'Custom web applications, mobile apps, and enterprise software solutions built with cutting-edge technologies.',
}

const productTypes = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Scalable, responsive web applications built with modern frameworks and best practices.',
    technologies: ['React/Next.js', 'Vue/Nuxt.js', 'Node.js', 'Python/Django'],
    features: ['Progressive Web Apps', 'Real-time Features', 'API Integration', 'Cloud Deployment'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    technologies: ['React Native', 'Flutter', 'Swift/iOS', 'Kotlin/Android'],
    features: ['Cross-platform', 'Offline Capability', 'Push Notifications', 'App Store Optimization'],
  },
  {
    icon: Database,
    title: 'Enterprise Software',
    description: 'Robust enterprise solutions that streamline operations and improve efficiency.',
    technologies: ['Microservices', 'Cloud Architecture', 'DevOps', 'Database Design'],
    features: ['Scalable Architecture', 'Security First', 'Integration Ready', 'Performance Optimized'],
  },
  {
    icon: Shield,
    title: 'SaaS Platforms',
    description: 'Complete Software-as-a-Service platforms with subscription management and analytics.',
    technologies: ['Multi-tenancy', 'Payment Systems', 'Analytics', 'Admin Dashboards'],
    features: ['Subscription Management', 'User Analytics', 'API Documentation', 'White-label Options'],
  },
]

const developmentProcess = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, define project scope, and create detailed technical specifications.',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our designers create intuitive user interfaces and interactive prototypes for validation.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Agile development with continuous testing, code reviews, and quality assurance.',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'Seamless deployment to production with ongoing maintenance and feature updates.',
  },
]

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-theme-primary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-badge mb-8">
              <span className="text-sm text-primary-cyan font-medium uppercase tracking-wider">
                Product Development
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom Products That
              <br />
              <span className="text-gradient">Drive Success</span>
            </h1>
            <p className="text-xl text-theme-secondary leading-relaxed mb-8">
              From concept to deployment, we build scalable, secure, and user-friendly applications 
              that solve real business problems and create lasting value.
            </p>
            <Button variant="primary" size="xl">
              Start Your Project
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-24 bg-theme-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Build
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              Our expertise spans across various platforms and technologies to deliver comprehensive digital solutions.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productTypes.map((product) => (
              <motion.div key={product.title} variants={staggerItem}>
                <Card className="h-full glass-card">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary-cyan/10 border border-primary-cyan/20 flex items-center justify-center mb-4">
                      <product.icon className="text-primary-cyan" size={32} />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-theme-primary mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-primary-cyan/10 text-primary-cyan text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-theme-primary mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center text-theme-secondary text-sm">
                            <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={14} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-theme-primary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Development Process
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((process, index) => (
              <motion.div key={process.title} variants={staggerItem}>
                <Card className="h-full glass-card text-center">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 rounded-full bg-primary-cyan/20 text-primary-cyan font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                    <p className="text-theme-secondary text-sm">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-theme-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies We Master
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              We stay current with the latest technologies to deliver modern, efficient solutions.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {technologies.map((tech) => (
                  <div key={tech.name} className="text-center">
                    <div className="glass-badge-small p-4 rounded-lg">
                      <Code className="text-primary-cyan mx-auto mb-2" size={24} />
                      <h4 className="font-semibold text-theme-primary">{tech.name}</h4>
                      <p className="text-xs text-theme-tertiary">{tech.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-theme-primary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-theme-secondary mb-8">
              Let's turn your vision into a powerful digital product that drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Get Project Quote
              </Button>
              <Button variant="secondary" size="xl">
                View Portfolio
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}