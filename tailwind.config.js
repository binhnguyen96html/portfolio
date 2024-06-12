/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        "100vh": '100vh',
        "60px": '60px',
        "50px": '50px',
        "200px": '200px',
        "900px": '900px',
      },
      width: {
        '900px': '900px'
      },
      screens: {
        '2xl-custom': '1400px',
        'xl-custom': '1200px',
        'lg-custom': '1000px',
        'md-custom': '600px',
        'sm-custom': '500px',
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

