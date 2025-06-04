import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
];

export const theme = {
  extend: {
    colors: {
      primary: {
        100: "#E6F0FF",
        500: "#0066CC",
        600: "#0052A3",
      },
      DysamBlue: "rgb(61, 155, 233)",
      DysamYellow: "rgb(222, 255, 79)",
      softBlue: "#E6F0FA",
      pastelCyan: "#DFF6FF",
    },
    fontFamily: {
      sans: ["Roboto", ..._fontFamily.sans],
      serif: ["Merriweather", ..._fontFamily.serif],
    },
    textShadow: {
      sm: "0 1px 2px var(--tw-shadow-color, rgba(0,0,0,0.05))",
      DEFAULT: "0 2px 4px var(--tw-shadow-color, rgba(0,0,0,0.1))",
      md: "0 4px 8px var(--tw-shadow-color, rgba(0,0,0,0.15))",
      lg: "0 10px 15px var(--tw-shadow-color, rgba(0,0,0,0.2))",
      xl: "0 20px 25px var(--tw-shadow-color, rgba(0,0,0,0.25))",
      none: "none",
      blue: "2px 2px 4px rgba(0, 0, 255, 0.5)",
      "white-sm": "0 1px 3px rgba(255,255,255,0.5)",
    },
  },
};

export const plugins = [require("@tailwindcss/aspect-ratio")];
