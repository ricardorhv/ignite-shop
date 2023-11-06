import { createStitches } from '@stitches/react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const { styled, globalCss, getCssText, theme, config, css, keyframes } =
  createStitches({
    theme: {
      colors: {
        white: '#fff',
        gray900: '#121214',
        gray800: '#202024',
        gray400: '#808083',
        gray300: '#c4c4cc',
        gray100: '#e1e1e6',

        icon: '#8D8D99',

        green500: '#00875f',
        green300: '#00b37e',
      },

      fonts: {
        fontRoboto: roboto.style.fontFamily,
      },

      fontSizes: {
        sm: '0.75rem',
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
  })
