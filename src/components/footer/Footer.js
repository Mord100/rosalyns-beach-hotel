import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-serif font-bold">
                Rosalyn's
                <p className="text-sm font-normal">B e a c h H o t e l</p>
              </h3>
            </div>
            <ul className="space-y-2">
              <li>Address | </li>
              <li>Phone</li>
              <li>Rosalynsbeachhotel@gmail.com</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>About</li>
              <li>Contact</li>
              <li>Policy</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Support</li>
              <li>FAQ</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Support</li>
              <li>FAQ</li>
              <li>Site Map</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
