/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1acc8d",
        "primary-dark": "#18b87f",
        "primary-light": "#21faa7",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundColor: {
        "gray-900": "#0f0f0f",
      },
    },
  },
  plugins: [],
};
