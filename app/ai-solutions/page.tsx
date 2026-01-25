import type { Metadata } from 'next'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Bot, BarChart3, Zap, Workflow } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Solutions - Velocrux',
  description: 'Custom AI development, machine learning models, and intelligent automation solutions.',
}

const useCases = [
  {
    title: 'Healthcare',
    description: 'Medical imaging analysis, patient data processing, and diagnostic assistance.',
    icon: '🏥',
  },
  {
    title: 'Finance',
    description: 'Fraud detection, risk assessment, algorithmic trading, and compliance monitoring.',
    icon: '💰',
  },
  {
    title: 'E-commerce',
    description: 'Personalized recommendations, inventory optimization, and customer behavior analysis.',
    icon: '🛒',
  },
  {
    title: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and supply chain optimization.',
    icon: '🏭',
  },
]

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-theme-primary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-badge mb-8">
              <span className="text-sm text-primary-cyan font-medium uppercase tracking-wider">
                AI Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Intelligent Solutions for
              <br />
              <span className="text-gradient">Modern Challenges</span>
            </h1>
            <p className="text-xl text-theme-secondary leading-relaxed mb-8">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance decision-making, and create competitive advantages.
            </p>
            <Button variant="primary" size="xl">
              Start Your AI Project
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-24 bg-theme-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              From machine learning to intelligent automation, we deliver AI solutions that drive real business value.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card className="h-full glass-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary-cyan/10 border border-primary-cyan/20 flex items-center justify-center mb-4">
                    <Brain className="text-primary-cyan" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Machine Learning Models</CardTitle>
                  <CardDescription className="text-base">
                    Custom ML models for prediction, classification, and pattern recognition tailored to your business needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Predictive Analytics
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Computer Vision
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Natural Language Processing
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Recommendation Systems
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full glass-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary-cyan/10 border border-primary-cyan/20 flex items-center justify-center mb-4">
                    <Bot className="text-primary-cyan" size={32} />
                  </div>
                  <CardTitle className="text-2xl">AI Chatbots & Assistants</CardTitle>
                  <CardDescription className="text-base">
                    Intelligent conversational AI that understands context and provides meaningful interactions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Customer Support Bots
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Virtual Assistants
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Voice Interfaces
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Multi-language Support
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full glass-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary-cyan/10 border border-primary-cyan/20 flex items-center justify-center mb-4">
                    <BarChart3 className="text-primary-cyan" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Data Analytics & Insights</CardTitle>
                  <CardDescription className="text-base">
                    Transform raw data into actionable insights with advanced analytics and visualization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Real-time Dashboards
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Automated Reporting
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Trend Analysis
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Business Intelligence
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full glass-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary-cyan/10 border border-primary-cyan/20 flex items-center justify-center mb-4">
                    <Workflow className="text-primary-cyan" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Process Automation</CardTitle>
                  <CardDescription className="text-base">
                    Streamline operations with intelligent automation that adapts and learns from your workflows.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Document Processing
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Workflow Optimization
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Decision Automation
                    </li>
                    <li className="flex items-center text-theme-secondary">
                      <Zap className="text-primary-cyan mr-2 flex-shrink-0" size={16} />
                      Quality Assurance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-theme-primary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry Applications
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              Our AI solutions are transforming businesses across various industries.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title}>
                <Card className="h-full text-center glass-card hover:scale-105 transition-transform">
                  <CardContent className="pt-8">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-theme-secondary">{useCase.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-theme-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-theme-secondary mb-8">
              Let&apos;s discuss how artificial intelligence can transform your business operations and drive growth.
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