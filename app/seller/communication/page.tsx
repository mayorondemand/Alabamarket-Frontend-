
import VideoRequests from './components/VideoRequests';
// import ReviewCard from './components/ReviewCard';
import ProductReview from './components/ProductsReviews';
import RecentInboxes from './components/RecentInboxes';
import EmptyState from './components/EmptyState'

const Page=()=>{
const inbox=1
  return <div className="flex flex-col gap-8 ">
     <div className='flex flex-col gap-4'>
        <h4 className="font-semibold text-primary">Recent Inbox </h4>
{inbox>0?<RecentInboxes />:<EmptyState  title="No Messages Yet!" description="When a buyer is interested in your product, their message will show up here. Be sure to respond quickly to build trust and close deals faster."/>
}


       

    </div>
     <div className='flex flex-col gap-4'>
        <h4 className="font-semibold text-primary">Video Call Requests </h4>

{inbox>0?<VideoRequests />:
<EmptyState  title="No Video Call Requests Yet"
description='Once a buyer wants to inspect your product virtually, you’ll receive their video call request here.'
 />
}

       

    </div>


    <div className="flex flex-col gap-4"> <div className="flex items-center justify-between">
        <h4 className="font-semibold text-primary"> Reviews & Ratings (from buyers) </h4>


        <select name="" id="" className="bg-highestViewed text-sm p-1 rounded">
            <option value="highest">Most recent  </option>
                        <option value="Lowest">Past </option>

        </select>

        

    </div>
    {inbox>0? <ProductReview  />:
    <EmptyState  title="No Reviews Yet!"
description='Encourage buyers to leave feedback after each sale to grow trust.'
 />}
   
    
    </div>
  </div>
}
export default Page
// 'use client'