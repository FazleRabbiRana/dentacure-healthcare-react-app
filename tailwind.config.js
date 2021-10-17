module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-primary': {
          light: 'var(--clr-primary-light)',
          DEFAULT: 'var(--clr-primary)',
          dark: 'var(--clr-primary-dark)'
        },
        'my-black': 'var(--clr-black)',
        'my-gray': 'var(--clr-gray)',
        'my-blue': 'var(--clr-blue)',
        'my-gradient-stop': {
          light: 'var(--clr-gradient-light)',
          DEFAULT: 'var(--clr-gradient-dark)',
          dark: 'var(--clr-gradient-dark)'
        },
      },
      fontFamily: {
        'my-sans': ['var(--font-sans)'],
        'my-serif': ['var(--font-serif)'],
      },
      letterSpacing: {
        'tiny': '1px',
      },
      maxWidth: {
        'clear': 'calc(100% - 2rem)',
      }
    },
  },
  variants: {
    extend: {
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
            maxWidth: '720px',
          },
          '@screen md': {
            maxWidth: '980px',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          },
          '@screen lg': {
            maxWidth: '1200px',
          },
          '@screen xl': {
            maxWidth: '1500px',
          },
        },
      })
    }
  ],
}
