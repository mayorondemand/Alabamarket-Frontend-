'use client'
import { useState } from "react"
import Language from "@/app/buyer/components/Language"
import StoreInfo from "./components/StoreInformation"
import Notifications from "./components/Notifications"
import AccountControl from "./components/AccountControl"
import LogoutPopUp from "@/app/components/LogoutPopUp"
const Page=()=>{
     const filterState = [
        {
            name: "Store info",
            title:"Store information",
            component:<StoreInfo />
        },
         {
            name: "Verifications",
             title: "Verifications",
            component: <div> Verification  </div>
        },
        {
            name: "Notification",
             title: "Notifications",
            component: <Notifications />
        },
        {
            name: "Language",
             title: "Language preferences",
            component: <Language />
        },
         {
            name: "Account control",
             title: "Account Control",
            component:<AccountControl />
        }
    
      ]
    
      const [active, setActive] = useState("Store info")
    

  const availableStyle = `px-2 py-1 rounded-[24px] bg-primary text-white font-[400]`
  const activeComponent=filterState.find((item)=>item.name==active)
      const filterNotification = (filter: string) => {
       
        setActive(filter)
      }
return <main className="flex flex-col gap-8 ">
      <div className="flex  gap-10 justify-between  items-center gap-3 flex-wrap lg:w-3/5 lg:gap-5">
  {filterState.map((item, index) => (
    <button
      key={index}
      onClick={() => filterNotification(item.name)}
      className={`text-[14px] font-[600] px-[12px] py-1 rounded-[8px] whitespace-nowrap flex-shrink-0 ${
        item.name === active
          ? `bg-[#ADB3C7] text-primary`
          : `text-[#ADB3C7] bg-transparent`
      }`}
    >
      {item.name}
    </button>
  ))}
</div>

<div className="p-5 bg-white rounded-lg">
    {activeComponent?.component}
</div>

</main>
}
export default Page