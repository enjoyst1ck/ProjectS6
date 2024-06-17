import React from 'react'

export default function InfoAdvertising({ area, rooms, floor, developmentType, floorQuantity }) {
  return (
    <div className='grid grid-cols-5 my-16 relative'>
      <div className='text-center flex flex-col'>
        <span className='font-bold text-3xl'>{area}</span>
        <span className='font-semibold text-xl text-black text-opacity-65'>Square m2</span>
      </div>

      <div className='text-center flex flex-col'>
        <span className='font-bold text-3xl'>{rooms}</span>
        <span className='font-semibold text-xl text-black text-opacity-65'>Rooms</span>
      </div>

      <div className='text-center flex flex-col'>
        <span className='font-bold text-3xl'>{floor != 0 ? floor : "Parterre"}</span>
        <span className='font-semibold text-xl text-black text-opacity-65'>Floor</span>
      </div>

      <div className='text-center flex flex-col'>
        <span className='font-bold text-3xl'>{floorQuantity}</span>
        <span className='font-semibold text-xl text-black text-opacity-65'>Which floor</span>
      </div>

      <div className='text-center flex flex-col'>
        <span className='font-bold text-3xl'>{developmentType}</span>
        <span className='font-semibold text-xl text-black text-opacity-65'>Development type</span>
      </div>
    </div>
  )
}
