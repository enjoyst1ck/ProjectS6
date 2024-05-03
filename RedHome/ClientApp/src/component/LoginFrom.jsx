import React from 'react'

export default function LoginFrom() {
  return (
    <div className='w-[40%] h-screen flex justify-center items-center'>
      <div className='w-[65%]'>
        <h1 className='text-4xl font-bold'>Log <span className='text-red-600'>in</span></h1>
        <p className='text-xl font-semibold mt-8 text-black text-opacity-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus non magna in imperdiet. </p>

        <form className='mt-10'>
          <label className='text-xl font-semibold text-black text-opacity-50'>Username:</label>
          <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6'/>

          <label className='text-xl font-semibold text-black text-opacity-50 '>Password:</label>
          <input type='password' className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all'/>
          <a href='#' className='text-sm font-semibold text-black text-opacity-50'>Forgot password? <span className='text-red-600 font-semibold text-opacity-75 underline'>Get them back</span></a>
        </form>

        <button className='mt-12 w-full bg-red-600 p-2 text-white text-xl font-bold rounded-xl hover:bg-red-700 transition-all'>Log in</button>
      </div>
    </div>
  )
}
