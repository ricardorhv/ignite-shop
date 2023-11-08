import Image from 'next/image'

import { ProductCardContainer } from '@/styles/components/productCard'
import { Product } from '@/types/interfaces'
import { Handbag } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

export function ProductCard(product: Product) {
  const { addProductToTheShoppingCart } = useContext(ShoppingCartContext)

  function handleAddProductToTheShoppingCart() {
    addProductToTheShoppingCart(product)
  }

  return (
    <ProductCardContainer
      href={`/product/${product.id}`}
      key={product.id}
      className="keen-slider__slide"
    >
      <Image src={product.imageUrl} width={520} height={480} alt="" />

      <footer>
        <div>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </div>
        <button onClick={handleAddProductToTheShoppingCart}>
          <Handbag size={32} weight="bold" />
        </button>
      </footer>
    </ProductCardContainer>
  )
}
