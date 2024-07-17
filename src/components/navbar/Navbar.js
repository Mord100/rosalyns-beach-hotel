import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex justify-between items-center w-full h-16 mx-auto fixed bg-white border-b z-50 px-8 md:px-20 md:text-gray-800">
      <a href='./' className="font-bold font-serif text-2xl bg-[#E0B973] pt-8 rounded-b-3xl p-5 cursor-pointer text-white">Rosalyn's
        <p className="text-sm pl-2 mx-auto font-normal">B e a c h H o t e l</p>
      </a>
      <ul className="hidden md:flex">
        <NavLink to='/home' className={({ isActive }) => isActive ? "px-4 cursor-pointer transition duration-600  font-bold" : "px-4 cursor-pointer"}><li>Home</li></NavLink>
        <NavLink to='/facilities' className={({ isActive }) => isActive ? "px-4 cursor-pointer transition duration-600 font-bold" : "px-4 cursor-pointer"}><li>Facilities</li></NavLink>
        <NavLink to='/rooms' className={({ isActive }) => isActive ? "px-4 cursor-pointer transition duration-600 font-bold" : "px-4 cursor-pointer"}><li>Rooms</li></NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "px-4 cursor-pointer transition duration-600 font-bold" : "px-4 cursor-pointer"}><li>Contact Us</li></NavLink>
      </ul>

      <div onClick={handleNav} className="md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      <ul className={`${nav ? 'fixed top-0 left-0 w-[60%] h-full bg-gray-100 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'} z-50 shadow-md text-gray-800`}>
        <h2 className='w-full text-2xl font-bold text-gray-800 font-serif m-4 cursor-pointer'>Rosalyn's
        <p className='text-sm pl-0.5 mx-auto font-normal'>Beach Hotel</p>
        </h2>
        <div className="px-8">
          <NavLink to='/home' className={({ isActive }) => isActive ? "p-4 border-b border-gray-300 cursor-pointer  font-bold" : "p-4 border-b border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Home</li></NavLink>
          <NavLink to='/facilities' className={({ isActive }) => isActive ? "p-4 border-b border-gray-300 cursor-pointer  font-bold" : "p-4 border-b border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Facilities</li></NavLink>
          <NavLink to='/rooms' className={({ isActive }) => isActive ? "p-4 border-b border-gray-300 cursor-pointer  font-bold" : "p-4 border-b border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Rooms</li></NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? "p-4 border-b border-gray-300 cursor-pointer  font-bold" : "p-4 border-b border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Contact Us</li></NavLink>
        </div>
        <div className="flex px-8 space-x-4 py-4">
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
