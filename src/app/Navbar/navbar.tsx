"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div>
        {/* Top Banner */}
        <div className="w-full h-10 bg-black flex justify-center items-center">
          <div className="w-full max-w-screen-xl flex justify-center items-center px-4">
            <h1 className="text-white text-sm text-center hover:scale-105 transition-transform duration-300"><b>
              Sign up and get 20% off your first order.{" "}
              
                <span className="inline-block hover:underline hover:scale-110 transition-transform duration-300">
                  Sign Up Now
                </span>
             
            </b></h1>
          </div>
        </div>

        {/* Navbar */}
        <div className="w-full h-auto bg-white flex justify-center items-center">
          <div className="bg-white shadow-sm w-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
              {/* Logo Section */}
              <div className="flex items-center space-x-4">
                <h1 className="text-black text-xl md:text-2xl xl:text-3xl font-extrabold hover:text-emerald-400 hover:scale-125 hover:underline">
                  SHOP.CO
                </h1>
              </div>

              {/* Hamburger Button */}
              <div className="md:hidden">
                <button
                  type="button"
                  aria-label="Toggle menu"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="text-black text-3xl hover:text-orange-500 focus:outline-none"
                >
                  ☰
                </button>
              </div>

              {/* Navigation Links */}
              <div
                className={`md:flex items-center md:space-x-6 text-black font-medium ${
                  menuOpen ? "block" : "hidden"
                } absolute md:static bg-white left-0 top-24 w-full md:w-auto z-10`}
              >
                {/* Dropdown for Shop */}
                <div className="relative md:static w-full md:w-auto">
                  <label htmlFor="shop-dropdown" className="sr-only">
                    Select Shop Category
                  </label>
                  <select
                    id="shop-dropdown"
                    className="block md:inline bg-white border border-gray-300 text-black font-bold hover:text-purple-700 focus:outline-none focus:border-purple-400 rounded px-4 py-2 w-full md:w-auto cursor-pointer"
                    defaultValue="Shop"
                  >
                    <option value="Shop" disabled>
                      Shop
                    </option>
                    <option value="Men">
                      <b>Men</b>
                    </option>
                    <option value="Women">
                      <b>Women</b>
                    </option>
                    <option value="Electronics">
                      <b>Electronics</b>
                    </option>
                    <option value="Toys">
                      <b>Toys</b>
                    </option>
                    <option value="Accessories">
                      <b>Accessories</b>
                    </option>
                  </select>
                </div>

                {/* Other Links */}
                <a
                  href="#"
                  className="block md:inline hover:text-blue-600 font-bold hover:scale-110 hover:underline px-4 py-2 md:px-0"
                >
                  On Sale
                </a>
                <a
                  href="#"
                  className="block md:inline  hover:text-blue-600 font-bold hover:scale-110 hover:underline px-4 py-2 md:px-0"
                >
                  New Arrivals
                </a>
                <a
                  href="#"
                  className="block md:inline hover:text-blue-600 font-bold hover:scale-110 hover:underline px-4 py-2 md:px-0"
                >
                  Brands
                </a>

                {/* Added items to the hamburger menu */}
                {/* Search Bar */}
                <div className="relative mt-4 md:mt-0">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="pl-10 pr-4 py-2 w-72 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none hover:scale-105 transition-transform"
                  />
                  <svg
                    className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                {/* Icons (Cart, Profile, Contact) */}
                <div className="flex items-center space-x-4 mt-4 md:mt-0 ">
                  <Image
                    className="w-6 h-6 cursor-pointer hover:scale-125 ml-24 "
                    src="/trolly1.png"
                    alt="Cart"
                    height={50}
                    width={50}
                  />
                  <Image
                    className="w-6 h-6 cursor-pointer hover:scale-125 "
                    src="/man1.png"
                    alt="Profile"
                    height={50}
                    width={50}
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
