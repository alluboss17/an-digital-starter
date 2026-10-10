import type { Metadata } from 'next';
import { DM_Serif_Display, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Apex Construction & Renovations | UK Contractor Website Demo',
  description:
    'A premium concept website for UK builders and renovation businesses, designed by AN Digital Studio.',
  metadataBase: new URL('https://demo.andigitalstudio.com'),
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Apex Construction & Renovations | Contractor Website Demo',
    description:
      'A premium contractor website concept created by AN Digital Studio for UK trades businesses.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
