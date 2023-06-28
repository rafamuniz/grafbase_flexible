import './globals.css'
import { Inter } from 'next/font/google'

import { Footer, Header, Navbar } from '@/src/components'

export const metadata = {
  title: 'Admin Portal',
  description: 'Created By Rafael',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
