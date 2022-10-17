/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "485px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "dm-dBlue": "hsl(209, 23%, 22%)",

        "dm-bg-vdBlue": "hsl(207, 26%, 17%)",
        "lm-text-vdBlue": "hsl(234, 39%, 85%)",

        "lm-input-dGray": "hsl(0, 0%, 52%)",
        "lm-bg-vlGray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      boxShadow: {
        "custom-1": "0 0 6px 1px rgb(0 0 0 / 0.1)",
        "custom-2":
          "1px -1px 6px -1px rgb(0 0 0 / 0.1), -1px 0 6px -2px rgb(0 0 0 / 0.1)",
        "custom-3":
          "1px 1px 6px -1px rgb(0 0 0 / 0.1), -1px 0 6px -2px rgb(0 0 0 / 0.1)",
      },
      fontFamily: {
        sans: ["Nunito Sans", defaultTheme.fontFamily.sans],
      },

      screens: {
        tall: { raw: "(min-height: 600px)", max: "768px" },
      },
    },
  },
  plugins: [],
};
