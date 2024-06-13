import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from '../context/authContext';

export default function TopMenu() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)

  return (
    <>
      <nav className='h-[5vh] w-full p-4 pt-7 flex items-center justify-between'>
        <div className='text-3xl font-bold'>
          <Link to='/'><span className='text-red-600'>RED</span><span>HOME</span></Link>
        </div>
        <div>
          <ul className='lg:flex md:flex hidden items-center p-1 h-full font-semibold text-lg rounded-lg'>
            <li><Link className='px-8 hover:text-red-600 transition-all' to='/search'>All advertisements</Link></li>
            <li><Link className='px-8 hover:text-red-600 transition-all' to='/user-panel/liked'>Liked advertisements</Link></li>
            <li><Link className='px-8 hover:text-red-600 transition-all' to='/add-advertisements'>Add advertisement</Link></li>
          </ul>
        </div>

        <div className='flex justify-center items-center'>
          {currentUser === null ? (
            <Link to='/login' className='text-lg font-semibold px-8 py-1 border-[3px] rounded-2xl border-red-500 hover:scale-105 transition-all'>Log<span className='text-red-600'>In</span></Link>
          ) : (<Link to='/' className='flex flex-row justify-center items-center'>
            <RxAvatar size={32} color='' />
            <span className='text-lg ml-2 font-semibold'>{currentUser.username}</span>
          </Link>)}
        </div>
      </nav>
    </>
  )
}
