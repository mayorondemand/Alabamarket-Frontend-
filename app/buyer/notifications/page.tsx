'use client'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const Page=()=>{
   
    const verifiedSeller=true
 const   notification=[
{
  name:"Listing updates",
  phone:'samsung Galaxy S21',
  price:" 100,00",
  message: 'just added near your location',
  time:"2hrs ago",
  read:true
},
{
  name:"Video call request",
  phone:'samsung Galaxy S21',
  price:"₦142,000.",
  message: 'You just ended a video call with Bridget Gadgets: “Infinix Zero Ultra” for ',
  time:"2hrs ago",
  read:false
}
    ]
const availableStyle=`px-2 py-1 rounded-[24px]  bg-primary text-white font-[400] `
const filterState=['All',"Read", "Unread"]
const [active,setActive]=useState('All')
const [notifications,setNotification]=useState(notification)
const filterNotification=(filter:string)=>{
  // const newNotification=notification.filter((item)=>{
if(filter=="All"){
  setNotification(notification)
  setActive(filter)
}
 if (filter=="Read"){
setNotification(notification.filter((item)=>item.read==true))
  setActive(filter)

}
 if (filter=="Unread"){
setNotification(notification.filter((item)=>item.read==false))
  setActive(filter)

}
  // })
}

return <main className="container flex flex-col gap-5 md:py-10 lg:py-0">
    <div className="flex items-center">
        <Link
          href="/"
          className="text-primary text-[14px] font-semibold flex items-center gap-2"
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to Listing
        </Link>
      </div>
    
<section className="grid gap-14">
<section className="flex  flex-col md:flex-row items-start md:items-start justify-between gap-6">
  <div className="flex flex-col gap-8">

    <div>                 <h6 className="text-primary  font-[700] text-[21px] mb-2 md:text-[33px]"> Notifications </h6>
    <p
            className="text-grey max-w-xl mx-auto"
            style={{ fontSize: 17, fontWeight: 400, fontStyle: "normal" }}
          >
            All your alerts, updates, and deals in one place.
          </p>
</div>



  </div>




 
</section>

{0>1&&<div className="flex flex-col items-center justify-center">
    <div className=" flex flex-col py-8 items-center justify-center w-fit rounded-lg text-center font-Poppins p-6 bg-filterBg md:w-3/5 md:py-16">
      {/* SVGs */}
      <div className="mb-8">
        {/* Desktop SVG */}
        <div className="hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="125" height="124" viewBox="0 0 125 124" fill="none">
  <path d="M105.745 46.0339L100.578 54.9722L37.9067 18.8055L43.0733 9.86719L58.78 18.9089L65.8067 16.9972L88.1783 29.9139L90.09 36.9922L105.745 46.0339ZM31.5 98.1655V36.1655H57.695L93.5 56.8322V98.1655C93.5 100.906 92.4113 103.534 90.4734 105.472C88.5356 107.41 85.9072 108.499 83.1667 108.499H41.8333C39.0928 108.499 36.4644 107.41 34.5266 105.472C32.5887 103.534 31.5 100.906 31.5 98.1655Z" fill="#A68200"/>
</svg>
        </div>
        {/* Mobile SVG */}
        <div className="md:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
  <path d="M68.4 29.7005L65.0667 35.4672L24.6333 12.1339L27.9667 6.36719L38.1 12.2005L42.6333 10.9672L57.0667 19.3005L58.3 23.8672L68.4 29.7005ZM20.5 63.3339V23.3339H37.4L60.5 36.6672V63.3339C60.5 65.102 59.7976 66.7977 58.5474 68.0479C57.2971 69.2981 55.6014 70.0005 53.8333 70.0005H27.1667C25.3986 70.0005 23.7029 69.2981 22.4526 68.0479C21.2024 66.7977 20.5 65.102 20.5 63.3339Z" fill="#A68200"/>
</svg>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-primary font-[700] text-[28px] md:text-[36px] mb-3">
        No notifications yet?
      </h2>

      {/* Description */}
      <p className="text-grey font-[400] text-[15px] md:text-[17px] max-w-md">
    You’ll get updates here when sellers reply, new listings match your search, or something changes with your saved items.
      </p>

      <Link href={`/categories`}>
       <button
            className=" text-[17px] py-2 px-8 bg-primary text-white rounded-md mt-4"
          >
            Browse categories 
          </button></Link>
    </div>
</div>}
{/* filter section */}
<section className="flex gap-4 flex-col md:justify-between md:items-center md:flex-row">
 <div className="flex item-center gap-5">
   {filterState.map((item,index)=>{
    return <button key={index} onClick={(()=>{
      filterNotification(item)
    })} className={` text-[14px]  font-[600] px-[12px] py-1 rounded-[8px] ${item==active?`bg-active text-primary`:`text-grey bg-transparent`}`}> {item} </button>
  })}
 </div>
 <p
              className="text-primary text-[14px]  font-[500] underline md:text-[17px]"
            >
              Mark all as read
            </p>
</section>

<section className="md:flex items-top justify-between gap-5">
<div className="flex flex-col gap-4">
    
        {notifications?.map((item,index)=>{
            return <div key={index} className={`p-4 flex flex-col gap-4   rounded-lg  border border-primary ${item.read?`bg-inputBg`:` bg-active`}`}>
                <div className="flex items-center justify-between">  <button className={`${availableStyle} px-2`}>   {item.name} </button> </div>
                
                                     <div className="flex flex-col gap-2  justify-between  w-full md:flex-row md:items-center md:gap-4"> <span className="flex items-center text-primary font-[14px] font-[500]">   {item.message} </span> <p className="text-grey text-[11px]">posted {item.time}</p>  </div>



              
                
                 </div>
        })}
</div>

<div className="hidden md:block bg-categoryBg p-4 rounded-xl h-fit flex flex-col gap-8  w-full md:w-[350px]">

            <div className="flex items-center gap-[15px]">
              
              <div className="flex flex-col gap-[6px]">
                <h4 className="text-primary font-[500] text-[16px] leading-[130%]">
                  Excel Home Electronics
                </h4>
               <p className="text-[14px] font-[400] text-grey">Choose which alerts you'd like to receive.</p>
              </div>
            </div>

             
           <Link href={`/buyer/settings`}>
              <button onClick={(()=>{
           })} className="py-[12px] text-[17px]  mt-3 text-primary rounded-[8px] font-500 w-full bg-white flex items-center border border-2 border-primary justify-center text-center gap-2">
            Go to Settings 
            </button></Link>

          </div>

          </section>


</section>


</main>
}
export default Page



  