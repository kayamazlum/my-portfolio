// /** @type {import('tailwindcss').Config} */
// import colors from './src/theme/colors/colors';
module.exports = {
  darkMode: 'selector',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customLight: '#FFEED9',
        customLight2: '#FFDDBF',
        customBrown: '#403930',
        customBrown2: '#594F43',
        customGray: '#4D5566',
        customWhite: '#F3F2FF',
        customBlue: '#4E5E80',
        customOrange: '#EA580C',
        customDLight: '#2A1C15',
        customDLight2: '#3B2B20',
        customDBrown: '#D5C3B4',
        customDBrown2: '#B3A190',
        customDGray: '#CDD3DE',
        customDWhite: '#F8F9FA',
        customDBlue: '#AAB4D4',
        customDOrange: '#F0883E',
      },
    },
  },
  plugins: [],
};
