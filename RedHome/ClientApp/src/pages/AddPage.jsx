import React, { useState } from 'react';
import { MdOutlineSell } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { useForm } from 'react-hook-form';

export default function AddPage() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const [data, setData] = useState("");
   const onSubmit = data => console.log(data);
   console.log(errors);

   return (
      <div className='w-[75%] my-28 mx-auto flex flex-col'>
         <div className='w-full flex flex-col'>
            <div className='flex flex-col'>
               <span className='font-bold text-4xl'>Add advertisement</span>
            </div>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
               <div className='flex flex-row justify-between mt-10'>
                  <div className='flex flex-col'>
                     <div className='text-2xl font-semibold mb-5'>
                        Select type
                     </div>
                     <div className='flex'>
                        <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                           <input {...register("isForSell", { required: true })} type="radio" id="isSell-true" name="isForSell" value="true" class="hidden peer" />
                           <label for="isSell-true" class="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                              <div className='flex justify-center'><MdOutlineSell size={48} /></div>
                              <div className='text-center text-2xl mt-3'>Sell</div>
                           </label>
                        </div>
                        <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                           <input {...register("isForSell", { required: true })} type="radio" id="isSell-false" name="isForSell" value="false" class="hidden peer" />
                           <label for="isSell-false" class="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                              <div className='flex justify-center'><CiCalendar size={48} /></div>
                              <div className='text-center text-2xl mt-3'>Rent</div>
                           </label>
                        </div>
                     </div>
                  </div>

                  <div className='flex flex-col'>
                     <div className='text-2xl font-semibold mb-5'>
                        Select your property type
                     </div>
                     <div className='flex'>
                        <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                           <input {...register("developmentType", { required: true })} type="radio" id="house" name="developmentType" value="House" class="hidden peer" />
                           <label for="house" class="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                              <div className='flex justify-center'><IoHomeOutline size={48} /></div>
                              <div className='text-center text-2xl mt-3'>House</div>
                           </label>
                        </div>
                        <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                           <input {...register("developmentType", { required: true })} type="radio" id="apartment" name="developmentType" value="Apartment" class="hidden peer" />
                           <label for="apartment" class="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                              <div className='flex justify-center'><MdOutlineMapsHomeWork size={48} /></div>
                              <div className='text-center text-2xl mt-3'>Apartment</div>
                           </label>
                        </div>
                     </div>
                  </div>
               </div>



               <div className='w-full mt-10'>
                  <div className='text-2xl font-semibold mb-5'>
                     Basic information
                  </div>
                  <div className='w-full grid grid-cols-9'>
                     <div className='col-span-5 w-full flex flex-col border-r-2 border-[#c5c5c5]'>
                        <label className='text-xl font-semibold'>Title</label>
                        <input className='mt-2 w-[90%] p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' type="text" {...register("title", { required: true, min: 2, maxLength: 50 })} />

                        <label className='text-xl font-semibold mt-5'>Description</label>
                        <textarea className='mt-2 w-[90%] p-2 border-red-600 border-2 py-1 px-2 min-h-[25vh] rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' type="text" {...register("description", { required: true, min: 10 })} />
                     </div>

                     <div className='col-span-4 w-full pl-5'>
                        <div className='w-full grid grid-cols-2 gap-4'>
                           <div className='w-full flex flex-col'>
                              <label className='text-xl font-semibold'>Price</label>
                              <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("price", { required: true })} />
                           </div>
                           <div className='w-full flex flex-col'>
                              <label className='text-xl font-semibold'>Area</label>
                              <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("area", { required: true, min: 16 })} />
                           </div>
                        </div>

                        <div className='w-full grid grid-cols-3 gap-4 mt-10'>
                           <div className='w-full flex flex-col'>
                              <label className='text-xl font-semibold'>Room quantity</label>
                              <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("roomQuantity", { required: true, min: 1 })} />
                           </div>
                           <div className='w-full flex flex-col'>
                              <label className='text-xl font-semibold'>Floor</label>
                              <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("floor", { required: true, min: 0 })} />
                           </div>
                           <div className='w-full flex flex-col'>
                              <label className='text-xl font-semibold'>Floor quantity</label>
                              <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("floorQuantity", { required: true, max: 100, min: 1 })} />
                           </div>
                        </div>

                        <div className='w-full grid grid-cols-2 gap-4 mt-10'>
                           <div className='w-full flex flex-col'>
                              <label className='text-xl font-semibold'>City</label>
                              <input type="text" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("city", { required: true, min: 3, maxLength: 100 })} />
                           </div>
                           <div className='w-full flex flex-col'>
                              <label className='text-xl font-semibold'>Address</label>
                              <input type="text" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("address", { required: true, min: 3 })} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>


               <div className='flex flex-col mt-10'>
                  <div className='text-2xl font-semibold mb-5'>
                     Select photos
                  </div>
                  <div className='w-full grid grid-cols-5 gap-4'>
                     <div className='w-full h-[175px] rounded-2xl border-2 border-dashed cursor-pointer border-red-600 flex items-center justify-center'>
                        <IoAdd size={64} color='#DC2626' />
                     </div>
                     <div className='w-full h-[175px] rounded-2xl border-2 border-dashed cursor-pointer border-red-600 flex items-center justify-center'>
                        <IoAdd size={64} color='#DC2626' />
                     </div>
                     <div className='w-full h-[175px] rounded-2xl border-2 border-dashed cursor-pointer border-red-600 flex items-center justify-center'>
                        <IoAdd size={64} color='#DC2626' />
                     </div>
                     <div className='w-full h-[175px] rounded-2xl border-2 border-dashed cursor-pointer border-red-600 flex items-center justify-center'>
                        <IoAdd size={64} color='#DC2626' />
                     </div>
                     <div className='w-full h-[175px] rounded-2xl border-2 border-dashed cursor-pointer border-red-600 flex items-center justify-center'>
                        <IoAdd size={64} color='#DC2626' />
                     </div>
                  </div>
               </div>



               <div className='w-full mt-10 flex flex-col justify-center items-center'>
                  <input className='border-red-600 border-2 py-1 px-10 rounded-xl text-xl font-semibold cursor-pointer hover:bg-red-600 hover:text-white transition-all' type="submit" value={"Add advertisement"} />
                  {/* <p>{data}</p> */}
               </div>


            </form>

         </div>
      </div>
   )
}
