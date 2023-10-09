/* eslint-disable react/no-unknown-property */
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
