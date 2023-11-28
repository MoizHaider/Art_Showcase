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
      colors: {
        'primary': '#0070FF',
        'secondary': '#FFD700',
        'tertiary': '#FF69B4',
        'background': '#eddcd',
        'text': '#333333',
      }

    },
  },
  plugins: [],
};
