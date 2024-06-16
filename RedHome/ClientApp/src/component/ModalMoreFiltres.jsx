import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

export default function ModalMoreFiltres({ isOpen, setIsOpen }) {
  const handleCloseModal = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div className={isOpen === true ? 'w-full h-[100vh] absolute top-0 left-0 z-50 bg-[#000000d3] pointer-events-auto flex justify-center items-center' : 'hidden'}>
      <div className='w-[1142px] h-[600px] bg-white rounded-3xl p-6'>
        <div className='relative'>
          <span className='text-2xl font-semibold'>All filtres</span>
          <span className='absolute top-0 right-0 hover:scale-105 transition-all cursor-pointer' onClick={handleCloseModal}><IoCloseOutline size={32}/></span>
        </div>
      </div>
    </div>
  )
}
