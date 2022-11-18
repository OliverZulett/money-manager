module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#44ADEE",
          secondary: "#E9498C",
          accent: "#FFF133",
          neutral: "#1A1A1A",
          "base-100": "#FFFFFF",
          info: "#4AA8BF",
          success: "#81328F",
          warning: "#EF8234",
          error: "#EA4034",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
