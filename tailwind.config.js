/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary": "#361566",
        "secondary": "#FAD278",
        "neutral-white": "#FFF3FD",

      },
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        'helvetica-oblique': ['Helvetica Oblique', 'sans-serif'],
        'helvetica-compressed': ['Helvetica Compressed', 'sans-serif'],
        'helvetica-rounded-bold': ['Helvetica Rounded Bold', 'sans-serif'],
        'helvetica-bold': ['Helvetica Bold', 'sans-serif'],
        'helvetica-bold-oblique': ['Helvetica Bold Oblique', 'sans-serif'],
        'helvetica-light': ['Helvetica Light', 'sans-serif'],
      },
      textShadow: {
        "p": '1px 1px 3px #D1A4FF',
      },
    },
    plugins: [
      require('tailwindcss-textshadow')
    ]
  }

}