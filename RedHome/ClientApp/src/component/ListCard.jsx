import React from 'react'
import { FaRegHeart } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import imagePlaceholder from "./../assets/imageplaceholder.png"
import { Link } from 'react-router-dom'

export default function ListCard({ item }) {
  return (
    <div className='w-[75%] rounded-2xl flex border border-black border-opacity-25'>
      <Link className='flex relative w-full' to={`/search/advertising/${item.id}`}>
        <div className='h-[270px] w-[35%] bg-black rounded-2xl'>
          <img className='w-full h-full bg-red-400 rounded-2xl object-cover' src={item.attachments.length > 0 ? `data:image/jpg;base64, ${item.attachments[0].image}` : imagePlaceholder} alt={item.title} />
        </div>

        <div className='w-[65%] h-full relative p-3'>
          <div className='flex justify-center p-2 absolute right-2 top-2 rounded-full bg-red-700'>
            <FaRegHeart size={24} color='white' />
          </div>

          <h2 className='text-2xl font-bold'>{item.price} zł</h2>
          <p className='text-xl'>{item.address}, {item.city}</p>

          <div className='grid grid-cols-4 w-[50%] mt-1'>
            <div className=' text-lg font-semibold'>{item.roomQuantity} rooms</div>
            <div className='border-l-2 border-black text-center text-lg font-semibold'>{item.area}m&#178;</div>
            <div className='border-l-2 border-black text-center text-lg font-semibold'>{item.floor} floor</div>
            <div className='border-l-2 border-black text-center text-lg font-semibold'>{item.isForSell === true ? "Sell" : "Rent"}</div>
          </div>

          <div className='text-black text-opacity-75 mt-5'>
            {item.description}
          </div>

          <div className='absolute bottom-4 left-4'>
            <span className='text-black text-opacity-75'>Added 16.04.2024 by</span> <span className='text-red-700 font-semibold'>{item.userEmail}</span>
          </div>

          <div className='flex justify-center p-2 absolute right-2 bottom-2 rounded-full bg-red-700'>
            <FaArrowRightLong size={24} color='white' />
          </div>
        </div>
      </Link>
    </div>
  )
}
