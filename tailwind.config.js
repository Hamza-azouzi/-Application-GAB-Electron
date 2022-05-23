module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cih: "#E85311",
        "cih-dark": "#E85311",
        "cih-light": "#e80000",
        "cih-gold": "#00A0E1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
