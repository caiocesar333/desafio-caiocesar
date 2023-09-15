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
        '700':'710px'
      }
    },
    screens: {
      sm: '440px',
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
      
    },
    borderRadius:{
      'normal': '20px',
    }
  },
  plugins: [],
}

