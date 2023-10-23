import { ReactNode } from 'react';
import { Manrope, Nunito, Open_Sans } from 'next/font/google';
import Footer from '@/components/footer';
import Header from '@/components/header/Header';

import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});

const nunito = Nunito({ subsets: ['latin', 'cyrillic'], variable: '--font-nunito' });

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], variable: '--font-openSans' });

export const metadata = {
  title: 'SoftOcean',
  description: 'Development of software products',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${nunito.className} ${openSans.className} bg-bg-main text-text-primary`}>
        <div className="mx-auto flex flex-col px-4 3xl:container lg:px-16">
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
