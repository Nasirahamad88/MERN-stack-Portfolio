

import React from 'react';

import { FaFacebook,FaLinkedinIn,FaGithub } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative w-[80%] mx-auto">
      <h1 className='flex flex-col text-center w-full mt-10 sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900'>Contact Us</h1>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
  width="90%"
  height="100%"
  className="absolute inset-0"
  frameBorder="0"
  title="map"
  marginHeight="0"
  marginWidth="0"
  scrolling="no"
  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Dhaka,Bangladesh&ie=UTF8&t=&z=14&iwloc=B&output=embed"
  style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
  <div className="lg:w-1/2 px-6">
    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
    <p className="mt-1">Dhaka, Bangladesh</p>
  </div>
  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
    <a href="mailto:nasirahamad017@gmail.com" className="text-indigo-500 leading-relaxed lg:pr-10 md:pr-0">nasirahamad017@gmail.com</a>
    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
    <p className="leading-relaxed">+880-1759277464</p>
    <div className="flex flex-wrap mt-4">
      <a href="https://www.linkedin.com/in/nasirdeveloper/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 mr-2 mb-2">
        <FaLinkedinIn />
      </a>
      <a href="https://www.facebook.com/WebServeHub/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 mr-2 mb-2">
        <FaFacebook />
      </a>
      <a href="https://github.com/Nasirahamad88" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 mb-2">
        <FaGithub />
      </a>
    </div>
  </div>
</div>

        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Give me some feedback also some advices</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
