import React from 'react'


const categoryData = [
    "html",
    "css",
    "javascript",
    "typescript",
    "reactjs",
    "nextjs",
    "prisma",
  ];

const HorizontalScrolling = () => {
  return (
    <div className='h-full flex items-center justify-center gap-3 flex-col'>
        <h2>horizontal Scrolling</h2>
        <div className='overflow-hidden mask-image max-w-[600px] mx-auto'>
            <div className='flex gap-4 items-center  aninate'>
                {categoryData.map(cate => (
                    <span className='p-2 bg-slate-300 rounded-md' key={cate}>{cate}</span>
                ))}
                 {categoryData.map(cate => (
                    <span className='p-2 bg-slate-300 rounded-md' key={cate}>{cate}</span>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default HorizontalScrolling