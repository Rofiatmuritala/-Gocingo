/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
      aria: ["Times New Roman"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Ensure this plugin is installed
  ],
};
