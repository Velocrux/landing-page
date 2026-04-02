import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/contexts/theme-context'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gigacrux - Innovative Software Lab | AI Solutions, Products & Services',
  description: 'Leading software lab specializing in AI development, custom products, and digital services. Transform your ideas into powerful solutions.',
  keywords: ['software lab', 'AI development', 'custom software', 'product development', 'digital services', 'machine learning', 'web development', 'mobile apps'],
  authors: [{ name: 'Gigacrux' }],
  openGraph: {
    title: 'Gigacrux - Innovative Software Lab',
    description: 'AI Solutions, Products & Custom Services for modern businesses.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gigacrux - Innovative Software Lab',
    description: 'AI Solutions, Products & Custom Services for modern businesses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    theme = prefersDark ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
