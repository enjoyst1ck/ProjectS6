import React, { useContext, useEffect, useState } from 'react'
import UserAdvertisementCard from './GridCard';
import { AuthContext } from '../context/authContext';
// import UserLikedAdvertisementCard from './UserLikedAdvertisementCard';

export default function ListUserAdvertisng({currSite}) {
   const [data, setData] = useState([]);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);
   const { currentUser } = useContext(AuthContext);
   const url = currSite === 'all-added' && currentUser
  ? `http://localhost:7004/Advertisement/getByUser/${currentUser.userId}`
  : "http://localhost:7004/Advertisement/getAllFavoriteAdvertisements";

   useEffect(() => {
      fetch(url)
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

   return (
      <div className='mt-10 w-full p-5'>
         <div className=''>
            {currSite === 'all-added' && <span className='text-2xl'>All added advertisement {data.length}:</span>}
            {currSite === 'all-liked' && <span className='text-2xl'>All liked advertisement {data.length}:</span>}
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