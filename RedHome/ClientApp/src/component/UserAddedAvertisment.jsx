import React, { useContext } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6"
import imagePlaceholder from "./../assets/imageplaceholder.png"
import axios from 'axios';

export default function UserAddedAvertisment({item}) {
  const { currentUser } = useContext(AuthContext);

  const handleDelete = () => {
    const res = axios.delete(`http://localhost:7004/Advertisement?id=${item.id}`, {
      headers: {
        'Authorization': `Bearer ${currentUser.token}`
      }
    });
    location.reload();
  }

  return (
    <div className='w-full h-[441px] rounded-2xl relative'>
      <div className='absolute top-3 right-3 flex'>
        <div className='rounded-full bg-red-700 p-2 hover:scale-110 transition-all cursor-pointer'><MdEdit size={20} color='white'/></div>
        <div className='rounded-full bg-red-700 p-2 hover:scale-110 transition-all cursor-pointer ml-2' onClick={handleDelete}><MdDelete size={20} color='white'/></div>
      </div>
      <img className='w-full h-full bg-red-400 rounded-2xl object-cover' alt={item.title} src={item.attachments.length > 0 ? `data:image/jpg;base64, ${item.attachments[0].image}` : imagePlaceholder} />

      <div className='w-full absolute bottom-0 rounded-xl p-2 bg-white bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-40'>
        <Link to={`/search/advertising/${item.id}`}>
          <div className='flex items-center justify-between'>
            <div>
              <p className=''>Price</p>
              <h2 className='text-xl font-semibold'>{item.price} zł</h2>
            </div>
            <div className='bg-red-700 rounded-full p-2 rotate-[-45deg]'>
              <FaArrowRightLong color='white' size={22} />
            </div>
          </div>

          <div className='w-full mt-3 flex items-center justify-between'>
            <div className='w-[50%] flex flex-col'>
              <span>{item.address}</span>
              <span>{item.city}</span>
            </div>
            <div className='w-[50%]'>
              <div className='grid grid-cols-3 gap-1 text-center'>
                <div className='flex flex-col'>
                  <span className='font-semibold'>Rooms</span>
                  <span>{item.roomQuantity}</span>
                </div>
                <div className='flex flex-col border-l-2 border-r-2 border-black'>
                  <span className='font-semibold'>Sq. m</span>
                  <span>{item.area}</span>
                </div>
                <div className='flex flex-col'>
                  <span className='font-semibold'>Type</span>
                  <span>{item.isForSell === true ? "Sell" : "Rent"}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}