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

import Footer from "./components/Buyers/Footer"
import Navbar from "./components/Buyers/Navbar"
import ReactQueryProvider from "./providers/QueryProvider";

export default function RootLayout({ children }) {
  return (
//     <html lang="en" className="scroll-smooth ">
//        <Navbar />
//           <NavbarWrapper>
//       <body className={`${poppins.variable}`} >
      
//             <div className="  py-6 mt-20 flex flex-col md:mt-10">
// {children}
//             </div>
      
      
//       </body>
//       </NavbarWrapper>
//       <Footer />
//     </html>
<html lang="en" className="scroll-smooth">
  <body className={`${poppins.variable}`}>
            <ReactQueryProvider>
              
    <NavbarWrapper>
      <Navbar />
      <div className="py-6 mt-20 flex flex-col ">
        {children}
      </div>
      <Footer />
    </NavbarWrapper>
            </ReactQueryProvider>

  </body>
</html>
  )
}
