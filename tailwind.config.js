module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-primary': {
          light: 'var(--clr-primary-light)',
          DEFAULT: 'var(--clr-primary)',
          dark: 'var(--clr-primary-dark)',
        },
        'my-black': 'var(--clr-black)',
        'my-gray': 'var(--clr-gray)',
        'my-blue': 'var(--clr-blue)',
        'my-gradient-stop': {
          light: 'var(--clr-gradient-light)',
          DEFAULT: 'var(--clr-gradient-dark)',
          dark: 'var(--clr-gradient-dark)',
        },
      },
      fontFamily: {
        'my-sans': ['var(--font-sans)'],
        'my-serif': ['var(--font-serif)'],
      },
      letterSpacing: {
        'tiny': '1px',
      },
      minHeight: {
        'screen-80': '75vh',
        '300px': '300px',
      },
      zIndex: {
        '1p': '1',
        '1n': '-1',
      },
      maxWidth: {
        'clear': 'calc(100% - 2rem)',
        '4/12': 'calc(100% / 3)',
      },
      boxShadow: {
        'my-shadow-dark': '0 6px 20px 0 rgba(0, 0, 0, 0.1)',
        'my-shadow-left': '-2px 3px 20px 0 rgba(0, 0, 0, 0.1)',
      },
      scale: {
        '200': '2',
      },
      transformOrigin: {
        'center-left': 'center left',
      }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      visibility: ['hover', 'focus', 'group-hover', 'group-focus'],
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1320px',
          },
        },
        '.container-fluid': {
          maxWidth: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen md': {
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          },
        },
      })
    }
  ],
}
