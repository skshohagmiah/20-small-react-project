'use client'
import React, { useEffect, useState } from 'react'

const LoadMore = () => {
    const [data, setData] = useState<any[]>([])
    const [chunkNumber, setChunkNumber] = useState(1);
    const loadPerPage = 10;
    const total = 100;


    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${loadPerPage}&skip=${(chunkNumber - 1) * loadPerPage}&select=title,price`)
        .then(res => res.json())
        .then((items) => {
            const newData = [...data,...items.products];
            setData(newData)
        });
    },[chunkNumber])

    console.log(chunkNumber * loadPerPage)

  return (
    <div className='flex items-center justify-center flex-col gap-2'>
        <h2>Load More Data</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center'>
            {data.map((item,id) => (
                <div key={id} className='text-xl text-white'>
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
        <button disabled={(loadPerPage  * chunkNumber) >= total} onClick={() => setChunkNumber(prev => prev + 1)} className='p-2 bg-slate-300 rounded-md hover:opacity-70 disabled:opacity-30 m-4'>Load More</button>
    </div>
  )
}

export default LoadMore