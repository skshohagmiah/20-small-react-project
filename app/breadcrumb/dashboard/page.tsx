import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <Link className='underline text-white' href={'/breadcrumb/dashboard/analytics'}>Analytice</Link>
    </div>
  )
}

export default DashboardPage