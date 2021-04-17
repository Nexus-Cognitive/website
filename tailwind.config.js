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
        'bg-black',
        'bg-blue',
        'bg-gray-light',
        'bg-gray-dark',
        'bg-green',
        'bg-purple',
        'bg-red',
        'text-black',
        'text-blue',
        'text-gray-light',
        'text-gray-dark',
        'text-green',
        'text-purple',
        'text-red',
        'opacity-0',
        'opacity-20',
        'opacity-60',
        '-top-0',
        '-top-3',
        '-top-6',
        '-top-9',
        '-top-12',
        'top-0',
        'top-3',
        'top-6',
        'top-9',
        'top-12',
        'sm:-top-0',
        'sm:-top-8',
        'sm:-top-16',
        'sm:-top-24',
        'sm:-top-32',
        'sm:top-0',
        'sm:top-8',
        'sm:top-16',
        'sm:top-24',
        'sm:top-32',
        '2xl:-top-0',
        '2xl:-top-10',
        '2xl:-top-20',
        '2xl:-top-30',
        '2xl:-top-40',
        '2xl:top-0',
        '2xl:top-10',
        '2xl:top-20',
        '2xl:top-30',
        '2xl:top-40'
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: {
        DEFAULT: '#22202E'
      },
      blue: {
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
      }
    },
    fontFamily: {
      mono: ['ibm-plex-mono', 'monospace'],
      sans: ['campaign', 'sans-serif']
    },
    fontSize: {
      xs: ['16px', '24px'],
      sm: ['24px', '32px'],
      md: ['32px', '40px'],
      lg: ['48px', '56px'],
      xl: ['64px', '72px']
    },
    height: {
      0: '0px',
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      screen: '100vh',
      'screen-half': '50vh'
    },
    maxWidth: {
      full: '100%',
      max: 'max-content',
      none: 'none',
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
    spacing: {
      0: '0px',
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
      11: '88px',
      12: '96px',
      13: '104px',
      14: '112px',
      15: '120px',
      16: '128px',
      17: '136px',
      18: '144px',
      19: '152px',
      20: '160px',
      24: '192px',
      25: '200px',
      26: '208px',
      27: '216px',
      28: '224px',
      29: '232px',
      30: '240px',
      32: '256px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
