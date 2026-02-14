import { Exo, Open_Sans } from 'next/font/google'

export const exo = Exo({
  variable: '--font-exo',
  preload: true,
  display: 'swap',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
})

export const openSans = Open_Sans({
  preload: true,
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['800'],
  fallback: ['var(--font-exo)'],
})
