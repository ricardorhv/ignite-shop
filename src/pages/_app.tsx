import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'

import { ShoppingCartContextProvider } from '@/context/ShoppingCartContext'
import { ShoppingCart } from '@/components/ShoppingCart'
import Link from 'next/link'
import { useRouter } from 'next/router'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  const isAtTheSuccessPage = pathname === '/success'

  return (
    <Container>
      <ShoppingCartContextProvider>
        <Header isAtTheSuccessPage={isAtTheSuccessPage}>
          <Link href={'/'}>
            <Image
              priority={true}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt=""
            />
          </Link>

          {!isAtTheSuccessPage && <ShoppingCart />}
        </Header>

        <Component {...pageProps} />
      </ShoppingCartContextProvider>
    </Container>
  )
}
