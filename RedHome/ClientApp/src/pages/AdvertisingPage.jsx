import React, { useEffect, useState } from 'react'
import DeveloperInfoAdvertising from '../component/DeveloperInfoAdvertising'
import ContentAdvertising from '../component/ContentAdvertising'
import InfoAdvertising from '../component/InfoAdvertising'
import SliderAdvertising from '../component/SliderAdvertising'
import { useParams } from 'react-router-dom'
import TopBar from '../component/TopBar'

export default function AdvertisingPage() {
  const { id } = useParams(); 
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7004/Advertisement/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
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
      <TopBar/>
      <div className='w-[75%] mx-auto p-2 m-10'>
        
        {data !== null ? (<div className='w-full'>
          <SliderAdvertising images={data.attachments}/>

          <InfoAdvertising area={data.area} rooms={data.roomQuantity} floor={data.floor} developmentType={data.developmentType} floorQuantity={data.floorQuantity} />

          <div className='flex cursor-default mb-10'>
            <ContentAdvertising title={data.title} description={data.description} price={data.price} isForSell={data.isForSell} city={data.city} address={data.address}/>
            <DeveloperInfoAdvertising />
          </div>
        </div>) : (<p>Wwhoooooooooooooooooa</p>)}
    </div>
    </div>
  )
}
