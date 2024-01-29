import Link from 'next/link'
import React from 'react'

const BreadCrumbPage = () => {
  return (
    <div className='flex flex-col gap-4 mt-4 text-white'>
        <Link className='underline' href={'/breadcrumb/products'}>Products</Link>
        <Link className='underline' href={'/breadcrumb/dashboard'}>Dashboard</Link>
    </div>
  )
}

export default BreadCrumbPage