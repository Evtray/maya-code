export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'soluble' | 'grano'
  origin: string
  intensity: 'suave' | 'medio' | 'fuerte'
  flavorNotes: string[]
  image: string
  stock: number
  roastDate?: string
  altitude?: number
  process?: 'lavado' | 'honey' | 'natural'
  farmer?: string
  farm?: string
  isNew?: boolean
  isBestSeller?: boolean
  discount?: number
}

export interface CartItem {
  product: Product
  quantity: number
  grindType?: 'entero' | 'espresso' | 'filtro' | 'prensa'
  size?: '250g' | '500g' | '1kg'
}

export interface Customer {
  id?: string
  name: string
  email: string
  phone?: string
  address?: Address
  preferences?: CustomerPreferences
}

export interface Address {
  street: string
  city: string
  department: string
  zipCode: string
  country: string
}

export interface CustomerPreferences {
  favoriteCategory?: 'soluble' | 'grano'
  flavorProfile?: string[]
  grindPreference?: string
  subscriptionActive?: boolean
}

export interface Order {
  id: string
  customer: Customer
  items: CartItem[]
  subtotal: number
  tax: number
  shipping: number
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  orderDate: string
  estimatedDelivery?: string
  paymentMethod?: 'card' | 'transfer' | 'cash'
  isSubscription?: boolean
}

export interface Subscription {
  id: string
  customer: Customer
  products: CartItem[]
  frequency: 'weekly' | 'biweekly' | 'monthly'
  nextDelivery: string
  discount: number
  status: 'active' | 'paused' | 'cancelled'
}

export interface Review {
  id: string
  productId: string
  customerName: string
  rating: number
  comment: string
  date: string
}

export interface LeadCapture {
  name: string
  email: string
  productType: 'soluble' | 'grano'
  preferredFlavor?: string
  quantity?: string
  grindType?: string
  message?: string
}