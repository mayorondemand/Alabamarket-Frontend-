'use client'
import Products from "./components/Buyers/Products"
import Hero from "./components/Buyers/Hero"
import RecommendedProducts from "./components/Buyers/RecommendedProducts"
import Categories from "./components/Buyers/Categories"
import UpsAndInverters from "./components/Buyers/UpsAndInverters"
import { Suspense } from "react"
export default function Home() {
  return (
    <main >
<section className="container flex flex-col gap-14 md:pt-16 ">
  <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-gray-500 text-lg">Loading...</p>
          </div>
        }
      >
          <Hero />

      
      </Suspense>
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
