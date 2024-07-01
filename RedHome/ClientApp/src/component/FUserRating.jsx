import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import avatar from '../assets/avatar.jpg';
import { FiCameraOff } from "react-icons/fi";
import { AuthContext } from '../context/authContext';
import ModalChangePassword from './ModalChangePassword';
import RatingReview from './RatingReview';
import { useNavigate, useParams } from 'react-router-dom';



export default function FUserRating() {
  const { register, watch, handleSubmit } = useForm({});
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [reviewsQ, setreviewsQ] = useState(2);
  const [rating, setRating] = useState(0); {/* uzywane do wystawiania ocen */}
  let { id } = useParams(); 
  const [data, setData] = useState(null);
  const [dto, setDto] = useState(null);
  const [userData, setUserData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avgRating, setAvgRating] = useState(0);

  const onSubmit = async (formData) => {
    if (!currentUser) {
      // return alert("Musisz być zalogowany");
    }

    const reviewData = {
      id: 0, // Assuming the backend will handle the ID
      userIdBy: currentUser.userId, // Replace with actual current user ID
      userEmailBy: currentUser.email, // Replace with actual current user email
      userIdTo: dto.userId, // Assuming you have this in your form
      userEmailTo: dto.email, // Assuming you have this in your form
      rate: rating,
      comment: formData.comment,
    };
    try {
      const response = await fetch('http://localhost:7004/Review/add', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${currentUser.token}`,
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setData(prev=>([...prev,reviewData]));

      const data = await response.json();
      console.log('Review added:', data);
      // Handle success (e.g., show a success message, reset form, etc.)
    } catch (error) {
      console.error('Error adding review:', error);
      // Handle error (e.g., show an error message)
    }
  };

  

  useEffect(() => {
    // {if (!currentUser) return navigate('/login');}
    try {
      fetch(`http://localhost:7004/Review?userId=${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setData(data.result.reviews);
        setDto(data.result.userDto);
        setUsername(data.result.userDto.username); 
        setPhoneNumber(data.result.userDto.phoneNumber); 
        setreviewsQ(data.result.reviews.length);
        
        const totalRatings = data.result.reviews.reduce((acc, review) => acc + review.rate, 0);
        const averageRating = totalRatings / data.result.reviews.length;
        setAvgRating(Math.round(averageRating));
  
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);  


  return (
    
    <div className="h-80 w-full mt-24">
      <div className="mt-11 flex h-64 justify-center rounded-md mx-auto">
        <div className='h-60 w-60 relative'>
          <img className="absolute z-0 h-full rounded-2xl w-full bg-gray-400 flex items-center" src={avatar != null ? avatar : <div className='mx-auto'><FiCameraOff /></div>} alt='avatar'/>
        </div>
        <div>
          <div className='flex ml-14 h-[75%]'>
            <div className='mt-7'>
                <div className="w-[75%]">
                    <label className='text-xl font-semibold text-black text-opacity-70'>Username:</label>                                              
                    <input className='w-full h-10 pl-2 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6 text-xl font-semibold text-black text-opacity-80' value={username} type='text' disabled />
                </div>
                <div className="w-[75%]"> 
                    <label className='text-xl font-semibold text-black text-opacity-70'>Phone number:</label>                                          
                    <input className='w-full pl-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6 text-xl font-semibold text-black text-opacity-80' value={phoneNumber}  type="tel" disabled/>
                </div>
            </div>

            <div className='mt-7'>
                <div className="">
                    <label className='text-xl font-semibold block text-center text-black text-opacity-70 '>Number of reviews:</label>
                    <div className='text-xl w-[100%] mx-auto font-semibold text-center text-black text-opacity-80 mt-1'>{reviewsQ}</div>
                </div>
                <div className="mt-9">
                    <label className='text-xl font-semibold mt-4 block text-center text-black text-opacity-70'>Average rating:</label>
                    <div className='text-xl flex justify-center opacity-70 mt-1'><RatingReview rating={avgRating}/></div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[75%] mx-auto'>
        <div className="bg-black h-1 w-full rounded-3xl opacity-30"></div>
      </div>
      {/* sekcja user info ^^^ */}

      {/* sekcja add review - TODO */}
      {currentUser && <div className='w-[75%] h-full mx-auto mt-4'>
        <div className='w-[75%] h-80 mx-auto bg-white text-center rounded-xl'>
          <div>
            <h1 className='text-2xl'>Have you dealt with this user?</h1>
            <p>Please, rate him to help others.</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-4 mb-4'><RatingReview rating={rating} setRating={setRating} {...register("rate")} /></div>
                <label className='text-s'>What do you think about this user? <div className='text-black font-semibold text-xs'>(Remember, your review should only concern how the transaction or conversation with the user went)</div></label>
                <textarea {...register("comment")} className='border border-red-600 rounded-xl w-[75%] h-24 text-left py-2 px-2 text-s mt-2 resize-none' ></textarea>
                <br/>
                <input className='bg-red-600 hover:bg-red-500 text-white text-l font-bold border rounded-xl w-28' type="submit" value="Submit"></input>
                
              </form>
          </div>
        </div>
      </div>}

      {currentUser && <div className='w-[75%] mx-auto mt-6'>
        <div className="bg-black h-1 w-full rounded-3xl opacity-30"></div>
      </div>}

        {/* sekcja reviews - skończone */}
      {data !== null ? (
      <div className='w-[75%] mx-auto mt-8 bg-white h-fit'>
        <ul className='w-[75%] mx-auto bg-white text-center rounded-xl h-fit'>
        {data.map((item, index) => ( 
                <li className='list-none h-fit bg-white m-10'>
                  <div className='bg-white my-auto mx-auto w-[75%] px-5 py-3 h-fit text-left'>
                    <label className='my-auto text-xl font-semibold'>{item.userEmailBy}</label>
                    <div className='my-auto'><RatingReview rating={item.rate}/></div>
                    <p className='my-auto' key={index}>{item.comment}</p>
                  </div>
                  <div className='w-[100%] mx-auto mt-6'>
                    <div className="bg-black h-1 w-full rounded-3xl opacity-30"></div>
                  </div>
                </li>
              ))}
        </ul>
      </div>
      ) : <div className='mx-auto w-[50%] h-64 text-center mt-20 text-xl font-bold'>Sorry, this user has no ratings yet.</div>}
    </div>

  )
}