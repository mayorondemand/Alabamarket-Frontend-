// "use client";

// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const categories = [
//   {
//     name: "Home Appliances",
//     items: ["Buchymix Blender", "SMEG Kettles", "QLinks Fridge"],
//   },
//   {
//     name: "UPS & Inverter",
//     items: [],
//   },
//   {
//     name: "Laptops",
//     items: [],
//   },
//   {
//     name: "Cable Trays",
//     items: [],
//   },
//   {
//     name: "Others",
//     items: [],
//   },
// ];

// export default function Categories() {
//   const [openCategory, setOpenCategory] = useState<string | null>(
//     "Home Appliances"
//   );

//   const toggleCategory = (name: string) => {
//     setOpenCategory(openCategory === name ? null : name);
//   };

//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-sm w-full max-w-xs">
//       <h2 className="text-lg font-semibold text-[#112D60] flex items-center justify-between">
//         Categories
//         {openCategory ? (
//           <ChevronUp size={18} className="text-[#112D60]" />
//         ) : (
//           <ChevronDown size={18} className="text-[#112D60]" />
//         )}
//       </h2>

//       <div className="mt-4 flex flex-col gap-3">
//         {categories.map((cat) => (
//           <div
//             key={cat.name}
//             className="bg-[#E9EDFA] rounded-xl transition-all"
//           >
//             {/* Category Header */}
//             <button
//               onClick={() => toggleCategory(cat.name)}
//               className="flex justify-between items-center w-full p-3 text-[#112D60] font-medium"
//             >
//               {cat.name}
//               {openCategory === cat.name ? (
//                 <ChevronUp size={18} />
//               ) : (
//                 <ChevronDown size={18} />
//               )}
//             </button>

//             {/* Sub Items */}
//             {openCategory === cat.name && cat.items.length > 0 && (
//               <div className="flex flex-col gap-2 pb-3 px-3 text-sm text-[#112D60]">
//                 {cat.items.map((item, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="underline hover:text-blue-600"
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
const categories = [
  {
    name: "Home Appliances",
    items: [
      "Buchymix Blender",
      "SMEG Kettles",
      "QLinks Fridge",
      "LG Microwave",
      "Hisense Washing Machine",
    ],
  },
  {
    name: "UPS & Inverter",
    items: [
      "Luminous Inverter",
      "SuKam UPS",
      "Microtek Batteries",
      "BlueGate UPS",
      "Genus Solar Inverter",
    ],
  },
  {
    name: "Laptops",
    items: [
      "MacBook Pro",
      "Dell XPS 13",
      "HP Spectre x360",
      "Lenovo ThinkPad",
      "Asus ROG Strix",
    ],
  },
  {
    name: "Cable Trays",
    items: [
      "Perforated Cable Tray",
      "Ladder Cable Tray",
      "Wire Mesh Cable Tray",
      "Solid Bottom Tray",
      "PVC Cable Ducts",
    ],
  },
  {
    name: "Others",
    items: [
      "Smart Watches",
      "Bluetooth Speakers",
      "Gaming Consoles",
      "External Hard Drives",
      "Wireless Routers",
    ],
  },
];

export default function Categories() {
  // toggle for entire categories section
  const [showCategories, setShowCategories] = useState(true);

  // toggle for each category
  const [openCategory, setOpenCategory] = useState<string | null>(
    "Home Appliances"
  );

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm w-full z-40 lg:p-4 ">
      {/* Header with main collapse toggle */}
      <h2 className="text-[21px] font-[600] text-primary flex items-center justify-between bg-categoryBg  rounded-[8px] p-2  lg:bg-white lg:p-0">
        Categories
        <button onClick={() => setShowCategories(!showCategories)}>
          {showCategories ? (
            <ChevronUp size={18} className="text-[#112D60]" />
          ) : (
            <ChevronDown size={18} className="text-[#112D60]" />
          )}
        </button>
      </h2>

      {/* Category List */}
      {showCategories && (
        <div className="mt-4 flex flex-col gap-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-[#E9EDFA] rounded-xl transition-all overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(cat.name)}
                className="flex justify-between items-center text-left w-full p-3 text-primary text-[17px]"
              >
                {cat.name}
                {openCategory === cat.name ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {/* Sub Items */}
              {openCategory === cat.name && (
                <div className="flex flex-col gap-4 pb-3 px-3 text-sm text-primary">
                  {cat.items.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="underline text-[14px] hover:text-blue-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

