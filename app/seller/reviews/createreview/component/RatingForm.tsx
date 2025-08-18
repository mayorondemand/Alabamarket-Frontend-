// 'use client'

// import React, { useState } from 'react';
// import { Star, AlertCircle } from 'lucide-react';

// //


// const RatingForm: React.FC = () => {
//   const [rating, setRating] = useState<number>(0);
//   const [hoverRating, setHoverRating] = useState<number>(0);
//   const [feedback, setFeedback] = useState<string>('');

//   const handleStarClick = (starNumber: number) => {
//     setRating(starNumber);
//   };

//   const handleStarHover = (starNumber: number) => {
//     setHoverRating(starNumber);
//   };

//   const handleStarLeave = () => {
//     setHoverRating(0);
//   };

//   const handleSubmit = () => {
//     if (rating === 0) {
//       return;
//     }

//     // Handle successful submission here
//     console.log('Rating:', rating);
//     console.log('Feedback:', feedback);
    
//     // Reset form or show success message
//     alert(`Thank you for your ${rating}-star rating!`);
//   };

//   const question=" text-[17px] font-[500] text-primary mb-4 md:text-[21px]"
//   const renderStar = (starNumber: number) => {
//     const isFilled = starNumber <= (hoverRating || rating);
    
//     return (
//       <button
//         key={starNumber}
//         type="button"
//         className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
//         onClick={() => handleStarClick(starNumber)}
//         onMouseEnter={() => handleStarHover(starNumber)}
//         onMouseLeave={handleStarLeave}
//       >
//         <Star
//           className={`w-8 h-8 transition-colors duration-200 ${
//             isFilled 
//               ? 'text-primary fill-primary' 
//               : 'text-primary hover:text-primary'
//           }`}
//         />
//       </button>
//     );
//   };

//   return (
//     <div className="bg-white">
//       <div className="space-y-6">
//         {/* Rating Question */}
//         <div>
//           <h2 className={`${question}`}>
//             How would you rate your experience? <span className="text-red-500">*</span>
//           </h2>
          
//           <div className="flex space-x-2">
//             {[1, 2, 3, 4, 5].map(renderStar)}
//           </div>
          
//           {/* Alert Message */}
//           {/* {showAlert && (
//             <div className="mt-3 flex items-center space-x-2 text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
//               <AlertCircle className="w-5 h-5 flex-shrink-0" />
//               <span className="text-sm">Please select a star rating before submitting.</span>
//             </div>
//           )} */}
//         </div>

//         {/* Feedback Question */}
//         <div>
//           <label htmlFor="feedback" className={`${question}`}>
//             Tell us what you liked or didn't like <span className="text-red-500">*</span>
//           </label>
          
//           <textarea
//             id="feedback"
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             placeholder="Share your honest experience about the product or seller."
//             className="w-full min-h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//             rows={4}
//           />
//         </div>

//         {/* Submit Button */}
//         <div>
         
          
//        <button onClick={(()=>{
//                       handleSubmit()

//            })} className="py-[12px] mt-3 text-[17px]    rounded-[8px] font-500 w-full bg-primary text-white flex items-center justify-center text-center gap-2 md:hidden">
//            Submit review 
//             </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RatingForm;
'use client'

import React, { useState, memo } from 'react';
import { Star } from 'lucide-react';

type StarButtonProps = {
  starNumber: number;
  rating: number;
  hoverRating: number;
  onClick: (num: number) => void;
  onHover: (num: number) => void;
  onLeave: () => void;
};

const StarButton = memo(({ starNumber, rating, hoverRating, onClick, onHover, onLeave }: StarButtonProps) => {
  const isFilled = starNumber <= (hoverRating || rating);

  return (
    <button
      type="button"
      className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
      onClick={() => onClick(starNumber)}
      onMouseEnter={() => onHover(starNumber)}
      onMouseLeave={onLeave}
    >
      <Star
        className={`w-8 h-8 transition-colors duration-200 ${
          isFilled 
            ? 'text-primary fill-primary' 
            : 'text-primary hover:text-primary'
        }`}
      />
    </button>
  );
});

const RatingForm: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');

  const handleStarClick = (starNumber: number) => setRating(starNumber);
  const handleStarHover = (starNumber: number) => setHoverRating(starNumber);
  const handleStarLeave = () => setHoverRating(0);

  const handleSubmit = () => {
    if (rating === 0) return;

    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    alert(`Thank you for your ${rating}-star rating!`);
  };

  const question=" text-[17px] font-[500] text-primary mb-4 md:text-[21px]";

  return (
    <div className="bg-white">
      <div className="space-y-6">
        {/* Rating Question */}
        <div>
          <h2 className={`${question}`}>
            How would you rate your experience? <span className="text-red-500">*</span>
          </h2>

          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <StarButton
                key={num}
                starNumber={num}
                rating={rating}
                hoverRating={hoverRating}
                onClick={handleStarClick}
                onHover={handleStarHover}
                onLeave={handleStarLeave}
              />
            ))}
          </div>
        </div>

        {/* Feedback Question */}
        <div>
          <label htmlFor="feedback" className={`${question}`}>
            Tell us what you liked or didn't like <span className="text-red-500">*</span>
          </label>
          
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your honest experience about the product or seller."
            className="w-full min-h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button 
            onClick={handleSubmit}
            className="py-[12px] mt-3 text-[17px] rounded-[8px] font-500 w-full bg-primary text-white flex items-center justify-center text-center gap-2"
          >
            Submit review 
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingForm;
