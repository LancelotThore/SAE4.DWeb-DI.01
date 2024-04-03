/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      
      colors: {
        /* Background */
        background: "hsl(var(--background)/<alpha-value>)",
        navBackground: "hsl(var(--nav-background)/<alpha-value>)",
        openNavBackground: "hsl(var(--open-nav-background)/<alpha-value>)",

        /* Text */
        forground: "hsl(var(--foreground)/<alpha-value>)",
        textButton: "hsl(var(--text-button)/<alpha-value>)",
        textDirect: "hsl(var(--text-direct)/<alpha-value>)",
        textNav: "hsl(var(--text-nav)/<alpha-value>)",
        textCategory: "hsl(var(--text-category)/<alpha-value>)",

        /* Button */
        buttonA: "hsl(var(--buttonA)/<alpha-value>)",
        buttonB: "hsl(var(--buttonB)/<alpha-value>)",
        buttonHover: "hsl(var(--button-hover)/<alpha-value>)",
        buttonPlaylist: "hsl(var(--button-playlist)/<alpha-value>)",

        /* Border */
        border: "hsl(var(--border)/<alpha-value>)",
      },
      backgroundImage: {
        'hero': "url('/VivaRai2!.webp')",
      },
      cursor: {
        'crossCursor': `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9Ik91dGxpbmVkIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48ZyBpZD0iRmlsbCI+PHBvbHlnb24gcG9pbnRzPSIyOC43MSA0LjcxIDI3LjI5IDMuMjkgMTYgMTQuNTkgNC43MSAzLjI5IDMuMjkgNC43MSAxNC41OSAxNiAzLjI5IDI3LjI5IDQuNzEgMjguNzEgMTYgMTcuNDEgMjcuMjkgMjguNzEgMjguNzEgMjcuMjkgMTcuNDEgMTYgMjguNzEgNC43MSIvPjwvZz48L3N2Zz4='), auto`,
      },
    },
    plugins: [],
  }
};
