/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'var(--dark-blue)',
        'light-blue': 'var(--light-blue)',
        'light-green': 'var(--light-green)',

        'color-primary': 'var(--color-primary)',
        'color-secondary': 'var(--color-secondary)',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}

