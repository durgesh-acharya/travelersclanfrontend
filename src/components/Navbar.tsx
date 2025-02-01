'use client';

import React, { useState } from 'react';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // To toggle between login and register form

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-navbarcolor border-t border-b border-gray-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-semibold text-white">TravelersClan</div>
          <div className="space-x-4">
          <button className="text-sm font-medium text-white">Build Your Own Package</button>
            {/* <button className="text-sm font-medium text-white">Flights</button>
            <button className="text-sm font-medium text-white">Hotels</button> */}
            <button className="text-sm font-medium text-white" onClick={openModal}>Login</button>
            {/* <button className="text-sm font-medium text-blue-600" onClick={openModal}>Register</button> */}
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-4">
              {isLogin ? "Login" : "Register"}
            </h2>

            {/* Form */}
            {isLogin ? (
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="border w-full p-2 mb-4 rounded-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border w-full p-2 mb-4 rounded-md"
                />
                <button className="w-full bg-blue-600 text-white p-2 rounded-md">Login</button>
                <div className="text-center mt-2">
                  <a href="#" className="text-sm text-blue-600">Forgot Password?</a>
                </div>
                <div className="text-center mt-4">
                  <p>Don&apos;t have an account? <span onClick={toggleForm} className="text-blue-600 cursor-pointer">Register</span></p>
                </div>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border w-full p-2 mb-4 rounded-md"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border w-full p-2 mb-4 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border w-full p-2 mb-4 rounded-md"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="border w-full p-2 mb-4 rounded-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border w-full p-2 mb-4 rounded-md"
                />
                <input
                  type="password"
                  placeholder="Retype Password"
                  className="border w-full p-2 mb-4 rounded-md"
                />
                <button className="w-full bg-blue-600 text-white p-2 rounded-md">Register</button>
                <div className="text-center mt-4">
                  <p>Already registered? <span onClick={toggleForm} className="text-blue-600 cursor-pointer">Login</span></p>
                </div>
              </div>
            )}
            <div className="text-center mt-4">
              <button onClick={closeModal} className="w-full bg-gray-300 p-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
