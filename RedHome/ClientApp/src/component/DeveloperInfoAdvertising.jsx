import React from 'react'

export default function DeveloperInfoAdvertising({ userEmail }) {
  return (
    <div className='w-[25%]'>
      <div className='p-4 w-full h-full border-black border-opacity-50 border-2 rounded-2xl'>
        <div className='flex items-center'>
          <div className='size-12 bg-red-100 rounded-full'>
            <img src='' />
          </div>
          <span className='text-xl font-bold ml-3'>Andrzej Kubica</span>
        </div>

        <div className='my-12 flex flex-col'>
          <span className='text-xl font-bold'>Contact details</span>
          <div className='flex flex-col mt-2'>
            <span>E-mail:</span>
            <span>adnrzejkubica@gmail.com</span>
          </div>
          <div className='flex flex-col mt-2'>
            <span>Phone number:</span>
            <span>+48 123 456 789</span>
          </div>
          <div className='flex flex-col mt-2'>
            <span>Other information:</span>
            <span>Not available until June 15, 2024</span>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  )
}
