'use client'

import { Zap, Brain, Code, Rocket, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, staggerItem } from '@/components/animations/stagger-container'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const features = [
  {
    icon: Sparkles,
    title: 'AI Solutions + Customization',
    description:
      'Bespoke artificial intelligence systems designed specifically for your business needs and workflows.',
    color: 'orange' as const,
    images: [
      { src: '/ai-vision.png', label: 'Ethical AI' },
      { src: '/ai-holographic.png', label: 'RAG Chatbots' },
      { src: '/ai-multimodal.png', label: 'Multimodal AI' },
      { src: '/custom-ai-solutions.png', label: 'Logistics' },
      { src: '/energy.png', label: 'Energy' },
      { src: '/e-commerce.png', label: 'E-Commerce' },
      { src: '/education.png', label: 'Education' },
      { src: '/healthcare.png', label: 'Health Care' },
      { src: '/tourism.png', label: 'Tourism' },
    ],
  },
  {
    icon: Code,
    title: 'Prototype Development',
    description:
      'Rapid prototyping and MVP development to validate your ideas quickly with functional demos and proof-of-concept applications.',
    color: 'cyan' as const,
    images: [
      { src: '/prototype-1.png', label: '' },
      { src: '/prototype-2.png', label: '' },
    ],
  },
  {
    icon: Rocket,
    title: 'Digital Services',
    description:
      'Consulting, system architecture, cloud deployment, and ongoing technical support.',
    color: 'cyan' as const,
    images: [
      { src: '/consulting.png', label: 'Consulting' },
      { src: '/system-architecture.png', label: 'System Architecture' },
      { src: '/cloud-deployment.png', label: 'Cloud Deployment' },
      { src: '/technical-support.png', label: 'Technical Support' },
    ],
  },
  {
    icon: Zap,
    title: 'Innovation Lab',
    description:
      'Research and development of emerging technologies, prototyping, and proof-of-concept solutions.',
    color: 'orange' as const,
    images: [
      { src: '/innovation-lab.png', label: '' },
    ],
  },
]

export function Features() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  useEffect(() => {
    // Initialize image indices but don't auto-rotate
    features.forEach((feature, index) => {
      if (feature.images && feature.images.length > 1) {
        const key = `feature-${index}`
        setCurrentImageIndex(prev => ({ ...prev, [key]: 0 }))
      }
    })
  }, [])

  const handleNextImage = (featureIndex: number, imagesLength: number) => {
    const key = `feature-${featureIndex}`
    setCurrentImageIndex(prev => ({
      ...prev,
      [key]: ((prev[key] || 0) + 1) % imagesLength
    }))
  }

  const handlePrevImage = (featureIndex: number, imagesLength: number) => {
    const key = `feature-${featureIndex}`
    setCurrentImageIndex(prev => ({
      ...prev,
      [key]: ((prev[key] || 0) - 1 + imagesLength) % imagesLength
    }))
  }

  const handleDotClick = (featureIndex: number, dotIndex: number) => {
    const key = `feature-${featureIndex}`
    setCurrentImageIndex(prev => ({
      ...prev,
      [key]: dotIndex
    }))
  }

  return (
    <section className="py-24 features-section-enhanced">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-electric-cyan font-semibold mb-4 uppercase tracking-wider text-sm">
            Our Core Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-theme-primary">
            From Concept to <span className="text-gradient-enhanced">Digital Reality</span>
          </h2>
          <p className="text-theme-secondary-bright text-2xl mb-6 font-medium">
            AI powered solutions for every industry
          </p>
          <p className="text-theme-secondary-bright text-lg max-w-2xl mx-auto">
            Velocrux combines deep technical expertise with innovative thinking to deliver
            solutions that transform businesses and drive growth.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, featureIndex) => {
            const imageIndex = currentImageIndex[`feature-${featureIndex}`] || 0
            const currentImage = feature.images?.[imageIndex]

            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className={cn(
                  "relative",
                  feature.images && "md:col-span-2 lg:col-span-2"
                )}
              >
                <div
                  className={cn(
                    "h-full feature-card-wrapper",
                    feature.color === 'cyan' ? 'shiny-glow-border-cyan-enhanced' : 'shiny-glow-border-orange-enhanced'
                  )}
                >
                  <Card
                    className={cn(
                      "h-full transition-all duration-300 relative z-10 feature-card-enhanced overflow-hidden",
                      "border-0 rounded-[22.5px]",
                      feature.color === 'cyan' ? 'card-glow-cyan-enhanced' : 'card-glow-orange-enhanced',
                      feature.images && "flex flex-row items-stretch"
                    )}
                    onMouseEnter={() => setHoveredCard(`feature-${featureIndex}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {feature.images ? (
                      <>
                        <div className="flex-1 flex flex-col justify-start pt-8">
                          <CardHeader>
                            <div className={cn(
                              "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative glass-icon-container",
                              feature.color === 'cyan'
                                ? "glass-icon-cyan-enhanced"
                                : "glass-icon-orange-enhanced"
                            )}>
                              <feature.icon
                                className={feature.color === 'cyan' ? 'text-electric-cyan' : 'text-vibrant-orange'}
                                size={28}
                              />
                            </div>
                            <CardTitle className="text-xl text-theme-primary">{feature.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-base text-theme-secondary-bright">
                              {feature.description}
                            </CardDescription>
                          </CardContent>
                        </div>
                        <div className="relative w-1/2 min-h-[300px] flex flex-col">
                          {currentImage?.label && (
                            <div className={cn(
                              "bg-gradient-to-r pl-4 pr-6 py-3 backdrop-blur-sm",
                              feature.color === 'cyan'
                                ? 'from-electric-cyan/10 to-transparent'
                                : 'from-vibrant-orange/10 to-transparent'
                            )}>
                              <span className={cn(
                                "text-2xl font-bold",
                                feature.color === 'cyan' ? 'text-electric-cyan' : 'text-vibrant-orange'
                              )}>
                                {currentImage.label}
                              </span>
                            </div>
                          )}
                          <div className="relative flex-1 overflow-hidden">
                            <motion.div
                              key={imageIndex}
                              initial={{ opacity: 0, x: 100 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -100 }}
                              transition={{
                                duration: 0.8,
                                ease: "easeInOut"
                              }}
                              className="relative w-full h-full"
                            >
                              <Image
                                src={currentImage?.src || ''}
                                alt={currentImage?.label || feature.title}
                                fill
                                className="object-cover rounded-br-[22.5px]"
                              />
                            </motion.div>

                            {/* Navigation Buttons - appear on hover */}
                            {feature.images && feature.images.length > 1 && (
                              <>
                                {/* Left Arrow Button */}
                                <motion.button
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{
                                    opacity: hoveredCard === `feature-${featureIndex}` ? 1 : 0,
                                    scale: hoveredCard === `feature-${featureIndex}` ? 1 : 0.8
                                  }}
                                  transition={{ duration: 0.2 }}
                                  onClick={() => handlePrevImage(featureIndex, feature.images!.length)}
                                  className={cn(
                                    "absolute left-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-110 z-10",
                                    feature.color === 'cyan'
                                      ? 'bg-electric-cyan/90 hover:bg-electric-cyan hover:shadow-electric-cyan/50'
                                      : 'bg-vibrant-orange/90 hover:bg-vibrant-orange hover:shadow-vibrant-orange/50'
                                  )}
                                  aria-label="Previous image"
                                >
                                  <ChevronLeft className="text-white" size={20} />
                                </motion.button>

                                {/* Right Arrow Button */}
                                <motion.button
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{
                                    opacity: hoveredCard === `feature-${featureIndex}` ? 1 : 0,
                                    scale: hoveredCard === `feature-${featureIndex}` ? 1 : 0.8
                                  }}
                                  transition={{ duration: 0.2 }}
                                  onClick={() => handleNextImage(featureIndex, feature.images!.length)}
                                  className={cn(
                                    "absolute right-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-110 z-10",
                                    feature.color === 'cyan'
                                      ? 'bg-electric-cyan/90 hover:bg-electric-cyan hover:shadow-electric-cyan/50'
                                      : 'bg-vibrant-orange/90 hover:bg-vibrant-orange hover:shadow-vibrant-orange/50'
                                  )}
                                  aria-label="Next image"
                                >
                                  <ChevronRight className="text-white" size={20} />
                                </motion.button>
                              </>
                            )}
                          </div>

                          {/* Navigation Dots */}
                          {feature.images && feature.images.length > 1 && (
                            <div className="flex justify-center gap-2 py-4">
                              {feature.images.map((_, dotIndex) => (
                                <button
                                  key={dotIndex}
                                  onClick={() => handleDotClick(featureIndex, dotIndex)}
                                  className={cn(
                                    "h-3 rounded-full transition-all duration-300 nav-dot",
                                    imageIndex === dotIndex
                                      ? feature.color === 'cyan'
                                        ? 'bg-electric-cyan w-10 shadow-[0_0_15px_rgba(0,163,255,0.8)] active-dot-cyan'
                                        : 'bg-vibrant-orange w-10 shadow-[0_0_15px_rgba(255,107,53,0.8)] active-dot-orange'
                                      : 'bg-white/50 hover:bg-white/70 w-3 inactive-dot'
                                  )}
                                  aria-label={`Go to image ${dotIndex + 1}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <CardHeader>
                          <div className={cn(
                            "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative glass-icon-container",
                            feature.color === 'cyan'
                              ? "glass-icon-cyan-enhanced"
                              : "glass-icon-orange-enhanced"
                          )}>
                            <feature.icon
                              className={feature.color === 'cyan' ? 'text-electric-cyan' : 'text-vibrant-orange'}
                              size={28}
                            />
                          </div>
                          <CardTitle className="text-xl text-theme-primary">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base text-theme-secondary-bright">
                            {feature.description}
                          </CardDescription>
                        </CardContent>
                      </>
                    )}
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
