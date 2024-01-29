'use client';
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";


const RatingPage = () => {
    const ratingLimit = Array(8).fill(null)
    const [currentHover, setCurrentHover] = useState(-1)

    const handleMouseHover = (inx:number) => {
        setCurrentHover(inx)
    }


  return (
    <div className='flex items-center justify-center flex-col gap-2 h-full'>
        <h2>Rating Components</h2>
        <div className='flex gap-2 text-xl'>
            {ratingLimit.map((_,index) => (
                <FaStar  className={`${index <= currentHover ? 'text-rose-300' : ''} w-8 h-8`} onMouseOver={() => handleMouseHover(index)} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default RatingPage