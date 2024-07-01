import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import avatar from '../assets/avatar.jpg';

import { FaCamera } from "react-icons/fa6";
import { FiCameraOff } from "react-icons/fi";
import { AuthContext } from '../context/authContext';
import ModalChangePassword from './ModalChangePassword';



export default function UserSettings() {
  const { register, watch, handleSubmit } = useForm({});
  const [data, setData] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleOpenModal = () => {
    setOpenModal(prevData => !prevData);
  }

  return (
    <div className="mt-28 h-80 w-full">
      <ModalChangePassword openModal={openModal} setOpenModal={setOpenModal} userData={currentUser} />
      <div className="mt-11 flex h-80 justify-center rounded-md mx-auto">
        <div className='h-60 w-60 relative'>
          <div className='absolute z-0 h-full rounded-2xl w-full bg-gray-400 flex items-center'><div className='mx-auto'><FiCameraOff /></div></div>
          <img className="rounded-2xl w-full" src={avatar} alt='avatar' />
          <button className='absolute top-2 right-2 bg-red-600 hover:bg-red-700 h-10 w-10 rounded-full text-white flex items-center'><div className='mx-auto'><FaCamera /></div></button>
        </div>
        <div>
          <div className='grid grid-cols-2 gap-8 ml-5 mt-2'>
            <div className="">
              <label className='text-xl font-semibold text-black text-opacity-70'>Username:</label>
              <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' value={currentUser && currentUser.username ? currentUser.username : ''} type='text' disabled />
            </div>
            <div className="">
              <label className='text-xl font-semibold text-black text-opacity-70'>E-mail:</label>
              <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' value={currentUser && currentUser.email ? currentUser.email : ''} type="email" disabled />
            </div>
            <div className="">
              <label className='text-xl font-semibold text-black text-opacity-70'>Phone number:</label>
              <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' value={currentUser && currentUser.phoneNumber ? currentUser.phoneNumber : ''}phoneNumber type="tel" disabled/>
            </div>
            <div className="">
              <label className='text-xl font-semibold text-black text-opacity-70'>Passsword:</label>
              <input name='password' className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6'
                type='password' value={'password'} disabled />
            </div>
          </div>
          <div className="bg-white flex items-center h-16 mt-10">
            <button className='mx-auto bg-red-600 p-2 text-white text-l font-bold rounded-xl hover:bg-red-700 transition-all cursor-pointer w-[30vh] h-[75%]' onClick={handleOpenModal}>Change password</button>
          </div>
        </div>
      </div>
    </div>

  )
}