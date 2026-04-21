import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbarr from '@/components/navbar/Navbar';
//import Container from '@/components/global/Container';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import {Toaster} from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Next Storefront',
  description: 'A nifty store built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
    <ClerkProvider>
      
        <body className={inter.className}>
          <Providers>
            <Navbarr />
           {children}
          </Providers>
          <Toaster />
         
        </body>
     
    </ClerkProvider>
     </html>
  );
}
