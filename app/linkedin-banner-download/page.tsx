'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Sparkles, Zap, Brain, Download } from 'lucide-react'
import html2canvas from 'html2canvas'

export default function LinkedInBannerDownload() {
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const backgroundRef = useRef<HTMLDivElement>(null)
  const bannerRef = useRef<HTMLDivElement>(null)

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

  const handleDownload = async () => {
    if (!bannerRef.current) return

    try {
      const canvas = await html2canvas(bannerRef.current, {
        backgroundColor: '#000000',
        scale: 2, // Higher quality
        width: 1584,
        height: 396,
      })

      const link = document.createElement('a')
      link.download = 'velocrux-linkedin-banner.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Error generating banner:', error)
      alert('Please take a screenshot instead. Banner dimensions: 1584 x 396 pixels')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0A1628] flex items-center justify-center p-8">
      <div className="w-full max-w-[1650px] relative">
        {/* Download Button */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-electric-cyan to-electric-cyan/80 hover:shadow-[0_0_40px_rgba(0,163,255,0.5)] transition-all duration-300 group"
          >
            <Download className="text-white group-hover:scale-110 transition-transform" size={24} />
            <span className="text-white font-bold text-lg">Download Banner</span>
          </button>
        </div>

        {/* LinkedIn Banner Container - 1584 x 396 */}
        <div
          ref={bannerRef}
          className="relative w-full"
          style={{ width: '1584px', height: '396px', maxWidth: '100%', margin: '0 auto' }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-2xl border border-electric-cyan/30 shadow-[0_0_60px_rgba(0,163,255,0.3)]">
            {/* Animated Background */}
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
              {/* Left: Key Features */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-electric-cyan/30 hover:border-electric-cyan/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/10 flex items-center justify-center">
                    <Brain className="text-electric-cyan" size={24} />
                  </div>
                  <span className="text-white font-semibold text-sm">AI Solutions</span>
                </div>

                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-vibrant-orange/30 hover:border-vibrant-orange/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vibrant-orange/30 to-vibrant-orange/10 flex items-center justify-center">
                    <Zap className="text-vibrant-orange" size={24} />
                  </div>
                  <span className="text-white font-semibold text-sm">Rapid Build</span>
                </div>

                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-electric-cyan/30 hover:border-electric-cyan/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/10 flex items-center justify-center">
                    <Sparkles className="text-electric-cyan" size={24} />
                  </div>
                  <span className="text-white font-semibold text-sm">Innovation</span>
                </div>
              </div>

              {/* Right: Logo and Branding */}
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <h1 className="text-5xl font-bold mb-2 text-white">
                    <span
                      className="bg-gradient-to-r from-electric-cyan via-white to-vibrant-orange bg-clip-text text-transparent"
                      style={{
                        backgroundSize: '200% 100%',
                        animation: 'gradient-shift 3s ease infinite',
                      }}
                    >
                      Velocrux
                    </span>
                  </h1>
                  <p className="text-2xl text-electric-cyan font-bold">
                    Think AI, Think of Us.
                  </p>
                </div>
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Velocrux Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.6)]"
                  />
                </div>
              </div>
            </div>

            {/* Bottom gradient overlay for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-5 pointer-events-none" />
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="text-electric-cyan" size={24} />
            How to Use This Banner
          </h2>
          <div className="space-y-3 text-white/80">
            <p className="flex items-start gap-2">
              <span className="text-electric-cyan font-bold">Option 1:</span>
              <span>Click the "Download Banner" button above to save the image directly</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-electric-cyan font-bold">Option 2:</span>
              <span>Right-click on the banner and select "Save image as..." or take a screenshot</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-electric-cyan font-bold">Upload:</span>
              <span>Go to your LinkedIn profile → Click the camera icon on your banner → Upload the image</span>
            </p>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-electric-cyan/10 border border-electric-cyan/30">
            <p className="text-electric-cyan font-semibold text-sm">
              💡 Perfect Dimensions: 1584 × 396 pixels (LinkedIn recommended size)
            </p>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-vibrant-orange/10 border border-vibrant-orange/30">
            <p className="text-vibrant-orange font-semibold text-sm flex items-center gap-2">
              <Zap size={16} />
              <span>kauser@velocrux.com • Global • Remote First</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
