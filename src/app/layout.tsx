import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-corporate-slate text-corporate-navy selection:bg-corporate-gold selection:text-white antialiased">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

