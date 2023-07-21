/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
                  'bg_mobile': "url('/src/assets/mobile/bg_mobile.png')",
                  'bg_web': "url('/src/assets/web/bg_web.png')",
                   'bg2_mobile': "url('/src/assets/mobile/bg2_mobile.png')",
                   'bg2_web': "url('/src/assets/web/bg2_web.png')",

                }),
      backgroundColor:{
        primary_green:"#B2DD9E",
        secondary_green:"#9FC88C",
        primary_blue:"#7988BE",
        secondary_blue:"#363B4E",
      },          
      fontFamily :{
        Bebas : "'Bebas Neue', sans-serif",
        Monserrat :"'Montserrat', sans-serif"
      },         
      lineHeight: {
        11: "2.75rem"
      },
      height:{
        65:"22.625rem"
      },
      width:{
        65:"30.25rem"
      }
    },
  },
  plugins: [],
}

