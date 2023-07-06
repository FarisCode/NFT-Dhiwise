module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        light_blue: { A100: "#90e8ff", A200: "#36b9ff" },
        pink: {
          100: "#ffb8de",
          200: "#fb83ca",
          300: "#df4aa2",
          900: "#4f0047",
          A100: "#ff80c4",
        },
        indigo: { A200: "#5765f2" },
        deep_purple: {
          100: "#dccfef",
          700: "#3c29d7",
          A200: "#6d5eea",
          A200_01: "#7364eb",
        },
        lime: { 700: "#b6a81c", A400: "#cdfe02" },
        yellow: { 400: "#fef065" },
        white: { A700_33: "#ffffff33", A700_19: "#ffffff19", A700: "#ffffff" },
        black: { 900: "#120a14", "900_01": "#000000", "900_19": "#00000019" },
        deep_orange: { 300: "#ff8e5e" },
        red: { A200_02: "#fc395a", A200_01: "#ff4262", A200: "#ff4060" },
        gray: { 100: "#f0f5f7", 700: "#575757", 900: "#170d19" },
        blue_gray: { 100: "#d1d3d4" },
        cyan: { 800: "#126c83" },
      },
      fontFamily: { inter: "Inter", roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(272deg ,#ff4060,#ff80c4,#6d5eea)",
        gradient1: "linear-gradient(180deg ,#fef065,#b6a81c)",
        gradient2: "linear-gradient(180deg ,#fb83ca,#df4aa2)",
        gradient3: "linear-gradient(180deg ,#7364eb,#3c29d7)",
        gradient4: "linear-gradient(180deg ,#90e8ff,#126c83)",
        gradient5: "linear-gradient(90deg ,#ff8e5e,#fc395a,#4f0047)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
