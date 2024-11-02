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
        white: {
          '100': '#F7F7F7',
          '200': '#FFFFFFCC'
        },
        black: {
          '100': '#ABADB2',
          '200': '#0F0F10'
        },
        green: {
          'primary': '#02C7BE'
        },
        red: {
          'primary': '#EF3838'
        },
        blue: {
          'primary': '#007AFF'
        }
      },
    },
  },
  plugins: [],
};
export default config;
