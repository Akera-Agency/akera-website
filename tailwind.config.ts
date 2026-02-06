import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A0A0A",
        card: "#0D0D0D",
        primary: "#FCFCFA",
        secondary: "#999999",
        muted: "#5E5E5E",
        accent: "#FF4533",
        border: "rgba(255,255,255,0.1)",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        instrument: ["Instrument Serif", "serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "24px",
      },
      screens: {
        mobile: { max: "809px" },
        tablet: { min: "810px", max: "1199px" },
        desktop: { min: "1200px" },
      },
    },
  },
  plugins: [],
};
export default config;
