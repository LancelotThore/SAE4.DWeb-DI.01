/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        'cross': "url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiBmaWxsPSIjZmZmIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzcxLjIzIDM3MS4yMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzcxLjIzIDM3MS4yMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIHBvaW50cz0iMzcxLjIzLDIxLjIxMyAzNTAuMDE4LDAgMTg1LjYxNSwxNjQuNDAyIDIxLjIxMywwIDAsMjEuMjEzIDE2NC40MDIsMTg1LjYxNSAwLDM1MC4wMTggMjEuMjEzLDM3MS4yMywxODUuNjE1LDIwNi44MjggMzUwLjAxOCwzNzEuMjMgMzcxLjIzLDM1MC4wMTggMjA2LjgyOCwxODUuNjE1ICIvPjwvc3ZnPg=='), default",
      },
    },
    plugins: [],
  }
};
