import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,
  marginLeft: 'auto',
})

export const Product = styled(Link, {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    right: '0.25rem',
    left: '0.25rem',
    padding: '1.5rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    // transform: 'translateY(110%)',
    // opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      lineHeight: 1.4,
    },

    button: {
      borderRadius: 6,

      color: '$white',
      backgroundColor: '$green500',

      border: 'none',
      outline: 'none',

      cursor: 'pointer',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem',

      transition: 'background-color 0.4s',

      '&:hover': {
        backgroundColor: '$green300',
      },
    },

    strong: {
      fontSize: '$lg',
      display: 'block',
      color: '$gray100',
      marginBottom: '0.25rem',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
      alignSelf: 'flex-end',
    },

    small: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

const Navigation = styled('button', {
  position: 'absolute',
  top: 0,

  height: '100%',
  width: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$white',

  zIndex: '9999',
  cursor: 'pointer',

  border: 'none',
  outline: 'none',

  '&:disabled': {
    display: 'none',
  },
})

export const NavigationLeft = styled(Navigation, {
  left: 0,
  background:
    'linear-gradient(-90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
})

export const NavigationRight = styled(Navigation, {
  right: 0,
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
})
