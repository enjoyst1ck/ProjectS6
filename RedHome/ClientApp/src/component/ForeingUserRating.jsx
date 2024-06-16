import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import avatar from '../assets/avatar.jpg';
import { FaCamera } from "react-icons/fa6";
import { FiCameraOff } from "react-icons/fi";
import { AuthContext } from '../context/authContext';
import ModalChangePassword from './ModalChangePassword';
import RatingReview from './RatingReview';




export default function ForeignUserRating() {
  const { register, watch, handleSubmit } = useForm({});
  const [data, setData] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const [reviewsQuantity] = useState(142);
  const [rating, setRating] = useState(0); {/* uzywane do wystawiania ocen */}
  const [avgRating] = useState(3); {/* Average rating usera - wyliczyc na podstawie ilosci ocen i wysokosci ocen - zaokraglac (nie ma polowek)*/}


  return (
    <div className="mt-28 h-80 w-full">
      <div className="mt-11 flex h-80 justify-center rounded-md mx-auto">
        <div className='h-60 w-60 relative'>
          <img className="absolute z-0 h-full rounded-2xl w-full bg-gray-400 flex items-center" src={avatar != null ? avatar : <div className='mx-auto'><FiCameraOff /></div>} alt='avatar'/>
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
                    <div className='text-xl w-[100%] mx-auto font-medium text-center text-black text-opacity-70 mt-1'>{reviewsQuantity}</div>
                </div>
                <div className="mt-9">
                    <label className='text-xl font-semibold mt-4 block text-center text-black text-opacity-70'>Average rating:</label>
                    <div className='text-xl flex justify-center opacity-70 mt-1'><RatingReview rating={avgRating}/></div>
                </div>
            </div>
            <label>Info o wybranej ilosci gwiazdek: </label>{rating}
            {/*<RatingReview rating={rating} setRating={setRating}/> */}
          </div>
        </div>
      </div>
      <div className='w-[75%] mx-auto'>
        <div className="bg-black h-1 w-full rounded-3xl opacity-50"></div>
      </div>

      <div className='w-[75%] h-full mx-auto bg-amber-100'>

      </div>
    </div>

  )
}