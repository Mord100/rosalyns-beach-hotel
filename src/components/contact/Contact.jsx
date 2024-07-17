import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoMdCloseCircle } from "react-icons/io";
import { TbGps } from "react-icons/tb";

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
    <section className="bg-slate-100 py-12">
      <div className="px-4 mx-auto max-w-screen-lg flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Contact Details</h3>
            <p className="mt-2 text-gray-600">Email: contact@example.com</p>
            <p className="text-gray-600">Phone: +123 456 7890</p>
            <p
              className="mt-4 py-2 gap-2 flex cursor-pointer text-sm font-semibold text-gray-800"
              onClick={openModal}
            >
              <TbGps size={20} className='' /> View Map
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form action="#" className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="+123 456 7890"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Leave a message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-6 text-sm font-medium text-white bg-gray-800 hover:bg-opacity-90 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="z-50 sm:p-8">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Map Modal"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <IoMdCloseCircle size={30} onClick={closeModal} className="absolute cursor-pointer top-4 right-4 text-gray-800"/>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509619!2d144.95373531531824!3d-37.8162799797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770d1a4c9e32d!2sVictoria!5e0!3m2!1sen!2sau!4v1649392258327!5m2!1sen!2sau"
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
