/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6347', // Light mode primary color
        background: '#FFFFFF', // Light mode background color
        text: '#000000', // Light mode text color
        dark: {
          primary: '#FFA07A', // Dark mode primary color (a slightly lighter shade)
          background: '#121212', // Dark mode background color (a deep dark grey)
          text: '#FFFFFF', // Dark mode text color
        },
      },
    },
  },
  plugins: [],
}
