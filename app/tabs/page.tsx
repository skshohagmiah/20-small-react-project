'use client'
import React, { useState } from 'react'


const tabsData = [
    {
        id:1,
        title:'title one',
        content:'this is content one,, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam blanditiis magni, dolorum hic perspiciatis nesciunt impedit, error, sit tempore ut sunt! Ipsa unde ipsam eius ex voluptatibus sed voluptatum!'
    },
    {
        id:2,
        title:'title two',
        content:'this is content two, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam blanditiis magni, dolorum hic perspiciatis nesciunt impedit, error, sit tempore ut sunt! Ipsa unde ipsam eius ex voluptatibus sed voluptatum!'
    },
    {
        id:3,
        title:'title three',
        content:'this is content three, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam blanditiis magni, dolorum hic perspiciatis nesciunt impedit, error, sit tempore ut sunt! Ipsa unde ipsam eius ex voluptatibus sed voluptatum!'
    },
    {
        id:4,
        title:'title four',
        content:'this is content four, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam blanditiis magni, dolorum hic perspiciatis nesciunt impedit, error, sit tempore ut sunt! Ipsa unde ipsam eius ex voluptatibus sed voluptatum!'
    },
]


const Tabs = () => {

    const [selectedAccordion, setSelectedAccordion] = useState(0);

  return (
    <div className='h-full w-full flex items-center justify-center flex-col gap-4'>
        <h1>Tabs</h1>
        <div className='bg-slate-200 p-2'>
            <div className='flex gap-2 items-center justify-center bg-slate-300 text-xl'>
                {tabsData.map((tab, index) => (
                    <p onClick={() => setSelectedAccordion(index)} className={`${index === selectedAccordion ? 'bg-gray-400' : ''} p-2 rounded-md cursor-pointer`} key={tab.id}>{tab.title}</p>
                ))}
            </div>
            <div className='p-4 text-xl w-[40rem]'>
                {tabsData[selectedAccordion].content}
            </div>
        </div>
    </div>
  )
}

export default Tabs

