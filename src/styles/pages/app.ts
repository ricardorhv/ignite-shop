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
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  button: {
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

    transition: 'background-color 0.4s',

    div: {
      position: 'absolute',
      top: -7,
      right: -7,

      borderRadius: 9999,
      width: 24,
      height: 24,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: '$green500',
      color: '$white',
      fontSize: '$sm',
      fontWeight: 'bold',

      outline: '3px solid $gray900',
    },
  },
})
