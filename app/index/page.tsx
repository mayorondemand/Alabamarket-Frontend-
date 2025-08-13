import Input from "../components/Buyers/Inputs"
import Aside from "../components/Buyers/Aside"
import PriceFilter from "../components/Buyers/PriceFilter"
import SellerFilter from "../components/Buyers/SellersFilters"
import FAQPage from "../components/Buyers/Faq"

const Page=()=>{
    return <>
    <FAQPage />
      <Input />
      <Aside />
      <PriceFilter />
      <SellerFilter price="" /></>
}
export default Page