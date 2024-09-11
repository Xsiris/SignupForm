/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      "sm" : "375px",
      "md" : "768px",
      "lg" : "1440px"
    },
    extend: {
      boxShadow: {
        'custom': '0px 8px 0px 0px rgba(0, 0, 0, 0.15)',
        'claim': '0px 5px 0px 0px hsl(153, 59%, 40%, 0.80)'
      },
      colors:{
        "signupRed" : "hsl(0, 100%, 74%) ",
        "signupGreen": "hsl(154, 59%, 51%)",
        "signupGreenHover": "hsl(154, 59%, 51%, 0.75)",
        "signupBlue" : "hsl(248, 32%, 49%)",
        "signupDarkBlue" : "hsl(249, 10%, 26%) ",
        "signupGrayishBlue" : "hsl(246, 25%, 77%)",
        "signupGrayishBlueBorder" : "hsl(246, 25%, 77%, 0.25)",
        "signupOffWhite" : "hsl(360, 100%, 100%, 0.75)",
        "signupOrange" : "hsl(33, 100%, 50%, 1)"
      },
      backgroundImage:{
        'redPattern' : "url('/src/img/bg-intro-mobile.png')"
      }
    },
    fontFamily: {
      "Poppins": ["Poppins"]
    },
  },
  plugins: [],
}

