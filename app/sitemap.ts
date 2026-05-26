import { MetadataRoute } from 'next'
import { CONDITIONS } from '@/lib/data'

const BASE_URL = 'https://missedbladder.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/conditions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/pathophysiology`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/symptoms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/diagnosis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/treatment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]

  const conditionRoutes: MetadataRoute.Sitemap = CONDITIONS.map((c) => ({
    url: `${BASE_URL}/conditions/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...conditionRoutes]
}
