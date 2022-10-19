/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxsm: "320px",
      xsm: "350px",
      ssm: "410px",
      mdsm: "550px",
      sm: "665px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2lg": "1150px",
      "3lg": "1325px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "dm-dBlue": "hsl(209, 23%, 22%)",

        "dm-bg-vdBlue": "hsl(207, 26%, 17%)",
        "lm-text-vdBlue": "hsl(234, 39%, 85%)",

        "lm-input-dGray": "hsl(0, 0%, 52%)",
        "lm-bg-vlGray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
        "shadow-custom": "#00000014",
      },
      boxShadow: {
        "custom-1": "0 0 6px 1px rgb(0 0 0 / 0.1)",
        "custom-2":
          "1px -1px 6px -1px rgb(0 0 0 / 0.1), -1px 0 6px -2px rgb(0 0 0 / 0.1)",
        "custom-3":
          "1px 1px 6px -1px rgb(0 0 0 / 0.1), -1px 0 6px -2px rgb(0 0 0 / 0.1)",
        "custom-4":
          "0 0 2px 2px rgb(0 0 0 / 0.1), 0 0 2px 2px rgb(0 0 0 / 0.1)",
        "custom-5":
          "0 0 4px 4px rgb(0 0 0 / 0.1), 0 0 4px 4px rgb(0 0 0 / 0.1)",
      },
      fontFamily: {
        sans: ["Nunito Sans", defaultTheme.fontFamily.sans],
      },

      screens: {
        tall: { raw: "(min-height: 600px)" },
      },
    },
  },
  plugins: [],
};
