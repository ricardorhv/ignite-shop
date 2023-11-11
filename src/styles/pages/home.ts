import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,
  marginLeft: 'auto',
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

  zIndex: '500',
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
