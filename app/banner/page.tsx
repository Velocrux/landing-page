import Image from 'next/image'
import { EB_Garamond } from 'next/font/google'
import { Sparkles, Zap, Brain, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function LinkedInBannerStatic() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0A1628] flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-[1650px] relative">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          LinkedIn Banner for <span className="text-gradient-enhanced">Velocrux</span>
        </h1>

        {/* LinkedIn Banner 1 - 1584 x 396 */}
        <p className="text-sm font-semibold text-electric-cyan/90 mb-2 text-center">Banner 1</p>
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
            <div className="absolute inset-0 z-10 flex items-center justify-end pr-2">
              {/* Left: Service Cards with Contact Info - aligned with tagline */}
              <div className="flex flex-col gap-4 mt-16">
                {/* Service Cards Row */}
                <div className="flex gap-4">
                  {/* AI Solutions Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative flex flex-col items-center gap-3 p-6 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,163,255,0.2)] hover:shadow-[0_8px_48px_rgba(0,163,255,0.4)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-cyan/40 to-electric-cyan/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,163,255,0.5)] group-hover:shadow-[0_0_40px_rgba(0,163,255,0.7)] transition-all duration-500">
                        <Brain className="text-electric-cyan" size={32} />
                      </div>
                      <span className="text-white font-bold text-base tracking-wide">AI Solutions</span>
                    </div>
                  </div>

                  {/* Rapid Build Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-vibrant-orange/30 to-vibrant-orange/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative flex flex-col items-center gap-3 p-6 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(255,107,53,0.2)] hover:shadow-[0_8px_48px_rgba(255,107,53,0.4)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-vibrant-orange/40 to-vibrant-orange/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,107,53,0.5)] group-hover:shadow-[0_0_40px_rgba(255,107,53,0.7)] transition-all duration-500">
                        <Zap className="text-vibrant-orange" size={32} />
                      </div>
                      <span className="text-white font-bold text-base tracking-wide">Rapid Build</span>
                    </div>
                  </div>

                  {/* Innovation Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative flex flex-col items-center gap-3 p-6 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,163,255,0.2)] hover:shadow-[0_8px_48px_rgba(0,163,255,0.4)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-cyan/40 to-electric-cyan/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,163,255,0.5)] group-hover:shadow-[0_0_40px_rgba(0,163,255,0.7)] transition-all duration-500">
                        <Sparkles className="text-electric-cyan" size={32} />
                      </div>
                      <span className="text-white font-bold text-base tracking-wide">Innovation</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information Row */}
                <div className="flex items-center gap-6">
                  {/* Email */}
                  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center">
                      <Mail className="text-electric-cyan" size={16} />
                    </div>
                    <span className="text-white font-semibold text-lg">kauser@velocrux.com</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-vibrant-orange/20 flex items-center justify-center">
                      <Phone className="text-vibrant-orange" size={16} />
                    </div>
                    <span className="text-white font-semibold text-lg">+91 76193 97846</span>
                  </div>
                </div>
              </div>

              {/* Right: Logo and Branding */}
              <div className="flex items-center gap-2 -ml-4">
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

        {/* LinkedIn Banner 2 - ArabAudit - 1584 x 396 (light tint background) */}
        <p className="text-sm font-semibold text-[#8b6914] mb-2 mt-12 text-center">Banner 2 — ArabAudit</p>
        <div
          className="relative w-full mx-auto"
          style={{ width: '1584px', height: '396px', maxWidth: '100%' }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-2xl border border-gray-200 shadow-lg" style={{ backgroundColor: '#E8F2EF' }}>
            {/* Light tint background (ArabAudit palette) */}
            <div className="absolute inset-0" style={{ backgroundColor: '#E8F2EF' }} />

            {/* Content: logo + AI text (AI is absolutely positioned — adjust top/right/left/bottom to move) */}
            <div className="absolute inset-0 z-10 flex items-center justify-end pr-12">
              <div className="relative flex flex-col items-end gap-2">
                {/* ArabAudit banner logo */}
                <div className="relative h-[340px] w-[680px] flex-shrink-0">
                  <Image
                    src="/arabaudit-banner-logo.png"
                    alt="ArabAudit — Smart Audit, Secure Growth."
                    fill
                    className="object-contain object-center"
                    priority
                    sizes="680px"
                  />
                  {/* Light tint box (absolute): tagline text */}
                  <div
                    className="max-h-[40px] absolute bottom-0 right-[20%] top-[56%] left-[38%] flex items-center justify-end ml-3"
                    style={{ backgroundColor: '#E8F2EF' }}
                  >
                    <span className={`font-[600] text-lg md:text-[25px] ${garamond.className}`} style={{ color: '#D4AF37' }}>
                      Your AI Audit Co-Pilot
                    </span>
                  </div>
                </div>
                {/* AI — same font as tagline (Garamond); position via top/right (e.g. top: '50%', right: '4.7rem') */}
                <span
                  className={`absolute text-5xl md:text-6xl font-[400] whitespace-nowrap select-none ${garamond.className}`}
                  style={{
                    color: '#0B4634',
                    top: '48.8%',
                    right: '3rem',
                    transform: 'translateY(-50%)',
                    letterSpacing: '0.1em',
                  }}
                >
                  AI
                </span>
              </div>
            </div>
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
                  Take a screenshot of either banner above at 1584 × 396 pixels (use browser zoom to adjust if needed)
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-electric-cyan font-bold text-lg">2.</span>
                <span className="text-base">
                  Alternative: Right-click on the banner and &quot;Save image as...&quot; (if browser supports it)
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
