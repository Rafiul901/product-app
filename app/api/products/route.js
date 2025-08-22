// app/api/products/route.js
import { addProduct, getAllProducts } from '@/app/components/lib/data'
import { NextResponse } from 'next/server'


export async function GET() {
  const products = getAllProducts()
  return NextResponse.json(products)
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, description, price } = body
    
    if (!name || !description || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      )
    }
    
    const newProduct = addProduct({
      name,
      description,
      price: parseFloat(price),
      details: description,
      features: []
    })
    
    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' }, 
      { status: 500 }
    )
  }
}