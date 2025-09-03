import { Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Store,MessageSquareText,ChartSpline,Settings} from 'lucide-react';
import { MdEdit } from "react-icons/md";
import { IoIosPause } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";


const Page=()=>{
    const product=[
        {
            name:"Panasonic Solar Inverter",
            price:"₦656,700",
            boosted:true,
            eye:"5,672",
            message:"5,672",
            live:true, 
            img:"/product.png",
        },
         {
            name:"Panasonic Solar Inverter",
            price:"₦656,700",
            boosted:false,
            eye:"5,672",
            message:"5,672",
            live:false, 
            img:"/product.png"
        }
    ]

return <div className="flex flex-col gap-8">
    <div className="flex items-center justify-between">
        <h4 className="font-[500]">Your Ad Listing </h4>


        <select name="" id="" className="bg-highestViewed text-sm p-1 rounded">
            <option value="highest">Higest viewed </option>
                        <option value="Lowest">Lowest viewed </option>

        </select>

    </div>

<div className="flex flex-col gap-4">
{product.map((item,index)=>{
    return <div key={index} className="border border-1 border-active p-3 rounded-lg shadow-md bg-white flex flex-col gap-2 md:p-4 md:gap-0 md:flex-row md:items-center justify-between">
        <div className="flex gap-4 flex-col md:items-center md:flex-row">  <Image src={item.img} alt={item.name} height={140} className="rounded-lg w-full md:w-40" width={140} /> 
        <div className="flex flex-col mb-2  gap-4 md:gap-10 md:mb-0">  <div className={`flex   text-primary gap-4 ${item.boosted?``:`items-center`}`}>
            <button className={`py-2 px-4 rounded-lg  border text-sm border-active ${item.boosted?'':'bg-seller cursor-rejected'}`}> {item.boosted?'Boosted':"Free"}  </button>
            {!item.boosted&&<Link href={`/boostad`} className="font-500 text-sm  underline">Boost ad </Link>}
             </div>

             <div>
                <p className="text-sm text-primary">  {item.name} </p>
                <h4 className="font-[200]"> {item.price} </h4>
                
                 </div>
             
             </div>
             
        
        </div>


         <div className="flex flex-col gap-4 md:gap-10 ">  <div className={`flex   text-primary  order-2 md:order-1 gap-6`}>
          
         
            <div className="flex gap-2 items-center"> <Eye size={16} className="text-grey "/>  <span className="text-[12px]  text-blackfont-[400]">{item.eye} </span></div>
                     <div className="flex gap-2 items-center"> <MessageSquareText size={16} className="text-grey "/>  <span className="text-[12px]  text-blackfont-[400]">{item.message} </span></div>
            <button className={`hidden  items-center py-2 px-4 rounded-lg  text-sm md:flex gap-2 ${item.live?`text-liveColor bg-liveBg`:`text-pendingColor bg-pendingBg`}`}>  <span className={`p-1 rounded-full h-1 w-1 ${item.live?`bg-liveColor`:`bg-pendingColor`}`}></span> {item.live?'Live':"Pending"} </button>
            
             </div>

<div className={`flex   text-primary gap-6  order-1 md:order-2`}>
          
         
            <div className="flex gap-2 items-center"> <MdEdit  size={18} className="text-edit"/>  <span className="text-[12px]  text-blackfont-[400]"> Edit  </span></div>
            {item.boosted&&                     <div className="flex gap-2 items-center"> <IoIosPause size={18} className="text-pause "/>  <span className="text-[12px]  text-blackfont-[400]">Pause  </span></div>
}
                                 <div className="flex gap-2 items-center"> <RiDeleteBin5Fill size={18} className="text-red"/>  <span className="text-[12px]  text-blackfont-[400]"> Delete  </span></div>

             </div>            
             
             </div>
        
         </div>
})}
</div>

</div>
}
export default Page