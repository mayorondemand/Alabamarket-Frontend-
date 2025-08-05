
import FAQPage from "./components/Buyers/Faq"
import Footer from "./components/Buyers/Footer"
import Products from "./components/Buyers/Products"
import Navbar from "./components/Buyers/Navbar"
export default function Home() {
  return (
    <main className="min-h-screen bg-white grid grid-cols gap-6">
<Navbar />
      <FAQPage />
<Products />
<Footer />

    </main>
  )
}
