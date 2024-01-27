'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const images = ['https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1487715433499-93acdc0bd7c3?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1535320404287-416e2c6d2b41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1536302829663-a460b9ec95b9?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']


const ImageGallery = () => {

  const [selectedImage,setSelectedImage] = useState(0)



  return (
    <div className='h-full w-full flex items-center justify-center mt-10 flex-col text-white gap-2'>
      <h2>Image Gallery</h2>
      <div className='relative w-[40rem] h-[25rem] rounded-md overflow-hidden'>
          <Image src={images[selectedImage]} alt='image' fill/>
      </div>
      <div className='flex gap-4'>
        {images.map((image, index) => (
          <Image className={`${index === selectedImage ? 'border rounded-md scale-110' : ''}`} onClick={() => setSelectedImage(index)} src={image} alt='image' width={100} height={100} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
