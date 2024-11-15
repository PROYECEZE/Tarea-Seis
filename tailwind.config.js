/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#506690',
        lightBlue: '#869AB8',
        intenseBlue:'#335EEA',
        lightBlack: '#161C2D',
        lightGray: '#F3F7FB',
        softGray: '#6B7C93',
        softGreen: '#42BA96',
        softYellow:'#F2C94C',
        softred: '#DF4759',
        yellowGradient: 'linear-gradient(43.15deg, #FFC726 3.03%, #F99716 100%)',
      },
      backgroundImage: {
        yellowGradient: 'linear-gradient(43.15deg, #FFC726 3.03%, #F99716 100%)',
      },
      fontFamily: {
        roboto: ['roboto']
      },
      fontSize: {
        postSubtitle: ['21px', '32px'],
        postInfo:['17px', '26px'],
        '43px': ['42px', '52px'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      maxWidth: {
        'dimensions': '680px',
        'size': '1040px', 
      },
      boxShadow: {
        '3xl': '0px 4px 4px 0px #00000040',
      }
    },
  },
  plugins: [],
};


