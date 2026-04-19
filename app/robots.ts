import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  const allow = ['/']
  const disallow = ['/api/']

  // AI crawlers we explicitly welcome so Gigacrux content is eligible
  // for inclusion in AI-powered search / answer engines (GEO).
  const aiBots = [
    'GPTBot', // OpenAI training
    'OAI-SearchBot', // ChatGPT Search
    'ChatGPT-User', // ChatGPT on-demand browsing
    'ClaudeBot', // Anthropic Claude
    'Claude-Web', // Anthropic Claude (legacy name)
    'anthropic-ai', // Anthropic crawler
    'Google-Extended', // Google Gemini / Bard training
    'Googlebot', // Google Search
    'Googlebot-Image',
    'Bingbot', // Bing + Copilot
    'PerplexityBot', // Perplexity AI
    'Perplexity-User',
    'YouBot', // You.com
    'Applebot', // Apple search / Siri
    'Applebot-Extended', // Apple Intelligence
    'Amazonbot', // Amazon Alexa / Rufus
    'DuckDuckBot',
    'cohere-ai',
    'MistralAI-User',
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',
    'Bytespider', // TikTok / Doubao
    'FacebookBot',
  ].map((userAgent) => ({ userAgent, allow, disallow }))

  return {
    rules: [{ userAgent: '*', allow, disallow }, ...aiBots],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
