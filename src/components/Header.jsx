import React from 'react'
import MenueItem from './MenueItem';
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-6 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <MenueItem title='Home' address='/' Icon={AiFillHome}/>
            <MenueItem title='About' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
        <Link href={'/'} className='flex gap-1 items-center'>
            
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>MCAD</span>
            
            <span className='text-xl hidden sm:inline'>TEST</span>
           
        </Link>
      
    </div>
  )
}

export default Header;
