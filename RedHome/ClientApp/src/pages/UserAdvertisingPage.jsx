import React from 'react'
import UserPanel from '../component/UserPanel'
import UserSettings from '../component/UserSettings'
import ListUserAdvertisng from '../component/ListUserAdvertisng'

export default function UserAdvertisingPage() {
  return (
    <div className='w-[75%] mx-auto'>
      <UserPanel/>
      <div >
        <UserSettings></UserSettings>
      </div>
      <ListUserAdvertisng/>
    </div>
  )
}
