import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoMdCloseCircle } from "react-icons/io";
import { TbGps } from "react-icons/tb";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";


Modal.setAppElement('#root');

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="px-4 mx-auto max-w-screen-xl flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#1d1d1b] mb-6">Get in Touch</h2>
            <h3 className="text-2xl font-semibold text-[#1d1d1b] mb-4">Contact Details</h3>
            <p className="flex items-center mt-2 text-gray-600">
              <FaEnvelope className="mr-2" />info@rosalynsbeachhotel.com
            </p>
            <p className="flex items-center mt-2 text-gray-600">
              <FaAddressBook className="mr-2" />reservations@rosalynsbeachhotel.com
            </p>
            <p className="flex items-center text-gray-600 mt-2">
              <FaPhone className="mr-2" /> +265 888 22 66 65
            </p>
            <p className="mt-2 text-gray-600">Mangochi, Malawi</p>
            <button
              className="mt-6 py-2 px-4 flex items-center cursor-pointer bg-[#E0B973] text-white  hover:bg-[#1d1d1b] transition duration-300"
              onClick={openModal}
            >
              <TbGps size={20} className="mr-2" /> View Map
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form action="#" className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#E0B973]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#E0B973]"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#E0B973]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#E0B973]"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 text-sm font-medium text-white bg-[#E0B973] hover:bg-[#1d1d1b] transition duration-300 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="z-50">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Map Modal"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white p-6 shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <IoMdCloseCircle size={30} onClick={closeModal} className="absolute cursor-pointer top-4 right-4 text-[#1d1d1b] hover:text-[#E0B973]"/>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15465.18388345875!2d35.1113292!3d-14.2942283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18df070069221845%3A0x79ef1ffa09741f2c!2sRosalyn%E2%80%99s%20Beach%20Hotel!5e0!3m2!1sen!2smw!4v1727440595156!5m2!1sen!2smw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ContactUs;
