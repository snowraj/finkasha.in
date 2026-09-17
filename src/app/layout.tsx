import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.finkasha.in'),
  title: 'Finkasha | Fractional CFO & Financial Advisory for ₹5 Cr – ₹50 Cr+ Enterprises',
  description:
    'Finkasha Services Private Limited empowers middle-market founders, CEOs, and CAs to plug cash leakage, master cash flow forecasting, and build predictable profitability with institutional Fractional CFO leadership.',
  keywords: [
    'Fractional CFO India',
    'Virtual CFO Services',
    'Finkasha',
    'Finkasha Services Private Limited',
    'Cash Leakage Audit',
    'Working Capital Management',
    'CFO for Manufacturing',
    'CFO for Trading',
    'Promoter Wealth Management',
    'Financial Advisory for ₹20 Cr - ₹50 Cr',
  ],
  authors: [{ name: 'Kamlesh Thakur', url: 'https://www.finkasha.in' }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Finkasha | Fractional CFO & Financial Intelligence',
    description:
      'Plug cash leakage, master cash flow forecasting, and achieve sustainable profitability with institutional Virtual CFO leadership.',
    url: 'https://www.finkasha.in',
    siteName: 'Finkasha',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Finkasha Institutional Financial Intelligence',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
