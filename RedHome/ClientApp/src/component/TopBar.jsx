import React from 'react'


export default function TopBar() {
  const centerLinks = [
    {
      name: "Advertisements",
      href: "#"
    },
    {
      name: "Liked",
      href: "#"
    }
  ];

  const rigthLinks = [
    {
      name: "Add advertisement",
      href: "#"
    },
  ];

  return (
    <div>
        <div className='bg-white h-[7vh] drop-shadow-xl'>
            <nav className='h-[5vh] w-[100%] p-4 pt-7 flex items-center justify-between'>
            <div className='text-3xl font-bold'>
                <span className='text-red-600'>Red</span><span>Home</span>
            </div>

            <div>
                <ul className='lg:flex md:flex hidden items-center p-1 h-full font-semibold text-lg bg-red-600 text-white rounded-lg'>
                {centerLinks.map((item, index) => (
                    <li>
                    <a href={item.href} className='rounded-lg mx-4 md:mx-2 p-1 hover:bg-red-500 transition-all' key={index}>{item.name}</a>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <ul className='lg:flex md:flex hidden items-center h-full font-semibold text-lg text-white'>
                {rigthLinks.map((item, index) => (
                    <li>
                    <a href={item.href} className='rounded-lg bg-red-600  mx-4 md:mx-2 p-2 hover:bg-red-500 transition-all' key={index}>{item.name}</a>
                    </li>
                ))}
                <li>
                    <img className="h-10 rounded-lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

                    </img> 
                </li>
                </ul>
            </div>
            </nav>
        
            </div>
    </div>
  )
}