import type { Metadata } from 'next';

export const manifest = Object.freeze({
  name: 'Plan Countries - Marketing Digital',
  short_name: 'Plan Countries',
  description: '',
  display: 'standalone',
  background_color: '#F58220',
  theme_color: '#fff',
  icons: [
    {
      sizes: 'any',
      src: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
});

export const metadata = Object.freeze({
  title: {
    default: manifest.name,
    template: `%s | ${manifest.name}`,
  },
  description: manifest.description,
  appleWebApp: true,
  generator: 'Next.js',
  applicationName: manifest.name,
  category: 'personal',
  metadataBase: 'https://countries.meluiz.com',
  authors: [
    {
      name: 'meluiz',
      url: 'https://meluiz.com',
    },
  ],
  keywords: [],
  openGraph: {
    locale: 'pt_BR',
    type: 'website',
    url: 'https://countries.meluiz.com',
    title: manifest.name,
    siteName: manifest.name,
    description: manifest.description,
  },
  twitter: {
    title: manifest.name,
    description: manifest.description,
    card: 'summary_large_image',
    site: 'https://countries.meluiz.com',
  },
}) as unknown as Metadata;

export const viewport = Object.freeze({
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#09090B',
  colorScheme: 'dark light',
});

export const robots = Object.freeze({
  host: 'https://countries.meluiz.com',
  sitemap: `https://countries.meluiz.com/sitemap.xml`,
  rules: {
    allow: '/',
    userAgent: '*',
  },
});

export const sitemap = Object.freeze([
  {
    priority: 1,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    url: 'https://countries.meluiz.com',
  },
]);
