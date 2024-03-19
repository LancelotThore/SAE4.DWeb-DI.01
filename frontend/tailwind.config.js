/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Background */
        background: "hsl(var(--background)/<alpha-value>)",
        navBackground: "hsl(var(--nav-background)/<alpha-value>)",

        /* Text */
        forground: "hsl(var(--forground)/<alpha-value>)",
        textDirect: "hsl(var(--text-direct)/<alpha-value>)",
        textNav: "hsl(var(--text-nav)/<alpha-value>)",
        textCategory: "hsl(var(--text-category)/<alpha-value>)",

        /* Button */
        button: "hsl(var(--button)/<alpha-value>)",
        buttonHover: "hsl(var(--button-hover)/<alpha-value>)",
        buttonPlaylist: "hsl(var(--button-playlist)/<alpha-value>)",

        /* Border */
        border: "hsl(var(--border)/<alpha-value>)",
      },
    },
    plugins: [],
  }
};
