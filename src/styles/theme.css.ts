import { createGlobalTheme } from "@vanilla-extract/css";

import twColors from 'tailwindcss/colors'

  export const root = createGlobalTheme(":root", {
    //* Fonts
    fonts: {
      body: `'Arimo', sans-serif`,
      script: "'League Script', cursive;"
    },
  fontWeights: {
    light: "300",
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
  },
  fontSizes: {
    display: {
      lg: '6rem',  // 57px / 16px
      md: '5rem',  // 45px / 16px
      sm: '4rem',   // 34px / 16px
    },
    title: {
      lg: '3rem',   // 30px / 16px
      md: '2.5rem',   // 26px / 16px
      sm: '2.25rem',   // 22px / 16px
    },
    body: {
      lg: '2rem',    // 20px / 16px
      md: '1.5rem',       // 16px / 16px
      sm: '1rem',    // 12px / 16px
    },
    label: {
      lg: '2rem',       // 16px / 16px
      md: '1rem',   // 14px / 16px
      sm: '0.75rem',    // 12px / 16px
    },

  },
  //* Colours
  colors: {
    // Semantic tokens
    primary: twColors.white,
    complementary: twColors.black,
    brand: "CF00FF",
    brandComplementary: twColors.purple[400],
    brandComplementaryLight: twColors.orange[200],
    brandLight: twColors.emerald[400],
    brandDark: twColors.emerald[700],

    // Color tokens
    success: twColors.green[400],
    warning: twColors.amber[400],
    error: twColors.rose[600],
    grey200: twColors.gray[200],
    grey300: twColors.gray[300],
    grey400: twColors.gray[400],
    grey500: twColors.gray[500],
    grey600: twColors.gray[600],
  },
  //* Spaces
  space: {
    none: '0',
    '1x': '8px',
    '2x': '16px',
    '3x': '24px',
    '4x': '32px',
    '5x': '40px',
    '6x': '48px',
    '7x': '56px',
    '8x': '64px',
    '9x': '72px',
    '10x': '80px'
  },

  //* Flex
  flex:{
    flexDirection:{
      row: 'row',
      rowRev: 'row-reverse',
      col: 'column',
      colRev: 'column-reverse',
    },

    jc:{
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    even: 'space-evenly'
    },
    ai:{
      center: 'center',
      top: 'flex-start',
      bottom: 'flex-end',
      stretch: 'stretch',
      base: 'baseline',
      },
  },

  //* Div Margins
  t0r16b32r16: "0 16px 32px 16px"
})

export const vars = { ...root };