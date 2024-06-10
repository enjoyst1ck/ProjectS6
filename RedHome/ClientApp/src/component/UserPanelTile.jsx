import React from 'react'

export default function UserPanelTile({ userTile }) {
   const tileStyle = {
      default: "h-full w-full flex flex-col justify-center p-5 rounded-2xl hover:border-[#FFD7DC] hover:border-4 transition-all duration-200",
      selected: "h-full w-full flex flex-col justify-center p-5 rounded-2xl border-[#BE3144] border-4"
   };
   return (
      <a href={userTile.href} className={userTile.selected === true ? tileStyle.selected : tileStyle.default}>
         <div className='flex justify-center'>
            {userTile.icon}
         </div>
         <div className='flex justify-center text-xl font-semibold mt-2'>
            <p>{userTile.content}</p>
         </div>

      </a>
   )
}
