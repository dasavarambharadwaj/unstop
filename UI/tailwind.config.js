/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1c4980"
      },
      fontSize: {
        "sm-icon": ['16px', '16px'],
        "base-icon": ['20px', '20px'],
        "lg-icon": ['24px', '24px']
      }
    }
  },
  plugins: [],
}

