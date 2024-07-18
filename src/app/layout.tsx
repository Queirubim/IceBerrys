import type { Metadata } from 'next';
import { Inter, Yuji_Mai } from 'next/font/google';

import './globals.css';
import { Cart } from './components/cart';
import { Footer } from './components/footer';
import { Header } from './components/header';

const inter = Inter({ subsets: ['latin'] });
const yuji = Yuji_Mai({
  variable: '--font-yuji-mai',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: {
    default: 'Ice Berrys',
    template: '%s | Ice Berrys',
  },
  description: 'Sorveteria',
  icons: [
    {
      url: '/favicon.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} ${yuji.variable}`}>
      <body>
        <Header />
        {children}
        <Cart />
        <Footer />
      </body>
    </html>
  );
}
