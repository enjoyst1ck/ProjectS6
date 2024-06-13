import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import TopMenu from './TopMenu';


export default function MenuHomePage() {
  const centerLinks = [
    {
      name: "Advertisements",
      href: "#"
    },
    {
      name: "Liked",
      href: "#"
    }
  ];

  const rigthLinks = [
    {
      name: "Add advertisement",
      href: "#"
    },
  ];

  return (
    <div>
      <div className='bg-white drop-shadow-xl'>
        <TopMenu/>


        <div className='grid grid-cols-6 mt-5 p-3 w-full gap-10'>
          <select className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">
            <option className="text-lg" disabled selected hidden>Buy</option>
            <option className="text-lg">Buy</option>
            <option className="text-lg">Rent</option>
          </select>
          <select className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">
            <option className="text-lg" disabled selected hidden>Price</option>
            <option className="text-lg"></option>
            <option className="text-lg"></option>
          </select>
          <select className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">
            <option className="text-lg" disabled selected hidden>No. of rooms</option>
            <option className="text-lg"></option>
            <option className="text-lg"></option>
          </select>
          <select className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">
            <option className="text-lg" disabled selected hidden>Square footage</option>
            <option className="text-lg"></option>
            <option className="text-lg"></option>
          </select>
          <select className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">
            <option className="text-lg" disabled selected hidden>Building type</option>
            <option className="text-lg">House</option>
            <option className="text-lg">Apartament</option>
          </select>
          <select className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">
            <option className="text-lg" disabled selected hidden>More filters</option>
            <option className="text-lg"></option>
            <option className="text-lg"></option>
          </select>
        </div>



        <div className='flex justify-between px-3 pb-3'>
          <div className='w-[25%]'>
            <input className="px-4 py-1 rounded-xl text-lg bg-slate-800 text-white outline-none text-start w-full" placeholder='Enter locations' type='text' />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <button className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start flex items-center">
              <GrPowerReset className='mr-3'/><span>Clear filters</span>
            </button>
            <button className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start flex items-center ">
              <IoIosSearch className='mr-3'/><span>Search</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}