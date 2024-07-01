import React from 'react';
import { format } from "date-fns";

export default function ContentAdvertising({ title, description, price, isForSell, city, address, createdDate }) {
  const rawDate = new Date(createdDate);
  const result = format(rawDate, "dd  MMMM  yyyy HH:mm");

  return (
    <div className='w-[75%] pr-8'>
      <div className='flex flex-col'>
        <div className='flex items-center'>
          <span className='py-1 px-3 bg-red-800 text-white rounded-xl mr-2'>{isForSell === true ? "For sell" : "For rent"}</span>
          <span className='text-black text-opacity-75'>Published {result}</span>
        </div>
        <div className='mt-2'>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <h2 className='text-3xl mt-2'>{price} zł</h2>
        </div>
      </div>

      <div className='flex flex-col my-10'>
        <span className='font-bold text-2xl'>Description</span>
        <span className='text-lg text-justify'>{description}</span>
      </div>

      <div className='flex flex-col'>
        <span className='font-bold text-2xl'>Localization</span>
        <span className='text-lg'>{address}, {city}</span>
      </div>
    </div>
  )
}
