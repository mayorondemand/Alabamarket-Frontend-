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
{/* <section class="accordion">
  <details>
    <summary>Anthropodermic Bibliopegy</summary>
    <div class="content">
      <p>Visit M Shed to see a book bound in human skin, made from John Horwood, a convicted murderer hanged in 1821.</p>
    </div>
  </details>
  <details>
    <summary>Christmas Steps</summary>
    <div class="content">
      <p>The Christmas Steps, built in 1669, were once a grim path for condemned prisoners heading to Gallows Acre.</p>
    </div>
  </details>
  <details>
    <summary>Redcliffe Caves</summary>
    <div class="content">
      <p>These caves, used as prisons during the Napoleonic Wars, are hidden beneath Bristol’s red cliffs.</p>
    </div>
  </details>
</section> */}

    </main>
  )
}
