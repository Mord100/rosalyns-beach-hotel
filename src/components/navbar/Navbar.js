import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { TbMenuDeep } from "react-icons/tb";

import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Adjust the path as necessary

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex justify-between items-center w-full h-16 mx-auto text-sm fixed bg-white border-b z-50 px-4 md:px-20 md:text-gray-800">
      <Link to='/' className="pt-8 rounded-b-3xl py-5 cursor-pointer">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>
      <ul className="hidden md:flex">
        <NavLink to='/home' className={({ isActive }) => isActive ? "px-4 cursor-pointer transition duration-600  font-bold" : "px-4 cursor-pointer"}><li>Home</li></NavLink>
        <NavLink to='/facilities' className={({ isActive }) => isActive ? "px-4 cursor-pointer transition duration-600 font-bold" : "px-4 cursor-pointer"}><li>Facilities</li></NavLink>
        <NavLink to='/rooms' className={({ isActive }) => isActive ? "px-4 cursor-pointer transition duration-600 font-bold" : "px-4 cursor-pointer"}><li>Rooms</li></NavLink>
        <NavLink to='/restaurant' className={({ isActive }) => isActive ? "px-4 cursor-pointer transition duration-600 font-bold" : "px-4 cursor-pointer"}><li>Restaurant</li></NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "px-4 cursor-pointer transition duration-600 font-bold" : "px-4 cursor-pointer"}><li>Contact Us</li></NavLink>
      </ul>

      <div onClick={handleNav} className="md:hidden z-50">
        {nav ? <AiOutlineClose size={20} /> : <TbMenuDeep size={20} />}
      </div>

      <div className={nav ? ' fixed inset-0 transition-opacity duration-300' : 'opacity-0 fixed inset-0 pointer-events-none transition-opacity duration-300'} onClick={handleNav}></div>

      <div className={`fixed top-0 ${nav ? 'left-0' : '-left-full'} w-[60%] h-full bg-white transition-all duration-500 ease-in-out z-50`}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <Link to='/' className='w-full m-4 cursor-pointer' onClick={() => setNav(false)}>
              <img src={logo} alt="Logo" className="h-12 pl-4" />
            </Link>
            <div className="px-8 flex flex-col space-y-6 list-none">
              <NavLink to='/home' className={({ isActive }) => isActive ? "py-2 border-gray-300 cursor-pointer font-bold" : "py-2 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Home</li></NavLink>
              <NavLink to='/facilities' className={({ isActive }) => isActive ? "py-2 border-gray-300 cursor-pointer font-bold" : "py-2 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Facilities</li></NavLink>
              <NavLink to='/rooms' className={({ isActive }) => isActive ? "py-2 border-gray-300 cursor-pointer font-bold" : "py-2 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Rooms</li></NavLink>
              <NavLink to='/restaurant' className={({ isActive }) => isActive ? "py-2 border-gray-300 cursor-pointer font-bold" : "py-2 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Restaurant</li></NavLink>
              <NavLink to='/contact' className={({ isActive }) => isActive ? "py-2 border-gray-300 cursor-pointer font-bold" : "py-2 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Contact Us</li></NavLink>
            </div>
          </div>
          <div className="flex px-8 space-x-4 py-8 border-t">
            <FaFacebook className='text-2xl cursor-pointer hover:scale-150 transition duration-300' />
            <FaInstagram className='text-2xl cursor-pointer hover:scale-150 transition duration-300' />
            <FaTwitter className='text-2xl cursor-pointer hover:scale-150 transition duration-300' />
            <FaPinterest className='text-2xl cursor-pointer hover:scale-150 transition duration-300' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
