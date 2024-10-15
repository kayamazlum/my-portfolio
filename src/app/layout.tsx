import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mazlum Kaya',
  description: "Mazlum Kaya's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={workSans.className}>
      <head>
        <link rel="shortuct icon" href="/favicon.ico" />
      </head>
      <body className={`p-0 m-0 bg-white text-customBrown dark:bg-black`}>
        <div id="top"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
