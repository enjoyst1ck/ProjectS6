import React, { useEffect, useState } from 'react'
import DeveloperInfoAdvertising from '../component/DeveloperInfoAdvertising'
import ContentAdvertising from '../component/ContentAdvertising'
import InfoAdvertising from '../component/InfoAdvertising'
import SliderAdvertising from '../component/SliderAdvertising'

export default function AdvertisingPage() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("http://localhost:5242/Advertisement")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setData(data[1]);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      });

  }, []);

  console.table(data)

  return (
    <div className='w-[75%] mx-auto p-2'>
      <div className='w-full'>
        <SliderAdvertising />

        <InfoAdvertising />

        <div className='flex cursor-default mb-10'>
          <ContentAdvertising />
          <DeveloperInfoAdvertising />
        </div>
      </div>
    </div>
  )
}
