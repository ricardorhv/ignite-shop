import Image from 'next/image'

import { ProductCardContainer } from '@/styles/components/productCard'
import { Product } from '@/types/interfaces'
import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import Link from 'next/link'
import { toast } from 'react-toastify'

export function ProductCard(product: Product) {
  const { addProductToTheShoppingCart } = useContext(ShoppingCartContext)

  function handleAddProductToTheShoppingCart() {
    const newProduct = {
      ...product,
      quantity: 1,
      subtotal: product.price,
    }

    addProductToTheShoppingCart(newProduct)
    toast.success(`${product.name} foi adicionado no carrinho`)
  }

  return (
    <ProductCardContainer className="keen-slider__slide">
      <Link href={`/product/${product.id}`}>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </Link>

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
