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
		active:"#D7DBEC",
    neatlyUsed:"#C0C9F8",
    saveBorder: "#8EAC90",
    collpse:"#EFEEEE",
    inputBorder:"#B2B6C7",
     categoryBg:"#E0E4F3",
    red:"#E30808",
    prevPage:"#818EBC",
    productDetailsDescription:"#656E8B",
    promotedBg:"#F6F6F7",
    radio:"#131F48",
    inputBg:"#F2F4FE"

    

      },
      fontFamily: {
                poppins: ['var(--font-poppins)', 'sans-serif'],

      },
    },
  },
  plugins: [],
}
