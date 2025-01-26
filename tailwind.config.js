// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     container: {
//       center: true,
//       padding: "1rem",
//     },
//     extend: {
//       fontFamily: {
//         inter: ["Inter", "sans-serif"],
//       },
//       colors: {
//         lwsGreen: "#00D991",
//         deepDark: "#17181C",
//         mediumDark: "#1E1F24",
//         lighterDark: "#27292F",
//       },
//     },
//   },
//   plugins: ["@tailwindcss/typography"],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        primary: "#00D991",
      },
    },
  },
  plugins: [],
};
