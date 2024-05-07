import React from 'react'
import DeveloperInfoAdvertising from '../component/DeveloperInfoAdvertising'
import ContentAdvertising from '../component/ContentAdvertising'
import InfoAdvertising from '../component/InfoAdvertising'
import SliderAdvertising from '../component/SliderAdvertising'

export default function AdvertisingPage() {
  return (
    <div className='w-[75%] mx-auto p-2'>
      <div className='w-full'>
        <SliderAdvertising/>

        <InfoAdvertising/>

        <div className='flex cursor-default mb-10'>
          <ContentAdvertising/>
          <DeveloperInfoAdvertising/>
        </div>
      </div>
    </div>
  )
}
