import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'CampusBazaar - Buy & Sell on Campus',
  description: 'A hyperlocal marketplace for Thapar Institute students. Buy and sell books, electronics, hostel items, and more!',
  keywords: 'campus marketplace, thapar, buy sell, students',
  robots: 'index, follow',
  openGraph: {
    title: 'CampusBazaar - Buy & Sell on Campus',
    description: 'A hyperlocal marketplace for Thapar Institute students.',
    url: 'https://campusbazaar.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
