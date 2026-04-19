import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { Products } from '@/components/sections/products'
import { Features } from '@/components/sections/features'
import { ProductFeatures } from '@/components/sections/product-features'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
import { faqs } from '@/config/faq'
import {
  faqPageSchema,
  arabAuditProductSchema,
  breadcrumbSchema,
} from '@/lib/structured-data'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title:
    'Gigacrux — Innovative Software Lab | AI Solutions, Products & Services',
  description:
    'Gigacrux is an innovative software lab building AI-powered solutions, rapid prototypes, custom products, and digital services. MVPs in 2–4 weeks across Healthcare, Logistics, Education, Energy, Tourism, and E-Commerce.',
  alternates: { canonical: siteConfig.url },
}

export default function Home() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema(),
      arabAuditProductSchema(),
      faqPageSchema(
        faqs.map(({ question, answer }) => ({ question, answer }))
      ),
    ],
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <div id="home">
        <Hero />
        <TrustBar />
      </div>
      <div id="products">
        <Products />
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
