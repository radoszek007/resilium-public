import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        resilium: {
          dark: "#526F83",
          deep: "#F8FAFC",
          slate: "#587487",
          light: "#F5F7FA",
          ink: "#3F5870",
          muted: "#7C8FA1",
          body: "#435E73",
          border: "#E5EAF0",
          orange: "#F4A640",
          orangeHover: "#FFAA3D"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "Inter", "Poppins", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(63, 88, 112, 0.10)",
        dark: "0 22px 80px rgba(63, 88, 112, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
