/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{ 
        'primary-gray':'#495e57',
        'primary-yellow' : '#f4ce14',
        'secondary-dark' : '#EE9972',
        'secondary-light' : '#FBDABB',
        'highlight-ligh' : '#EDEFEE',
        'highlight-dark' : '#333333'
    }

    },
  },
  plugins: [],
}