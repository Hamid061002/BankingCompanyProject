/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#22251B',
        'green-60': '#CAFF33',
        'green-65': '#D1FF4C',
        'green-70': '#D8FF66',
        'green-80': '#E5FF99',
        'green-90': '#F2FFCC',
        'green-95': '#F8FFE5',
        'green-97': '#FBFFF0',
        'green-99': '#FEFFFA',
        'white-90': '#E4E4E7',
        'white-95': '#F1F1F3',
        'white-97': '#F7F7F8',
        'white-99': '#FCFCFD',
        'grey-10': '#191919',
        'grey-11': '#1C1C1C',
        'grey-15': '#262626',
        'grey-20': '#333333',
        'grey-30': '#4C4C4D',
        'grey-35': '#59595A',
        'grey-40': '#656567',
        'grey-60': '#98989A',
        'grey-70': '#B3B3B3',
        'grey-75': '#BFBFBF',
      },
      boxShadow: {
        'headerShadow': '0 0 35px 15px #191919',
        'useCaseItemShadow': '0 0 40px 20px #191919',
        'shadowCardTestimonials': '0 0 600px 280px #191919;', 
        'shadowCardTestimonialsLg': '200px 0px 100px -140px #191919 inset,-200px 0px 100px -140px #191919 inset', 
      },
    },
  },
  plugins: [],
}