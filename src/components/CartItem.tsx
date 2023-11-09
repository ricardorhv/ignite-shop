import Image from 'next/image'
import { useContext } from 'react'

import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import {
  CartItemContainer,
  ItemContent,
  ProductImageContainer,
  RemoveCartItemButton,
} from '@/styles/components/cartItem'
import { Product } from '@/types/interfaces'
import { Minus, Plus } from '@phosphor-icons/react'

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

        <div>
          <div>
            <button>
              <Minus size={16} />
            </button>

            <span>1</span>

            <button>
              <Plus size={16} />
            </button>
          </div>

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
