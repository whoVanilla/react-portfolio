import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
        <a href="">
            <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt=''/>
        </a>
        <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div>
            <a href="#contact">Contact <Image src={assets.arrow_icon} className='w-3' alt=''/></a>
        </div>
    </nav>
    </>
  )
}

export default Navbar