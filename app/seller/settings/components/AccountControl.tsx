'use client'
import React, { useState } from 'react';
import clsx from 'clsx';
import DeleteAccount from '../../components/DeleteAccountPopUp';
const AccountControl = () => {
  const notifications = [
    {name:"Temporarily hide my store from buyers", title:'Deactivate account'},
        {name:"Permanently delete account", title:'This action is irreversible'}

   
  ];

  const [switchStates, setSwitchStates] = useState<boolean[]>(
    Array(notifications.length).fill(false)
  );

  const toggleSwitch = (index: number) => {
    setSwitchStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };
  const [showLogout,setShowLogout]=useState(false)
// console.log('helo world ')
  return (
    <section className="flex flex-col items-center justify-center">
        <DeleteAccount showLogout={showLogout} setShowLogout={setShowLogout} />
      <div className="w-full flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-primary font-[700] text-[21px] md:text-[33px]">
              Notification Preferences
            </h6>
          </div>
       
        </div>

        {/* Notification list */}
        <div className="my-4 flex flex-col gap-6 w-fit md:w-3/5">
          {notifications.map((reason, index) => (
            <label
              key={index}
              className={`flex  justify-between gap-2 cursor-pointer md:items-center ${reason.title=='Deactivate account'?`justify-between`:`flex-col md:flex-row`}`}
            >
             <div>
                 <h6 className="text-primary font-[700] text-[21px] md:text-[33px]">
              {reason.title}
            </h6>
                 <span className="text-radio text-[14px] text-grey md:text-[17px]">
                {reason.name}
              </span>
             </div>

              {/* Toggle switch */}
            {reason.title=="Deactivate account"?  <div
  onClick={() => toggleSwitch(index)}
  className={clsx(
    'w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 border',
    switchStates[index]
      ? 'bg-white border-primary pr-2'
      : 'bg-gray-200 border-gray-300 pl-1'
  )}
>
  <div
    className={clsx(
      'w-5 h-5 rounded-full shadow-md transform transition-transform duration-300',
      switchStates[index]
        ? 'bg-primary translate-x-6'
        : 'bg-primary/40 translate-x-0'
    )}
  />
</div>:
          <button
            className="mt-4 text-[17px] py-2 bg-red text-white w-full px-8 rounded-md md:w-fit"
            onClick={()=>{
                setShowLogout(true)
            }}
          >
           Delete account 
          </button>
       }

            </label>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default AccountControl;
