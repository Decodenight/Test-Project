/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'slack-purple': '#541554',
        'slack-purple-dark': '#4a154b',
        'slack-blue': '#1264a3',
        'slack-blue-dark': '#0b4e8a',
        'slack-yellow': '#ecb22e',
        'slack-text': '#1d1c1d',
        'slack-text-secondary': '#454245',
        'slack-google-blue': '#4285f4',
        'slack-google-blue-dark': '#3367d6'
      },
      maxWidth: {
        'container': '1600px'
      },
      fontFamily: {
        sans: ['Slack-Circular-Pro', 'Helvetica Neue', 'Helvetica', 'Segoe UI', 'Tahoma', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}