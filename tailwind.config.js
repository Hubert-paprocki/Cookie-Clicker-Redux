/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "long-slide": "cubic-bezier(1, 0, 0, 1)",
      },
      fontFamily: {
        Braah: ["Darumadrop One", "cursive"],
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { transform: "scale(100%) " },
          "50%": { transform: "scale(105%) rotate(-1deg)" },
        },
      },
      animation: {
        pulse2: "pulse2 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
