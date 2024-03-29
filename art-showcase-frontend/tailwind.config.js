/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        profileDesktopGridCols: "400px auto",
      },
      screens: {
        'xs': '425px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
          'primaryD': '#eddcd9',
          'primaryL': '#f2ebe9',
          'secondary': '#de5499',
          'terteryB': '#265153',
          'terteryO':'#e99f4c',
          'darkB':'rgba(241, 190, 186, 1)',
         
          'text': '#443C3C',
         'background': '#ffc3c3',
         'primary' : '#FFFCF7',
         'secondary': '#F29797',
          'accent' : '#f25d5d',
          'formBg': '#f4ece9'
          }

    },
  },
  plugins: [],
};
