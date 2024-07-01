import React from 'react';
import avatar from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';

export default function DeveloperInfoAdvertising({ username, phoneNumber, userEmail, userId }) {
  return (
    <div className='w-[25%]'>
      <div className='p-4 w-full h-96 border-black border-opacity-50 border-2 rounded-2xl'>
        <div className='flex items-center'>
          <div className='size-12 bg-red-100 rounded-full'>
            <img src={avatar} />
          </div>
          <Link to={`/rating/${userId}`} className='text-xl font-bold ml-3'>{username || userEmail}</Link>
        </div>

        <div className='my-12 flex flex-col'>
          <span className='text-xl font-bold'>Contact details</span>

          <div className='h-56 flex flex-col'>
            <div className='flex flex-col mt-2'>
              <span>E-mail:</span>
              <span className='underline'><a href={`mailto:${userEmail}`}>{userEmail}</a></span>
            </div>
            <div className='flex flex-col mt-8'>
              <span>Phone number:</span>
              <span>{phoneNumber.length > 0 ? <a className='underline' href={`tel:${phoneNumber}`}>{phoneNumber}</a> : 'None'}</span>
            </div>
            <div className='flex flex-col mt-8'>
              <span>Other information:</span>
              <span>None</span>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  )
}
