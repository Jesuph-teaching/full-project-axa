/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,html}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cyberpunk"],
  },
  plugins: [require("daisyui")],
};
