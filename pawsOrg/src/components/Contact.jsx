import React from 'react'
import bg1 from '../assets/Rayas cafes.jpg'
function Contact() {
  return (
    <div style={{ backgroundImage: `url(${bg1})` }}
    className="bg-cover bg-center h-screen items-center flex justify-center">
      <div className='bg-white w-auto text-center h-{500} p-8 '>
          <div className='text-6xl text-center m-4 bold'>Contact Us</div>
          <div className='text-lg'>Phone number -  1234567890 </div>
          <div className='text-lg'>Address -  123, Paul Street, Thane, Mumbai </div>
          <div className='text-lg'>email -  dummy@pawsOrg.com </div>
      </div>
    </div>
  )
}

export default Contact