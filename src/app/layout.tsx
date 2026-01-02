import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Sparta Properties Limited - Commercial Real Estate | Kampala, Uganda',
  description: 'Uganda\'s premier commercial real estate firm, delivering excellence in property leasing, management, and strategic consultancy since 2018.',
  keywords: 'commercial real estate, property leasing, asset management, Kampala, Uganda, office spaces, retail properties, industrial facilities',
  authors: [{ name: 'Sparta Properties Limited' }],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Sparta Properties Limited - Commercial Real Estate',
    description: 'Uganda\'s premier commercial real estate firm',
    type: 'website',
  },
  metadataBase: new URL('https://spartaproperties.co.ug'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfairDisplay.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen bg-white text-corporate-navy selection:bg-corporate-blue selection:text-white antialiased font-sans">
        <Navbar />
        <main className="flex-grow pt-20 lg:pt-24">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

