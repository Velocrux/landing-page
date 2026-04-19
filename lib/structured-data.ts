import { siteConfig } from "@/config/site";

type JsonLd = Record<string, unknown>;

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.brandVariants,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logo,
      width: 512,
      height: 512,
    },
    image: siteConfig.ogImage,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: siteConfig.founded,
    email: siteConfig.email,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        availableLanguage: ["English", "Arabic"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: ["English", "Arabic"],
        areaServed: "Worldwide",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Retrieval-Augmented Generation",
      "Large Language Models",
      "Custom Software Development",
      "MVP Development",
      "Rapid Prototyping",
      "Cloud Deployment",
      "System Architecture",
      "Audit Compliance",
      "Regulatory Technology",
      "Healthcare Technology",
      "Logistics Optimization",
      "Educational Technology",
      "Energy Systems",
      "Tourism Platforms",
      "E-Commerce Platforms",
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.brandVariants,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": orgId },
  };
}

export function professionalServiceSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: siteConfig.name,
    image: siteConfig.ogImage,
    url: siteConfig.url,
    description: siteConfig.description,
    priceRange: "$$",
    areaServed: "Worldwide",
    provider: { "@id": orgId },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gigacrux Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Solutions & Customization",
            description:
              "Bespoke artificial intelligence systems — RAG chatbots, multimodal AI, computer vision, and domain-specific LLM applications tailored to business workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prototype & MVP Development",
            description:
              "Rapid prototyping and MVP delivery in 2–4 weeks to validate ideas with functional proof-of-concept applications.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Services",
            description:
              "Consulting, system architecture, cloud deployment, and ongoing technical support for modern digital products.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Innovation Lab",
            description:
              "R&D of emerging technologies, experimental prototyping, and proof-of-concept solutions for enterprise clients.",
          },
        },
      ],
    },
  };
}

export function arabAuditProductSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://arabaudit.com/#software",
    name: "ArabAudit",
    alternateName: ["Arab Audit", "ArabAudit AI"],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Audit & Compliance",
    operatingSystem: "Web",
    url: "https://arabaudit.com",
    image: `${siteConfig.url}/arabaudit-ai-logo.png`,
    description:
      "Saudi-native AI-powered audit compliance platform pre-configured for NCA ECC-2024, SAMA CSF, SDAIA/PDPL, and CBAHI healthcare accreditation. Features bilingual Audit Copilot (Arabic & English), AI-assisted evidence validation, cryptographically signed immutable audit records, and cross-framework evidence reuse across 300+ controls.",
    featureList: [
      "One-click export to official NCA and SAMA formats",
      "AI-assisted evidence validation",
      "Real-time bilingual Audit Copilot (Arabic & English)",
      "Cryptographically signed immutable audit records",
      "Cross-framework evidence reuse across 300+ controls",
      "Pre-configured for NCA ECC-2024, SAMA CSF, SDAIA/PDPL, CBAHI",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Contact sales for pricing",
      },
    },
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    inLanguage: ["en", "ar"],
  };
}

interface FaqEntry {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: FaqEntry[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };
}
