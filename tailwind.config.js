/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        "twitter-blue": "#1DA1F2",
      },
      spacing: {
        "5vh": "5vh",
        "5vw": "5vw",
      },
      textShadow: {
        "3d-blue":
          "1px 1px 0 #1e3a8a, 2px 2px 0 #1e3a8a, 3px 3px 0 #1e3a8a, 4px 4px 0 #1e3a8a, 5px 5px 0 #1e3a8a, 6px 6px 0 #1e3a8a, 7px 7px 0 #1e3a8a, 8px 8px 0 #1e3a8a, 9px 9px 0 #1e3a8a, 10px 10px 0 #1e3a8a",
          "3d-white":
          "1px 1px 0 #555555, 2px 2px 0 #555555, 3px 3px 0 #555555, 4px 4px 0 #555555, 5px 5px 0 #555555",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
