
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import avatar from '../assets/avatar.jpg';
import { FaCamera } from "react-icons/fa6";
import { FiCameraOff } from "react-icons/fi";
import { AuthContext } from '../context/authContext';
import ModalChangePassword from './ModalChangePassword';
import RatingReview from './RatingReview';

import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";



export default function ForeignUserRating() {
  const { register, watch, handleSubmit } = useForm({});
  const [data, setData] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const [rating, setRating] = useState(0)


  return (
    <div className="mt-28 h-80 w-full">
      <div className="mt-11 flex h-80 justify-center rounded-md mx-auto">
        <div className='h-60 w-60 relative'>
          <div className='absolute z-0 h-full rounded-2xl w-full bg-gray-400 flex items-center'><div className='mx-auto'><FiCameraOff /></div></div>
          <img className="rounded-2xl w-full" src={avatar} alt='avatar'/>
        </div>
        <div>
          <div className='flex ml-14 h-[75%]'>
            <div className='mt-7'>
                <div className="w-[75%]">
                    <label className='text-xl font-semibold text-black text-opacity-70'>Username:</label>
                    <input className='w-full py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' value={currentUser && currentUser.username ? currentUser.username : ''} type='text' disabled />
                </div>
                <div className="w-[75%]">
                    <label className='text-xl font-semibold text-black text-opacity-70'>Phone number:</label>
                    <input className='w-full py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' value={currentUser && currentUser.phoneNumber ? currentUser.phoneNumber : ''}phoneNumber type="tel" disabled/>
                </div>
            </div>

            <div className='mt-7'>
                <div className="">
                    <label className='text-xl font-semibold block text-center text-black text-opacity-70 '>Number of reviews:</label>
                    <div className='text-xl w-[100%] mx-auto font-medium text-center text-black text-opacity-70 mt-1'>12</div>
                </div>
                <div className="mt-9">
                    <label className='text-xl font-semibold mt-4 block text-center text-black text-opacity-70'>Average rating:</label>
                    <div className='text-xl flex justify-center opacity-70 mt-1'><RatingReview rating={rating} setRating={setRating}/></div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}