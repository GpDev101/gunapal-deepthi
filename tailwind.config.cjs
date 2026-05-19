module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}',
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ivory: '#FDFBF7',
        maroon: '#6B1B1B',
        gold: '#D4AF37',
        templeGreen: '#2E7A5E'
      },
      fontFamily: {
        display: ['Cinzel', 'Cormorant Garamond', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif']
      },
      boxShadow: {
        'premium': '0 10px 30px rgba(107,27,27,0.12), 0 2px 6px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
};
