"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const InfiniteScrolling = () => {
  const [data, setData] = useState<any[]>([]);
  const [chunkNumber, setChunkNumber] = useState(1);
  const buttonRef= useRef<HTMLButtonElement>(null)
  const limit = 10

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(chunkNumber - 1 )* limit}`)
      .then((res) => res.json())
      .then(items => {
        const newData = [...data,...items.products];
        setData(newData)
        console.log(data)

      });
  }, [chunkNumber]);

  useEffect(() => {
    let observer = new IntersectionObserver((item) => {
        if(item[0].isIntersecting){
            setChunkNumber(prev => prev + 1)
        }
    });

    observer.observe(buttonRef.current as Element)

    return () => observer.disconnect()
  },[])



  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <h2>Infinite Scrolling</h2>
      <div>
        {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-2 bg-slate-200 mt-2 p-2 rounded-md">
                <h4>{item.title}</h4>
                <Image src={item.thumbnail} alt="image" width={200} height={200} className="w-[20rem] h-[10rem] object-cover"/>
            </div>
        ))}
      </div>
      <button ref={buttonRef} className="p-2 rounded-md bg-slate-400 text-white text-center m-4">
        {chunkNumber * limit >= 100 ? 'No More Data' : 'Loading...'}
      </button>
    </div>
  );
};

export default InfiniteScrolling;
