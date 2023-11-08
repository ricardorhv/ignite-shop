import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import { useContext } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

import { Handbag, SmileySad, X } from '@phosphor-icons/react'
import camiseta from '@/assets/camisetas/1.png'

import {
  CloseButton,
  CloseButtonContainer,
  EmptyShoppingCart,
  ListOfCartItems,
  ShoppingCarButton,
  ShoppingCartContainer,
} from '@/styles/components/shoppingCart'
import { CartItem } from './CartItem'

export function ShoppingCart() {
  const { shoppingCart, removeProductFromTheShoppingCart } =
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
                    <strong>R$ {shoppingCart.total}</strong>
                  </div>

                  <button>Finalizar compra</button>
                </footer>
              </>
            )}
          </ShoppingCartContainer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}