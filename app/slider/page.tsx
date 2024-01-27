"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1487715433499-93acdc0bd7c3?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1535320404287-416e2c6d2b41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1536302829663-a460b9ec95b9?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-2">
      <h1>Image Slider</h1>
      <div className="relative">
        <div className="relative w-[40rem] h-[25rem] rounded-md overflow-hidden">
          {images.map((image, index) => (
            <Image
              className={`${
                index === currentIndex
                  ? "block transition-all translate-x-[0px] opacity-100 duration-300"
                  : "transition-all  duration-300 translate-x-[-100px] hidden opacity-0"
              }`}
              key={index}
              src={image}
              alt="image"
              fill
            />
          ))}
          <div>
            <FaArrowLeft
              onClick={handlePrevious}
              className="absolute left-2 top-[50%] p-2 rounded-full bg-slate-400 w-8 h-8 hover:opacity-30"
            />
            <FaArrowRight
              onClick={handleNext}
              className="absolute right-2 top-[50%] p-2 rounded-full bg-slate-400 w-8 h-8 hover:opacity-30"
            />
          </div>
          <div className="flex  gap-2 absolute bottom-2 left-[50%] translate-x-[-50%]">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${
                  index === currentIndex ? "bg-white" : ""
                } w-4 h-4 rounded-full border bg-slate-400`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imageslider;
