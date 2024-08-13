import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from '../../assets/logo2.png';


function Footer() {
  return (
    <div className="bg-[#1d1d1b] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
          <div href='/' className="cursor-pointer">
        <img src={logo} alt="Logo" className="h-20" />
        </div>
            {/* <ul className="space-y-2">
              <li>Address: </li>
              <li>Phone: </li>
              <li>Email: Rosalynsbeachhotel@gmail.com</li>
            </ul> */}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-400 transition duration-300">About</li>
              <li className="hover:text-gray-400 transition duration-300">Contact</li>
              <li className="hover:text-gray-400 transition duration-300">Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-400 transition duration-300">Support</li>
              <li className="hover:text-gray-400 transition duration-300">FAQ</li>
              <li className="hover:text-gray-400 transition duration-300">Site Map</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-400 transition duration-300">Home</li>
              <li className="hover:text-gray-400 transition duration-300">Facilities</li>
              <li className="hover:text-gray-400 transition duration-300">Rooms</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t text-sm border-gray-700 pt-4 text-center">
          <p className="hover:text-gray-400 transition duration-300">
            Privacy Policy | Developed By Divdynamics
          </p>
          <p>&copy; {new Date().getFullYear()} Rosalyn's Beach Hotel. All rights reserved.</p>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl hover:text-gray-400 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
