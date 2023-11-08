import { keyframes, styled } from '..'

export const ShoppingCarButton = styled('button', {
  borderRadius: 6,

  color: '$icon',
  backgroundColor: '$gray800',

  border: 'none',
  outline: 'none',

  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',

  position: 'relative',

  transition: 'filter 0.4s',

  '&:hover': {
    filter: 'brightness(1.2)',
  },

  div: {
    position: 'absolute',
    top: -7,
    right: -7,

    borderRadius: 9999,
    width: 24,
    height: 24,

    lineHeight: 0,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '$green500',
    color: '$white',
    fontSize: '$sm',
    fontWeight: 'bold',

    outline: '3px solid $gray900',
  },
})

const moveIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },

  to: {
    transform: 'translateX(0)',
  },
})

const moveOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },

  to: {
    transform: 'translateX(100%)',
  },
})

export const ShoppingCartContainer = styled('div', {
  '&[data-state="open"]': {
    animation: `${moveIn} 400ms ease-in-out`,
  },

  '&[data-state="closed"]': {
    animation: `${moveOut} 400ms ease-in-out`,
  },

  position: 'fixed',
  top: 0,
  right: 0,

  backgroundColor: '$gray800',
  height: '100vh',
  padding: '1.5rem 3rem 3rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  zIndex: 999,

  h2: {
    fontSize: '$lg',
    lineHeight: 1.6,

    margin: '1.5rem 0 2rem',
  },

  footer: {
    width: '100%',

    div: {
      display: 'flex',
      justifyContent: 'space-between',

      'strong:first-child': {
        fontSize: '$md',
      },

      'span:last-child': {
        fontSize: '$md',
      },

      'strong:last-child': {
        fontSize: '$xl',
      },
    },

    button: {
      width: '100%',
      padding: '1.25rem 0',

      fontSize: '$md',
      fontWeight: 'bold',

      backgroundColor: '$green500',
      color: '$white',
      borderRadius: 8,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      border: 'none',
      outline: 'none',

      marginTop: '3.5rem',
      cursor: 'pointer',

      transition: 'background-color 0.4s',

      '&:hover': {
        backgroundColor: '$green300',
      },
    },
  },
})

export const CloseButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
})

export const CloseButton = styled('button', {
  background: 'transparent',
  color: '$icon',
  lineHeight: 0,

  border: 'none',
  outline: 'none',

  cursor: 'pointer',
})

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.25rem',
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
