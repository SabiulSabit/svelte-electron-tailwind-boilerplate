const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,svelte}"],
  theme: {
    fontFamily: {
      heading: ["Outfit"],
      body: ["Manrope"],
    },

    extend: {
      fontSize: {
        heading: ["36px", "54px"],
        subHeading: ["16px", "24px"],

      },
      width: {
        50: "15rem",
        60: "17.35rem",
        72: "18rem",
        90: "22.50rem"
      },
      height: {
        110: "27.5rem",
      },
      colors: {
        gray: {
          DEFAULT: "#6C7E8F",
          10: "#E5E5E5;",
          30: "#E1E9F0",
          50: "#F5F8FA;",
          70: "#C3D3E0",
          100: "#E1E9F0",
          200: "#8899A8",
          500: "#6C7E8F",
          600: "#556C80",
          700: "#384B5C",
          800: "#2F4354",
        },
        black: {
          DEFAULT: "#1E2022",
          500: "#1E2022",
          600: "#182530",
        },
        blue: {
          DEFAULT: "#2B85D4",
          100: "#C1DDF5",
          500: "#2B85D4",
        },
        yellow: {
          DEFAULT: "#FFCC00",
          500: "#FFCC00",
        },
      },
      padding: {
        1.5: "6px",
        2.5: "10px",
      },
      margin: {
        60: "17.35rem",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
