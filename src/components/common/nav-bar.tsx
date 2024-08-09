"use client";

import React, { useState } from 'react'
import Link from 'next/link'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white dark:bg-black flex items-center justify-between border-b border-black dark:border-white sticky top-0'>
      <div className='flex items-center m-1 h-[50px]'>
        <Link href='/'><h1><span className='text-yellow-400'>Butter</span>log</h1></Link>
      </div>
      <div className='flex-col mr-1 group cursor-pointer' onClick={toggleMenu}>
        <div className='bg-black dark:bg-white h-1 w-8 m-1 rounded group-hover:bg-yellow-400'></div>
        <div className='bg-black dark:bg-white h-1 w-8 m-1 rounded group-hover:bg-yellow-400'></div>
        <div className='bg-black dark:bg-white h-1 w-8 m-1 rounded group-hover:bg-yellow-400'></div>
      </div>
      {isOpen && (
        <div className="absolute top-[59px] h-auto w-screen bg-white dark:bg-black border-b border-black dark:border-white">
          <ul className="space-y-2 m-1">
            <Link href='/'><li>Home</li></Link>
            <Link href='/projects'><li>Projects</li></Link>
            <Link href='/passions'><li>Passions</li></Link>
            <Link href='/adventures'><li>Adventures</li></Link>
            <Link href='https://ethanbutterworth.co.uk/' target='_blank'><li>About me (external link)</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
