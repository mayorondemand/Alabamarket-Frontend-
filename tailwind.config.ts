/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#172556", 
        secondary: "#F9C300",
		accent:"#213C9D",
		gray:"#D6DBEB",
		white:"#ffffff",
		grey:"#888E9F",
		border:"#7D89C2",
		description:"#8B92AA",
		name:"#3E4561",
		neatBg:" #E4E5E9",
		active:"#D7DBEC"

      },
      fontFamily: {
        sans: ["Inter", "sans-serif",'var(--font-poppins)',],
      },
    },
  },
  plugins: [],
}
