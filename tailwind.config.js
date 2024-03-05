/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04acf1',
        secondary: '#091b29',
      },
      backgroundImage: {
        'my-photo': "url('/my-photo.webp')",
      },
      fontFamily: {
        body: ['Protest+Strike&display'],
      },
      transitionDuration: {
        3000: '3000ms',
      },
    },
  },
  plugins: [],
};
