// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import SessionProviderWrapper from './components/SessionProviderWrapper'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Product App',
  description: 'A simple product management application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              {children}
            </main>
            <Toaster position="top-right" />
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  )
}