module.exports = {
    purge: {
      mode: 'layers',
      enabled: false,
      content: [
        './components/**/*.vue',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.js',
        './nuxt.config.js'
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          dark: '#343a40',
          secondary: '#6c757d',
          light: '#f8f9fa',
          hoverDark: '#1d2124',
          greenBlue: '#17a2b8',
          grayLight: '#dee2e6',
          transparent: 'transparent'
        },
        gridTemplateColumns: {
          auto: 'auto auto'
        },
        fontWeight: {
          boldbs: 700
        },
        fontSize: {
          xss: '0.5rem'
        },
        outline: {
          light: '1px solid white'
        }
      }
    },
    // eslint-disable-next-line import/no-extraneous-dependencies
    plugins: [require('autoprefixer')],
    variants: {
      extend: {}
    },
    exposeConfig: true
  }
  