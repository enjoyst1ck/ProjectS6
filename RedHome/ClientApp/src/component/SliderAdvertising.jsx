import React, { useContext, useState } from 'react'
import imagePlaceholder from "./../assets/imageplaceholder.png"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa";
import { AuthContext } from '../context/authContext';
import axios from 'axios';

export default function SliderAdvertising({ images, isLiked, setIsLiked, id }) {
  const [currImg, setCurrImg] = useState(0);
  const { currentUser } = useContext(AuthContext);

  const handleChangeImg = (index) => {
    setCurrImg(index);
  }

  const handleLiked = async() => {
    if (!currentUser) {
      return alert("To add to favorites, log in first");
    }

    try {
      const res = await axios.post(`http://localhost:7004/Advertisement/addToFavorite?advertisementId=${id}`, {}, {
        headers: {
          'Authorization': `Bearer ${currentUser.token}`
        }
      });
      console.log(res)
      setIsLiked(prev => !prev);
    } catch (err) {
      console.log(err);
    }
}

return (
  <>
    <div className='w-full h-[723px] bg-black rounded-2xl relative'>
      {images.length === 0 && <img alt='img' className='w-full h-full rounded-2xl object-cover' src={imagePlaceholder} />}
      {images.length > 0 && <img alt='img' className='w-full h-full rounded-2xl' src={`data:image/jpg;base64, ${images[currImg].image}`} />}
      <div className='bg-white rounded-full size-12 absolute right-4 top-4 flex justify-center items-center cursor-pointer' onClick={handleLiked}>
        {isLiked === true ? (<FaHeart color='red' size={28} />) : (<FaRegHeart color='red' size={28} />)}
      </div>
    </div>
    <div className='w-full grid grid-cols-6 mt-3 gap-3'>
      {images.length > 0 ? images.map((item, index) => (
        <div key={index} className={currImg === index ? 'w-full h-full rounded-2xl cursor-pointer scale-105 hover:scale-105 transition-all' : 'w-full h-full rounded-2xl cursor-pointer hover:scale-105 transition-all relative'} onClick={() => handleChangeImg(index)}>
          <div className={currImg === index ? 'hidden' : 'absolute top-0 left-0 w-full h-full bg-black opacity-25 rounded-2xl'}></div>
          <img alt='img' className='object-fill w-full h-full rounded-2xl' src={`data:image/jpg;base64,${item.image}`} />
        </div>
      )) : null}

    </div>
  </>
)
}
