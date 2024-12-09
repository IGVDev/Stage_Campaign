const { lightGreen } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi-Variable', 'sans-serif'],
      },
      letterSpacing: {
        '3percent': '0.03em', // Agrega un valor personalizado del 3%
      },
      colors: {
        stage: {
          primary: "#7949f6",
          "primary-20": "rgba(121, 73, 246, 0.2)", // primary at 20% opacity
          background: "#05081B",  //bg para el body
          gray: "#2A2D3D",        // boton wallet connect
          lightGray: "#B7BACC",
          success: "#2FCFA4",     // Verde para "Yes"
          error: "#FC4A4A",       // Rojo para "No"
          card: {
            dark: "#12152F",
            light: "#1E1C43",
            detail: "#2C2C5B"
          },
          border: {
            start: "#865CF7",    // Color inicio del gradiente
            end: "#B093FA",       // Color final del gradiente
            'start-rgb': '134, 92, 247',
            'end-rgb': '176, 147, 250'
          }
        }
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

// Agregamos CSS variables al :root
const addBase = require('tailwindcss/plugin')((api) => {
  api.addBase({
    ':root': {
      '--stage-background': '#0A0A0A',
      '--stage-primary': '#7949F6',
      '--stage-border-start': '#865CF7',
      '--stage-border-end': '#B093FA',
      '--stage-border-start-rgb': '134, 92, 247',
      '--stage-border-end-rgb': '176, 147, 250',
    },
  });
});

module.exports.plugins.push(addBase);
