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
        "60px": '60px',
        "50px": '50px',
        "200px": '200px',
      },
      width: {
        '900px': '900px'
      },
      screens: {
        '2xl-custom': '1400px',
        'xl-custom': '1200px', //desktop
        'lg-custom': '1024px', //laptop
        'md-custom': '600px',
        'sm-custom': '500px',
        'iphone-promax': '370px'
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

