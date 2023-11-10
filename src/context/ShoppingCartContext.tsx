import { ProductCart } from '@/types/interfaces'
import { ReactNode, createContext, useState } from 'react'

interface ShoppingCart {
  products: ProductCart[]
  quantityOfProducts: number
  total: string
}

interface ShoppingCartContextType {
  shoppingCart: ShoppingCart
  addProductToTheShoppingCart: (product: ProductCart) => void
  removeProductFromTheShoppingCart: (productId: string) => void
  updateTheQuantityOfProduct: (productId: string, quantity: number) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [products, setProducts] = useState<ProductCart[]>([])
  const quantityOfProducts = products.reduce(
    (acc, product) => acc + product.quantity,
    0,
  )
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

  function addProductToTheShoppingCart(product: ProductCart) {
    const hasAlreadyAddedThisProduct =
      products.find((productCart) => productCart.id === product.id) !==
      undefined

    if (hasAlreadyAddedThisProduct) {
      setProducts((prevState) => {
        return prevState.map((productCart) => {
          const newQuantity = productCart.quantity + 1

          if (productCart.id === product.id) {
            return {
              ...productCart,
              quantity: newQuantity,
              subtotal: calculateTheSubtotal(productCart.price, newQuantity),
            }
          }

          return productCart
        })
      })
    } else {
      setProducts((prevState) => [...prevState, product])
    }
  }

  function removeProductFromTheShoppingCart(productId: string) {
    setProducts((prevState) => {
      return prevState.filter((product) => product.id !== productId)
    })
  }

  function updateTheQuantityOfProduct(productId: string, quantity: number) {
    setProducts((prevState) => {
      return prevState.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity,
            subtotal: calculateTheSubtotal(product.price, quantity),
          }
        }

        return product
      })
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addProductToTheShoppingCart,
        removeProductFromTheShoppingCart,
        updateTheQuantityOfProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
