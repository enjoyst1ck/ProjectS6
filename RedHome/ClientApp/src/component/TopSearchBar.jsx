import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import TopMenu from './TopMenu';


export default function MenuHomePage({setIsOpen}) {
  const handleOpenModule = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div>
      <div className='bg-white drop-shadow-xl relative'>
        <TopMenu />
        <div className='grid grid-cols-5 mt-5 p-3 w-full gap-10'>
          <select className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">

            <option className="text-lg" disabled selected hidden>Buy</option>
            <option className="text-lg">Buy</option>
            <option className="text-lg">Rent</option>
          </select>
          <div className="flex gap-2">
            <label className='absolute top-14 text-sm'>Price range</label>
            <input className="w-[50%] px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='From' type='text'></input>
            <input className="w-[50%] px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='To' type='text'></input>
          </div>
          <select className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">
            <option className="text-lg" disabled selected hidden>Building type</option>
            <option className="text-lg">House</option>
            <option className="text-lg">Apartament</option>
          </select>
          <div className="flex gap-2">
            <label className='absolute top-14 text-sm'>Square footage</label>
            <input className="w-[50%] px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='From' type='text'></input>
            <input className="w-[50%] px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='To' type='text'></input>
          </div>
          <button className='px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-center' onClick={handleOpenModule}>More filters</button>
        </div>



        <div className='flex justify-between px-3 pb-3'>
          <div className='w-[25%]'>
            <input className="px-4 py-1 rounded-xl text-lg bg-slate-800 text-white outline-none text-start w-full" placeholder='Enter locations' type='text' />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <button className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start flex items-center">
              <GrPowerReset className='mr-3' /><span>Clear filters</span>
            </button>
            <button className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start flex items-center ">
              <IoIosSearch className='mr-3' /><span>Search</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}