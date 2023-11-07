import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logo from '@/assets/logo.svg'
import Image from 'next/image'
import {
  CartItem,
  CloseButton,
  CloseButtonContainer,
  Container,
  Header,
  ItemContent,
  ProductImageContainer,
  ShoppingCarButton,
  ShoppingCart,
} from '@/styles/pages/app'
import { Handbag, X } from '@phosphor-icons/react'

import camiseta from '@/assets/camisetas/1.png'

import * as Dialog from '@radix-ui/react-dialog'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          priority={true}
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt=""
        />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ShoppingCarButton>
              <Handbag size={24} weight="bold" />

              <div>
                <span>1</span>
              </div>
            </ShoppingCarButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Content asChild>
              <ShoppingCart>
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
              </ShoppingCart>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
