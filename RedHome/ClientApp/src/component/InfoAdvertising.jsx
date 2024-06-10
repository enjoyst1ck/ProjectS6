import React from 'react'

export default function InfoAdvertising() {
  return (
    <div className='grid grid-cols-5 my-8'>
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
  )
}
