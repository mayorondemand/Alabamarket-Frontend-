
'use client'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

const Page = () => {
  // Separate arrays for each type
  const listings = [
    {
      type: "Listing",
      name: "Listing updates",
      phone: 'Samsung Galaxy S21',
      price: "₦100,000",
      message: 'Just added near your location',
      time: "2hrs ago",
      read: true
    }
  ]

  const videoCalls = [
    {
      type: "Video Call",
      name: "Video call request",
      phone: 'Samsung Galaxy S21',
      price: "₦142,000",
      message: 'You just ended a video call with Bridget Gadgets: “Infinix Zero Ultra”',
      time: "2hrs ago",
      read: false
    }
  ]

  const performance = [
    {
      type: "Performance",
      name: "Performance update",
      message: "Your boosted ad reached 1000 views in 24hrs.",
      time: "1 day ago",
      read: false
    }
  ]

  const ratings = [
    {
      type: "Rating",
      name: "Review and  ratings",
      message: "Eze Soporuchi wrote you a review for buying the Samsung Headset. Reply buyer.",
      time: "3 days ago",
      read: true
    }
  ]

  // All combined
  const allNotifications = [
    ...listings,
    ...videoCalls,
    ...performance,
    ...ratings
  ]

  const availableStyle = `px-2 py-1 rounded-[24px] bg-primary text-white font-[400]`
  const filterState = ["All", "Listings", "Video Calls", "Performance", "Ratings"]

  const [active, setActive] = useState("All")
  const [notifications, setNotifications] = useState(allNotifications)

  const filterNotification = (filter: string) => {
    if (filter === "All") {
      setNotifications(allNotifications)
    } else if (filter === "Listings") {
      setNotifications(listings)
    } else if (filter === "Video Calls") {
      setNotifications(videoCalls)
    } else if (filter === "Performance") {
      setNotifications(performance)
    } else if (filter === "Ratings") {
      setNotifications(ratings)
    }
    setActive(filter)
  }

  return (
    <main className="flex flex-col gap-8">
      {/* Back link */}
      <div className="flex items-center">
        <Link
          href="/seller/communication"
          className="text-primary text-[14px] font-semibold flex items-center gap-2"
        >
          <span className="bg-[#E9ECF4] p-2 rounded-full">
            <ArrowLeft size={16} className="text-primary" />
          </span>
          Back to communication
        </Link>
      </div>

      {/* <section className="grid gap-14"> */}
        {/* Title */}
        <section className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex flex-col gap-8">
            <div>
              <h6 className="text-primary font-[700] text-[21px] mb-2 md:text-[33px]">
                Notifications
              </h6>
              <p
                className="text-grey max-w-xl mx-auto"
                style={{ fontSize: 17, fontWeight: 400, fontStyle: "normal" }}
              >
                All your alerts, updates, and deals in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Filter buttons */}
        <section className="flex gap-4 flex-col md:justify-between md:items-center md:flex-row">
          
          <div className="flex  gap-10 justify-between  items-center gap-3 overflow-hidden flex-wrap no-scrollbar md:flex-[2.1] md:overflow-x-hidden">
  {filterState.map((item, index) => (
    <button
      key={index}
      onClick={() => filterNotification(item)}
      className={`text-[14px] font-[600] px-[12px] py-1 rounded-[8px] whitespace-nowrap flex-shrink-0 ${
        item === active
          ? `bg-[#ADB3C7] text-primary`
          : `text-[#ADB3C7] bg-transparent`
      }`}
    >
      {item}
    </button>
  ))}
</div>

          <p className="text-primary  flex   text-[14px] font-[500] underline md:text-[17px] md:justify-end md:items-end md:flex-1">
            Mark all as read
          </p>
        </section>

        {/* Notifications list */}
        <section className="md:flex items-top justify-between gap-5">
          <div className="flex flex-col gap-4">
            {notifications?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`p-4 flex flex-col gap-4 rounded-lg border border-primary ${
                    item.read ? `bg-inputBg` : `bg-active`
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <button className={`${availableStyle} px-2`}>
                      {item.name}
                    </button>
                  </div>

                  <div className="flex flex-col gap-2 justify-between w-full md:flex-row md:items-center md:gap-4">
                    <span className="flex items-center text-primary font-[14px] font-[500]">
                      {item.message}
                    </span>
                    <p className="text-grey text-[11px]">posted {item.time}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Preferences (desktop only) */}
          <div className="hidden md:block bg-categoryBg p-4 rounded-xl h-fit flex flex-col gap-8 w-full md:w-[350px]">
            <div className="flex flex-col gap-[6px]">
              <h4 className="text-primary font-[500] text-[16px] leading-[130%]">
                Notification Preferences
              </h4>
              <p className="text-[14px] font-[400] text-grey">
                Choose which alerts you'd like to receive.
              </p>
            </div>

            <Link href={`/buyer/settings`}>
              <button className="py-[12px] text-[17px] mt-3 text-primary rounded-[8px] font-500 w-full bg-white flex items-center border border-2 border-primary justify-center text-center gap-2">
                Go to Settings
              </button>
            </Link>
          </div>
        </section>
      {/* </section> */}
    </main>
  )
}
export default Page

  