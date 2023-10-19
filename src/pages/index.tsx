import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useEffect } from 'react'

interface ProductProps {
  id: string
  name: string
  description: string
  imageUrl: string
  price: string
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product
          href={`/product/${product.id}`}
          key={product.id}
          className="keen-slider__slide"
        >
          <Image src={product.imageUrl} width={520} height={480} alt="" />

          <footer>
            <strong>{product.name}</strong>
            <small>{product.description}</small>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps = (async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description as string,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}) satisfies GetStaticProps<{ products: ProductProps[] }>
