import localFont from 'next/font/local'
import type {Metadata} from 'next'
import './globals.css'
import {Header} from '@/components/shared'

const nunito = localFont({
  src: './fonts/Nunito-VariableFont_wght.ttf',
  variable: '--font-nunito',
  weight: '400 500 600 700 800 900',
});

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
  description: "Pizzeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${nunito.variable} antialiased`}
    >
      <main className='min-h-screen'>
        <Header/>
        {children}
      </main>
    </body>
    </html>
  );
}
