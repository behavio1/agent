import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#120d11",
        foreground: "#fff7f6",
        accent: "#f2b6be",
        accentStrong: "#d9798f",
        accentSoft: "#f8d9df",
        muted: "#d5c1c4",
        panel: "#1f151a",
        panelSoft: "#2a1d24"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(18, 13, 17, 0.28)",
        glow: "0 18px 80px rgba(217, 121, 143, 0.18)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(242, 182, 190, 0.24), transparent 32%), radial-gradient(circle at top right, rgba(255, 255, 255, 0.08), transparent 24%), linear-gradient(180deg, #120d11 0%, #1a1217 45%, #120d11 100%)"
      }
    }
  },
  plugins: []
};

export default config;
