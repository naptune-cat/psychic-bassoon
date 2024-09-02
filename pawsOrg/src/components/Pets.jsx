import React from 'react'
import c3 from '../assets/c3.png'
import d1 from '../assets/d1.webp'
import p1 from '../assets/p1.png'

function Pets() {
  return (
    <div className='flex items-center justify-center mt-10'>
      <div className='bg-transparent m-5 h-[250px] w-[200px] rounded-xl overflow-hidden border-2 border-transparent  hover:border-white'>
        <img src={c3} className='w-full h-full object-cover transition-transform duration-300 hover:scale-110 ease-in-out transform  ' />
      </div>
      <div className='bg-transparent m-5 h-[250px] w-[200px] rounded-xl overflow-hidden border-2 border-transparent  hover:border-white'>
        <img src={d1} className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform   hover:scale-110 ' />
      </div>
      <div className='bg-transparent m-5 h-[250px] w-[200px] rounded-xl overflow-hidden border-2 border-transparent  hover:border-white'>
        <img src={p1} className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform   hover:scale-110' />
      </div>
    </div>
  )
}

export default Pets