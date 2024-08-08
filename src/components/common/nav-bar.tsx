import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-white dark:bg-black flex items-center justify-between border-b border-black dark:border-white m-1'>
        <div className='flex items-center ml-1'>
          <h1><span className='text-yellow-400'>Butter</span>log</h1>
        </div>
        <div className='flex-col mr-1'>
          <div className='bg-black dark:bg-white h-1 w-8 m-1 rounded'></div>
          <div className='bg-black dark:bg-white h-1 w-8 m-1 rounded'></div>
          <div className='bg-black dark:bg-white h-1 w-8 m-1 rounded'></div>
        </div>
    </div>
  )
}

export default NavBar