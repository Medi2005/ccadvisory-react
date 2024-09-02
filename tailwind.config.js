/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        plaster: "#eaeaea",
        SFPETROL: "#006666",
        SPETROL: "rgba(0, 102, 102, 0.5)",
        hclo: "rgba(234, 234, 234, 0.3)",
        conton: "#639C9A",
        SILVERLAKE: "#DEDDDD",
        exp: "#BFBFBF",
        Doctor: "#f9f9f9",
        Orochimaru: '#d9d9d9',
        Fluorescent: '#FF5757',
        DeepDaigi: '#e9e7e7',
      },
      width: {
        128: "650px",
        127: "600px",
        50: "50px",
        70: "70px",
        160: "160px",
        990: "990px",
        100: "100px",
      },
      height: {
        50: "50px",
        91: "91.05vh",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        IBMPlex: ["IBM Plex Mono", "monospace"],
        Grotesk: ["Space Grotesk", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        med: "50px",
      },
      zIndex: {
        '1': '1',
      },
      boxShadow: {
        '3xxxl': '0px 8px 16px 0px rgba(0,0,0,0.2)',
      },
      lineHeight: {
        'extrSm': '0.5px',
      }
    },
  },
  plugins: [],
}

