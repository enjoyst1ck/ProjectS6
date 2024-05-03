import React from 'react'

export default function Slider() {
  return (
    <div className='w-[60%] h-screen bg-[#C44455] relative'>
      <div className='absolute bottom-0'>
        <svg width="551" height="896" viewBox="0 0 551 896" xmlns="http://www.w3.org/2000/svg">
          <path fill="#B03F55" d="M300.5 688.5C326.5 840.1 478.333 889.667 551 895.5H0V746.5V162.5V54.5V6.5V0C24.5 42.5 65 151 93 235C121 319 143 316 210 370C277 424 268 499 300.5 688.5Z" />
        </svg>
      </div>

      <div className='absolute top-0 right-0 rotate-180'>
        <svg width="551" height="896" viewBox="0 0 551 896" xmlns="http://www.w3.org/2000/svg">
          <path fill="#DC8E98" d="M300.5 688.5C326.5 840.1 478.333 889.667 551 895.5H0V746.5V162.5V54.5V6.5V0C24.5 42.5 65 151 93 235C121 319 143 316 210 370C277 424 268 499 300.5 688.5Z" />
        </svg>
      </div>

    </div>
  )
}
