import Link from "next/link";
import React from "react";

const ratings = [
  { stars: 5, count: 61 },
  { stars: 4, count: 18 },
  { stars: 3, count: 5 },
  { stars: 2, count: 2 },
  { stars: 1, count: 1 },
];

export default function ReviewRange() {
  const total = ratings.reduce((acc, r) => acc + r.count, 0);

  return (
    <div className="w-full max-w-md flex flex-col gap-4 ">
      {/* Average Rating */}
         
      <div className="bg-reviewRangeBg   p-[14px] rounded-[12px]">
        <h2 className="text-primary font-[700] text-[33px] mb-4">
        4.8 rating
      </h2>

      {/* Bars */}
      <div className="space-y-3">
        {ratings.map((r) => {
          const percent = (r.count / total) * 100;
          return (
            <div key={r.stars} className="flex items-center gap-8">
              {/* Stars Label */}
              <span className="flex items-center gap-1 text-sm text-slate-700 w-6">
                {r.stars} 
                <span className="text-star">★</span>
              </span>

              {/* Progress Bar */}
              <div className="flex-1 h-2 bg-blue-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-900"
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* Count */}
              <span className="w-6 text-sm text-slate-700">{r.count}</span>
            </div>
          );
        })}
      </div>
      </div>
                 <Link href={`/seller/reviews/createreview`}>

       <button onClick={(()=>{
            // setShowPopUp(true)
           })} className="py-[12px] mt-3 text-[17px]    rounded-[8px] font-500 w-full bg-primary text-white flex items-center justify-center text-center gap-2 md:hidden">
             Leave a review
            </button>
            </Link>
    </div>
  );
}
