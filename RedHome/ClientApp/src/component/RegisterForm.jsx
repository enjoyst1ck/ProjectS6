import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';

export default function RegisterForm() {
  const { register, watch, handleSubmit } = useForm({});
  const [data, setData] = useState("");
  const password = useRef({});
  password.current = watch("password", "");
  

  console.log(window.innerWidth);
  return (
    <div className='w-[100%] xl:w-[40%] lg:w-[50%] sm:w-[100%] z-10 h-screen flex justify-center items-center'>
      <div className='w-[95%] xl:w-[65%] lg:w-[65%] sm:w-[65%] xl:p-0 lg:p-0 sm:p-5 p-5 bg-white rounded-2xl'>
        <h1 className='text-4xl font-bold'>Sign <span className='text-red-600'>up</span></h1>
        <p className='text-xl font-semibold mt-8 text-black text-opacity-50'>Discover your dreams and make them come true with <span className='text-red-600'>Red</span><span className='text-black'>Home</span></p>

        <form className='mt-10' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

          <label className='text-xl font-semibold text-black text-opacity-50'>Username:</label>
          <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6'
            type='text' {...register("username", { required: true })} />

          <label className='text-xl font-semibold text-black text-opacity-50'>E-mail:</label>
          <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6'
            type="email" {...register("email", { required: true })} />

          <label className='text-xl font-semibold text-black text-opacity-50'>Phone number:</label>
          <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6'
            type="tel" {...register("phoneNumber", { required: true })} />

          {/* Password match check */}
          <label className='text-xl font-semibold text-black text-opacity-50 '>Password:</label>
          <input name='password' className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6'
            type='password' {...register("password", { required: true, minLength: {value: 8, message: "Password must have at least 8 characters"} })} />
             
          <label className='text-xl font-semibold text-black text-opacity-50 '>Repeat password:</label>
          <input name='passwordrepeat' className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all'
            type='password' {...register("repeatedPassword", { required: true , validate: value => value === password.current || "The passwords do not match"})} />
          {/* Password match check */}

          <input type="submit" value='Sign up' className='mt-12 w-full bg-red-600 p-2 text-white text-xl font-bold rounded-xl hover:bg-red-700 transition-all cursor-pointer'/>
          <a href='#' className='text-sm font-semibold text-black text-opacity-50'>You already have an account? <span className='text-red-600 font-semibold text-opacity-75 underline'>Sign in</span></a>
        </form>
        {data}
      </div>
    </div>
  )
}