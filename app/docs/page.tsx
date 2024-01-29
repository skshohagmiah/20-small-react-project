'use client'
import React, { useEffect, useRef, useState } from 'react'
import {data} from '@/app/docs/data'
import Link from 'next/link'

const MdnDocs = () => {

    const [visible, setVisible] = useState('');
    const sectionRefs = useRef<any[]>([])


    console.log(sectionRefs.current)

    useEffect(() => {
        let observer = new IntersectionObserver((items) => {
            items.map(item => {
                if(item.isIntersecting){
                    setVisible(item.target.id)
                }
            })
        },{threshold: .3});

        sectionRefs.current.map(section => observer.observe(section))
    },[])

  return (
    <div className='flex items-center justify-center gap-2 flex-col bg-white/80'>
        <div className='flex gap-4 w-[80%] text-black/90 relative'>
            <div className='fixed top-8 left-4 p-2'>
                {data.map(item => (
                    <Link href={`#${item.title}`} 
                    className={`${visible === item.title ? 'bg-slate-600 text-white': 'bg-slate-300'} whitespace-nowrap mt-2 block p-2 rounded-sm font-light text-2xl`}
                     key={item.title}>{item.title}</Link>
                ))}
            </div>
            <div className='ml-[15rem]'>
                {data.map((item,ind) => (
                    <section ref={(elem) => sectionRefs.current[ind] = elem} id={item.title} key={ind} className='mt-4 min-h-screen'>
                        <h3 className='text-2xl m-4 text-center'>{item.title}</h3>
                        <small className='tracking-loose text-lg'>{item.content}</small>
                    </section>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MdnDocs