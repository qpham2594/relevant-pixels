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
        customGreen: '#DFF4E2',
        customDarkGreen: '#639586',
        customGray: '#A1A1A1',
      },
    },
  },
  plugins: [],
};
export default config;
