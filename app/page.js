// app/page.js
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { getAllProducts } from './components/lib/data'

export default async function HomePage() {
  const products = await getAllProducts()
  const featuredProducts = products.slice(0, 3) // Show first 3 products

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Product Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out our most popular products that customers love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
