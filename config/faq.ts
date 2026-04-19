export interface FaqItem {
  category: "general" | "process" | "timeline" | "pricing";
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    category: "general",
    question: "What services does Gigacrux offer?",
    answer:
      "Gigacrux specializes in custom AI solutions, rapid prototype and MVP development, digital services (consulting, system architecture, cloud deployment, technical support), and innovation lab R&D. We build AI-powered applications, RAG search engines, SaaS products, and full-stack web and mobile platforms.",
  },
  {
    category: "general",
    question:
      "Is Gigacrux the same company as Giga Crux, Gigacrush, or Gigacash?",
    answer:
      "Yes. Gigacrux (pronounced \"giga-kruks\") is often written as Giga Crux, Giga-Crux, or GigaCrux, and sometimes misspelled online as Gigacrush, Giga Crush, Gigacash, Gigacroux, or Gigakrux. All of these refer to the same software lab. The correct brand name is Gigacrux and the official website is gigacrux.com.",
  },
  {
    category: "general",
    question: "Which industries do you work with?",
    answer:
      "We have deep expertise in Healthcare, Logistics, Education, Energy, Tourism, and E-Commerce. Our domain-specific knowledge lets us build solutions that understand and solve industry challenges — from AI audit compliance (ArabAudit) to logistics optimization and multimodal AI platforms.",
  },
  {
    category: "process",
    question: "What is your development approach?",
    answer:
      "We follow an agile methodology with rapid iteration cycles. You see working prototypes within weeks, receive weekly progress updates, and have direct access to our development team throughout the project lifecycle.",
  },
  {
    category: "process",
    question: "How involved will I be in the development?",
    answer:
      "Very involved. We work as an extension of your team — you get a dedicated project manager, participate in sprint reviews, and can communicate directly with developers. Your feedback drives the development process.",
  },
  {
    category: "timeline",
    question: "How quickly can Gigacrux deliver an MVP?",
    answer:
      "Most MVPs are ready within 2–4 weeks. Complex enterprise solutions typically take 6–12 weeks. We prioritize speed without compromising quality, using proven frameworks and rapid prototyping methodology.",
  },
  {
    category: "timeline",
    question: "What happens after the initial launch?",
    answer:
      "We provide ongoing technical support, maintenance, and scale the solution as your business grows. We also offer continuous deployment pipelines and iterative enhancement based on real user feedback.",
  },
  {
    category: "pricing",
    question: "How does Gigacrux structure pricing?",
    answer:
      "We offer flexible engagement models: fixed-price projects for well-defined scopes, time & materials for evolving requirements, and dedicated team arrangements for long-term partnerships. Contact us for a customized quote.",
  },
  {
    category: "pricing",
    question: "Do you work with startups?",
    answer:
      "Absolutely. We love working with startups and understand budget constraints. We offer startup-friendly packages and can discuss equity arrangements for the right partnerships.",
  },
];
