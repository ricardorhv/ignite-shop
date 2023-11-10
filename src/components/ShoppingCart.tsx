import * as Dialog from '@radix-ui/react-dialog'

import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

import { Handbag, SmileySad, X } from '@phosphor-icons/react'

import {
  CloseButton,
  CloseButtonContainer,
  EmptyShoppingCart,
  ListOfCartItems,
  ShoppingCartButton,
  ShoppingCartContainer,
} from '@/styles/components/shoppingCart'

import { CartItem } from './CartItem'
import axios from 'axios'

export function ShoppingCart() {
  const { isFallback } = useRouter()
  const [isCreatingCheckoutSection, setIsCreatingCheckoutSection] =
    useState(false)

  const { shoppingCart } = useContext(ShoppingCartContext)

  const isShoppingCartEmpty = shoppingCart.quantityOfProducts === 0

  if (isFallback) {
    return <p>Loading</p>
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSection(true)

      const response = await axios.post('/api/checkout', {
        products: shoppingCart.products,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSection(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ShoppingCartButton
          color={isShoppingCartEmpty ? `emptyCart` : `fullCart`}
        >
          <Handbag size={24} weight="bold" />

          {isShoppingCartEmpty ? (
            ''
          ) : (
            <div>
              <span>{shoppingCart?.quantityOfProducts}</span>
            </div>
          )}
        </ShoppingCartButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content asChild>
          <ShoppingCartContainer>
            {isShoppingCartEmpty ? (
              <section>
                <CloseButtonContainer>
                  <Dialog.Close asChild>
                    <CloseButton>
                      <X size={24} weight="bold" />
                    </CloseButton>
                  </Dialog.Close>
                </CloseButtonContainer>

                <EmptyShoppingCart>
                  <SmileySad size={128} />

                  <strong>
                    Você não possui items na sua sacola de compras!
                  </strong>
                  <span>Adicione items para poder visualizar eles aqui</span>
                </EmptyShoppingCart>
              </section>
            ) : (
              <>
                <section>
                  <CloseButtonContainer>
                    <Dialog.Close asChild>
                      <CloseButton>
                        <X size={24} weight="bold" />
                      </CloseButton>
                    </Dialog.Close>
                  </CloseButtonContainer>

                  <Dialog.Title>Sacola de compras</Dialog.Title>

                  <ListOfCartItems>
                    {shoppingCart.products.map((product) => (
                      <CartItem key={product.id} {...product} />
                    ))}
                  </ListOfCartItems>
                </section>

                <footer>
                  <div>
                    <span>Quantidade</span>
                    <span>{shoppingCart.quantityOfProducts} itens</span>
                  </div>

                  <div>
                    <strong>Valor total</strong>
                    <strong>{shoppingCart.total}</strong>
                  </div>

                  <button
                    disabled={isCreatingCheckoutSection}
                    onClick={handleBuyProduct}
                  >
                    Finalizar compra
                  </button>
                </footer>
              </>
            )}
          </ShoppingCartContainer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
