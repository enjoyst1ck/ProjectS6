import React, { useContext, useEffect, useState } from 'react'
import DeveloperInfoAdvertising from '../component/DeveloperInfoAdvertising'
import ContentAdvertising from '../component/ContentAdvertising'
import InfoAdvertising from '../component/InfoAdvertising'
import SliderAdvertising from '../component/SliderAdvertising'
import { Link, useParams } from 'react-router-dom'
import TopBar from '../component/TopBar'
import TopMenu from '../component/TopMenu'
import { AuthContext } from '../context/authContext'

export default function AdvertisingPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:7004/Advertisement/${id}`, {
      headers: {
        'Authorization': `Bearer ${currentUser && currentUser.token}`
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLiked(data.isLiked);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [id]);


  return (
    <div>
      <div className='bg-white drop-shadow-xl pb-4'>
        <TopMenu />
      </div>
      <div className='w-[75%] mx-auto p-2 m-10'>
        {data && <div className='w-full'>
          <SliderAdvertising images={data.attachments} isLiked={isLiked} setIsLiked={setIsLiked} id={data.id} />

          <InfoAdvertising area={data.area} rooms={data.roomQuantity} floor={data.floor} developmentType={data.developmentType} floorQuantity={data.floorQuantity} />

          <div className='flex cursor-default mb-10'>
            <ContentAdvertising title={data.title} description={data.description} price={data.price} isForSell={data.isForSell} city={data.city} address={data.address} />
            <DeveloperInfoAdvertising />
          </div>
        </div>}

        {error && <div className='w-full h-[90vh]'>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='w-[75%]'>
              <h1 className='text-9xl font-semibold'>Oops, I think we have a problem</h1>
            </div>
            <div className='w-[25%] flex flex-col justify-center items-center'>
              <p className='text-4xl'>The advertised ad apparently doesn't exist</p>
              <Link to='/search' className='text-3xl mt-10 border-4 px-9 py-3 border-red-600 rounded-3xl text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all'>Back to search</Link>
            </div>


          </div>
        </div>}
      </div>
    </div>
  )
}
