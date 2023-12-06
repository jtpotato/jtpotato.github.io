import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const satoshiFont = localFont({
  src: '../fonts/Satoshi-Variable.ttf',
  display: 'swap',
  variable: '--font-satoshi',
})

const generalSansFont = localFont({
  src: '../fonts/GeneralSans-Variable.ttf',
  display: 'swap',
  variable: '--font-general-sans'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${satoshiFont.variable} ${generalSansFont.variable}`}>{children}</body>
    </html>
  )
}
