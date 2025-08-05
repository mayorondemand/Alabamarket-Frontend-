
'use client'
import { useState } from "react";
import Image from "next/image";
const Products = () => {

  const [linear,setLinear]=useState(true)

  interface product{
    name:string,
    price:number,
    description:string,
    negotiable:boolean,
    neatlyUsed:boolean,
      img: string;
      fixed:boolean,


    
  }
  const [Products,setProducts]=useState<product []> ([
    {
    name: "Samsung Galaxy S21",
    price: 180000,
    description: "Sleek and powerful smartphone, gently used.",
    negotiable: true,
    neatlyUsed: true,
        fixed:true,

        img: "/product.png",

  },
  {
    name: "HP Pavilion Laptop",
    price: 250000,
    description: "Reliable laptop with good battery life, lightly used.",
    negotiable: false,
    neatlyUsed: true,
        fixed:false,

        img: "/product.png",

  },
  {
    name: "Sony WH-1000XM4 Headphones",
    price: 95000,
    description: "Noise-cancelling headphones, brand new condition.",
    negotiable: true,
    neatlyUsed: false,
        img: "/product.png",
            fixed:true,


  },
  {
    name: "PlayStation 5",
    price: 450000,
    fixed:false,
    description: "Latest PS5 console, used a few times only.",
    negotiable: false,
    neatlyUsed: true,
    img: "/product.png",
  },])


  return (
    <section className={`container `}>
      <div className=" flex justify-end gap-4 items-center">
         

         <div  onClick={(()=>{
    setLinear(false)
   })} className="bg-white p-3 cursor-pointer grid  gap-1 rounded-full  ">

    {
      Array(2).fill(null).map((_, i) => (
   <div key={i} className={`h-2 w-6 rounded ${linear?`bg-description`:`bg-primary`}`}></div>
))

    }</div>
         <div onClick={(()=>{
    setLinear(true)
   })} className="bg-white p-3 grid grid-cols-3  gap-1 rounded-full cursor-pointer">

    {
      Array(9).fill(null).map((_, i) => (
   <div key={i}  className={`h-2 w-2 ${linear?`bg-primary`:`bg-description`}`}></div>
))

    }</div>
        

     
      </div>

      <div className={`grid gap-5  ${linear?`md:grid-cols-2 lg:grid-cols-4`:`md:grid-cols-2 lg:grid-cols-2`}`}>
     {Products.map((item,index)=>{
      return <div key={index} className={`border rounded-md ${linear?``:`flex justify-between`}`}>

        <div>
          <Image src={item.img} alt={item.name} width={300}  height={200} className="w-full"/>
          </div>

         <div> <div className={`flex p-4 gap-3   md: ${linear?'flex-row items-center justify-between':' flex-col md:flex-row md:items-center md:justify-between'}`}> 
      <h3 className="text-primary font-bold">  { "₦"+item.price.toLocaleString()} </h3>


      {item.fixed&&<span className="text-sm text-description"> {`(fixed price )`} </span>}

          </div>

          <div className="p-4"> 
      <h3 className=" mb-0 text-name font-bold"> {item.name} </h3>


     <span className="text-sm text-description mt-0"> {item.description} </span>

          </div>
         <div className="flex items-center justify-between p-4"> 
<button className="border-none px-2 rounded-full text-primary bg-neatBg"> Neatly used  </button>

      {item.fixed&&<span className="text-sm text-description"> {'[]'} </span>}

          </div> </div>
        
         </div>
     })}
    </div>
    </section>
  );
};


export default Products 