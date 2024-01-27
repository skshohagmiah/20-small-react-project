import Link from 'next/link'
import React from 'react'

const Button = ({text,bg,link}:{text:string, bg:string,link:string}) => {
  return (
    <Link href={link} className={`${bg} p-5 text-xl text-center font-medium rounded-md hover:opacity-50`}>
        <button>{text}</button>
    </Link>
  )
}

export default Button