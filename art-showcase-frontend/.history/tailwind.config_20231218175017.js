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
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
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
         'primary' : '#ffffff',
         'secondary': '#f25d5d',
          'acent' : 'e55252'
               }

    },
  },
  plugins: [],
};
