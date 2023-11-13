import { keyframes, styled } from '..'

export const ShoppingCartButton = styled('button', {
  borderRadius: 6,

  variants: {
    color: {
      emptyCart: {
        color: '$icon',
      },

      fullCart: {
        color: '$gray300',
      },
    },
  },

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
  position: 'fixed',
  top: 0,
  right: 0,

  backgroundColor: '$gray800',
  height: '100vh',
  padding: '1.5rem 3rem 3rem',
  width: 'min(80%, 30rem)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  zIndex: 999,

  boxShadow: '-4px 0px 30px #00000080',

  section: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

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

  '&[data-state="open"]': {
    animation: `${moveIn} 400ms ease-in-out`,
  },

  '&[data-state="closed"]': {
    animation: `${moveOut} 400ms ease-in-out`,
  },
})

export const ListOfCartItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  height: '60%',

  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    width: 5,
  },

  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray400',
    borderRadius: 9999,
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

export const EmptyShoppingCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  height: '100%',
  textAlign: 'center',

  strong: {
    fontSize: '$md',
  },
})
