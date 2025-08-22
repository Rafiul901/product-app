// app/components/Hero.js
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Find the perfect products for your needs. From tech gadgets to lifestyle essentials, 
            we have everything you are looking for at unbeatable prices.
          </p>
          <div className="space-x-4">
            <Link 
              href="/products" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Browse Products
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}