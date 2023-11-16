import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ImageList,
  SuccessContainer,
} from '@/styles/pages/success'
import { Product } from '@/types/interfaces'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Stripe from 'stripe'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
  quantityOfProducts: number
}

export default function Success({
  teste,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const [checkoutDetails, setCheckoutDetails] = useState({} as SuccessProps)
  // const { query } = useRouter()

  // const sessionId = String(query?.session_id)

  // async function getCheckoutDetails() {
  //   const checkout = await stripe.checkout.sessions.retrieve(sessionId, {
  //     expand: ['line_items', 'line_items.data.price.product'],
  //   })

  //   const customerName = checkout.customer_details?.name as string
  //   const productsCart = checkout.line_items?.data as {
  //     price: {
  //       product: Stripe.Product
  //     }
  //     quantity: number
  //   }[]

  //   const quantityOfProducts = productsCart?.reduce(
  //     (acc, product) => acc + (product.quantity as number),
  //     0,
  //   ) as number

  //   const products = productsCart?.map((product) => {
  //     return {
  //       name: product?.price.product.name,
  //       imageUrl: product?.price.product.images[0],
  //     }
  //   })

  //   setCheckoutDetails({
  //     customerName,
  //     quantityOfProducts,
  //     products,
  //   })
  // }

  // useEffect(() => {
  //   getCheckoutDetails()
  // }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada! {teste}</h1>

        {/* {checkoutDetails.products ? (
          <>
            <ImageList>
              {checkoutDetails.products.map((product) => (
                <ImageContainer key={product.name}>
                  <Image
                    src={product.imageUrl}
                    alt=""
                    width={130}
                    height={130}
                  />
                </ImageContainer>
              ))}
            </ImageList>

            <p>
              Uhuul <strong>{checkoutDetails.customerName}</strong>, sua compra
              de {checkoutDetails.quantityOfProducts}{' '}
              {checkoutDetails.quantityOfProducts > 1
                ? `camisetas`
                : `camiseta`}{' '}
              já está a caminho da sua casa.
            </p>
          </>
        ) : (
          'loading'
        )} */}

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps = (async () => {
  // console.log('Rodei')

  // if (!query.session_id) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  // const sessionId = String(query.session_id)

  // return {
  //   props: {
  //     customerName,
  //     quantityOfProducts,
  //     products,
  //   },
  // }

  return {
    props: {
      teste: 'Testando',
    },
  }
}) satisfies GetServerSideProps<{ teste: string }>
