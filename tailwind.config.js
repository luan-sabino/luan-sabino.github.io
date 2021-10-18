module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      default: '5px 5px 0px 0px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    rotate: {
      135: '135deg'
    },
    extend: {
      animation:{
        'grow-up': 'grow 0.5s ease-in-out'
      },
      keyframes:{
        grow:{
          'from':{transform: 'scale(0)'},
          'to':{transform: 'scale(1)'}
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
