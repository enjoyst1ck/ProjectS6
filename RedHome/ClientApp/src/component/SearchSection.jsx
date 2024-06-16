import React, { useContext, useEffect, useState } from 'react'
import { CiGrid2H } from "react-icons/ci"
import { IoGridOutline } from "react-icons/io5";
import GridCard from './GridCard';
import ListCard from './ListCard'
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import ModalMoreFiltres from './ModalMoreFiltres';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export default function SearchSection({isOpen, setIsOpen}) {
  const [gridView, setGridView] = useState(false);
  const [data, setData] = useState([]);
  const [currPageInfo, setCurrPageInfo] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [url, setUrl] = useState({ currUrl: 'http://localhost:7004/Advertisement', defaultUrl: 'http://localhost:7004/Advertisement' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser != null) {
          const res = await axios.get(url.currUrl, {
            headers: {
              'Authorization': `Bearer ${currentUser.token}`
            }
          });
          console.log(res)
          setData(res.data.data);
          setCurrPageInfo({count: res.data.count, pageIndex: res.data.pageIndex, pageSize: res.data.pageSize, countPages: Math.round(res.data.count/res.data.pageSize)});
          setIsPending(false);
          setError(null);
        } else {
          const res = await axios.get(url.currUrl);
          setData(res.data.data);
          console.log(res)
          setCurrPageInfo({count: res.data.count, pageIndex: res.data.pageIndex, pageSize: res.data.pageSize, countPages: Math.round(res.data.count/res.data.pageSize)});
          setIsPending(false);
          setError(null);
        }
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [currentUser, url]);


  const handleView = (e) => {
    setGridView(e);
  };


  const handlerchangePage = (index) => {
    const newIndex = index;
      setUrl(prev => ({
        ...prev,
        currUrl: prev.defaultUrl + '?PageIndex=' + newIndex
      }));
  }

  const handleNext = () => {
    if(currPageInfo.pageIndex < currPageInfo.countPages) {
      const newIndex = currPageInfo.pageIndex + 1;
      setUrl(prev => ({
        ...prev,
        currUrl: prev.defaultUrl + '?PageIndex=' + newIndex
      }));
    }
  }

  const handlePrev = () => {
    if (currPageInfo.pageIndex > 1) {
      const newIndex = currPageInfo.pageIndex - 1;
      setUrl(prev => ({
        ...prev,
        currUrl: prev.defaultUrl + '?PageIndex=' + newIndex
      }));
    }
  }

  return (
    <>
      <ModalMoreFiltres isOpen={isOpen} setIsOpen={setIsOpen}/>

      <div className='w-[75%] mx-auto mt-24 relative z-0'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-semibold'>Flats for sale: Opole</h1>
            <p className='text-xl font-semibold text-black text-opacity-75'>{currPageInfo && currPageInfo.count} advertisements</p>
          </div>
          <div className='flex'>
            <div className={gridView === false ? 'size-11 rounded-xl border-[3px] flex justify-center items-center border-red-700 bg-red-700 ml-2' : 'size-11 rounded-xl border-[3px] flex justify-center items-center border-red-700 ml-2'}
              onClick={() => handleView(false)}>
              <CiGrid2H color={gridView === true ? 'rgb(185 28 28)' : 'white'} size={22} />
            </div>
            <div className={gridView === true ? 'size-11 rounded-xl border-[3px] flex justify-center items-center border-red-700 bg-red-700 ml-2' : 'size-11 rounded-xl border-[3px] flex justify-center items-center border-red-700 ml-2'}
              onClick={() => handleView(true)}>
              <IoGridOutline color={gridView === false ? 'rgb(185 28 28)' : 'white'} size={22} />
            </div>
          </div>
        </div>

        <div className='w-full flex items-center mt-4'>
          <div className='bg-black h-1 w-full rounded-3xl opacity-50'></div>
          <span className='text-lg mr-2 p-2'>Sort:</span>
          <select className='py-1 px-2 w-36 bg-red-700 text-white rounded-lg outline-none'>
            <option>default</option>
            <option>default</option>
            <option>default</option>
          </select>
        </div>

        <div className={gridView === true ? 'flex ' : 'flex flex-col'}>
          {gridView === true ?
            (<div className='grid grid-cols-3 gap-4'>
              {data.map((item, index) => (<GridCard key={index} item={item} />))}
            </div>)
            :
            (<div className='grid grid-cols-1 gap-4'>
              {data.map((item, index) => (<ListCard item={item} key={index} />))}
            </div>)}
          {data.length === 0 && <span className='text-center mt-20 text-2xl font-semibold'>Apparently there are no announcements yet</span>}
        </div>
        
        <div className='w-full my-10 flex justify-center items-center'>
          <div><GrFormPrevious className='cursor-pointer' size={32} onClick={handlePrev}/></div>
          <div className=''>
          <div className='flex'>{[...Array(currPageInfo && currPageInfo.countPages)].map((_, index) => (
            <div className={index === (currPageInfo && currPageInfo.pageIndex - 1) ? 'p-2 text-xl flex justify-center items-center cursor-pointer size-10 rounded-full text-white bg-red-600' : 'p-2 text-xl flex justify-center items-center size-10 cursor-pointer'}
              onClick={() => handlerchangePage(index + 1)}
            >
              {index + 1}
            </div>
            ))}
          </div>
          </div>
          <div><GrFormNext className='cursor-pointer' size={32} onClick={handleNext}/></div>
        </div>
      </div>
    </>
  )
}
