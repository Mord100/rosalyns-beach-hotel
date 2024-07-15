import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className={`flex bg-white justify-between border-b fixed items-center w-full h-16 mx-auto z-50 md:px-20 px-8 md:text-gray-800 ${nav ? '' : 'bg-white'}`}>
      <h2 className={`font-bold  font-serif text-2xl  bg-[#E0B973] pt-8 rounded-b-3xl p-5 cursor-pointer ${nav ? 'text-white' : 'text-white'}`}>Rosalyn's
      <p className="text-sm pl-2 mx-auto font-normal">B e a c h H o t e l</p>
      </h2>
      <ul className='hidden  md:flex'>
        <Link to='home' smooth={true} duration={500} className="px-4   cursor-pointer"><li>Home</li></Link>
        <Link to='destinations' smooth={true} duration={500} className="px-4 cursor-pointer"><li>Facilities</li></Link>
        <Link to='carousel' smooth={true} duration={500} className="px-4 cursor-pointer"><li>Rooms</li></Link>
        <Link to='search' smooth={true} duration={500} className="px-4 cursor-pointer"><li>Contact Us</li></Link>
      </ul>

      <div onClick={handleNav} className='md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      <ul className={`${nav ? 'fixed top-0   left-0 w-[60%] h-full bg-gray-100 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'} z-50 shadow-md text-gray-800`}>
        <h2 className='w-full text-2xl font-bold text-gray-800 m-4 cursor-pointer'>Rosalyn's</h2>
        <div className='px-8'>

        <Link to='home' smooth={true} duration={500} className="p-4 border-b border-gray-300 cursor-pointer" onClick={() => setNav(false)}><li>Home</li></Link>
        <Link to='destinations' smooth={true} duration={500} className="p-4 border-b border-gray-300 cursor-pointer" onClick={() => setNav(false)}><li>Facilities</li></Link>
        <Link to='carousel' smooth={true} duration={500} className="p-4 border-b border-gray-300 cursor-pointer" onClick={() => setNav(false)}><li>Rooms</li></Link>
        <Link to='search' smooth={true} duration={500} className="p-4 border-b border-gray-300 cursor-pointer" onClick={() => setNav(false)}><li>Contact Us</li></Link>

        </div>
        <div className='flex px-8 space-x-4 py-4'>
          <FaFacebook className='text-2xl cursor-pointer hover:scale-150 transition duration-300' />
          <FaInstagram className='text-2xl cursor-pointer hover:scale-150 transition duration-300' />
          <FaTwitter className='text-2xl cursor-pointer hover:scale-150 transition duration-300' />
          <FaPinterest className='text-2xl cursor-pointer hover:scale-150 transition duration-300' />
          <FaYoutube className='text-2xl cursor-pointer hover:scale-150 transition duration-300' />
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
