import React, { useContext } from 'react'
import SearchBarHome from '../component/SearchBarHome'
import PopularSearch from '../component/PopularSearch'
import TopMenu from '../component/TopMenu'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

export default function HeroPage() {
  const {currentUser} = useContext(AuthContext);

  return (
    <>
      <TopMenu />

      <div className="w-[100%] h-[95vh] p-3">
        <div className="h-full w-full object-contain rounded-3xl home-bg">
          <div className='bg-black w-full h-full rounded-3xl bg-opacity-40 flex justify-center items-center'>
            <div className='w-full'>
              <div className='flex flex-col text-white text-center p-3 w-full cursor-default'>
                <h1 className='text-5xl font-bold'>Journey to your perfect home</h1>
                <p className='mt-8 text-3xl m-auto xl:w-[55%] md:w-[75%]'>Easily discover and compare the latest real estate listings to find your dream apartment or house, perfectly tailored to your needs and lifestyle.</p>
              </div>

              <div className='mt-8 text-3xl m-auto xl:w-[55%] md:w-[75%] flex text-white justify-center'>
                {currentUser === null && <Link to='/register' className=' text-center py-1 px-10 text-2xl rounded-xl border-2 border-white mr-5 hover:bg-white hover:text-black transition-all'>Join us today</Link>}
                <Link to='/search' className=' text-center py-1 px-10 text-2xl rounded-xl border-2 border-white hover:bg-white hover:text-black transition-all'>Explore</Link>
              </div>
              {/* <SearchBarHome />
              <PopularSearch /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
