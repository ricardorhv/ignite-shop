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
  flex: 1,

  strong: {
    color: '$white',
    display: 'block',
  },

  'strong + div': {
    marginTop: '0.5rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export const RemoveCartItemButton = styled('button', {
  border: 'none',
  outline: 'none',

  color: '$green500',
  background: 'transparent',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'color 0.4s',

  '&:hover': {
    color: '$green300',
  },
})
