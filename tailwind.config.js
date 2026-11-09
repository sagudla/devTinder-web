/** @type {import('tailwindcss').Config} */
export default {
  content: ["./inex.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [ require("daisyui") ],
}

