// app/dashboard/add-product/page.js
'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Plus, Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AddProductPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  })

  // Redirect if not authenticated
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/login')
    return null
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim() || !formData.description.trim() || !formData.price) {
      toast.error('Please fill in all fields')
      return
    }

    if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      toast.error('Please enter a valid price')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          description: formData.description.trim(),
          price: parseFloat(formData.price)
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create product')
      }

      const newProduct = await response.json()
      toast.success('Product created successfully!')
      
      // Reset form
      setFormData({ name: '', description: '', price: '' })
      
      // Redirect to products page after a short delay
      setTimeout(() => {
        router.push('/products')
      }, 1500)

    } catch (error) {
      console.error('Error creating product:', error)
      toast.error('Failed to create product. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
   <div className="min-h-screen bg-gray-50 py-8">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mb-8">
      <Link 
        href="/products"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Products</span>
      </Link>
      
      <div className="flex items-center space-x-3">
        <Plus className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
      </div>
      <p className="text-gray-600 mt-2">
        Create a new product and add it to the store
      </p>
    </div>

    {/* Form */}
    <div className="bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6 p-8">
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Product Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="Enter product description"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Price ($) *
          </label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            min="0"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="0.00"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Creating Product...</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                <span>Create Product</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>

    {/* User Info */}
    <div className="mt-6 text-center text-sm text-gray-500">
      Logged in as: <span className="font-medium text-gray-700">{session?.user?.name}</span>
    </div>
  </div>
</div>
  )
}