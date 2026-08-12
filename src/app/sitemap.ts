import type { MetadataRoute } from 'next';

import { books } from '@/data/books';
import { siteUrl } from '@/lib/siteUrl';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/livres`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/categories`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/panier`,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${siteUrl}/livres/${book.id}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...pages, ...bookPages];
}