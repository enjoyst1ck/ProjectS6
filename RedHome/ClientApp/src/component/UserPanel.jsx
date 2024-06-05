import React, { useEffect, useState } from 'react'
import UserPanelTile from './UserPanelTile';
import { BsList } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { LuSettings } from "react-icons/lu";


export default function UserPanel() {
  const userTile = [
    {
      icon: <BsList size={48} color='#BE3144' />,
      content: "Your advertisement",
      selected: true,
      href: ""
    }, {
      icon: <FaHeart size={48} color='#BE3144' />,
      content: "Liked advertisement",
      selected: false,
      href: ""
    }, {
      icon: <IoIosAdd size={48} color='#BE3144' />,
      content: "Add advertisement",
      selected: false,
      href: ""
    }, {
      icon: <LuSettings size={48} color='#BE3144' />,
      content: "Your account",
      selected: false,
      href: ""
    },
  ];

  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7004/Advertisement/getByUser/32387598-4ada-4dea-9e86-0921eadce60a`)
      .then((res) => {
        if (!res.ok) throw Error("Could not fetch");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err);
      });
  }, []);

  console.log(data)

  return (
    <div className='w-full mt-20'>
      <div className='grid grid-cols-4 p-5 gap-2'>
        {userTile.map((item, index) => (<UserPanelTile userTile={item} key={index} />))}
      </div>

      <div className='mt-10 w-full p-5'>
        <div className=''>
          <span className='text-2xl'>All advertisement {data.length}:</span>
        </div>
        <div className='w-full min-h-36 '>
          {data.length === 0 && <span className='w-full mt-20 text-xl font-semibold flex justify-center'>You don't have any advertisement yet</span>}

          {data.map(item => (
            <div className='w-full h-16 rounded-2xl border-[2px] border-[#ffdbdf] hover:border-[#BE3144] transition-all duration-500 mt-2 grid grid-cols-12'>
              <div className='w-full h-full col-span-3 rounded-2xl flex items-center p-4 font-semibold'>
                {item.title}
              </div>
              <div className='w-full h-full col-span-2 rounded-2xl flex items-center p-4 font-semibold'>
                {item.isForSell === true ? "For sale" : "For rent"}
              </div>
              <div className='w-full h-full col-span-2 rounded-2xl flex items-center p-4 font-semibold'>
                {item.price + " zł"}
              </div>
              <div className='w-full h-full col-span-2 rounded-2xl flex items-center p-4 font-semibold'>
                {item.attachments.length + " photos"}
              </div>
              <div className='w-full h-full col-span-3 rounded-2xl flex items-center p-3 font-semibold'>
                <button className='py-1 px-8 mr-1 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all'>View</button>
                <button className='py-1 px-8 mr-1 rounded-lg border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all'>Edit</button>
                <button className='py-1 px-8 mr-1 rounded-lg border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
