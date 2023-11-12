import type { Metadata } from 'next'
import './globals.css'
import Background from '@/lib/background/Background'

export const metadata: Metadata = {
  title: 'jtpotato',
  description: 'A personal site for some things. ... I wonder which platform this has been shared to?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        {children}
        <Background />
      </body>
    </html>
  )
}
