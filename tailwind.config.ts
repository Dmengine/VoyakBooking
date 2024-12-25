import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customGray: '#647995',
        customLightGray: '#F0F2F5',
        customBrown: '#7A4504',
        customSlate: '#676E7E',
        customSlategrey: "#D0D5DD",
        customBlue: "#E7F0FF",
        customDarkBlue: '#000031',
        customGrayBlue: '#647995',
        customBlueDark: '#0A369D',
        customRed: '#FBEAE9',
        customBlack: '#344054',
      }
    },
  },
  plugins: [],
};
export default config;
