
'use client';

import Image from 'next/image';
import Link from 'next/link';
import SearchPage from '@/app/components/Buyers/Search';

import { useState } from 'react';
// type Product = {
//   img: string ;
//   title: string;
//   image: string;
//   name: string;
//   verifiedSeller?: boolean;
//   fixed?: boolean;
//   price: number;
//   description?: string;
// };
type Subcategories = {
  title: string;
};
interface Category {
  name: string;
  subcategories: { title: string; image: string }[];
  products: any[];
}



interface AllSubCategoriesProps {
  categories: Category[];
}

export default function AllSubCategories({categories}: AllSubCategoriesProps) {
    const [linear,setLinear]=useState(true)
  
  return (
    <main className="container flex flex-col gap-6">
        <div className="flex items-center gap-4">
            <h6 className="font-[400]  text-prevPage text-[14px] md:text-[21px]">Home</h6>
            <p
              className="text-prevPage text-[14px]  font-[500]  md:text-[17px]"
            >
              All categories 
            </p>
              <p
              className="text-primary text-[14px]  font-[500] underline md:text-[17px]"
            >
                {categories[0].name}
            </p>
            {/* You can display a specific category name inside the map below if needed */}
          </div>
        <SearchPage />

      {categories.map((cat, index) => (
       <>
        <section key={index} className={`bg-categoryBg py-[32px] px-[12px] rounded-lg `}>
         

          {/* Items Grid */}
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7">
            {cat.subcategories.map((product: Subcategories, pIdx: number) => (
              <Link
                key={pIdx}
                href={`/search?name=${encodeURIComponent(product.title)}`}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full overflow-hidden">
                  <Image
                    src={`/categories.png`}
                    alt={product.title}
                    width={80}
                    height={80}
                    className="object-cover h-[55px] w-[55px] md:h-[100px] md:w-[100px]"
                  />
                </div>
                <p className="mt-2 text-sm text-primary font-medium">{product.title}</p>
              </Link>
            ))}
          </div>
        </section>


         <section className="mb-8">
      <div className="flex justify-start gap-4 items-center mb-5 justify-end">
         {/* <h6 className="text-primary font-[600] text-[21px] md:text-[27px]">You might also like </h6> */}
  <div className="flex items-center gap-4">  <div  onClick={(()=>{
    setLinear(false)
   })} className="bg-collpse h-fit  p-3  rounded-full cursor-pointer ">

   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3.45691 11.171H20.5428C22.0801 11.171 22.8532 10.418 22.8532 8.87091V5.03391C22.8532 3.49705 22.0801 2.75391 20.5432 2.75391H3.45648C1.91963 2.75391 1.14648 3.49705 1.14648 5.03391V8.87134C1.14648 10.4185 1.91963 11.1715 3.45648 11.1715M3.45648 21.2463H20.5423C22.0796 21.2463 22.8528 20.5032 22.8528 18.9565V15.1092C22.8528 13.5822 22.0796 12.8292 20.5428 12.8292H3.45648C1.91963 12.8292 1.14648 13.5822 1.14648 15.1092V18.9565C1.14648 20.5032 1.91963 21.2463 3.45648 21.2463Z" fill="#8B92AA"/>
</svg></div>
         <div  onClick={(()=>{
    setLinear(true)
   })} className="bg-collpse h-fit  p-3  rounded-full cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21H7.675V16.325H3V21ZM9.675 21H14.325V16.325H9.675V21ZM16.325 21H21V16.325H16.325V21ZM3 14.325H7.675V9.675H3V14.325ZM9.675 14.325H14.325V9.675H9.675V14.325ZM16.325 14.325H21V9.675H16.325V14.325ZM3 7.675H7.675V3H3V7.675ZM9.675 7.675H14.325V3H9.675V7.675ZM16.325 7.675H21V3H16.325V7.675Z" fill="#172556"/>
</svg>
  </div></div>
     
        

     
      </div>


    
    <div className={`grid gap-5  ${linear?`grid-cols-2 lg:grid-cols-2 xl:grid-cols-5   `:`md:grid-cols-1 lg:grid-cols-2`}`}>
     {cat.products.map((item,index)=>{
      return <Link
               key={index}
                 href={`/categories/${encodeURIComponent(item.name)}/${`${item.name}`}`} 

                // href={`/search?name=${encodeURIComponent(item.title)}`}
              > 
               <div  className={`border cursor-pointer border-description rounded-[12px] ${linear?``:`flex gap-1 md:items-center  md:grid-cols-5]`} lg:shrink-0 `}>

        {/* <div className="relative w-full md:col-span-1 "> */}
 <div className={`relative w-full  md:col-span-1 ${linear?`h-full`:`h-full`}`}>


<Image
  src={item.img||'/product.png'}
  alt={item.name}
  width={200}
  height={200}
  className={`object-cover w-full   flex-shrink-0 h-[276px]  ${
    linear
      ? 'rounded-tl-[12px] rounded-tr-[12px] md:h-fit'
      : 'rounded-[12px] rounded-tr-none rounded-br-none lg:h-[310px]'
  }`}
/>
<div className="absolute bottom-4 px-4 md:hidden">
{item.verifiedSeller&&
<button className="text-sm   flex items-center gap-2 text-primary bg-[#DBFCD4] hover:bg-[#DBFCD4] rounded py-1 px-2 w-fit"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 12" fill="none">
  <path d="M6.38753 6.40884L5.5417 5.57759C5.43475 5.47065 5.30117 5.41718 5.14095 5.41718C4.98073 5.41718 4.84209 5.47551 4.72503 5.59218C4.61809 5.69912 4.56462 5.83523 4.56462 6.00051C4.56462 6.16579 4.61809 6.3019 4.72503 6.40884L5.9792 7.66301C6.09587 7.77968 6.23198 7.83801 6.38753 7.83801C6.54309 7.83801 6.6792 7.77968 6.79587 7.66301L9.27503 5.18384C9.3917 5.06718 9.4475 4.93107 9.44245 4.77551C9.43739 4.61996 9.38159 4.48384 9.27503 4.36718C9.15837 4.25051 9.01992 4.18984 8.8597 4.18518C8.69948 4.18051 8.56084 4.23632 8.44378 4.35259L6.38753 6.40884ZM4.7542 11.688L3.90837 10.2588L2.3042 9.90884C2.15837 9.87968 2.0417 9.80443 1.9542 9.68309C1.8667 9.56176 1.83267 9.42798 1.85212 9.28176L2.01253 7.63384L0.918783 6.37968C0.82156 6.27273 0.772949 6.14634 0.772949 6.00051C0.772949 5.85468 0.82156 5.72829 0.918783 5.62134L2.01253 4.36718L1.85212 2.71926C1.83267 2.57343 1.8667 2.43965 1.9542 2.31793C2.0417 2.19621 2.15837 2.12096 2.3042 2.09218L3.90837 1.74218L4.7542 0.313011C4.83198 0.186622 4.93892 0.101456 5.07503 0.0575112C5.21114 0.0135668 5.34725 0.0209556 5.48337 0.0796779L7.00003 0.721344L8.5167 0.0796779C8.65281 0.0213445 8.78892 0.0139557 8.92503 0.0575112C9.06114 0.101067 9.16809 0.186233 9.24587 0.313011L10.0917 1.74218L11.6959 2.09218C11.8417 2.12134 11.9584 2.19679 12.0459 2.31851C12.1334 2.44023 12.1674 2.57382 12.1479 2.71926L11.9875 4.36718L13.0813 5.62134C13.1785 5.72829 13.2271 5.85468 13.2271 6.00051C13.2271 6.14634 13.1785 6.27273 13.0813 6.37968L11.9875 7.63384L12.1479 9.28176C12.1674 9.42759 12.1334 9.56137 12.0459 9.68309C11.9584 9.80482 11.8417 9.88007 11.6959 9.90884L10.0917 10.2588L9.24587 11.688C9.16809 11.8144 9.06114 11.8996 8.92503 11.9435C8.78892 11.9875 8.65281 11.9801 8.5167 11.9213L7.00003 11.2797L5.48337 11.9213C5.34725 11.9797 5.21114 11.9871 5.07503 11.9435C4.93892 11.9 4.83198 11.8148 4.7542 11.688Z" fill="#2DC20F"/>
</svg> Verified Seller  </button>}
<button className="text-sm mt-2 inline-flex items-center gap-2 text-description bg-white  hover:bg-white rounded py-1 px-2  w-fit "> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 12" fill="none">
  <path d="M6.49992 9.41903L3.47492 11.2457C3.38603 11.2896 3.30353 11.3074 3.22742 11.299C3.15186 11.2901 3.07825 11.264 3.00659 11.2207C2.93436 11.1763 2.87992 11.1135 2.84325 11.0324C2.80659 10.9513 2.80325 10.8626 2.83325 10.7665L3.63825 7.34154L0.975752 5.0332C0.900752 4.97209 0.851308 4.89904 0.827419 4.81404C0.80353 4.72904 0.808808 4.64765 0.843252 4.56987C0.877697 4.49209 0.92353 4.4282 0.980752 4.3782C1.03853 4.32987 1.11631 4.29709 1.21409 4.27987L4.72742 3.9732L6.09742 0.72987C6.1352 0.638203 6.18964 0.572092 6.26075 0.531536C6.33186 0.490981 6.41159 0.470703 6.49992 0.470703C6.58825 0.470703 6.66825 0.490981 6.73992 0.531536C6.81159 0.572092 6.86575 0.638203 6.90242 0.72987L8.27242 3.9732L11.7849 4.27987C11.8833 4.29654 11.9613 4.32959 12.0191 4.37904C12.0769 4.42793 12.123 4.49154 12.1574 4.56987C12.1913 4.64765 12.1963 4.72904 12.1724 4.81404C12.1485 4.89904 12.0991 4.97209 12.0241 5.0332L9.36159 7.34154L10.1666 10.7665C10.1977 10.8615 10.1946 10.9499 10.1574 11.0315C10.1202 11.1132 10.0655 11.176 9.99325 11.2199C9.92214 11.2643 9.84853 11.2907 9.77242 11.299C9.69686 11.3074 9.61464 11.2896 9.52575 11.2457L6.49992 9.41903Z" fill="#172556"/>
</svg> Popular </button> 


</div>
<div/>



     {item.fixed?   <div className="absolute top-4  w-full flex gap-2   px-2 justify-end md:justify-between" >  
      {item.fixed&&<div className={`z-30 flex gap-1 flex-col ${item.fixed?`order-1`:`order-2`} hidden md:block` }>
{item.verifiedSeller&&
<button className="text-sm   flex items-center gap-2 text-primary bg-[#DBFCD4] hover:bg-[#DBFCD4] rounded py-1 px-2 w-fit"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 12" fill="none">
  <path d="M6.38753 6.40884L5.5417 5.57759C5.43475 5.47065 5.30117 5.41718 5.14095 5.41718C4.98073 5.41718 4.84209 5.47551 4.72503 5.59218C4.61809 5.69912 4.56462 5.83523 4.56462 6.00051C4.56462 6.16579 4.61809 6.3019 4.72503 6.40884L5.9792 7.66301C6.09587 7.77968 6.23198 7.83801 6.38753 7.83801C6.54309 7.83801 6.6792 7.77968 6.79587 7.66301L9.27503 5.18384C9.3917 5.06718 9.4475 4.93107 9.44245 4.77551C9.43739 4.61996 9.38159 4.48384 9.27503 4.36718C9.15837 4.25051 9.01992 4.18984 8.8597 4.18518C8.69948 4.18051 8.56084 4.23632 8.44378 4.35259L6.38753 6.40884ZM4.7542 11.688L3.90837 10.2588L2.3042 9.90884C2.15837 9.87968 2.0417 9.80443 1.9542 9.68309C1.8667 9.56176 1.83267 9.42798 1.85212 9.28176L2.01253 7.63384L0.918783 6.37968C0.82156 6.27273 0.772949 6.14634 0.772949 6.00051C0.772949 5.85468 0.82156 5.72829 0.918783 5.62134L2.01253 4.36718L1.85212 2.71926C1.83267 2.57343 1.8667 2.43965 1.9542 2.31793C2.0417 2.19621 2.15837 2.12096 2.3042 2.09218L3.90837 1.74218L4.7542 0.313011C4.83198 0.186622 4.93892 0.101456 5.07503 0.0575112C5.21114 0.0135668 5.34725 0.0209556 5.48337 0.0796779L7.00003 0.721344L8.5167 0.0796779C8.65281 0.0213445 8.78892 0.0139557 8.92503 0.0575112C9.06114 0.101067 9.16809 0.186233 9.24587 0.313011L10.0917 1.74218L11.6959 2.09218C11.8417 2.12134 11.9584 2.19679 12.0459 2.31851C12.1334 2.44023 12.1674 2.57382 12.1479 2.71926L11.9875 4.36718L13.0813 5.62134C13.1785 5.72829 13.2271 5.85468 13.2271 6.00051C13.2271 6.14634 13.1785 6.27273 13.0813 6.37968L11.9875 7.63384L12.1479 9.28176C12.1674 9.42759 12.1334 9.56137 12.0459 9.68309C11.9584 9.80482 11.8417 9.88007 11.6959 9.90884L10.0917 10.2588L9.24587 11.688C9.16809 11.8144 9.06114 11.8996 8.92503 11.9435C8.78892 11.9875 8.65281 11.9801 8.5167 11.9213L7.00003 11.2797L5.48337 11.9213C5.34725 11.9797 5.21114 11.9871 5.07503 11.9435C4.93892 11.9 4.83198 11.8148 4.7542 11.688Z" fill="#2DC20F"/>
</svg> Verified Seller  </button>}
<button className="text-sm mt-2 inline-flex items-center gap-2 text-description bg-white  hover:bg-white rounded py-1 px-2  w-fit "> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 12" fill="none">
  <path d="M6.49992 9.41903L3.47492 11.2457C3.38603 11.2896 3.30353 11.3074 3.22742 11.299C3.15186 11.2901 3.07825 11.264 3.00659 11.2207C2.93436 11.1763 2.87992 11.1135 2.84325 11.0324C2.80659 10.9513 2.80325 10.8626 2.83325 10.7665L3.63825 7.34154L0.975752 5.0332C0.900752 4.97209 0.851308 4.89904 0.827419 4.81404C0.80353 4.72904 0.808808 4.64765 0.843252 4.56987C0.877697 4.49209 0.92353 4.4282 0.980752 4.3782C1.03853 4.32987 1.11631 4.29709 1.21409 4.27987L4.72742 3.9732L6.09742 0.72987C6.1352 0.638203 6.18964 0.572092 6.26075 0.531536C6.33186 0.490981 6.41159 0.470703 6.49992 0.470703C6.58825 0.470703 6.66825 0.490981 6.73992 0.531536C6.81159 0.572092 6.86575 0.638203 6.90242 0.72987L8.27242 3.9732L11.7849 4.27987C11.8833 4.29654 11.9613 4.32959 12.0191 4.37904C12.0769 4.42793 12.123 4.49154 12.1574 4.56987C12.1913 4.64765 12.1963 4.72904 12.1724 4.81404C12.1485 4.89904 12.0991 4.97209 12.0241 5.0332L9.36159 7.34154L10.1666 10.7665C10.1977 10.8615 10.1946 10.9499 10.1574 11.0315C10.1202 11.1132 10.0655 11.176 9.99325 11.2199C9.92214 11.2643 9.84853 11.2907 9.77242 11.299C9.69686 11.3074 9.61464 11.2896 9.52575 11.2457L6.49992 9.41903Z" fill="#172556"/>
</svg> Popular </button> 


</div>}

 <button
  className={` bg-white h-fit hover:bg-white rounded-lg p-3 shadow-md border border-saveBorder border-1 ${item.fixed?`order-1`:`order-`}`}
  aria-label="Add to favorites"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20"  viewBox="0 0 23 20" fill="none">
  <path d="M7.05566 1C4.01816 1 1.55566 3.4625 1.55566 6.5C1.55566 12 8.05566 17 11.5557 18.163C15.0557 17 21.5557 12 21.5557 6.5C21.5557 3.4625 19.0932 1 16.0557 1C14.1957 1 12.5507 1.9235 11.5557 3.337C11.0484 2.61469 10.3746 2.0252 9.59134 1.61841C8.80805 1.21162 7.93829 0.999502 7.05566 1Z" stroke="#172556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>
</div>:   <div className="absolute top-4  w-full flex gap-2  justify-end px-4 md:px-4 md:gap-0" >  
      

 <button
  className={` bg-white h-fit hover:bg-white rounded-lg p-3 shadow-md border border-saveBorder border-1 ${item.fixed?`order-1`:`order-`}`}
  aria-label="Add to favorites"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20"  viewBox="0 0 23 20" fill="none">
  <path d="M7.05566 1C4.01816 1 1.55566 3.4625 1.55566 6.5C1.55566 12 8.05566 17 11.5557 18.163C15.0557 17 21.5557 12 21.5557 6.5C21.5557 3.4625 19.0932 1 16.0557 1C14.1957 1 12.5507 1.9235 11.5557 3.337C11.0484 2.61469 10.3746 2.0252 9.59134 1.61841C8.80805 1.21162 7.93829 0.999502 7.05566 1Z" stroke="#172556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>
</div>}

          </div>

         <div className="px-3 py-4 flex flex-col gap-4 md:col-span-4 w-full "> <div className={`flex flex-col  gap-3   md:${linear?'flex-row md:items-center md:justify-between':' flex-col md:flex-row md:items-center md:justify-between'}`}> 
      <h3 className="text-[27px] font-semibold leading-[110%] text-primary">
  { "₦"+item.price.toLocaleString()} </h3>


{item.fixed?     <span className="text-sm text-description min-h-5"> {`(fixed price)`} </span>:<span className="text-sm text-description min-h-5">  </span>
}
          </div>

          <div > 

{/* <h4 className="mb-0 text-name font-semibold"> */}
<h4 className={`text-[21px] font-poppins font-medium leading-[110%] text-name mb-1  line-clamp-2 ${!linear?`min-h-[50px]`:`min-h-[50px]`}`}>
{item.name}
</h4>

{/* <h4 className={`text-[21px] font-poppins font-medium leading-[110%] text-name mb-1 line-clamp-2 border ${!linear?``:`min-h-[50px]`}`}>
{item.name}
</h4> */}
     <span className={`text-sm text-description line-clamp-2  ${!linear?`min-h-[50px]`:``} `}>{item.description}  </span>


          </div>
         <div className={`flex items-center justify-between ${!linear ?`md:mt-20`:``}`}> 
<button className="text-primary text-[14px] p-[8px] rounded-[4px] bg-neatBg not-italic font-normal leading-[110%]"> Neatly used  </button>


      {item.fixed&&<span className="p-2 rounded-md bg-neatlyUsed"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
  <path d="M2.58803 0.332033H3.98269L2.58403 4.33203H0.176025L1.99203 0.700033C2.04745 0.589437 2.13254 0.496441 2.2378 0.431451C2.34306 0.36646 2.46432 0.332037 2.58803 0.332033ZM0.224025 5.66537L4.24269 11.9147L2.54803 5.66537H0.224025ZM3.92936 5.66537L5.96936 13.192C6.00551 13.3285 6.08579 13.4492 6.19769 13.5354C6.30959 13.6215 6.44682 13.6682 6.58803 13.6682C6.72923 13.6682 6.86646 13.6215 6.97836 13.5354C7.09026 13.4492 7.17054 13.3285 7.20669 13.192L9.25203 5.66537H3.92936ZM10.6334 5.66537L8.93469 11.912L12.952 5.66537H10.6334ZM13 4.33203H10.596L9.19603 0.332033H10.588C10.712 0.331789 10.8335 0.366095 10.939 0.4311C11.0445 0.496104 11.1298 0.589234 11.1854 0.700033L13 4.33203ZM9.18403 4.33203H3.99736L5.39469 0.332033H7.78136L9.18403 4.33203Z" fill="#00157C"/>
</svg> </span>}

          </div> </div>
        
         </div>
         </Link> 
              
              
     })}
    </div>
    </section>
       </>
      ))}




    
    </main>
  );
}
