import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'

import { useContext } from 'react'
import {
  ShoppingCartContext,
  ShoppingCartContextProvider,
} from '@/context/ShoppingCartContext'
import { ShoppingCart } from '@/components/ShoppingCart'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ShoppingCartContextProvider>
        <Header>
          <Link href={'/'}>
            <Image
              priority={true}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt=""
            />
          </Link>

          <ShoppingCart />
        </Header>

        <Component {...pageProps} />
      </ShoppingCartContextProvider>
    </Container>
  )
}
