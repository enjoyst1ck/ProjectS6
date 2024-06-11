import React from 'react'
import imagePlaceholder from "./../assets/imageplaceholder.png"

export default function SliderAdvertising({ images }) {
  
  return (
    <>
      <div className='w-full h-[723px] bg-black rounded-2xl relative'>
        <img alt='img' className='w-full h-full rounded-2xl' src={images.length > 0 ? `data:image/jpg;base64, ${images[0].image}` : imagePlaceholder}/>
        <div className='bg-white rounded-full size-12 absolute right-4 top-4'>
        </div>
      </div>
      <div className='w-full grid grid-cols-6 mt-3 gap-3'>
        {/* <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div> */}
        {images.length > 0 ? images.map((item) => {
          <div className='w-full aspect-[4/2] rounded-2xl'>
            <img alt='img' src={`data:image/jpg;base64, ${item.image}`}/>
          </div>
        }) : null}
      </div>
    </>
  )
}
