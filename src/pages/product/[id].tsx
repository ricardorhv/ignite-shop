import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

import Image from 'next/image'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import Head from 'next/head'
import { Product } from '@/types/interfaces'

export default function Product({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()
  const [isCreatingCheckoutSection, setIsCreatingCheckoutSection] =
    useState(false)

  if (isFallback) {
    return <p>Loading</p>
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSection(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSection(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }
  return (
    <>
      <Head>
        <title>{product.name} | Ignite shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSection}
            // onClick={handleBuyProduct}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: true,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params }) => {
  const productId = params?.id as string

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description as string,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount as number) / 100),
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}) satisfies GetStaticProps<{ product: Product }, { id: string }>
