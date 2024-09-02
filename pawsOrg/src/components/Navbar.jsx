/* eslint-disable no-unused-vars */
import React from 'react';
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="bg-amber-900 p-3 h-{18}">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
    
        <h1 className='text-white text-center lg:absolute lg:left-4 text-xl font-mono'><FontAwesomeIcon icon={faPaw} /> Paws Org.</h1>
        <br/>
     
        {/* <ul className="flex  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"> */}
        <ul className="flex flex-col lg:flex-row mt-4 font-medium lg:space-x-8 lg:mt-0">
        <li>
          <Link to="/" className='text-white rounded-2xl p-1 hover:text-black hover:bg-white' >
          Home
          </Link>
        </li>

        <li>
          <Link className='text-white rounded-2xl p-1 hover:text-black hover:bg-white' to="/pets">
          Pets
          </Link>
        </li>

        <li>
          <Link className='text-white rounded-2xl p-1 hover:text-black hover:bg-white' to="/about">
          About Us
          </Link>
        </li>

        <li>
          <Link className='text-white rounded-2xl p-1 hover:text-black hover:bg-white' to="/contact">
          Contact
          </Link>
        </li>
        
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
