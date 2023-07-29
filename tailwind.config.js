/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text_color: "#040511",
      background_color: "#dee0f7",
      primary_color: "#2b39b6",
      secondary_color: "#bdc2ef",
      accent_color: "#2b39b6",
    },
  },
  plugins: [],
};
