module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-serif': ['var(--font-source-serif)'],
        'inter': ['var(--font-inter)'],
      },
      colors: {
        'intercept-black': '#000000',
        'intercept-white': '#FFFFFF',
        'intercept-gray': {
          100: '#F5F5F5',
          200: '#EAEAEA',
          300: '#D6D6D6',
          400: '#A8A8A8',
          500: '#6B6B6B',
          600: '#4A4A4A',
          700: '#2D2D2D',
        },
      }
    },
  },
  plugins: [],
}