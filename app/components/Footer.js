import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">ProductApp</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Your one-stop destination for amazing products. Discover, explore, and shop 
              with confidence. Quality guaranteed, satisfaction assured.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white text-sm">Products</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-white text-sm">Login</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: hello@productapp.com</li>
              <li>Phone: (880) 123-4567</li>
              <li>Address: 123 Product St, Shop City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 ProductApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
