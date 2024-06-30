import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)"], // font-sans クラスに適用
      },
      screens: {
        xs: '390px',
      },
      width: {
        fit: 'fit-content', // w-fitでwidth: fit-contentになる
      },
      height: {
        fit: 'fit-content',
      }
    },
  },
  plugins: [],
};
export default config;
