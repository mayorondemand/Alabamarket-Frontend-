'use client'
import React, { useState } from 'react';
import clsx from 'clsx';

const Notifications = () => {
  const reportReasons: string[] = [
    'New listing alert',
    'New messages from seller',
    'Safety or scam alerts',
    'Promotions and news from Alaba Market',
  ];

  const [switchStates, setSwitchStates] = useState<boolean[]>(
    Array(reportReasons.length).fill(false)
  );

  const toggleSwitch = (index: number) => {
    setSwitchStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <form className="w-full flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-primary font-[700] text-[21px] md:text-[33px]">
              Notification Preferences
            </h6>
          </div>
          <select
            name="buyer"
            id="buyer"
            className="bg-neatBg p-1 border-none rounded hidden md:block"
          >
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
        </div>

        {/* Notification list */}
        <div className="my-4 flex flex-col gap-4 w-fit md:w-1/2">
          {reportReasons.map((reason, index) => (
            <label
              key={index}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="text-radio text-[14px] md:text-[17px]">
                {reason}
              </span>

              {/* Toggle switch */}
              <div
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
</div>

            </label>
          ))}
        </div>

        <div>
          <button
            type="submit"
            className="mt-4 text-[17px] py-2 bg-primary text-white w-full px-8 rounded-md md:w-fit"
          >
            Save changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default Notifications;
