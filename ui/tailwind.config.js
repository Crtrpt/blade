const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
module.exports = {
  // presets: [
  //   require('@acmecorp/base-tailwind-config')
  // ],
  // mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // fill: theme => ({
    //   'red': theme('colors.red.500'),
    //   'green': theme('colors.green.500'),
    //   'blue': theme('colors.blue.500'),
    //   'indigo':theme('colors.indigo.500')
    // }),
    // colors: {
    //   gray: colors.coolGray,
    //   blue: colors.sky,
    //   red: colors.rose,
    //   pink: colors.fuchsia,
    //   indigo:colors.indigo
    // },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      fontStyle: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
}
