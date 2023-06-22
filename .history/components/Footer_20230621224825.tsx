import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex justify-center items-center">
                <Image src='/logo.svg' width={100} height={18} className='object-contain' alt='car hub logo' />
    </footer>
  )
}

export default Footer