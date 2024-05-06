import React from 'react'

export default function AdvertisingPage() {
  return (
    <div className='w-[75%] mx-auto p-2 test'>
      <div className='w-full'>
        <div className='w-full h-[723px] bg-black rounded-2xl relative'>
          <div className='bg-white rounded-full size-12 absolute right-4 top-4'>

          </div>
        </div>
        <div className='w-full grid grid-cols-6 mt-3 gap-3'>
          <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
          <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
          <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
          <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
          <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
          <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        </div>

        <div className='grid grid-cols-5 mt-8'>
          <div className='text-center flex flex-col'>
            <span className='font-bold text-3xl'>102</span>
            <span className='font-semibold text-xl text-black text-opacity-65'>Square m2</span> 
          </div>

          <div className='text-center flex flex-col'>
            <span className='font-bold text-3xl'>3</span>
            <span className='font-semibold text-xl text-black text-opacity-65'>Rooms</span> 
          </div>

          <div className='text-center flex flex-col'>
            <span className='font-bold text-3xl'>1</span>
            <span className='font-semibold text-xl text-black text-opacity-65'>Floor floor</span> 
          </div>

          <div className='text-center flex flex-col'>
            <span className='font-bold text-3xl'>8</span>
            <span className='font-semibold text-xl text-black text-opacity-65'>Which floor</span> 
          </div>

          <div className='text-center flex flex-col'>
            <span className='font-bold text-3xl'>Block</span>
            <span className='font-semibold text-xl text-black text-opacity-65'>Development type</span> 
          </div>
        </div>

      </div>
    </div>
  )
}
