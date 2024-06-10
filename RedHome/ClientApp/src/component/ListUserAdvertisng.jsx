import React, { useEffect, useState } from 'react'
import UserAdvertisementCard from './UserAdvertisementCard';
import UserLikedAdvertisementCard from './UserLikedAdvertisementCard';

export default function ListUserAdvertisng() {
   const [data, setData] = useState([]);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      fetch(`http://localhost:7004/Advertisement/getByUser/27300fc5-7240-4613-8966-2505d2747b6`)
         .then((res) => {
            if (!res.ok) throw Error("Could not fetch");
            return res.json();
         })
         .then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
         })
         .catch((err) => {
            setIsPending(false);
            setError(err);
         });
   }, []);

   console.log(data)

   return (
      <div className='mt-10 w-full p-5'>
         <div className=''>
            <span className='text-2xl'>All advertisement {data.length}:</span>
         </div>
         <div className={data.length === 0 ? "flex justify-center" : 'min-h-36 grid grid-cols-3 gap-5 mt-10'}>
            {data.length === 0 && <span className='w-full mt-20 text-xl font-semibold flex justify-center'>You don't have any advertisement yet</span>}

            {data.map((item, index) => (
               <UserAdvertisementCard item={item} key={index}/>
            ))}
         </div>
      </div>
   )
}
