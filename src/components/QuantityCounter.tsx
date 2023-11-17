import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import { QuantityCounterContainer } from '@/styles/components/quantityCounter'
import { Minus, Plus } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'

interface QuantityCounterProps {
  productId: string
  quantity: number
}

export function QuantityCounter({ productId, quantity }: QuantityCounterProps) {
  const [quantityOfProducts, setQuantityOfProducts] = useState(quantity)
  const { updateTheQuantityOfProduct } = useContext(ShoppingCartContext)

  const isQuantityEqualsToOne = quantityOfProducts === 1

  useEffect(() => {
    updateTheQuantityOfProduct(productId, quantityOfProducts)
  }, [quantityOfProducts])

  function handleIncreaseTheQuantityOfProducts() {
    setQuantityOfProducts((quantity) => quantity + 1)
  }

  function handleDecreaseTheQuantityOfProducts() {
    setQuantityOfProducts((quantity) => quantity - 1)
  }

  return (
    <QuantityCounterContainer>
      <button
        onClick={handleDecreaseTheQuantityOfProducts}
        disabled={isQuantityEqualsToOne}
      >
        <Minus size={16} />
      </button>

      <span>{quantityOfProducts}</span>

      <button onClick={handleIncreaseTheQuantityOfProducts}>
        <Plus size={16} />
      </button>
    </QuantityCounterContainer>
  )
}
