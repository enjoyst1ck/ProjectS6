import React, { useContext, useEffect } from 'react'
import MenuUserPanel from '../component/MenuUserPanel'
import { useLocation, useNavigate } from 'react-router-dom';
import UserSettings from './../component/UserSettings';
import { AuthContext } from '../context/authContext';
import ListUserAdvertisng from '../component/ListUserAdvertisng'
import TopMenu from '../component/TopMenu';

export default function UserAdvertisingPage() {
  const location = useLocation();
  const currSite = location.pathname.split('/')[2];
  
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser === null) {
      navigate('/login')
    }
  }, []);

  return (
    <>
      <div className='bg-white drop-shadow-xl pb-4'>
        <TopMenu/>
      </div>
      <div className='w-[75%] mx-auto'>
        <MenuUserPanel/>
        
        {currSite === 'settings' && <UserSettings/>}
        {currSite === 'all-added' && <ListUserAdvertisng currSite={currSite}/>}
        {currSite === 'all-liked' && <ListUserAdvertisng currSite={currSite}/>}
      </div>
    </>
  )
}
