'use client';
import React, { useEffect, useState } from 'react'

const ShowNumberSlowly = () => {
    const [revenue, setRevenue] = useState(0);
    const [sales, setSales] = useState(0);
    const [request, setRequest] = useState(0);


    useEffect(() => {
        const limit = 3000;
        const intervalId = setInterval(() => {
            if(revenue >= limit){
                clearInterval(intervalId);
            }else{
                setRevenue(prev => prev + 85)
                setSales(prev => prev + 50)
                setRequest(prev => prev + 72)
            }

        },100)

        return () => clearInterval(intervalId)
    },[revenue])

  return (
    <div className='h-full flex flex-col gap-2 items-center justify-center'>
        <h2>Show Number Slowly</h2>
        <div className='flex gap-4 rounded-md bg-white p-4 shadow-md'>
            <div className='py-2 px-6 rounded-md bg-slate-200'>
                <p>Revenue</p>
                <p className='text-2xl text-center font-semibold mt-2'>{revenue}</p>
            </div>
            <div className='py-2 px-6 rounded-md bg-slate-200'>
                <p>Sales</p>
                <p className='text-2xl text-center font-semibold mt-2'>{sales}</p>
            </div>
            <div className='py-2 px-6 rounded-md bg-slate-200'>
                <p>Requests</p>
                <p className='text-2xl text-center font-semibold mt-2'>{request}</p>
            </div>
        </div>
    </div>
  )
}

export default ShowNumberSlowly