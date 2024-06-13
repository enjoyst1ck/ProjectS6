import React, { useState } from 'react'
import imagePlaceholder from "./../assets/imageplaceholder.png"

export default function SliderAdvertising({ images, isLiked }) {
  const [currImg, setCurrImg] = useState(0);

  const handleChangeImg = (index) => {
    setCurrImg(index);
  }
  return (
    <>
      <div className='w-full h-[723px] bg-black rounded-2xl relative'>
        {images.length === 0 && <img alt='img' className='w-full h-full rounded-2xl object-cover' src={imagePlaceholder} />}
        {images.length > 0 && <img alt='img' className='w-full h-full rounded-2xl' src={`data:image/jpg;base64, ${images[currImg].image}`} />}
        <div className='bg-white rounded-full size-12 absolute right-4 top-4 flex justify-center items-center'>
          
        </div>
      </div>
      <div className='w-full grid grid-cols-6 mt-3 gap-3'>
        {/* <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div>
        <div className='w-full bg-black aspect-[4/2] rounded-2xl'></div> */}
        {images.length > 0 ? images.map((item, index) => (
          <div key={index} className={currImg === index ? 'w-full h-full rounded-2xl cursor-pointer scale-105 hover:scale-105 transition-all' : 'w-full h-full rounded-2xl cursor-pointer hover:scale-105 transition-all relative'} onClick={() => handleChangeImg(index)}>
            <div className={currImg === index ? 'hidden' : 'absolute top-0 left-0 w-full h-full bg-black opacity-25 rounded-2xl'}></div>
            <img alt='img' className='object-fill w-full h-full rounded-2xl' src={`data:image/jpg;base64,${item.image}`} />
          </div>
        )) : null}

      </div>
    </>
  )
}
