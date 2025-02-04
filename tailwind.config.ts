import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        point: "#FE0000",
      },
      rotate: {
        "25": "25deg",
      },
      boxShadow: {
        trim: "rgba(0, 0, 0, 0.06) 0px 3px 6px, rgba(0, 0, 0, 0.13) 0px 3px 6px",
        frame:
          "rgba(0, 0, 0, 0.15) 0px 14px 28px, rgba(0, 0, 0, 0.12) 0px 10px 10px",
      },
    },
  },
  plugins: [],
} satisfies Config;
