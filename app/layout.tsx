import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlickSpot',
  description: 'Find out about the latest movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="px-10 pt-5">
         <Link prefetch href="/">
           Flick<span className="text-amber-600">Spot</span>
         </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
