import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import TopMenu from './TopMenu';
import { useForm } from 'react-hook-form';


export default function MenuHomePage({ setQueryUrl, setSearchText }) {
  const { register, handleSubmit } = useForm();
  const [moreFilters, setMoreFilters] = useState(false);

  const handleMoreFiltres = () => {
    setMoreFilters(prev => !prev)
  }

  const onSubmit = (data) => {
    const { AddressSearch, CitySearch, DevelopmentTypeSearch, Floor, 
          FloorQuantity, IsForSell, MaxArea, MaxPrice, MinArea, MinPrice, 
          TitleSearch } = data;
               
    setQueryUrl(prev => '');
    const newQuery = [];

    if(AddressSearch.length > 0) {
      newQuery.push(`AddressSearch=${AddressSearch}`);
    }
    
    if(CitySearch.length > 0) {
      newQuery.push(`CitySearch=${CitySearch}`);
      setSearchText(prev => ({...prev, city:`${CitySearch}`}));
    }

    if(Floor.length > 0) {
      newQuery.push(`Floor=${Floor}`);
    }

    if(FloorQuantity.length > 0) {
      newQuery.push(`FloorQuantity=${FloorQuantity}`);
    }

    if(DevelopmentTypeSearch !== 'Building type') {
      if (DevelopmentTypeSearch === 'House') {
        newQuery.push(`DevelopmentTypeSearch=House`);
        setSearchText(prev => ({...prev, developmentType:`House`}));
      } else {
        newQuery.push(`DevelopmentTypeSearch=Apartment`);
        setSearchText(prev => ({...prev, developmentType:`Apartment`}));
      }
    }

    if(IsForSell !== 'Type') {
      if (IsForSell === 'true') {
        newQuery.push(`IsForSell=true`);
        setSearchText(prev => ({...prev, isForSell: true}));
      } else {
        newQuery.push(`IsForSell=false`);
        setSearchText(prev => ({...prev, isForSell: false}));
      }
    }

    if ((MinArea.length > 0) && (MaxArea.length > 0)) {
      newQuery.push(`MinArea=${MinArea}&MaxArea=${MaxArea}`);
    } else {
      if(MinArea.length > 0) {
        newQuery.push(`MinArea=${MinArea}`);
      }
      if(MaxArea.length > 0) {
        newQuery.push(`MaxArea=${MaxArea}`);
      }
    }

    
    if ((MaxPrice.length > 0) && (MinPrice.length > 0)) {
      newQuery.push(`MinPrice=${MinPrice}&MaxPrice=${MaxPrice}`);
    } else {
      if(MaxPrice.length > 0) {
        newQuery.push(`MinPrice=${MinPrice}`);
      }
      if(MinPrice.length > 0) {
        newQuery.push(`MaxPrice=${MaxPrice}`);
      }
    }

    if(TitleSearch.length > 0) {
      newQuery.push(`TitleSearch=${TitleSearch}`);
    }

    for(let i = 0; i < data.roomQuantity.length; i++) {
      newQuery.push(`RoomQuantity=${data.roomQuantity[i]}`);
    }

    const queryStr = newQuery.join('&');
    
    setQueryUrl(queryStr);
  }

  const handleRefreshPage = () => {
    location.reload();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-white drop-shadow-xl relative'>
          <TopMenu />
          <div className='grid grid-cols-5 mt-5 p-3 w-full gap-10'>
            <select {...register("IsForSell")} className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">
              <option className="text-lg" disabled selected hidden>Type</option>
              <option value={true} className="text-lg">Buy</option>
              <option value={false} className="text-lg">Rent</option>
            </select>
            <div className="flex gap-2">
              <label className='absolute top-14 text-sm'>Price range</label>
              <input {...register("MinPrice")} className="w-[50%] px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='From' type='number'></input>
              <input {...register("MaxPrice")} className="w-[50%] px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='To' type='number'></input>
            </div>
            <select {...register("DevelopmentTypeSearch")} className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start">
              <option className="text-lg" disabled selected hidden>Building type</option>
              <option className="text-lg" value={'House'}>House</option>
              <option className="text-lg" value={'Apartament'}>Apartament</option>
            </select>
            <div className="flex gap-2">
              <label className='absolute top-14 text-sm'>Square footage</label>
              <input {...register("MinArea")} className="w-[50%] px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='From' type='number'></input>
              <input {...register("MaxArea")} className="w-[50%] px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='To' type='number'></input>
            </div>
            <button className='px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-center' onClick={handleMoreFiltres}>More filters</button>
          </div>



          <div className='flex justify-between px-3 pb-3'>
            <div className='w-[25%]'>
              <input {...register("CitySearch")} className="px-4 py-1 rounded-xl text-lg bg-slate-800 text-white outline-none text-start w-full" placeholder='Enter city' type='text' />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <button className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start flex items-center" onClick={handleRefreshPage}>
                <GrPowerReset className='mr-3' /><span>Clear filters</span>
              </button>
              <input type='submit' className="px-4 py-1 rounded-xl text-xl bg-slate-800 text-white outline-none text-start flex items-center cursor-pointer" value='Search' />
            </div>
          </div>

          <div className={moreFilters === true ? "px-3 pb-3 grid grid-cols-5 gap-10" : "hidden"}>
            <div className='flex flex-col'>
              <label>Floor quantity</label>
              <input {...register("FloorQuantity")} type="number" className="px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" />
            </div>
            <div className='flex flex-col'>
              <label>Floor</label>
              <input {...register("Floor")} type="number" className="px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" />
            </div>
            <div className='flex flex-col'>
              <label>Room quantity</label>
              <div className='grid grid-cols-6'>
                {[1, 2, 3, 4, 5, 6].map(value => (
                  <div key={value} className='mr-2 size-10 items-center flex justify-center'>
                    <input
                      type="checkbox"
                      {...register(`roomQuantity`)}
                      id={`roomQuantity-${value}`}
                      name="roomQuantity"
                      value={value}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={`roomQuantity-${value}`}
                      className="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-xl"
                    >
                      <div className='text-center text-xl'>{value}</div>
                    </label>
                  </div>
                ))}
              </div>

            </div>
            <div className='flex flex-col justify-end'>
              <input {...register("TitleSearch")} type="text" className="px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='Enter title advertisement' />
            </div>

            <div className='flex flex-col justify-end'>
              <input {...register("AddressSearch")} type="text" className="px-4 py-1 rounded-lg text-lg bg-slate-800 text-white outline-none text-start" placeholder='Enter adress' />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}