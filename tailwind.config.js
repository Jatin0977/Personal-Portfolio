/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050810",
          2: "#090e1a",
          3: "#0d1526",
        },
        cyan: {
          DEFAULT: "#00f5d4",
          dim: "rgba(0,245,212,0.12)",
          border: "rgba(0,245,212,0.25)",
        },
        purple: {
          DEFAULT: "#7c3aed",
          dim: "rgba(124,58,237,0.15)",
          border: "rgba(124,58,237,0.3)",
        },
        muted: {
          DEFAULT: "#64748b",
          2: "#94a3b8",
        },
        card: "rgba(13,21,38,0.8)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      clipPath: {
        corner: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
        "corner-lg": "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
        "corner-xl": "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
        btn: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
        contact: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const clipPaths = theme("clipPath");
      const utils = Object.entries(clipPaths).reduce((acc, [key, val]) => {
        acc[`.clip-${key}`] = { clipPath: val };
        return acc;
      }, {});
      addUtilities(utils);
    },
  ],
};
