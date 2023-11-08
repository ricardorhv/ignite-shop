import { styled } from '..'

export const CartItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.25rem',
})

export const ProductImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ItemContent = styled('div', {
  lineHeight: 1.6,
  fontSize: '$md',
  color: '$gray300',
  fontWeight: '400',

  strong: {
    color: '$white',
    display: 'block',
  },

  button: {
    marginTop: '0.5rem',
    border: 'none',
    outline: 'none',

    color: '$green500',
    background: 'transparent',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
})
