/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderWidth: {
        '1px': '1px',
      },
      height: {
        "100vh": '100vh',
        // "50px": '50px',
        // "200px": '200px',
      },
      width: {
        '900px': '900px'
      },
      screens: {
        'mobile': '370px',
        '3xl': '1866px',
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

