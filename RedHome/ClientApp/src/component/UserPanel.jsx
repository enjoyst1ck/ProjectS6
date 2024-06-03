import React from 'react'
import UserPanelTile from './UserPanelTile';
import { BsList } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { LuSettings } from "react-icons/lu";


export default function UserPanel() {
  const userTile = [
    {
        icon: <BsList size={48} color='#BE3144'/>,
        content: "Your announcements",
        selected: true,
        href: ""
    },{
        icon: <FaHeart size={48} color='#BE3144'/>,
        content: "Your announcements",
        selected: false,
        href: ""
    },{
        icon: <IoIosAdd size={48} color='#BE3144'/>,
        content: "Your announcements",
        selected: false,
        href: ""
    },{
        icon: <LuSettings size={48} color='#BE3144'/>,
        content: "Your announcements",
        selected: false,
        href: ""
    },
  ];  
  return (
    <div className='w-full mt-20'>
      <div className='grid grid-cols-4 p-5 gap-2'>
        {userTile.map((item, index) => (<UserPanelTile userTile={item} key={index}/>))}
      </div>
    </div>
  )
}
