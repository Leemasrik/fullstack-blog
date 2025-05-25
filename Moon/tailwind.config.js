/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this includes your components
  ],
  theme: {
    extend: {
       keyframes: {
        moonPop: {
          '0%': { transform: 'scale(0.5) rotate(0deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' },
        },
      },
      animation: {
        moonPop: 'moonPop 1.2s ease-out forwards',
      },
    },
       animation: {
        floating: 'floatY 8s ease-in-out infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
     
    
  },
  plugins: [],
}

