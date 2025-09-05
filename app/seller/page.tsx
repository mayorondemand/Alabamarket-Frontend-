
    


'use client';

import Image from 'next/image';
import Link from 'next/link';
import AddListing from './components/AddListing'
import SummaryCards from './components/SummaryCards';

const Page = () => {
 

  return (
    <div className=" flex flex-col gap-4 ">
      <SummaryCards />
      <AddListing />
    </div>
  );
};

export default Page;