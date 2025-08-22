// app/products/page.js
import { getAllProducts } from '../components/lib/data'
import ProductCard from '../components/ProductCard'



export default function ProductsPage() {
  // Use direct import instead of API call for simplicity
  const products = getAllProducts()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of amazing products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found.</p>
          </div>
        )}
      </div>
    </div>
  )
}