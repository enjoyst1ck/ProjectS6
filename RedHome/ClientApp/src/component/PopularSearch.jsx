import React from 'react'

export default function PopularSearch() {
  const popularSearch = [
    {
      content: "Studio apartment",
      href: "#"
    },
    {
      content: "Resident house",
      href: "#"
    },
    {
      content: "Countryside",
      href: "#"
    },
    {
      content: "Family house",
      href: "#"
    },
  ];
  return (
    <div className='p-3 2xl:w-[45%] xl:w-[53%] lg:w-[60%] 2xl:flex xl:flex lg:flex hidden m-auto'>
      <div className='bg-white w-full h-full 2xl:p-2 p-1  rounded-2xl flex justify-around items-center flex-wrap'>
        <div className='p-1 px-2'>
          <span className='text-lg font-bold'>Popular search:</span>
        </div>
        {popularSearch.map((item, index) => (
          <div key={index} className=''>
            <a href={item.href} className='p-2 px-6 bg-slate-800 text-white flex justify-center items-center rounded-xl text-lg'>{item.content}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
