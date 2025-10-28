export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.",
    featured: true,
    rating: 4.8,
    reviews: 234
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 399.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced fitness tracking, heart rate monitoring, GPS, and smartphone notifications. Water-resistant with 7-day battery life.",
    featured: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: 3,
    name: "Minimalist Backpack",
    price: 89.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Sleek and durable backpack with laptop compartment, water-resistant material, and ergonomic design. Perfect for daily commute.",
    featured: false,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Running Shoes Elite",
    price: 129.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Lightweight running shoes with responsive cushioning, breathable mesh upper, and excellent traction for all terrains.",
    featured: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: 49.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
    description: "Genuine leather wallet with RFID protection, multiple card slots, and slim design. Handcrafted with attention to detail.",
    featured: false,
    rating: 4.5,
    reviews: 98
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    description: "Compact wireless speaker with 360-degree sound, waterproof design, and 12-hour battery life. Perfect for outdoor adventures.",
    featured: false,
    rating: 4.6,
    reviews: 201
  },
  {
    id: 7,
    name: "Sunglasses Classic",
    price: 159.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    description: "Timeless sunglasses with polarized lenses, UV protection, and durable metal frame. Style meets functionality.",
    featured: false,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 8,
    name: "Yoga Mat Premium",
    price: 59.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    description: "Extra thick yoga mat with non-slip surface, eco-friendly materials, and carrying strap. Ideal for all yoga practices.",
    featured: false,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 9,
    name: "Coffee Maker Deluxe",
    price: 199.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    description: "Programmable coffee maker with thermal carafe, brew strength control, and automatic shut-off. Wake up to perfect coffee.",
    featured: true,
    rating: 4.7,
    reviews: 267
  },
  {
    id: 10,
    name: "Desk Lamp Modern",
    price: 69.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
    description: "LED desk lamp with adjustable brightness, color temperature control, and USB charging port. Perfect for work and study.",
    featured: false,
    rating: 4.6,
    reviews: 132
  },
  {
    id: 11,
    name: "Wireless Mouse",
    price: 39.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description: "Ergonomic wireless mouse with precision tracking, long battery life, and comfortable grip for extended use.",
    featured: false,
    rating: 4.5,
    reviews: 189
  },
  {
    id: 12,
    name: "Travel Mug Insulated",
    price: 29.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?w=500&h=500&fit=crop",
    description: "Stainless steel travel mug with double-wall insulation, leak-proof lid, and keeps drinks hot or cold for hours.",
    featured: false,
    rating: 4.8,
    reviews: 223
  }
];

export const categories = ["All", "Electronics", "Fashion", "Sports", "Home"];
