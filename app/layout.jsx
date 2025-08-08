import "./globals.css"
import { Poppins } from 'next/font/google';

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
    <html lang="en" className="scroll-smooth pt-[300px] md:pt-[120px]">
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
