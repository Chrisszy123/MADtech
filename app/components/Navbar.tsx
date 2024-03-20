import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='flex justify-between w-full py-1 px-1 md:py-6 md:px-24'>
        <div>
            <Image src="/images/logo.png" alt='logo' width={150} height={150}/>
        </div>
        <div className='items-center justify-center hidden lg:flex' >
            <ul className='flex gap-[4rem] uppercase font-[20px] text-[#000C7C] '>
                <li><Link href="/" className='no-underline'>Home</Link></li>
                <li><Link href="/" className='no-underline'>About us</Link></li>
                <li><Link href="/" className='no-underline'>Meet Our Tutors</Link></li>
                <li><Link href="/" className='no-underline'>Book A Seat</Link></li>
                <li><Link href="/" className='no-underline'>Testimonials</Link></li>
            </ul>
        </div>
        <div className='flex items-center justify-center pr-8 cursor-pointer'>
            <Image src="/icons/search.png" alt='search-icon' width={20} height={20}/>
        </div>
    </nav>
  )
}

export default Navbar