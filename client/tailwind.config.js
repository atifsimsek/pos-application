/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(150px, 1fr))",
      },
    },
  },
  variants: {
    extend: {
      dipslay: ["print"],
    },
  },
  plugins: [],
};
