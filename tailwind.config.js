/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'dark-blue-intro': 'hsl(217, 28%, 15%)',
          'dark-blue-main': 'hsl(218, 28%, 13%)',
          'dark-blue-footer': 'hsl(216, 53%, 9%)',
          'dark-blue-testimonials': 'hsl(219, 30%, 18%)',
        },
        accent: {
          cyan: 'hsl(176, 68%, 64%)',
          blue: 'hsl(198, 60%, 50%)',
          'light-red': 'hsl(0, 100%, 63%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
}

