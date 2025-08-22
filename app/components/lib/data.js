// lib/data.js
export let products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    image: "https://i.ibb.co/MDZSRgr4/pexels-photo-610945.jpg",
    details: "Premium wireless headphones featuring advanced noise cancellation technology, 30-hour battery life, and crystal-clear audio quality. Perfect for music lovers and professionals.",
    features: ["Noise Cancellation", "30hr Battery", "Wireless", "Premium Audio"]
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    details: "Advanced smartwatch with comprehensive health monitoring, GPS tracking, and smartphone integration. Track your fitness goals and stay connected throughout the day.",
    features: ["Health Tracking", "GPS", "Waterproof", "Smart Notifications"]
  },
  {
    id: 3,
    name: "Laptop Stand",
    description: "Ergonomic laptop stand for better posture",
    price: 79.99,
    image: "https://i.ibb.co/DdxCvw6/pexels-photo-13766004.jpg",
    details: "Adjustable aluminum laptop stand designed to improve posture and reduce neck strain. Compatible with all laptop sizes and featuring excellent heat dissipation.",
    features: ["Adjustable Height", "Aluminum Build", "Heat Dissipation", "Universal Compatibility"]
  },
  {
  id: 4,
  name: "Bluetooth Speaker",
  description: "Portable Bluetooth speaker with deep bass",
  price: 149.99,
  image: "https://i.ibb.co/4nWSP4wZ/pexels-photo-1279365.jpg",
  details: "Compact and powerful Bluetooth speaker delivering deep bass and crystal-clear sound. Up to 12 hours of playtime, waterproof, and ideal for indoor and outdoor use.",
  features: ["Bluetooth 5.0", "Waterproof", "12hr Battery", "Deep Bass"]
},
{
  id: 5,
  name: "Gaming Mouse",
  description: "High-precision RGB gaming mouse",
  price: 59.99,
  image: "https://i.ibb.co/zhDgjc0R/pexels-photo-2115256.jpg",
  details: "Ergonomic gaming mouse with adjustable DPI, customizable RGB lighting, and responsive buttons. Designed for gamers seeking accuracy and comfort during long gaming sessions.",
  features: ["Adjustable DPI", "RGB Lighting", "Ergonomic", "High Precision"]
},
{
  id: 6,
  name: "Mechanical Keyboard",
  description: "Durable mechanical keyboard with tactile switches",
  price: 129.99,
  image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
  details: "Full-sized mechanical keyboard with tactile switches for a satisfying typing experience. Features customizable keycaps, anti-ghosting, and durable build quality for heavy use.",
  features: ["Mechanical Switches", "Anti-Ghosting", "Customizable Keycaps", "Durable Build"]
}

]

export function getAllProducts() {
  return products
}

export function getProductById(id) {
  return products.find(product => product.id === parseInt(id))
}

export function addProduct(product) {
  const newProduct = {
    id: products.length + 1,
    ...product,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop"
  }
  products.push(newProduct)
  return newProduct
}