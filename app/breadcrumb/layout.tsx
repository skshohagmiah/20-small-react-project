import React from 'react'
import BreadCrumb from './BreadCrumb'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='p-4 text-xl'>
        <BreadCrumb />
        <div>
            {children}
        </div>
    </div>
  )
}

export default layout