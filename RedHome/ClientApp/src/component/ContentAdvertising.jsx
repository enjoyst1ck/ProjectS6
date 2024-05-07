import React from 'react'

export default function ContentAdvertising() {
  return (
    <div className='w-[75%] pr-8'>
      <div className='flex flex-col'>
        <div className='flex items-center'>
          <span className='py-1 px-3 bg-red-800 text-white rounded-xl mr-2'>For sale</span>
          <span className='text-black text-opacity-75'>Published 1 May 2024 21:20</span>
        </div>
        <div className='mt-2'>
          <h1 className='text-5xl font-bold'>Cozy Apartment in Downtown</h1>
          <h2 className='text-3xl mt-2'>2 000 000 zł</h2>
        </div>
      </div>

      <div className='flex flex-col my-10'>
        <span className='font-bold text-2xl'>Description</span>
        <span className='text-lg text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
      </div>

      <div className='flex flex-col'>
        <span className='font-bold text-2xl'>Localization</span>
        <span className='text-lg'>333 Mountain View Drive, Denver</span>
      </div>
    </div>
  )
}
