
import React from "react";
import Image from "next/image";
const reviews = [
  {
    name: "Eze Soporuchi",
    date: "3 days ago",
    product:"Samsung Headphone X56",
    review:"Is this still available? Can I see a video?",
        price:"₦120,000",
  },
   {
    name: "Eze Soporuchi",
    date: "3 days ago",
    product:"Samsung Headphone X56",
    review:"Can I pay 100k instead?",
        price:"₦120,000",
  },
   {
    name: "Eze Soporuchi",
    date: "3 days ago",
    product:"Samsung Headphone X56",
    review:"Can I pay 100k instead?",
        price:"₦120,000",
  }, {
    name: "Eze Soporuchi",
    date: "3 days ago",
    product:"Samsung Headphone X56",
    review:"Can I pay 100k instead?",
        price:"₦120,000",
  },
  
];




export default function RecentInboxes() {
  return (
    <div className="grid gap-4 md:grid-cols-2 ">

      {reviews.map((review, idx) => (
        <div
          key={idx}
          className="bg-white rounded-[12px] border-1 border-active p-8 flex flex-col gap-3"
        >
          {/* Top section */}
          <div className="flex flex-col border-b border-active pb-4 gap-2">
            <div className="flex gap-4">
              <Image
                src={`/product.png`}
                alt={review.name}
                height={10}
                width={10}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="text-[14px] text-primary font-semibold">{review.product}</p>
                <p className="text-primary font-semibold " style={{ fontSize: 17 }}>
                  {review.price}
                </p>
                
              </div>
            </div>
          
          </div>

          {/* Review text */}

          <div>  <p className="text-primary font-semibold " style={{ fontSize: 17 }}>
                  {review.name}
                </p>
          <p
            className="text-primary max-w-xl mx-auto line-clamp-1"
            style={{ fontSize: 14, fontWeight: 400, fontStyle: "normal" }}
          >
            {review.review}
          </p></div>

          {/* Actions */}
         <div className="flex items-center justify-between">  <div className="flex gap-6 items-center">
            <div className="flex gap-1 items-center">
                              <p className="text-[11px] text-grey">{review.date}</p>

            </div>
           
          </div>     <p className="text-primary mt-2 cursor-pointer text-[14px] underline font-[600]">Reply buyer </p>
 </div>
        </div>
      ))}

    </div>
  );
}
