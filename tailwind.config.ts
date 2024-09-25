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
        background: "var(--mui-palette-background-default)",
        paper: "var(--mui-palette-background-paper)",
        text: "var(--mui-palette-text-primary)",
        primary: "var(--mui-palette-primary-main)",
        secondary: "var(--mui-palette-secondary-main)",
        error: "var(--mui-palette-error-main)",
        warning: "var(--mui-palette-warning-main)",
        info: "var(--mui-palette-info-main)",
        success: "var(--mui-palette-success-main)",
      },
      screens: {
        xs: "0px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: "#__next",
  darkMode: "selector",
};
export default config;
