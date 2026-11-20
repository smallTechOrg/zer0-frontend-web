import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// Only the Zer0 home page lives here. The old chatbot pages (about, pricing,
// sales, support, industry, signup) moved to chatbot0.smalltech.in.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zer0.smalltech.in/',
      lastModified: '2026-11-20',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
