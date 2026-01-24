'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/animations/fade-in'
import { FloatAnimation } from '@/components/animations/float-animation'
import { useScroll } from '@/hooks/use-scroll'

interface DynamicStreak {
  id: number
  className: string
  style: React.CSSProperties
}

export function Hero() {
  const [dynamicStreaks, setDynamicStreaks] = useState<DynamicStreak[]>([])
  const { scrollY } = useScroll()
  const backgroundRef = useRef<HTMLDivElement>(null)
  // const videoRef = useRef<HTMLVideoElement>(null)

  // Generate dynamic light streaks on mount
  useEffect(() => {
    const streakCount = 5
    const newStreaks: DynamicStreak[] = []

    for (let i = 0; i < streakCount; i++) {
      const isOrange = Math.random() > 0.5
      const isBright = Math.random() > 0.7
      
      const className = `light-streak ${isOrange ? 'orange' : ''} ${isBright ? 'bright' : ''}`.trim()
      
      newStreaks.push({
        id: i,
        className,
        style: {
          left: `${Math.random() * 100}%`,
          animationDelay: `${-Math.random() * 10}s`,
          animationDuration: `${8 + Math.random() * 4}s`,
        },
      })
    }

    setDynamicStreaks(newStreaks)
  }, [])

  // Apply parallax effect
  useEffect(() => {
    if (backgroundRef.current) {
      // For absolute positioning, use a smaller multiplier
      backgroundRef.current.style.transform = `translateY(${scrollY * 0.1}px)`
    }
  }, [scrollY])

  // Ensure video plays
  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play().catch((error) => {
  //       // Autoplay may be blocked by browser, this is expected
  //       console.log('Video autoplay prevented:', error)
  //     })
  //   }
  // }, [])

  return (
    <section className="hero-container">
      {/* Animated Background Container */}
      <div ref={backgroundRef} className="background-container">
        {/* Background Video */}
        {/* <video
          ref={videoRef}
          className="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Background video"
        >
          <source src="/Bax1SXv4b9QI33bMvkicABKnI (1).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* Video Overlay for text readability */}
        {/* <div className="hero-video-overlay" /> */}

        {/* Glowing Orbs */}
        <div 
          className="glow-orb" 
          style={{
            width: '400px',
            height: '400px',
            background: '#3B82F6',
            top: '10%',
            left: '20%',
          }}
        />
        <div 
          className="glow-orb" 
          style={{
            width: '300px',
            height: '300px',
            background: '#F97316',
            bottom: '20%',
            right: '15%',
            animationDelay: '-5s',
          }}
        />
        <div 
          className="glow-orb" 
          style={{
            width: '350px',
            height: '350px',
            background: '#8B5CF6',
            top: '50%',
            left: '60%',
            animationDelay: '-10s',
          }}
        />

        {/* Static Light Streaks */}
        <div className="light-streak" style={{ left: '10%', animationDelay: '0s' }} />
        <div className="light-streak bright" style={{ left: '25%', animationDelay: '-1s' }} />
        <div className="light-streak orange" style={{ left: '40%', animationDelay: '-3s' }} />
        <div className="light-streak" style={{ left: '55%', animationDelay: '-4s' }} />
        <div className="light-streak orange bright" style={{ left: '70%', animationDelay: '-2s' }} />
        <div className="light-streak" style={{ left: '85%', animationDelay: '-5s' }} />
        <div className="light-streak orange" style={{ left: '92%', animationDelay: '-6s' }} />

        {/* Dynamic Light Streaks */}
        {dynamicStreaks.map((streak) => (
          <div
            key={streak.id}
            className={streak.className}
            style={streak.style}
          />
        ))}
      </div>

      {/* Hero Content Wrapper */}
      <div className="hero-content">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge with Glassmorphism */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-badge mb-8">
                <span className="text-sm text-primary-cyan font-medium uppercase tracking-wider">
                  Innovative Software Lab
                </span>
              </div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                AI Solutions, Products
                <br />
                <span className="text-gradient">& Custom Services</span>
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-theme-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                From cutting-edge AI development to custom software solutions, 
                we transform ideas into powerful digital experiences that drive business growth.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button variant="primary" size="xl">
                  Explore Our Work
                </Button>
                <Button variant="secondary" size="xl">
                  Start Your Project
                </Button>
              </div>
            </FadeIn>

            {/* Trust Badge */}
            <FadeIn delay={0.5}>
              <p className="text-sm text-theme-tertiary mb-12">
                Trusted by startups and enterprises worldwide
              </p>
            </FadeIn>

            {/* Dashboard Mockup with Floating Elements & Glassmorphism */}
            {/* <FadeIn delay={0.6}>
              <div className="relative mt-16">
                <div className="relative rounded-2xl overflow-hidden glass-card shadow-neon-multi p-1">
                  <div className="aspect-video rounded-xl bg-theme-tertiary/30 backdrop-blur-xl p-8 flex items-center justify-center border border-theme-primary">
                    <div className="text-center">
                      <div className="inline-block px-6 py-3 rounded-lg glass-badge-small">
                        <p className="text-primary-cyan font-semibold">
                          AI • Products • Services
                        </p>
                      </div>
                      <p className="text-theme-secondary">
                        Our Digital Solutions
                      </p>
                    </div>
                  </div>
                </div>

                <FloatAnimation
                  duration={3}
                  delay={0}
                  yOffset={15}
                  className="absolute -top-8 -left-8 hidden lg:block"
                >
                  <div className="glass-floating-card glow-cyan-soft">
                    <p className="text-sm font-medium">Custom Development</p>
                  </div>
                </FloatAnimation>

                <FloatAnimation
                  duration={3.5}
                  delay={0.5}
                  yOffset={20}
                  className="absolute -top-4 -right-8 hidden lg:block"
                >
                  <div className="glass-floating-card glow-orange-soft">
                    <p className="text-sm font-medium">AI Integration</p>
                  </div>
                </FloatAnimation>

                <FloatAnimation
                  duration={4}
                  delay={1}
                  yOffset={18}
                  className="absolute -bottom-6 left-1/4 hidden md:block"
                >
                  <div className="glass-floating-card glow-gold-soft">
                    <p className="text-sm font-medium">Product Innovation</p>
                  </div>
                </FloatAnimation>
              </div>
            </FadeIn> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown className="text-theme-tertiary" size={24} />
      </motion.div>
    </section>
  )
}
