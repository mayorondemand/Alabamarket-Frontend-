import "./globals.css"
import { Poppins } from 'next/font/google';
import NavbarWrapper from "./components/Buyers/NavbarWrapper";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins', 
});

export const metadata = {
  title: "Alaba-market",
  description: "alaba market ",
openGraph: {
    title: "Alaba market",
    description:'alaba market',
    url: "alabamarket.com",
    siteName: "Alaba market",
  
    type: "website",
  },
  
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
          <NavbarWrapper>
      <body className={poppins.variable}>{children}</body>
      </NavbarWrapper>
    </html>
  )
}
