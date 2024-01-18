import React from "react";
import { useEffect, useState } from "react"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

export function HorizontalScroll({ songs, NoImg, description }) {
  const [uniqueId, setUniqueId] = useState('');

    useEffect(() => {
      // Generate a unique ID using uuidv4() when the component mounts
      const id = uuidv4();
      setUniqueId(id);
    }, []); // Empty dependency array ensures the effect runs only once

    const ScrollBar_id= crypto.randomUUID.toString();
    const slideLeft = () => {
      var slider = document.getElementById(uniqueId);
      slider.scrollLeft = slider.scrollLeft - 500;
    };
  
    const slideRight = () => {
      var slider = document.getElementById(uniqueId);
      slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
      <>
        <img
          className='w-full h-[440px] object-cover'
          src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80'
          alt=''
          style={{ display: NoImg ? 'none' : 'block' }}
        />
        <p class = 'text-xl '>{description}</p>
        <div 
        className='item_container'
        //className='relative flex items-center overflow-hidden'
        >
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
          <div
            type = ''
            id={uniqueId}
            className='items_many'
            //className='w-full h-full overflow-x-scroll -webkite whitespace-nowrap scroll-smooth '
          >
            {songs.map(item => (
              <img
                className='item'
                // className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'
                src={item.img}
                alt='/'
              />
            ))}
          </div>
          <MdChevronRight
          className='opacity-50 cursor-pointer hover:opacity-100' 
          onClick={slideRight} size={40} />
        </div>
      </>
    );
  }
  