import { Product, ProductCart } from '@/types/interfaces'
import { ReactNode, createContext, useState } from 'react'

interface ShoppingCart {
  products: ProductCart[]
  quantityOfProducts: number
  total: string
}

interface ShoppingCartContextType {
  shoppingCart: ShoppingCart
  addProductToTheShoppingCart: (product: Product) => void
  removeProductFromTheShoppingCart: (productId: string) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [products, setProducts] = useState<ProductCart[]>([])
  const quantityOfProducts = products.length
  const total = products.reduce(
    (acc, product) => acc + convertPriceToNumber(product.subtotal),
    0,
  )

  const shoppingCart = {
    products,
    quantityOfProducts,
    total: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(total),
  }

  function convertPriceToNumber(price: string) {
    return Number(price.replace('R$', '').replace(',', '.'))
  }

  function calculateTheSubtotal(price: string, quantity: number) {
    const priceNumber = convertPriceToNumber(price)
    const subtotal = priceNumber * quantity

    const subtotalString = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(subtotal)

    return subtotalString
  }

  function addProductToTheShoppingCart(product: Product) {
    const newProduct = {
      ...product,
      quantity: 1,
      subtotal: '',
    }

    newProduct.subtotal = calculateTheSubtotal(
      newProduct.price,
      newProduct.quantity,
    )

    setProducts((prevState) => [...prevState, newProduct])
  }

  function removeProductFromTheShoppingCart(productId: string) {
    setProducts((prevState) => {
      return prevState.filter((product) => product.id !== productId)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addProductToTheShoppingCart,
        removeProductFromTheShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
