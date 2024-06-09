import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Avatar } from '@material-tailwind/react';

import { FaCamera } from "react-icons/fa6";
import { FiCameraOff } from "react-icons/fi";



export default function UserSettings() {
    const { register, watch, handleSubmit } = useForm({});
    const [data, setData] = useState("");
    return (
        <div className="mx-10 mt-16 h-80">
             <div className="bg-white mt-11 flex h-80 rounded-md">
                <div className='h-60 w-60 relative'>
                    <div className='absolute h-full rounded-2xl w-full bg-gray-400 flex items-center'><div className='mx-auto'><FiCameraOff /></div></div>
                    <Avatar className="rounded-2xl w-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='avatar'/>
                    <button className='absolute top-2 right-2 bg-red-600 hover:bg-red-700 h-10 w-10 rounded-full text-white flex items-center'><div className='mx-auto'><FaCamera /></div></button>
                </div>
                 <form className='' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className='grid grid-cols-2 gap-8 ml-5 mt-2'>
                        <div className="">
                            <label className='text-xl font-semibold text-black text-opacity-70'>Username:</label>
                            <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' type='text' {...register("username" , {required: false})} />
                        </div>
                        <div className="">
                            <label className='text-xl font-semibold text-black text-opacity-70'>E-mail:</label>
                            <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' type="email" {...register("email", {required: false})} />
                        </div>
                        <div className="">
                            <label className='text-xl font-semibold text-black text-opacity-70'>Phone number:</label>
                            <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' type="tel" {...register("phoneNumber", {required: false})} />
                        </div>
                        <div className="">
                            <label className='text-xl font-semibold text-black text-opacity-70'>New passsword:</label>
                            <input name='password' className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6'
                            type='password' {...register("password", { required: false, minLength: {value: 8, message: "Password must have at least 8 characters"} })} />
                        </div>
                    </div>
                    <div className="bg-white flex items-center h-16 mt-10">
                         <input type="submit" value='Save changes' className='mx-auto bg-red-600 p-2 text-white text-l font-bold rounded-xl hover:bg-red-700 transition-all cursor-pointer w-[30vh] h-[75%]'/>
                    </div>
                 </form>
             </div>
             {/* delete later */}
             <div className='w-[100%] h-[100%]'>{data}</div>
        </div>
        
    )
}