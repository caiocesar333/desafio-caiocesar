/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        "500":'500px',
        '700':'710px'
      }
    },
    screens: {
      'sm': {'max': '390px'},
      normal:'1200px'
    },
    colors: {
      'background-primary':'#0F0F0F',
      'button-add':'#E9FF1A',
      'biologia':'#CC4090',
      'artes':'#05A2C2',
      'geografia':'#C26719',
      'sociologia':'#9B19C2',
      'pint-text':'#FF5964',
      'yellow-text':'#FFFF99',
      'green-text':'#05FF00',
      'modal':'rgba(0, 0, 0, 0.5)',
      'biologia-modal':'#CC4090',
      'artes-modal':'#05A2C2',
      'geografia-modal':'#C26719',
      'sociologia-modal':'#9B19C2',
      'nota-modal':'#424242',
    },
    borderRadius:{
      'normal': '20px',
    }
  },
  plugins: [],
}

