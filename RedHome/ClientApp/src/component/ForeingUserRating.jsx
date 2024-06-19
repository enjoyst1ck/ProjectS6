import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import avatar from '../assets/avatar.jpg';
import { FiCameraOff } from "react-icons/fi";
import { AuthContext } from '../context/authContext';
import ModalChangePassword from './ModalChangePassword';
import RatingReview from './RatingReview';
import { useNavigate, useParams } from 'react-router-dom';



export default function ForeignUserRating() {
  const { register, watch, handleSubmit } = useForm({});
  const [openModal, setOpenModal] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [reviewsQuantity] = useState(142);
  const [avgRating] = useState(3); {/* Average rating usera - wyliczyc na podstawie ilosci ocen i wysokosci ocen - zaokraglac (nie ma polowek)*/}
  const [rating, setRating] = useState(0); {/* uzywane do wystawiania ocen */}

  
  let { id } = useParams(); 
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentUser) return navigate('/login');
    try {
      fetch(`http://localhost:7004/Review/${id}`)
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
    } catch (err) {
      console.log(err);
    }
  }, []);

  const rateDescription = [
    {
      userBy: "Majorek",
      userTo: "CurrentUser",
      rate: 5,
      comment: "Użytkownik nieźle sie spisał przy sprzedaży. Wielkie pozdro!!!"
    },
    {
      userBy: "Majorek",
      userTo: "CurrentUser",
      rate: 4,
      comment: "Użytkownik nieźle sieedażyźle sieedażyźle sieedażyźieedażyźieedażyźieedażyźle sieedażyźle sieedaży. Wielkie pozdro!sssssssdro!sssssssdro!sssssssdro!sssssssssssssssssssssssssssssssssssssssssssssssssssssfdijawiojfosfsfwfw@@@!!"
    },
    {
      userBy: "Majorek",
      userTo: "CurrentUser",
      rate: 2,
      comment: "Użytkownik nieźle sie spisał przy sprzedaży. Wielkie pozdro!!!"
    },
    {
      userBy: "Majorek",
      userTo: "CurrentUser",
      rate: 3,
      comment: "Użytkownik nieźle sie spisał przy sprzedaży. Wielkie pozdro!!!"
    },
    {
      userBy: "Majorek",
      userTo: "CurrentUser",
      rate: 4,
      comment: "Użytkownik nieźle sieedażyźle sieedażyźle sieedażyźieedażyźieedażyźieedażyźle sieedażyźle sieedaży. Wielkie pozdro!sssssssdro!sssssssdro!sssssssdro!sssssssssssssssssssssssssssssssssssssssssssssssssssssfdijawiojfosfsfwfw@@@!!"
    },
    {
      userBy: "Majorek",
      userTo: "CurrentUser",
      rate: 4,
      comment: "Użytkownik nieźle sieedażyźle sieedażyźle sieedażyźieedażyźieedażyźieedażyźle sieedażyźle sieedaży. Wielkie pozdro!sssssssdro!sssssssdro!sssssssdro!sssssssssssssssssssssssssssssssssssssssssssssssssssssfdijawiojfosfsfwfw@@@!!"
    },
    {
      userBy: "Majorek",
      userTo: "CurrentUser",
      rate: 4,
      comment: "Użytkownik nieźle sieedażyźle sieedażyźle sieedażyźieedażyźieedażyźieedażyźle sieedażyźle sieedaży. Wielkie pozdro!sssssssdro!sssssssdro!sssssssdro!sssssssssssssssssssssssssssssssssssssssssssssssssssssfdijawiojfosfsfwfw@@@!!"
    },
    {
      userBy: "Majorek",
      userTo: "CurrentUser",
      rate: 4,
      comment: "Użytkownik nieźle sieedażyźle sieedażyźle sieedażyźieedażyźieedażyźieedażyźle sieedażyźle sieedaży. Wielkie pozdro!sssssssdro!sssssssdro!sssssssdro!sssssssssssssssssssssssssssssssssssssssssssssssssssssfdijawiojfosfsfwfw@@@!!"
    },]
  


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
                    <input className='w-full py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' value={currentUser && currentUser.username ? currentUser.username : ''} type='text' disabled />
                </div>
                <div className="w-[75%]">
                    <label className='text-xl font-semibold text-black text-opacity-70'>Phone number:</label>
                    <input className='w-full py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all mb-6' value={currentUser && currentUser.phoneNumber ? currentUser.phoneNumber : ''}phoneNumber type="tel" disabled/>
                </div>
            </div>

            <div className='mt-7'>
                <div className="">
                    <label className='text-xl font-semibold block text-center text-black text-opacity-70 '>Number of reviews:</label>
                    <div className='text-xl w-[100%] mx-auto font-medium text-center text-black text-opacity-70 mt-1'>{reviewsQuantity}</div>
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

      {/* sekcja add review */}
      <div className='w-[75%] h-full mx-auto mt-4'>
        <div className='w-[75%] h-80 mx-auto bg-white text-center rounded-xl'>
          <div>
            <h1 className='text-2xl'>Have you dealt with this user?</h1>
            <p>Please, rate him to help others.</p>
              <form>
                <div className='mt-4 mb-4'><RatingReview rating={rating} setRating={setRating}/></div>
                <label className='text-s'>What do you think about this user? <div className='text-red-600 text-xs'>(Remember, your review should only concern how the transaction or conversation with the user went)</div></label>
                <textarea className='border border-red-600 rounded-xl w-[75%] h-24 text-left py-2 px-2 text-s mt-2 resize-none'></textarea>
                <br/>
                <input className='bg-red-600 text-white text-l font-bold border rounded-xl w-28'type="submit" value="Submit"></input>
              </form>
          </div>
        </div>
      </div>

     
      <div className='w-[75%] mx-auto mt-6'>
        <div className="bg-black h-1 w-full rounded-3xl opacity-30"></div>
      </div>

        {/* sekcja reviews */}
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
      ) : <div></div>}

    </div>

  )
}