import type { Metadata, Viewport } from 'next';
import './globals.css';
import { profile } from '@/content/profile';
import { siteUrl } from '@/lib/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const description = `${profile.headline} ${profile.intro}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  title: { default: `${profile.name} | ${profile.role}`, template: `%s | ${profile.name}` },
  description,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: `${profile.name} | ${profile.role}`,
    description: profile.headline,
    url: siteUrl,
  },
  twitter: {
    card: 'summary',
    title: `${profile.name} | ${profile.role}`,
    description: profile.headline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#020817',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
