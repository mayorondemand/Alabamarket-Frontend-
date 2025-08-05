
import FAQPage from "./components/Buyers/Faq"
import Footer from "./components/Buyers/Footer"
import Products from "./components/Buyers/Products"
import Navbar from "./components/Buyers/Navbar"
import Input from "./components/Buyers/Inputs"
import Aside from "./components/Buyers/Aside"
import PriceFilter from "./components/Buyers/PriceFilter"
export default function Home() {
  return (
    <main className="min-h-screen bg-white grid grid-cols gap-6">
      <Navbar />
<section className="container flex flex-col gap-10">
  
      <FAQPage />
      <Input />
      <Aside />
      <PriceFilter />
<Products />

</section>
<Footer />

    </main>
  )
}
