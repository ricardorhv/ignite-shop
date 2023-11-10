import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  justifyContent: 'center',
  paddingBottom: '1rem',
})

export const Header = styled('header', {
  variants: {
    isAtTheSuccessPage: {
      true: {
        justifyContent: 'center',
      },

      false: {
        justifyContent: 'space-between',
      },
    },
  },

  defaultVariants: {
    isAtTheSuccessPage: 'false',
  },

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
})
