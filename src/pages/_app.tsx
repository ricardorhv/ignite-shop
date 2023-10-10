import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'

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
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
