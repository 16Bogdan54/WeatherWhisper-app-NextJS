import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Event Genie',
  description: 'Event management app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cyan-900 text-cyan-100 container mx-auto p-4`}>{children}</body>
    </html>
  )
}
