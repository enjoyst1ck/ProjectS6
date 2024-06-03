import React from 'react'

export default function NavAddPage({ currStep, setCurrStep }) {
   const helper = [1, 2, 3, 4];

   const nextHandle = () => {
      if (currStep < helper.length) {
         setCurrStep(prev => prev + 1);
      }
   };

   const prevHandle = () => {
      if (currStep > 1) {
         setCurrStep(prev => prev - 1);
      }
   };
   return (
      <div className='w-full flex justify-between items-center'>
         <div className='py-1 px-6 bg-[#BE3144] text-white text-center text-xl rounded-xl cursor-pointer hover:bg-[#be3144ec] transition-all' onClick={prevHandle}>Previus</div>
         <div className='flex '>
            {helper.map((item, index) => (
               <div className={index === currStep - 1 ? 'size-6 rounded-full border-4 bg-[#be3144ec] border-[#be3144ec] mx-1' : 'size-6 rounded-full border-4 border-[#be3144ec] mx-1'}></div>
            ))}
         </div>
         <div className='py-1 px-6 bg-[#BE3144] text-white text-center text-xl rounded-xl cursor-pointer hover:bg-[#be3144ec] transition-all' onClick={nextHandle}>Next</div>
      </div>
   )
}
