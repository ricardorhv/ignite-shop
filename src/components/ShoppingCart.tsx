import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import { useContext } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

import { Handbag, X } from '@phosphor-icons/react'
import camiseta from '@/assets/camisetas/1.png'

import {
  CartItem,
  CloseButton,
  CloseButtonContainer,
  ItemContent,
  ProductImageContainer,
  ShoppingCarButton,
  ShoppingCartContainer,
} from '@/styles/components/shoppingCart'

export function ShoppingCart() {
  const { addProductToTheShoppingCart, shoppingCart } =
    useContext(ShoppingCartContext)

  const isShoppingCartEmpty = shoppingCart.quantityOfProducts === 0

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ShoppingCarButton>
          <Handbag size={24} weight="bold" />

          {isShoppingCartEmpty ? (
            ''
          ) : (
            <div>
              <span>{shoppingCart?.quantityOfProducts}</span>
            </div>
          )}
        </ShoppingCarButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content asChild>
          <ShoppingCartContainer>
            <section>
              <CloseButtonContainer>
                <Dialog.Close asChild>
                  <CloseButton>
                    <X size={24} weight="bold" />
                  </CloseButton>
                </Dialog.Close>
              </CloseButtonContainer>

              <Dialog.Title>Sacola de compras</Dialog.Title>

              <CartItem>
                <ProductImageContainer>
                  <Image src={camiseta.src} width={90} height={90} alt="" />
                </ProductImageContainer>

                <ItemContent>
                  <span>Camiseta Beyond the limits</span>
                  <strong>R$ 79,90</strong>

                  <button>Remover</button>
                </ItemContent>
              </CartItem>
            </section>

            <footer>
              <div>
                <span>Quantidade</span>
                <span>3 itens</span>
              </div>

              <div>
                <strong>Valor total</strong>
                <strong>R$ 270,00</strong>
              </div>

              <button>Finalizar compra</button>
            </footer>
          </ShoppingCartContainer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
