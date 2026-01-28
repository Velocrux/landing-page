import Image from 'next/image'
import { Sparkles, Zap, Brain } from 'lucide-react'
import Link from 'next/link'

export default function LinkedInBannerStatic() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0A1628] flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-[1650px] relative">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          LinkedIn Banner for <span className="text-gradient-enhanced">Velocrux</span>
        </h1>

        {/* LinkedIn Banner Container - 1584 x 396 */}
        <div
          className="relative w-full mx-auto"
          style={{ width: '1584px', height: '396px', maxWidth: '100%' }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-2xl border border-electric-cyan/30 shadow-[0_0_60px_rgba(0,163,255,0.3)]">
            {/* Animated Background from Hero Section */}
            <div
              className="background-container absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #0A1628 0%, #000000 50%, #0A1628 100%)',
              }}
            >
              {/* Animated glow orbs - moved up */}
              <div className="glow-orb absolute top-[-10%] left-[10%] w-[600px] h-[600px]" />
              <div className="glow-orb absolute top-[10%] right-[15%] w-[500px] h-[500px]" 
                   style={{ animationDelay: '2s' }} />
              <div className="glow-orb absolute bottom-[-5%] left-[35%] w-[450px] h-[450px]"
                   style={{ animationDelay: '4s' }} />

              {/* Animated light streaks - moved up */}
              <div className="light-streak absolute top-[5%] left-[15%] w-1 h-48" />
              <div className="light-streak orange absolute top-[30%] right-[20%] w-1 h-64"
                   style={{ animationDelay: '1.5s' }} />
              <div className="light-streak absolute bottom-[10%] left-[60%] w-1 h-56"
                   style={{ animationDelay: '3s' }} />
              <div className="light-streak orange absolute top-[20%] left-[40%] w-1 h-40"
                   style={{ animationDelay: '2.5s' }} />
              <div className="light-streak absolute bottom-[5%] right-[35%] w-1 h-52"
                   style={{ animationDelay: '4s' }} />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-between px-16">
              {/* Left: Key Features */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-electric-cyan/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/10 flex items-center justify-center">
                    <Brain className="text-electric-cyan" size={24} />
                  </div>
                  <span className="text-white font-semibold text-sm">AI Solutions</span>
                </div>

                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-vibrant-orange/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vibrant-orange/30 to-vibrant-orange/10 flex items-center justify-center">
                    <Zap className="text-vibrant-orange" size={24} />
                  </div>
                  <span className="text-white font-semibold text-sm">Rapid Build</span>
                </div>

                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-electric-cyan/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/10 flex items-center justify-center">
                    <Sparkles className="text-electric-cyan" size={24} />
                  </div>
                  <span className="text-white font-semibold text-sm">Innovation</span>
                </div>
              </div>

              {/* Right: Logo and Branding */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <h2 className="text-[5rem] font-bold mb-2 leading-none">
                    <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                      Velocrux
                    </span>
                  </h2>
                  <p className="text-3xl text-electric-cyan font-bold">
                    Think AI, Think of Us.
                  </p>
                </div>
                <div className="relative w-48 h-48 flex-shrink-0">
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
        <div className="mt-8 max-w-4xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="text-electric-cyan" size={24} />
              How to Use This Banner
            </h3>
            <div className="space-y-3 text-white/80">
              <p className="flex items-start gap-2">
                <span className="text-electric-cyan font-bold text-lg">1.</span>
                <span className="text-base">
                  Take a screenshot of the banner above at 1584 × 396 pixels (use browser zoom to adjust if needed)
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-electric-cyan font-bold text-lg">2.</span>
                <span className="text-base">
                  Alternative: Right-click on the banner and "Save image as..." (if browser supports it)
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-electric-cyan font-bold text-lg">3.</span>
                <span className="text-base">
                  Go to your LinkedIn profile → Click the camera/edit icon on your banner section
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-electric-cyan font-bold text-lg">4.</span>
                <span className="text-base">Upload the saved image and adjust positioning if needed</span>
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-electric-cyan/10 border border-electric-cyan/30">
              <p className="text-electric-cyan font-semibold">
                💡 Perfect Dimensions: 1584 × 396 pixels (4:1 ratio - LinkedIn recommended)
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-electric-cyan/10 to-vibrant-orange/10 border border-electric-cyan/20 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Zap className="text-electric-cyan" size={20} />
              Screenshot Tips
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-vibrant-orange">•</span>
                <span>Mac: Press ⌘+Shift+4, then press Space, click on the banner</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vibrant-orange">•</span>
                <span>Windows: Use Snipping Tool or Win+Shift+S for precise capture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vibrant-orange">•</span>
                <span>Browser: Zoom to 100% for best quality before capturing</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="/linkedin-banner-download"
              className="px-6 py-3 rounded-xl bg-electric-cyan hover:bg-electric-cyan/90 text-white font-semibold transition-all hover:shadow-[0_0_30px_rgba(0,163,255,0.4)]"
            >
              Try Download Version
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
