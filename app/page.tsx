
import Footer from "./components/Buyers/Footer"
import Products from "./components/Buyers/Products"
import Navbar from "./components/Buyers/Navbar"
import Hero from "./components/Buyers/Hero"
import RecommendedProducts from "./components/Buyers/RecommendedProducts"
export default function Home() {
  return (
    <main className="min-h-screen bg-white grid grid-cols gap-14">
      <Navbar />
<section className="container flex flex-col gap-14">
  <Hero />
      
<Products />
<RecommendedProducts />

</section>
<Footer />

    </main>
  )
}
