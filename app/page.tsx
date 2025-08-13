'use client'
import Products from "./components/Buyers/Products"
import Hero from "./components/Buyers/Hero"
import RecommendedProducts from "./components/Buyers/RecommendedProducts"
import Categories from "./components/Buyers/Categories"
import UpsAndInverters from "./components/Buyers/UpsAndInverters"
export default function Home() {
  return (
    <main >
<section className="container flex flex-col gap-14 md:py-16 ">
  <Hero />
      <Categories />
<Products />
<RecommendedProducts />
<UpsAndInverters />
<RecommendedProducts />
<UpsAndInverters />
</section>

    </main>
  )
}
