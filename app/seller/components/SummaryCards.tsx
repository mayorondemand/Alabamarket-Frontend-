// "use client";

// import { ShoppingCart, Eye, MessageSquare, Rocket } from "lucide-react";

// const stats = [
//   {
//     id: 1,
//     title: "Active Listings",
//     value: 14,
//     icon: ShoppingCart,
//     bg: "bg-indigo-100",
//     iconColor: "text-indigo-600"
//   },
//   {
//     id: 2,
//     title: "Total Views",
//     value: 562,
//     icon: Eye,
//     bg: "bg-green-100",
//     iconColor: "text-green-600"
//   },
//   {
//     id: 3,
//     title: "Messages from Buyers",
//     value: 23,
//     icon: MessageSquare,
//     bg: "bg-yellow-100",
//     iconColor: "text-yellow-600"
//   },
//   {
//     id: 4,
//     title: "Boosted Ads",
//     value: 5,
//     icon: Rocket,
//     bg: "bg-pink-100",
//     iconColor: "text-pink-600"
//   }
// ];

// const SummaryCards = () => {
//   return (
//     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//       {stats.map((stat) => (
//         <div
//           key={stat.id}
//           className={`rounded-2xl p-4 flex flex-col gap-14 items-start ${stat.bg}`}
//         >
//           <div
//             className={`w-8 h-8 p-4 bg-white rounded-full flex items-center justify-center mb-3 `}
//           >
//             <stat.icon className={`w-5 h-5 ${stat.iconColor}` } />
//           </div>
//         <div>   <p className="text-grey text-sm">{stat.title}</p>
//           <p className="text-primary text-2xl font-bold">{stat.value}</p> </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default SummaryCards;
"use client";

import { ShoppingCart, Eye, MessageSquare, Rocket } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Active Listings",
    value: 14,
    icon: ShoppingCart,
    bg: "bg-activeListing",
    iconColor: "text-indigo-600"
  },
  
  {
    id: 2,
    title: "Total Views",
    value: 562,
    icon: Eye,
    bg: "bg-totalViews",
    iconColor: "text-green-600"
  },
  {
    id: 3,
    title: "Messages from Buyers",
    value: 23,
    icon: MessageSquare,
    bg: "bg-messagesFromBuyers",
    iconColor: "text-yellow-600"
  },
  {
    id: 4,
    title: "Boosted Ads",
    value: 5,
    icon: Rocket,
    bg: "bg-boostedads",
    iconColor: "text-pink-600"
  }
];

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-2 mb-3 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`rounded-2xl p-4 flex flex-col gap-14 items-start ${stat.bg} md:px-6`}
        >
          {/* Icon wrapper */}
          <div className="p-2 bg-white rounded-full flex items-center justify-center mb-3">
            <stat.icon size={30} className={` ${stat.iconColor}`} />
          </div>

          {/* Title + Value */}
          <div className="min-h-[80px] flex flex-col justify-end">
            <p className="text-gray-500 text-sm">{stat.title}</p>
            <p className="text-primary text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
