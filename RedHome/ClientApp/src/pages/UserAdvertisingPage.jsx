import React from 'react'
import UserPanel from '../component/UserPanel'
import ListUserAdvertisng from '../component/ListUserAdvertisng'

export default function UserAdvertisingPage() {
  return (
    <div className='w-[75%] mx-auto'>
      <UserPanel/>
      <ListUserAdvertisng/>
    </div>
  )
}
