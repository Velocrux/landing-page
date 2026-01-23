import { createClient } from 'contentful'

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

if (!space || !accessToken) {
  throw new Error(
    'CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be defined in environment variables'
  )
}

export const contentfulClient = createClient({
  space,
  accessToken,
})

// Helper functions for blog posts
export async function getAllPosts() {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
  })

  return response.items
}

export async function getPostBySlug(slug: string) {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  })

  if (response.items.length === 0) {
    return null
  }

  return response.items[0]
}

export async function getPostsByCategory(category: string) {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.slug': category,
    order: ['-fields.publishedDate'],
  })

  return response.items
}

export async function getFeaturedPosts(limit: number = 3) {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.featured': true,
    order: ['-fields.publishedDate'],
    limit,
  })

  return response.items
}
