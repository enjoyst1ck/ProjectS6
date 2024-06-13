import React, { useContext, useEffect, useState } from 'react'
import GridCard from './GridCard';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import UserLikedAdvertisementCard from './UserLikedAdvertisementCard';

export default function ListUserAdvertisng({currSite}) {
   const [data, setData] = useState([]);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);
   const { currentUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const url = currSite === 'all-added' && currentUser
  ? `http://localhost:7004/Advertisement/getByUser/${currentUser.userId}`
  : "http://localhost:7004/Advertisement/getAllFavoriteAdvertisements";

  useEffect(() => {
   if(!currentUser) {
      return navigate('/login')
   }
   const fetchData = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${currentUser.token}`
          }
        });
  
        setData(prevData => {
          const newData = res.data.map(element => element.advertisement);
          const combinedData = [...prevData, ...newData];
          
          const uniqueData = combinedData.reduce((acc, current) => {
            if (!acc.some(item => item.id === current.id)) {
              acc.push(current);
            }
            return acc;
          }, []);
  
          return uniqueData;
        });
  
        setIsPending(false);
        setError(null);
      } catch (err) {
        console.log(err);
        setIsPending(false);
        setError(err.message);
      }
    };
  
    fetchData();

}, [currentUser, url]); 


   return (
      <div className='mt-10 w-full p-5'>
         <div className=''>
            {currSite === 'all-added' && <span className='text-2xl'>All added advertisement {data.length}:</span>}
            {currSite === 'all-liked' && <span className='text-2xl'>All liked advertisement {data.length}:</span>}
         </div>
         <div className={data.length === 0 ? "flex justify-center" : 'min-h-36 grid grid-cols-3 gap-5 mt-10'}>
            {data.length === 0 && <span className='w-full mt-20 text-xl font-semibold flex justify-center'>You don't have any advertisement yet</span>}
            {data.map((item, index) => (
               <GridCard item={item} key={index}/>
            ))}
         </div>
      </div>
   )
}