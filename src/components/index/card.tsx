import React from 'react'
import Link from 'next/link'

const Card = () => {
  
  const items =[
    {link: '', image: '', title: 'Projects', text: 'Sample text.'},
    {link: '', image: '', title: 'Hobbies', text: 'Sample text.'},
    {link: '', image: '', title: 'Journies', text: 'Sample text.'}
  ];

  return (
    <div className='flex flex-col m-10 space-y-10'>
      {items.map((item, index) => (
        <Link key={index} href={item.link} className='w-[300px] h-auto'>
            <img src={item.image} alt={item.title} className='bg-yellow-400 w-full h-[300px] object-cover' />
            <div className='mx-1'>
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <p>{item.text}</p>
            </div>
        </Link>
      ))}
    </div>
  );
};

export default Card