import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { images } from '../../constants';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='z-50 border'>
      <div className='fixed flex items-center justify-between w-full px-8 py-4 bg-[#edf2f8]'>
        <div class="font-bold text-blue-900">
          <h1 class="text-xl xl:text-4xl">AVISHKA </h1>
        </div>
        <ul className='flex gap-10 '>
          {['Home', 'about', 'work', 'skills', 'certificate', 'contact'].map((item) => (
            <li key={item} className='flex flex-col items-center justify-center max-lg:hidden'>
              <HashLink to={`#${item}`} className='text-blue-900 uppercase transition-all duration-300 hover:text-gray-950'>{item}</HashLink>
            </li>
          ))}
          <li className={`lg:hidden rounded-full ${isMenuOpen ? 'hidden' : 'flex flex-col items-end '}`} onClick={toggleMenu}><FaBars /></li>
        </ul>
      </div>
      <div className={`duration-700 ${isMenuOpen ? 'flex justify-end w-full h-screen fixed translate-x-0' : 'translate-x-full fixed right-0 top-0 h-sreen object-cover'}`}>
        <div style={{ backgroundImage: `url(${images.bgIMG})`, backgroundSize: 'cover' }} className={` p-4 px-8 z-50  h-screen`}>
          <ul className='flex flex-col gap-6 w-[300px] max-md:w-[200px]'>
            <li className='flex flex-col items-end ' onClick={toggleMenu}><GrClose /></li>
            {['Home', 'about', 'work', 'skills', 'certificate', 'contact'].map((item) => (
              <li key={item} className='flex flex-col items-start '>
                 <HashLink to={`#${item}`} className='text-blue-900 uppercase transition-all duration-300 hover:text-gray-950'>{item}</HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
