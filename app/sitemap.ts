import { MetadataRoute } from 'next'
import { activities } from '@/lib/activities'
import { documents } from '@/lib/documents'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.histobiolabo.com'

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Pages d'activités
  const activityPages: MetadataRoute.Sitemap = activities.map((activity) => ({
    url: `${baseUrl}/activites/${activity.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Pages de documents
  const documentPages: MetadataRoute.Sitemap = documents.map((document) => ({
    url: `${baseUrl}/documents/${document.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticPages, ...activityPages, ...documentPages]
}

