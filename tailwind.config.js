module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    container: {
      padding: "0.5rem",
      center: true,
    },
    extend: {
      minHeight: {
        hero: "45rem",
      },
      colors: {
        primary: "#663399",
        highlight: "#FF5D3A",
        "brand-light": "#F7F7F7",
        "brand-dark": "#C4C4C4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
