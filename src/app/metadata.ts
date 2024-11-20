import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Harikrishnan | Full Stack Developer & Designer',
    template: '%s | Harikrishnan'
  },
  description: 'Experienced Full Stack Developer and Designer specializing in modern web technologies like React, Next.js, and Node.js. Creating beautiful, performant, and user-centric digital experiences.',
  keywords: [
    'Harikrishnan',
    'Full Stack Developer',
    'Web Developer',
    'Web Designer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'Portfolio',
    'Software Engineer',
    'UI/UX Designer'
  ],
  authors: [{ name: 'Harikrishnan', url: 'https://your-domain.com' }],
  creator: 'Harikrishnan',
  publisher: 'Harikrishnan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Harikrishnan | Full Stack Developer & Designer',
    description: 'Experienced Full Stack Developer and Designer specializing in modern web technologies like React, Next.js, and Node.js. Creating beautiful, performant, and user-centric digital experiences.',
    siteName: 'Harikrishnan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Harikrishnan Portfolio - Full Stack Developer & Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harikrishnan | Full Stack Developer & Designer',
    description: 'Experienced Full Stack Developer and Designer specializing in modern web technologies like React, Next.js, and Node.js.',
    creator: '@your-twitter-handle',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};