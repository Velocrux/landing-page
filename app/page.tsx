import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { Features } from '@/components/sections/features'
import { UseCases } from '@/components/sections/use-cases'
import { ProductFeatures } from '@/components/sections/product-features'
import { Integrations } from '@/components/sections/integrations'
import { Testimonials } from '@/components/sections/testimonials'
import { HowItWorks } from '@/components/sections/how-it-works'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <Features />
      <UseCases />
      <ProductFeatures />
      <Integrations />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <CTA />
    </main>
  )
}
