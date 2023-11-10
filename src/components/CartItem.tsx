import Image from 'next/image'
import { useContext } from 'react'

import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import {
  CartItemContainer,
  ItemContent,
  ProductImageContainer,
  RemoveCartItemButton,
} from '@/styles/components/cartItem'
import { ProductCart } from '@/types/interfaces'
import { QuantityCounter } from './QuantityCounter'

export function CartItem(product: ProductCart) {
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
        <strong>{product.subtotal}</strong>

        <div>
          <QuantityCounter productId={product.id} quantity={product.quantity} />

          <RemoveCartItemButton
            onClick={handleRemoveProductFromTheShoppingCart}
          >
            Remover
          </RemoveCartItemButton>
        </div>
      </ItemContent>
    </CartItemContainer>
  )
}
