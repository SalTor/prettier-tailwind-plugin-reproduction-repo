import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import OurTheme from "./themes/our-theme";

const content = ["./app/**/*.{js,jsx,ts,tsx}"];

// Purge the styleguide in production since we may not use everything normally
// This is a build time variable
if (process.env["PURGE_STYLEGUIDE"] === "true") {
  content.push("!./app/routes/[_]styleguide/*.{js,jsx,ts,tsx}");
}

export default {
  content,
  theme: OurTheme,
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hidden": {
          /* Firefox */
          scrollbarWidth: "none",
          /* IE/Edge */
          msOverflowStyle: "none",
          /* Hide scrollbar for Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".gradient-to-right": {
          content: "''",
          display: "block",
          position: "absolute",
          left: "0",
          top: "0",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(to right, rgb(var(--background-primary) / 0) 90%, rgb(var(--background-primary) / 1))",
          pointerEvents: "none",
        },
      });
    }),
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
