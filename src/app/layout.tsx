import { Footer } from '@/features/navigation/footer';
import { Navigation } from '@/features/navigation/navigation';
import { QueryClientProvider } from '@/features/query/query-client-provider';
import { ThemeProvider } from '@/features/theme/theme-provider';
import { siteConfig } from '@/shared/config/site-config';
import '@/shared/styles/globals.css';
import { cn } from '@/shared/utils/cn';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/memoji.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/memoji.png`],
    creator: '@mrigankdoshy',
  },
  authors: [
    {
      name: 'Mrigank Doshy',
      url: 'https://www.mrigankdoshy.com',
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <QueryClientProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Navigation />
            <main className="mx-auto w-full max-w-[700px] flex-grow px-6 pb-16 pt-16 md:px-6 md:pb-20 md:pt-20">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </QueryClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
