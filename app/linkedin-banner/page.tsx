'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Sparkles, Zap, Brain } from 'lucide-react'

export default function LinkedInBanner() {
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY,
      }

      if (backgroundRef.current) {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20
        backgroundRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-[1584px] relative">
        {/* LinkedIn Banner Container - 1584 x 396 */}
        <div className="relative w-full aspect-[1584/396] overflow-hidden rounded-2xl border border-white/20">
          {/* Animated Background from Hero Section */}
          <div
            ref={backgroundRef}
            className="background-container absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0A1628 0%, #000000 50%, #0A1628 100%)',
            }}
          >
            {/* Animated glow orbs - exactly from hero section */}
            <div className="glow-orb absolute top-[5%] left-[10%] w-[600px] h-[600px]" />
            <div className="glow-orb absolute top-[30%] right-[15%] w-[500px] h-[500px]" 
                 style={{ animationDelay: '2s' }} />
            <div className="glow-orb absolute bottom-[10%] left-[35%] w-[450px] h-[450px]"
                 style={{ animationDelay: '4s' }} />

            {/* Animated light streaks - exactly from hero section */}
            <div className="light-streak absolute top-[20%] left-[15%] w-1 h-48" />
            <div className="light-streak orange absolute top-[50%] right-[20%] w-1 h-64"
                 style={{ animationDelay: '1.5s' }} />
            <div className="light-streak absolute bottom-[25%] left-[60%] w-1 h-56"
                 style={{ animationDelay: '3s' }} />
            <div className="light-streak orange absolute top-[35%] left-[40%] w-1 h-40"
                 style={{ animationDelay: '2.5s' }} />
            <div className="light-streak absolute bottom-[15%] right-[35%] w-1 h-52"
                 style={{ animationDelay: '4s' }} />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-between px-16">
            {/* Left: Logo and Branding */}
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Velocrux Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.6)]"
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-2">
                  <span className="text-gradient-enhanced">Velocrux</span>
                </h1>
                <p className="text-xl text-electric-cyan font-semibold mb-1">
                  AI-Powered Digital Solutions
                </p>
                <p className="text-white/70 text-base">
                  Transforming ideas into impactful digital realities
                </p>
              </div>
            </div>

            {/* Right: Key Features */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-electric-cyan/20">
                <div className="w-12 h-12 rounded-xl bg-electric-cyan/20 flex items-center justify-center">
                  <Brain className="text-electric-cyan" size={24} />
                </div>
                <span className="text-white font-semibold text-sm">AI Solutions</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-vibrant-orange/20">
                <div className="w-12 h-12 rounded-xl bg-vibrant-orange/20 flex items-center justify-center">
                  <Zap className="text-vibrant-orange" size={24} />
                </div>
                <span className="text-white font-semibold text-sm">Rapid Development</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-electric-cyan/20">
                <div className="w-12 h-12 rounded-xl bg-electric-cyan/20 flex items-center justify-center">
                  <Sparkles className="text-electric-cyan" size={24} />
                </div>
                <span className="text-white font-semibold text-sm">Innovation</span>
              </div>
            </div>
          </div>

          {/* Bottom gradient overlay for depth */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-5" />
        </div>

        {/* Instructions */}
        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="text-electric-cyan" size={24} />
            How to Use This Banner
          </h2>
          <div className="space-y-3 text-white/80">
            <p className="flex items-start gap-2">
              <span className="text-electric-cyan font-bold">1.</span>
              <span>Right-click on the banner above and select "Save image as..." or take a screenshot (1584 x 396 pixels)</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-electric-cyan font-bold">2.</span>
              <span>Go to your LinkedIn profile and click the camera icon on your banner section</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-electric-cyan font-bold">3.</span>
              <span>Upload the saved image</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-vibrant-orange font-bold">Tip:</span>
              <span>For best quality, use a screenshot tool that captures at high resolution</span>
            </p>
          </div>
          
          <div className="mt-6 p-4 rounded-xl bg-electric-cyan/10 border border-electric-cyan/30">
            <p className="text-electric-cyan font-semibold text-sm">
              💡 LinkedIn Banner Dimensions: 1584 × 396 pixels (4:1 ratio)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
