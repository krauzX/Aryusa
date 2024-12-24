import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        "custom-yellow": "#FED700",
        "col-admin": "#1D232A",
      },
      animation: {
        caret: "blink 1s steps(2) ",
        float: "float 4s ease-in-out infinite",
        glow: "glow 1.5s ease-in-out infinite alternate",
        leaf_fall: "leaf_fall var(--animation-duration) ease-in forwards",
        vibrate: "vibrate 0.3s linear infinite",
      },
      keyframes: {
        vibrate: {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: " translateX(-2px)" },
          " 40%": { transform: "translateX(2px)" },
          "60%": { transform: "translateX(-2px)" },
          "80%": { transform: " translateX(2px)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        glow: {
          from: { "box-shadow": "0 0 5px #fff" },
          to: {
            "box-shadow":
              "0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff",
          },
        },
        leaf_fall: {
          "0%": {
            transform: "translateY(-100%) scale(1)",
            opacity: "0",
          },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(calc(50vh))", opacity: "0" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
export default config;
