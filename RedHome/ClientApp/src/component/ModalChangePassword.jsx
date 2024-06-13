import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function ModalChangePassword({ openModal, setOpenModal, userData }) {
  const { register, handleSubmit } = useForm();
  const [info, setInfo] = useState({err: null, text: ''});

  const handleCloseModal = ()=>{
    setOpenModal(prevData => !prevData)
  }

  const changePassword = async (data) => {
    try {
      const response = await axios.put(`http://localhost:7004/Account/changePassword?currentPassword=${data.currentPassword}&newPassword=${data.newPassword}`, {
        userId: userData.userId,
        username: userData.username,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        token: userData.token
      });
      setInfo({err: false, text: 'Password changed successfully'});
    } catch (error) {
      console.error('Error updating user:', error);
      setInfo({err: true, text: 'Wrong old password'});
    }
  }

  return (
    <div className={openModal === true ? 'absolute top-0 left-0 z-10 w-full h-[100vh] bg-[#000000b9] flex justify-center items-center' : 'hidden'}>
      <div className='w-[500px] h-[360px] bg-white p-5 rounded-2xl'>
        <div className='relative'>
          <h2 className='text-2xl font-semibold border-b-2'>Change your password</h2>
          <IoCloseOutline className='absolute top-0 right-0 cursor-pointer hover:scale-105 transition-all' size={32} onClick={handleCloseModal}/>
        </div>

        <div className='w-full mt-5'>
          <form className='w-full' onSubmit={handleSubmit((data) => changePassword(data))}>
            <div className='w-full'>
              <label className='text-xl'>Old password</label>
              <input {...register("currentPassword")} className='mt-1 w-full p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' type='password' />
            </div>
            <div className='w-full mt-5'>
              <label className='text-xl'>New password</label>
              <input {...register("newPassword")} className='mt-1 w-full p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' type='password' />
            </div>

            <div className='w-full mt-10 justify-center flex flex-col'>
              <input type='submit' value={'Save changes'} className='bg-red-600 py-2 px-8 text-lg font-semibold hover:bg-red-700 transition-all text-white rounded-xl cursor-pointer '/>
              <p className={info.err === true ? 'flex justify-center mt-1 text-red-700':'flex justify-center mt-1 text-green-600'}>{info.text}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
