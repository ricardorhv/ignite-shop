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

interface ProductProps {
  id: string
  name: string
  description: string
  imageUrl: string
  price: string
}

export default function Product({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading</p>
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
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
      },
    },
    revalidate: 60 * 60 * 1,
  }
}) satisfies GetStaticProps<{ product: ProductProps }, { id: string }>
