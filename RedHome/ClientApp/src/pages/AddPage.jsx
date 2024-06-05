import React, { useState } from 'react';
import { MdOutlineSell } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import NavAddPage from '../component/NavAddPage';

export default function AddPage() {
   const [currStep, setCurrStep] = useState(1)
   return (
      <div className='w-[75%] my-28 mx-auto flex flex-col'>
         <div className='w-full flex flex-col'>
            <div className='flex flex-col'>
               <span className='text-black text-opacity-70 text-lg'>Step {currStep}</span>
               <span className='font-bold text-4xl'>Add advertisement</span>
            </div>
            <div className='flex mt-8'>
               <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input type="radio" id="isSell-true" name="isForSell" value="true" class="hidden peer" />
                  <label for="isSell-true" class="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                     <div className='flex justify-center'><MdOutlineSell size={48} /></div>
                     <div className='text-center text-2xl mt-3'>Sell</div>
                  </label>
               </div>
               <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input type="radio" id="isSell-false" name="isForSell" value="false" class="hidden peer" />
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

         <div className='flex flex-col'>
            <div className='font-bold text-2xl mt-16'>Basic information</div>
            <label className='mt-5 text-lg font-semibold'>Advertisement title:</label>
            <input type="text" className='mt-2 w-[50%] p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' />

            <div className='grid grid-cols-3 mt-10 gap-5'>
               <div className='flex justify-center flex-col w-[80%]'>
                  <label className='text-lg font-semibold'>Price</label>
                  <div className='w-full'>
                     <input type='text' className='mt-2 w-[75%] p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all'/>
                  </div>
               </div>
               <div className='flex justify-center flex-col w-[80%]'>
                  <label className='text-lg font-semibold'>Square m2</label>
                  <div className='w-full'>
                     <input type='text' className='mt-2 w-[75%] p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all'/>
                  </div>
               </div>
               <div className='flex justify-center flex-col w-[80%]'>
                  <label className='text-lg font-semibold'>Price</label>
                  <div className='w-full'>
                     <input type='text' className='mt-2 w-[75%] p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all'/>
                  </div>
               </div>

               <div className='flex justify-center flex-col w-[80%]'>
                  <label className='text-lg font-semibold'>Rooms quantity</label>
                  <div className='w-full'>
                     <select className='mt-2 w-[75%] p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all'>

                     </select>
                  </div>
               </div>
               <div className='flex justify-center flex-col w-[80%]'>
                  <label className='text-lg font-semibold'>Square m2</label>
                  <div className='w-full'>
                     <input type='text' className='mt-2 w-[75%] p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all'/>
                  </div>
               </div>
               <div className='flex justify-center flex-col w-[80%]'>
                  <label className='text-lg font-semibold'>Price</label>
                  <div className='w-full'>
                     <input type='text' className='mt-2 w-[75%] p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all'/>
                  </div>
               </div>
            </div>
         </div>

         <div className='flex flex-col'>
            <div className='font-bold text-2xl mt-16'>Detail information</div>
            <label className='mt-5 text-lg'>Advertisement description:</label>
            <textarea className='mt-2 w-[50%] min-h-96 p-2 border-red-600 border-2 py-1 px-2 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' />
         </div>


         {/* <NavAddPage currStep={currStep} setCurrStep={setCurrStep} /> */}
      </div>
   )
}
