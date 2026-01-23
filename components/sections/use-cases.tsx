'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeartPulse, TrendingUp, GraduationCap, DollarSign, HeadphonesIcon } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'
import { cn } from '@/lib/utils'

const useCases = [
  {
    id: 'customer-support',
    title: 'Customer Support',
    icon: HeadphonesIcon,
    features: [
      'Automated ticket routing',
      '24/7 AI-powered responses',
      'Sentiment analysis',
      'Multi-channel support',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: HeartPulse,
    features: [
      'Patient data management',
      'Appointment scheduling',
      'Medical record analysis',
      'Prescription automation',
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: TrendingUp,
    features: [
      'Campaign automation',
      'Lead scoring',
      'Content generation',
      'Analytics reporting',
    ],
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    features: [
      'Student enrollment',
      'Grading automation',
      'Course recommendations',
      'Learning analytics',
    ],
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: DollarSign,
    features: [
      'Transaction monitoring',
      'Fraud detection',
      'Financial reporting',
      'Compliance automation',
    ],
  },
]

export function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id)
  const activeUseCase = useCases.find((uc) => uc.id === activeTab)

  return (
    <section className="py-24 bg-primary-navy-light">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-primary-cyan font-semibold mb-4 uppercase tracking-wider">
            AI Powered
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions for every
            <br />
            <span className="text-gradient">industry</span>
          </h2>
        </FadeIn>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={cn(
                'px-6 py-3 rounded-lg font-medium transition-all duration-300',
                'flex items-center space-x-2',
                activeTab === useCase.id
                  ? 'bg-primary-cyan text-white shadow-lg shadow-primary-cyan/20'
                  : 'bg-neutral-darker-gray border border-white/10 text-neutral-light-gray hover:text-white hover:border-white/20'
              )}
            >
              <useCase.icon size={20} />
              <span>{useCase.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeUseCase && (
            <motion.div
              key={activeUseCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-2xl glass-morphism border border-white/10 p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">
                      {activeUseCase.title}
                    </h3>
                    <ul className="space-y-4">
                      {activeUseCase.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary-cyan" />
                          </div>
                          <span className="text-neutral-light-gray">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-cyan/20 to-accent-orange/20 flex items-center justify-center">
                      <activeUseCase.icon className="text-primary-cyan" size={120} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
