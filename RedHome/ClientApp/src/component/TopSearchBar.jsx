import React from 'react'


export default function MenuHomePage() {
  const centerLinks = [
    {
      name: "Advertisement",
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
        <div className='bg-white drop-shadow-xl'>
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
            <div className='block'>
            <div className='h-[8vh] w-[100%] p-4 pt-12 flex items-center justify-between pl-24 pr-24'>      
                <select className="bg-slate-800 text-white w-40 h-7 appearance-none">
                    <option className="text-lg" disabled selected hidden>Buy</option>
                    <option className="text-lg">Buy</option>
                    <option className="text-lg">Rent</option>
                </select>
                <select className="bg-slate-800 text-white w-40 h-7 appearance-none">
                    <option className="text-lg" disabled selected hidden>Price</option>
                    <option className="text-lg"></option>
                    <option className="text-lg"></option>
                </select>
                <select className="bg-slate-800 text-white w-40 h-7 appearance-none">
                    <option className="text-lg" disabled selected hidden>No. of rooms</option>
                    <option className="text-lg"></option>
                    <option className="text-lg"></option>
                </select>
                <select className="bg-slate-800 text-white w-40 h-7 appearance-none">
                    <option className="text-lg" disabled selected hidden>Square footage</option>
                    <option className="text-lg"></option>
                    <option className="text-lg"></option>
                </select>
                <select className="bg-slate-800 text-white w-40 h-7 appearance-none">
                    <option className="text-lg" disabled selected hidden>Building type</option>
                    <option className="text-lg"></option>
                    <option className="text-lg"></option>
                </select>
                <select className="bg-slate-800 text-white w-40 h-7 appearance-none">
                    <option className="text-lg" disabled selected hidden>More filters</option>
                    <option className="text-lg"></option>
                    <option className="text-lg"></option>
                </select>
            </div> 
            <div className='h-[8vh] w-[100%] p-4 pt-10 pb-10 flex items-center justify-between pl-24 pr-24'>  
                <div>  
                    <select className="bg-slate-800 text-white w-72 h-7 appearance-none">
                        <option className="text-lg" disabled selected hidden>Location</option>
                        <option className="text-lg"></option>
                        <option className="text-lg"></option>
                    </select>
                </div>  
                <div className="flex justify-between w-72">  
                    <button className="bg-slate-800 text-white w-32 h-7 appearance-none rounded-md">
                        Clear filters
                    </button>
                    <button className="bg-slate-800 text-white w-32 h-7 appearance-none rounded-md">
                        Search
                    </button>
                </div>  
                </div> 
                </div>
            </div>
        <div className="w-100vh bg-amber-50 h-screen"></div>
    </div>
  )
}