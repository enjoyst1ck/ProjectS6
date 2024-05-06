import React, { useState } from 'react'
import img1 from '../assets/images/slider-img-1.jpg'
import img2 from '../assets/images/slider-img-2.jpg'
import img3 from '../assets/images/slider-img-3.jpg'

export default function Slider() {
  const [currentContent, setCurrentContent] = useState({
    img: img1,
    title: 'Choose',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
  });
  const sliderContent = [
    {
      img: img1,
      title: 'Choose',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      img: img2,
      title: 'Discovery',
      description: 'In venenatis lacinia lacinia. Ut nulla arcu, molestie in nibh in, pellentesque sagittis odio. Nullam id ligula volutpat, vulputate diam vitae, volutpat dolor. Donec consequat cursus vehicula. Aenean dictum hendrerit suscipit. Praesent eu feugiat eros, id pharetra odio. Proin ut tincidunt dolor.'
    },
    {
      img: img3,
      title: 'Test',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum'
    }
  ];

  const handlerChangeSlide = (index) => {
    setCurrentContent(sliderContent[index]);
  };

  return (
    <div className='w-[100%] xl:w-[60%] lg:w-[50%] sm:w-[100%] absolute xl:relative lg:relative sm:absolute z-0 h-screen bg-[#C44455] overflow-hidden'>
      <div className='absolute bottom-0'>
        <svg width="551" height="896" viewBox="0 0 551 896" xmlns="http://www.w3.org/2000/svg">
          <path fill="#B03F55" d="M300.5 688.5C326.5 840.1 478.333 889.667 551 895.5H0V746.5V162.5V54.5V6.5V0C24.5 42.5 65 151 93 235C121 319 143 316 210 370C277 424 268 499 300.5 688.5Z" />
        </svg>
      </div>

      <div className='absolute top-0 right-0 rotate-180'>
        <svg width="551" height="896" viewBox="0 0 551 896" xmlns="http://www.w3.org/2000/svg">
          <path fill="#DC8E98" d="M300.5 688.5C326.5 840.1 478.333 889.667 551 895.5H0V746.5V162.5V54.5V6.5V0C24.5 42.5 65 151 93 235C121 319 143 316 210 370C277 424 268 499 300.5 688.5Z" />
        </svg>
      </div>

      <div className='w-full h-full text-white absolute  justify-center items-center hidden xl:flex lg:flex'>
        <div className='w-[65%]'>
          <div className='w-full aspect-[2/1] rounded-2xl mb-5'>
            <img className='rounded-2xl' src={currentContent.img}/>
          </div>


          <div className='flex-col text-justify hidden xl:flex lg:flex'>
            <span className='font-bold text-xl mb-2'>{currentContent.title}</span>
            <span>{currentContent.description}</span>
          </div>

          <div className='w-full mt-5 justify-center hidden xl:flex lg:flex'>
            {sliderContent.map((item, index) => (
              <button onClick={() => handlerChangeSlide(index)} className={item.title === currentContent.title ? 
                "size-4 rounded-full border-4 border-[#872341] bg-[#872341] hover:bg-[#872341] transition-all mx-1" : 
                "size-4 rounded-full border-4 border-[#872341] hover:bg-[#872341] transition-all mx-1"}></button>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}
