import Image from 'next/image'
import { useContext } from 'react'

import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import {
  CartItemContainer,
  ItemContent,
  ProductImageContainer,
} from '@/styles/components/cartItem'
import { Product } from '@/types/interfaces'

export function CartItem(product: Product) {
  const { removeProductFromTheShoppingCart } = useContext(ShoppingCartContext)

  function handleRemoveProductFromTheShoppingCart() {
    removeProductFromTheShoppingCart(product.id)
  }

  return (
    <CartItemContainer>
      <ProductImageContainer>
        <Image src={product.imageUrl} width={90} height={90} alt="" />
      </ProductImageContainer>

      <ItemContent>
        <span>{product.name}</span>
        <strong>{product.price}</strong>

        <button onClick={handleRemoveProductFromTheShoppingCart}>
          Remover
        </button>
      </ItemContent>
    </CartItemContainer>
  )
}
