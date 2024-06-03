import React from 'react';
import { MdOutlineSell } from "react-icons/md";

export default function AddPage() {
   return (
      <div className='w-[75%] mx-auto'>
         <div className='w-full flex flex-col'>
            <div className='flex flex-col'>
               <span className='text-black text-opacity-70 text-lg'>Step 1</span>
               <span className='font-bold text-3xl'>Add advertisement</span>
            </div>
            <div className='flex mt-8'>
               <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input type="radio" id="isSell-true" name="isSell" value="true" class="hidden peer" />
                  <label for="isSell-true" class="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                     <div className='flex justify-center'><MdOutlineSell size={48} /></div>
                     <div className='text-center text-2xl mt-3'>Sell</div>
                  </label>
               </div>
               <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input type="radio" id="isSell-false" name="isSell" value="false" class="hidden peer" />
                  <label for="isSell-false" class="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                     <div className='flex justify-center '><MdOutlineSell size={48} /></div>
                     <div className='text-center text-2xl mt-3'>Rent</div>
                  </label>
               </div>
            </div>


         </div>


         <div className='w-full flex justify-between items-center'>
            <div className='py-1 px-6 bg-[#BE3144] text-white text-center text-xl rounded-xl cursor-pointer hover:bg-[#be3144ec] transition-all'>Previus</div>
            <div className='flex '>
               <div className='size-6 rounded-full border-4 border-[#be3144ec] mx-1'></div>
               <div className='size-6 rounded-full border-4 border-[#be3144ec] mx-1'></div>
               <div className='size-6 rounded-full border-4 border-[#be3144ec] mx-1'></div>
               <div className='size-6 rounded-full border-4 border-[#be3144ec] mx-1'></div>
            </div>
            <div className='py-1 px-6 bg-[#BE3144] text-white text-center text-xl rounded-xl cursor-pointer hover:bg-[#be3144ec] transition-all'>Next</div>
         </div>
      </div>
   )
}
