import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
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
    <div className="flex justify-between items-center w-full h-16 mx-auto text-sm fixed bg-white border-b z-50 px-8 md:px-20 md:text-gray-800">
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

      <div onClick={handleNav} className="md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      <ul className={`${nav ? 'fixed top-0 left-0 w-[60%] h-full bg-gray-100 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'} z-50 shadow-md text-gray-800`}>
        <Link to='/' className='w-full m-4 cursor-pointer'>
          <img src={logo} alt="Logo" className="h-12 pl-4" />
        </Link>
        <div className="px-8">
          <NavLink to='/home' className={({ isActive }) => isActive ? "p-4 border-gray-300 cursor-pointer  font-bold" : "p-4 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Home</li></NavLink>
          <NavLink to='/facilities' className={({ isActive }) => isActive ? "p-4 border-gray-300 cursor-pointer  font-bold" : "p-4 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Facilities</li></NavLink>
          <NavLink to='/rooms' className={({ isActive }) => isActive ? "p-4 border-gray-300 cursor-pointer  font-bold" : "p-4 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Rooms</li></NavLink>
          <NavLink to='/restaurant' className={({ isActive }) => isActive ? "p-4 border-gray-300 cursor-pointer  font-bold" : "p-4 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Restaurant</li></NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? "p-4 border-gray-300 cursor-pointer  font-bold" : "p-4 border-gray-300 cursor-pointer"} onClick={() => setNav(false)}><li>Contact Us</li></NavLink>
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
