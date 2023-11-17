import {
  HomeContainer,
  NavigationLeft,
  NavigationRight,
} from '@/styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'

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
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    breakpoints: {
      '(min-width: 0px)': {
        slides: {
          perView: 1,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      '(min-width: 968px)': {
        slides: {
          perView: 3,
          spacing: 48,
        },
      },
    },
    slideChanged: (slide) => {
      setCurrentSlide(slide.track.details.rel)
    },
  })

  function prevSlide() {
    slider.current?.prev()
  }

  function nextSlide() {
    slider.current?.next()
  }

  const slides = slider.current?.options.slides as {
    perView: number
  }

  const isAtTheLastSlide = Math.ceil(
    ((slider.current?.track.details.slides.length as number) - 1) /
      slides?.perView,
  )

  return (
    <>
      <Head>
        <title>Home | Ignite shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        <NavigationLeft onClick={prevSlide} disabled={currentSlide === 0}>
          <CaretLeft size={40} weight="bold" />
        </NavigationLeft>

        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}

        <NavigationRight
          onClick={nextSlide}
          disabled={currentSlide === isAtTheLastSlide}
        >
          <CaretRight size={40} weight="bold" />
        </NavigationRight>
      </HomeContainer>
    </>
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
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}) satisfies GetStaticProps<{ products: ProductProps[] }>
