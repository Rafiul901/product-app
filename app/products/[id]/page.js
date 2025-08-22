// app/products/[id]/page.js
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import { getProductById } from '@/app/components/lib/data'


export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id)
  
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/products"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover object-center rounded-lg"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  ${product.price}
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.details}
                  </p>
                </div>
                
                {product.features && product.features.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Features</h2>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}