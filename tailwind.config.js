const unit = 8

const borderRadiuses = ['xs', 'sm', 'md', 'lg', 'xl']
const borderRadius = {}
borderRadiuses.forEach((b, i) => (borderRadius[b] = `${i * unit}px`))

const colors = [
  'black',
  'blue',
  'blue-dark',
  'gray-dark',
  'gray-light',
  'green',
  'red',
  'purple'
]
const backgrounds = colors.map((c) => `bg-${c}`)
const texts = colors.map((c) => `text-${c}`)

const opacities = [0, 20, 60].map((o) => `opacity-${o}`)

const topsBase = [0, 3, 6, 9, 12].map((t) => `top-${t}`)
const topsBase_ = topsBase.map((t) => `-${t}`)

const topsSm = [0, 8, 16, 24, 32].map((t) => `sm:top-${t}`)
const topsSm_ = topsSm.map((t) => {
  const [breakpoint, top] = t.split(':')
  return [breakpoint, ':-', top].join('')
})

const tops2xl = [0, 10, 20, 30, 40].map((t) => `2xl:top-${t}`)
const tops2xl_ = tops2xl.map((t) => {
  const [breakpoint, top] = t.split(':')
  return [breakpoint, ':-', top].join('')
})

const heights = 8
const height = {}
for (let h = 0; h <= heights; h++) {
  height[`${h}`] = `${h * 8}px`
}

const spacings = 32
const spacing = {}
for (let s = 0; s <= spacings; s++) {
  spacing[`${s}`] = `${s * 8}px`
}

module.exports = {
  corePlugins: {
    fontSmoothing: false,
    lineHeight: false,
    placeholderColor: false,
    placeholderOpacity: false,
    wordBreak: false
  },
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],

    options: {
      safelist: [
        ...backgrounds,
        ...texts,
        ...opacities,
        ...topsBase,
        ...topsBase_,
        ...topsSm,
        ...topsSm_,
        ...tops2xl,
        ...tops2xl_
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      ...borderRadius,
      full: '9999px'
    },
    colors: {
      black: {
        DEFAULT: '#22202E'
      },
      blue: {
        dark: '#0C163B',
        DEFAULT: '#444AE2'
      },
      gray: {
        dark: '#4B4B5E',
        light: '#B6B5BF'
      },
      green: {
        DEFAULT: '#2A4D4B'
      },
      purple: {
        DEFAULT: '#2E2A4D'
      },
      red: {
        DEFAULT: '#E24944'
      },
      white: {
        DEFAULT: '#F7F7F7'
      }
    },
    container: {
      center: true
    },
    extend: {
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        50: '0.5'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black.DEFAULT'),
            a: {
              color: theme('colors.blue.DEFAULT'),
              '&:hover': {
                color: theme('colors.blue.dark')
              }
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.DEFAULT'),
              color: theme('colors.blue.DEFAULT'),
              fontFamily: theme('fontFamily.mono'),
              fontSize: theme('fontSize.sm')
            },
            h1: {
              fontFamily: theme('fontFamily.mono')
            },
            h2: {
              fontFamily: theme('fontFamily.mono')
            },
            h3: {
              fontFamily: theme('fontFamily.mono')
            },
            h4: {
              fontFamily: theme('fontFamily.mono')
            },
            h5: {
              fontFamily: theme('fontFamily.mono')
            },
            h6: {
              fontFamily: theme('fontFamily.mono')
            }
          }
        }
      })
    },
    fontFamily: {
      mono: ['ibm-plex-mono', 'monospace'],
      sans: ['commuter-sans', 'sans-serif']
    },
    fontSize: {
      xs: ['16px', '24px'],
      sm: ['24px', '32px'],
      md: ['32px', '40px'],
      lg: ['48px', '56px'],
      xl: ['64px', '72px']
    },
    height: {
      ...height,
      screen: '100vh',
      'screen-half': '50vh'
    },
    maxWidth: {
      full: '100%',
      max: 'max-content',
      none: 'none',
      prose: '66ch',
      '4xl': '56rem',
      '12xl': '96rem'
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    spacing
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
