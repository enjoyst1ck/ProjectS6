import React, { useState } from 'react';
import { MdOutlineSell } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import NavAddPage from '../component/NavAddPage';

export default function AddPage() {
   const [currStep, setCurrStep] = useState(1)
   return (
      <div className='w-[75%] mx-auto flex flex-col'>
         <div className='w-full flex flex-col'>
            <div className='flex flex-col'>
               <span className='text-black text-opacity-70 text-lg'>Step {currStep}</span>
               <span className='font-bold text-4xl'>Add advertisement</span>
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
                     <div className='flex justify-center'><CiCalendar size={48} /></div>
                     <div className='text-center text-2xl mt-3'>Rent</div>
                  </label>
               </div>
            </div>

            <div className='font-bold text-2xl mt-16'>Select your property type</div>
            <div className='flex mt-6'>

               <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input type="radio" id="house" name="property-type" value="true" class="hidden peer" />
                  <label for="house" class="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                     <div className='flex justify-center'><IoHomeOutline size={48} /></div>
                     <div className='text-center text-2xl mt-3'>House</div>
                  </label>
               </div>
               <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input type="radio" id="apartment" name="property-type" value="false" class="hidden peer" />
                  <label for="apartment" class="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                     <div className='flex justify-center'><MdOutlineMapsHomeWork size={48} /></div>
                     <div className='text-center text-2xl mt-3'>Apartment</div>
                  </label>
               </div>
            </div>

         </div>
         <NavAddPage currStep={currStep} setCurrStep={setCurrStep} />
      </div>
   )
}
