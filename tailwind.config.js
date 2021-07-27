module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      body: ["'Montserrat'"],
      title: ["'CharlevoixPro"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        light: '#ea9869',
        DEFAULT: '#EE7333',
        dark: '#de6d34',
      },
      gray: {
        dark: '#1d1d12',
        DEFAULT: '#1D1D11B',
        light: '#a1a2a3',
      },
      black: {
        dark: '#767676',
        DEFAULT: '#000000',
        light: '#111111',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
    },
    extend: {},
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
};
