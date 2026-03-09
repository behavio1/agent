import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#120b10",
        foreground: "#fff8fb",
        accent: "#f4b6c2",
        accentDark: "#8c3a58",
        muted: "#d9c4cc",
        panel: "#20141b"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(18, 11, 16, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
