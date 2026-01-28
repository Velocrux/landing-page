import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { Features } from '@/components/sections/features'
import { ProductFeatures } from '@/components/sections/product-features'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <Features />
      <ProductFeatures />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
