import Stripe from 'stripe'

export const stripe = new Stripe(process.env.SECRET_KEY_STRIPE as string, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Ignite Shop',
  },
})
