import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  const onSubmit = async (formData) => {
    try {
      await login(formData);
      navigate('/');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className='w-[100%] xl:w-[40%] lg:w-[50%] sm:w-[100%] z-10 h-screen flex justify-center items-center'>
      <div className='w-[95%] xl:w-[65%] lg:w-[65%] sm:w-[65%] xl:p-0 lg:p-0 sm:p-5 p-5 bg-white rounded-2xl'>
        <h1 className='text-4xl font-bold'>Log <span className='text-red-600'>in</span></h1>
        <p className='text-xl font-semibold mt-8 text-black text-opacity-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus non magna in imperdiet.</p>

        <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>
          <label className='text-xl font-semibold text-black text-opacity-50'>E-mail:</label>
          <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6'
            type="email" {...register("email", { required: "E-mail is required" })} />

          <label className='text-xl font-semibold text-black text-opacity-50'>Password:</label>
          <input className='w-full border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all'
            type='password' {...register("password", { required: "Password is required" })} />

          {/* <a href='#' className='text-sm font-semibold text-black text-opacity-50'>Forgot password? <span className='text-red-600 font-semibold text-opacity-75 underline'>Get them back</span></a> */}
          {error && <p className='text-red-600 text-sm mt-4'>Incorrect e-mail and/or password</p>}

          <input type="submit" value='Log in' className='mt-12 w-full bg-red-600 p-2 text-white text-xl font-bold rounded-xl hover:bg-red-700 transition-all cursor-pointer' />
          <Link to='/register' className='text-sm font-semibold text-black text-opacity-50'>You dont have an account yet? <span className='text-red-600 font-semibold text-opacity-75 underline'>Create account</span></Link>
        </form>
      </div>
    </div>
  );
}