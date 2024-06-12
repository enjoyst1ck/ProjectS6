import React from 'react'
import UserPanelTile from './UserPanelTile';
import { BsList } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { useLocation } from 'react-router-dom';

export default function MenuUserPanel() {
  const location = useLocation();
  const currSite = location.pathname.split('/')[2];
  
  const userTile = [
    {
      icon: <BsList size={48} color='#BE3144' />,
      content: "Your advertisement",
      selected: currSite === 'all-added' ? true : false,
      href: "/user-panel/all-added"
    }, {
      icon: <FaHeart size={48} color='#BE3144' />,
      content: "Liked advertisement",
      selected: currSite === 'all-liked' ? true : false,
      href: "/user-panel/all-liked"
    }, {
      icon: <IoIosAdd size={48} color='#BE3144' />,
      content: "Add advertisement",
      selected: currSite === 'add-advertisement' ? true : false,
      href: "/add-advertisement"
    }, {
      icon: <LuSettings size={48} color='#BE3144' />,
      content: "Your account",
      selected: currSite === 'settings' ? true : false,
      href: "/user-panel/settings"
    },
  ];

  return (
    <div className='w-full mt-20'>
      <div className='grid grid-cols-4 p-5 gap-2'>
        {userTile.map((item, index) => (<UserPanelTile userTile={item} key={index} />))}
      </div>
    </div>
  )
}
