// app/components/Navbar.js
'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { ShoppingBag, User, LogOut } from 'lucide-react'

export default function Navbar() {
  const { data: session, status } = useSession()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ProductApp</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/products" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </Link>
            
            {session ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/dashboard/add-product" 
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add Product
                </Link>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">{session.user?.name}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}