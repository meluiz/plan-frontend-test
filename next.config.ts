import type { NextConfig } from 'next';

export default {
  crossOrigin: 'anonymous',
  images: {
    remotePatterns: [new URL('https://flagcdn.com/w320/**')],
  },
  experimental: {
    staleTimes: {
      static: 60,
      dynamic: 60,
    },
  },
} as NextConfig;
