export interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

export interface ProductCart extends Product {
  quantity: number
  subtotal: string
}
