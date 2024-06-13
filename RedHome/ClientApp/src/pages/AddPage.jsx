import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineSell } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import MenuUserPanel from '../component/MenuUserPanel';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import TopMenu from '../component/TopMenu';
import { useNavigate } from 'react-router-dom';


export default function AddPage() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(()=>{
    if(!currentUser) return navigate('/login')
  },[]);

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    const extension = file.name.split('.').pop().toLowerCase();

    if (extension === 'png' || extension === 'jpg' || extension === 'jpeg') {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64String = reader.result.split(',')[1]
        console.log(base64String)
        await setSelectedFiles(prevData => {
          const newData = [...prevData];
          newData[index] = {image: base64String};
          return newData;
        });
      };
    } else {
      alert('Please select a .png or .jpg/jpeg file.');
    }
  };


  const onSubmit = async (data) => {
    if (!isValid) {
      return;
    }

    const dataToSend = {
      userId: currentUser.userId,
      userEmail: currentUser.email,
      price: data.price,
      title: data.title,
      description: data.description,
      city: data.city,
      address: data.address,
      area: data.area,
      roomQuantity: data.roomQuantity,
      floorQuantity: data.floorQuantity,
      floor: data.floor,
      developmentType: data.developmentType,
      deposite: 0,
      isForSell: data.isForSell === 'true' ? true : false,
      attachments: selectedFiles
    };

    try {
      const res = await axios.post('http://localhost:7004/Advertisement/insert', dataToSend, {
        headers: {
          'Authorization': `Bearer ${currentUser.token}`
        }
      });
      console.log(res);
    } catch (err) {
      if (err.response) {
        console.log('Error response data:', err.response.data);
        console.log('Error response status:', err.response.status);
        console.log('Error response headers:', err.response.headers);
      } else if (err.request) {
        console.log('Error request:', err.request);
      } else {
        console.log('General error:', err.message);
      }
    }
  };

  return (
    <>
    <div className='bg-white drop-shadow-xl pb-4'>
        <TopMenu/>
      </div>
    <div className='w-[75%] mx-auto flex flex-col mb-20'>
      <MenuUserPanel />

      <div className='w-full flex flex-col mt-24'>
        <div className='flex flex-col'>
          <span className='font-bold text-4xl'>Add advertisement</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-row justify-between mt-10'>
            <div className='flex flex-col'>
              <div className='text-2xl font-semibold mb-5'>
                Select type
              </div>
              <div className='flex'>
                <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input {...register("isForSell", { required: "Please select if the property is for sell or rent" })} type="radio" id="isSell-true" name="isForSell" value="true" className="hidden peer" />
                  <label htmlFor="isSell-true" className="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                    <div className='flex justify-center'><MdOutlineSell size={48} /></div>
                    <div className='text-center text-2xl mt-3'>Sell</div>
                  </label>
                </div>
                <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input {...register("isForSell", { required: "Please select if the property is for sell or rent" })} type="radio" id="isSell-false" name="isForSell" value="false" className="hidden peer" />
                  <label htmlFor="isSell-false" className="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                    <div className='flex justify-center'><CiCalendar size={48} /></div>
                    <div className='text-center text-2xl mt-3'>Rent</div>
                  </label>
                </div>
              </div>
              {errors.isForSell && <span className="text-red-600">{errors.isForSell.message}</span>}
            </div>

            <div className='flex flex-col'>
              <div className='text-2xl font-semibold mb-5'>
                Select your property type
              </div>
              <div className='flex'>
                <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input {...register("developmentType", { required: "Please select the type of development" })} type="radio" id="house" name="developmentType" value="House" className="hidden peer" />
                  <label htmlFor="house" className="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                    <div className='flex justify-center'><IoHomeOutline size={48} /></div>
                    <div className='text-center text-2xl mt-3'>House</div>
                  </label>
                </div>
                <div className='mr-5 w-64 h-40 items-center flex justify-center'>
                  <input {...register("developmentType", { required: "Please select the type of development" })} type="radio" id="apartment" name="developmentType" value="Apartment" className="hidden peer" />
                  <label htmlFor="apartment" className="flex justify-center flex-col w-full h-full border-[3px] border-[#FFD7DC] cursor-pointer peer-checked:border-[#BE3144] peer-checked:text-[#BE3144] hover:text-gray-600 transition-all rounded-2xl">
                    <div className='flex justify-center'><MdOutlineMapsHomeWork size={48} /></div>
                    <div className='text-center text-2xl mt-3'>Apartment</div>
                  </label>
                </div>
              </div>
              {errors.developmentType && <span className="text-red-600">{errors.developmentType.message}</span>}
            </div>
          </div>

          <div className='w-full mt-10'>
            <div className='text-2xl font-semibold mb-5'>
              Basic information
            </div>
            <div className='w-full grid grid-cols-9'>
              <div className='col-span-5 w-full flex flex-col border-r-2 border-[#c5c5c5]'>
                <label className='text-xl font-semibold'>Title</label>
                <input className='mt-2 w-[90%] p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' type="text" {...register("title", { required: "Title is required", minLength: { value: 2, message: "Title must be at least 2 characters" }, maxLength: { value: 50, message: "Title must be at most 50 characters" } })} />
                {errors.title && <span className="text-red-600">{errors.title.message}</span>}

                <label className='text-xl font-semibold mt-5'>Description</label>
                <textarea className='mt-2 w-[90%] p-2 border-red-600 border-2 py-1 px-2 min-h-[25vh] rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' type="text" {...register("description", { required: "Description is required", minLength: { value: 10, message: "Description must be at least 10 characters" } })} />
                {errors.description && <span className="text-red-600">{errors.description.message}</span>}
              </div>

              <div className='col-span-4 w-full pl-5'>
                <div className='w-full grid grid-cols-2 gap-4'>
                  <div className='w-full flex flex-col'>
                    <label className='text-xl font-semibold'>Price</label>
                    <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("price", { required: "Price is required" })} />
                    {errors.price && <span className="text-red-600">{errors.price.message}</span>}
                  </div>
                  <div className='w-full flex flex-col'>
                    <label className='text-xl font-semibold'>Area</label>
                    <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("area", { required: "Area is required", min: { value: 16, message: "Area must be at least 16" } })} />
                    {errors.area && <span className="text-red-600">{errors.area.message}</span>}
                  </div>
                </div>

                <div className='w-full grid grid-cols-3 gap-4 mt-10'>
                  <div className='w-full flex flex-col'>
                    <label className='text-xl font-semibold'>Room quantity</label>
                    <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("roomQuantity", { required: "Room quantity is required", min: { value: 1, message: "Room quantity must be at least 1" } })} />
                    {errors.roomQuantity && <span className="text-red-600">{errors.roomQuantity.message}</span>}
                  </div>
                  <div className='w-full flex flex-col'>
                    <label className='text-xl font-semibold'>Floor</label>
                    <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("floor", { required: "Floor is required", min: { value: 0, message: "Floor must be at least 0" } })} />
                    {errors.floor && <span className="text-red-600">{errors.floor.message}</span>}
                  </div>
                  <div className='w-full flex flex-col'>
                    <label className='text-xl font-semibold'>Floor quantity</label>
                    <input type="number" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("floorQuantity", { required: "Floor quantity is required", min: { value: 1, message: "Floor quantity must be at least 1" }, max: { value: 100, message: "Floor quantity must be at most 100" } })} />
                    {errors.floorQuantity && <span className="text-red-600">{errors.floorQuantity.message}</span>}
                  </div>
                </div>

                <div className='w-full grid grid-cols-2 gap-4 mt-10'>
                  <div className='w-full flex flex-col'>
                    <label className='text-xl font-semibold'>City</label>
                    <input type="text" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("city", { required: "City is required", minLength: { value: 3, message: "City must be at least 3 characters" }, maxLength: { value: 100, message: "City must be at most 100 characters" } })} />
                    {errors.city && <span className="text-red-600">{errors.city.message}</span>}
                  </div>
                  <div className='w-full flex flex-col'>
                    <label className='text-xl font-semibold'>Address</label>
                    <input type="text" className='mt-2 p-2 border-red-600 border-2 py-1 px-2 h-10 rounded-xl border-opacity-50 focus:border-opacity-100 outline-none transition-all' {...register("address", { required: "Address is required", minLength: { value: 3, message: "Address must be at least 3 characters" } })} />
                    {errors.address && <span className="text-red-600">{errors.address.message}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col mt-10'>
            <div className='text-2xl font-semibold mb-5'>
              Select photos
            </div>
            <div className='w-full grid grid-cols-5 gap-4'>
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className='w-full h-[175px] rounded-2xl border-2 border-dashed cursor-pointer border-red-600 flex items-center justify-center'
                  onClick={() => document.getElementById(`fileInput-${index}`).click()}
                >
                  <input
                    {...register("attachments")}
                    type="file"
                    id={`fileInput-${index}`}
                    accept=".png,.jpg,.jpeg"
                    style={{ display: 'none' }}
                    onChange={(event) => handleFileChange(event, index)}
                  />
                  {selectedFiles[index] ? (
                    <img
                      src={`data:image/jpeg;base64,${selectedFiles[index].image}`} // Re-add the prefix when using the base64 string
                      alt={`Image ${index}`}
                      className='rounded-2xl'
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <IoAdd size={64} color='#DC2626' />
                  )}
                </div>
              ))}


            </div>
          </div>
          <div className='w-full mt-10 flex flex-col justify-center items-center'>
            <input className='border-red-600 border-2 py-2 px-10 rounded-xl text-xl font-semibold cursor-pointer hover:bg-red-600 hover:text-white transition-all' type="submit" value={"Add advertisement"} />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
