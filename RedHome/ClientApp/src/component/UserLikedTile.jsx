import React, { useContext, useState } from 'react'
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6"
import imagePlaceholder from "./../assets/imageplaceholder.png"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext'

export default function UserLikedTile({ item }) {
  const { currentUser } = useContext(AuthContext);
  const [currStatus, setCurrStatus] = useState(item.isLiked);

  const handleToLiked = () => {
    try {
      if(currentUser) {
        const res = axios.post(`http://localhost:7004/Advertisement/addToFavorite?advertisementId=${item.id}`, {}, {
          headers: {
            'Authorization': `Bearer ${currentUser.token}`
          }
        });
        setCurrStatus(prevData => !prevData);
      } else {
        alert('To add to favorites, log in first')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-full h-[441px] rounded-2xl relative'>
      <div onClick={handleToLiked} className='absolute top-3 right-3 rounded-full bg-red-700 p-2 hover:scale-110 transition-all cursor-pointer'>
        {currStatus === true ? (<FaHeart color='white' size={22} />) : (<FaRegHeart color='white' size={22} />)}
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