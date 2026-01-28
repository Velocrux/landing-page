import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { Features } from '@/components/sections/features'
import { ProductFeatures } from '@/components/sections/product-features'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="home">
        <Hero />
        <TrustBar />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="why-us">
        <ProductFeatures />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Contact />
    </main>
  )
}
