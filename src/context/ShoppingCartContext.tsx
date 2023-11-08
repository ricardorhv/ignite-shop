import { Product } from '@/types/interfaces'
import { ReactNode, createContext, useState } from 'react'

interface ShoppingCart {
  products: Product[]
  quantityOfProducts: number
  total: number
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
  const [products, setProducts] = useState<Product[]>([])
  const quantityOfProducts = products.length
  const total = 0

  const shoppingCart = {
    products,
    quantityOfProducts,
    total,
  }

  function addProductToTheShoppingCart(product: Product) {
    setProducts((prevState) => [...prevState, product])
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