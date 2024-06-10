import React, { useEffect, useState } from 'react'
import { CiGrid2H } from "react-icons/ci"
import { IoGridOutline } from "react-icons/io5";
import GridCard from './GridCard';
import ListCard from './ListCard'

export default function SearchSection() {
  const [gridView, setGridView] = useState(false);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7004/Advertisement")
      .then((res) => {
        if (!res.ok) throw Error("Could not fetch");
        return res.json();
      })
      .then((data) => {
        setData(data.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  console.log(data)

  const handleView = (e) => {
    setGridView(e);
  };

  return (
    <div className='w-[75%] mx-auto mt-24'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-semibold'>Flats for sale: Opole</h1>
          <p className='text-xl font-semibold text-black text-opacity-75'>1241 announcements</p>
        </div>
        <div className='flex'>
          <div className={gridView === false ? 'size-11 rounded-xl border-[3px] flex justify-center items-center border-red-700 bg-red-700 ml-2' : 'size-11 rounded-xl border-[3px] flex justify-center items-center border-red-700 ml-2'}
            onClick={() => handleView(false)}>
            <CiGrid2H color={gridView === true ? 'rgb(185 28 28)' : 'white'} size={22} />
          </div>
          <div className={gridView === true ? 'size-11 rounded-xl border-[3px] flex justify-center items-center border-red-700 bg-red-700 ml-2' : 'size-11 rounded-xl border-[3px] flex justify-center items-center border-red-700 ml-2'}
            onClick={() => handleView(true)}>
            <IoGridOutline color={gridView === false ? 'rgb(185 28 28)' : 'white'} size={22} />
          </div>
        </div>
      </div>

      <div className='w-full flex items-center mt-4'>
        <div className='bg-black h-1 w-full rounded-3xl opacity-50'></div>
        <span className='text-lg mr-2 p-2'>Sort:</span>
        <select className='py-1 px-2 w-36 bg-red-700 text-white rounded-lg outline-none'>
          <option>default</option>
          <option>default</option>
          <option>default</option>
        </select>
      </div>

      <div className={gridView === true ? 'flex ' : 'flex flex-col'}>
        {gridView === true ?
          (<div className='grid grid-cols-3 gap-4'>
            {data.map((item, index) => (<GridCard key={index} item={item} />))}
          </div>)
          :
          (<div className='grid grid-cols-1 gap-4'>
            {data.map((item, index) => (<ListCard item={item} key={index} />))}
          </div>)}
      </div>

    </div>
  )
}
