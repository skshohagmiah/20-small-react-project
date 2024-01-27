import React from 'react'

const Loader = () => {
  return (
    <div className='h-full flex items-center justify-center gap-2 flex-col'>
        <h2>Loader</h2>
        <div>
            <div className='relative w-12 h-12 rounded-full border-4 border-gray-400 animate-spin '>
                <div className='absolute -inset-1 w-12 h-12   border-t-4 border-r-4 rounded-full border-white'/>           
            </div>
        </div>
    </div>
  )
}

export default Loader