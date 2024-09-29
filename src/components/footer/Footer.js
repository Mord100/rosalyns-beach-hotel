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
    <footer className="bg-[#1d1d1b] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <a href='/' className="cursor-pointer mb-6">
              <img src={logo} alt="Logo" className="h-24" />
            </a>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Experience luxury and comfort at Rosalyn's Beach Hotel.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#E0B973]">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#E0B973] transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-[#E0B973] transition duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-[#E0B973] transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#E0B973]">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#E0B973] transition duration-300">Customer Support</a></li>
              <li><a href="#" className="hover:text-[#E0B973] transition duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-[#E0B973] transition duration-300">Site Map</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#E0B973]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="./" className="hover:text-[#E0B973] transition duration-300">Home</a></li>
              <li><a href="./facilities" className="hover:text-[#E0B973] transition duration-300">Facilities</a></li>
              <li><a href="./rooms" className="hover:text-[#E0B973] transition duration-300">Rooms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rosalyn's Beach Hotel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E0B973] transition duration-300">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E0B973] transition duration-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E0B973] transition duration-300">
              <FaPinterest className="text-xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E0B973] transition duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E0B973] transition duration-300">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Developed by <a href="https://divdynamics.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E0B973] transition duration-300">Divdynamics</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
