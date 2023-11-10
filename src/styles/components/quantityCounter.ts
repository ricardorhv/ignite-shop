import { styled } from '..'

export const QuantityCounterContainer = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  lineHeight: 0,

  button: {
    border: 'none',
    outline: 'none',

    background: 'transparent',
    color: '$green500',
    cursor: 'pointer',

    transition: 'color 0.4s',

    '&:disabled': {
      filter: 'brightness(0.5)',
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      color: '$green300',
    },
  },

  span: {
    fontSize: '$md',
  },
})
