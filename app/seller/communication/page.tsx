
import VideoRequests from './components/VideoRequests';
// import ReviewCard from './components/ReviewCard';
import ProductReview from './components/ProductsReviews';
import RecentInboxes from './components/RecentInboxes';
const Page=()=>{
   
  return <div className="flex flex-col gap-8 ">
     <div className='flex flex-col gap-4'>
        <h4 className="font-semibold text-primary">Recent Inbox </h4>

<RecentInboxes />
       

    </div>
     <div className='flex flex-col gap-4'>
        <h4 className="font-semibold text-primary">Video Call Requests </h4>

<VideoRequests />
       

    </div>


    <div className="flex flex-col gap-4"> <div className="flex items-center justify-between">
        <h4 className="font-semibold text-primary"> Reviews & Ratings (from buyers) </h4>


        <select name="" id="" className="bg-highestViewed text-sm p-1 rounded">
            <option value="highest">Most recent  </option>
                        <option value="Lowest">Past </option>

        </select>

        

    </div>
    <ProductReview  />
    
    </div>
  </div>
}
export default Page
// 'use client'