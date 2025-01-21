import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Set the active menu based on the current route
  const getActiveMenu = () => {
    if (location.pathname === "/restaurants") return "restaurants";
    if (location.pathname === "/groceries") return "groceries";
    if (location.pathname === "/flowers") return "others";
    return "home";
  };

  const activeMenu = getActiveMenu();

  return (
    <div className="navbar flex justify-between items-center py-5 px-5 lg:px-28">
      {/* Logo */}
      <Link to="/">
        <h2 className='font-extrabold text-orange-500 text-2xl'>EthioDelivery.</h2>
      </Link>

      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button
          className="text-gray-600"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 mt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu (Desktop) */}
      <ul className="navbar-menu hidden lg:flex gap-5 text-xl text-gray-600">
        <li>
          <Link
            to="/"
            className={`${
              activeMenu === "home" ? "border-b-2 border-orange-500 font-bold text-orange-500" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/restaurants"
            className={`${
              activeMenu === "restaurants" ? "border-b-2 border-orange-500 font-bold text-orange-500" : ""
            }`}
          >
            Restaurants
          </Link>
        </li>
        <li>
          <Link
            to="/groceries"
            className={`${
              activeMenu === "groceries" ? "border-b-2 border-orange-500 font-bold text-orange-500" : ""
            }`}
          >
            Groceries
          </Link>
        </li>
        <li>
          <Link
            to="/flowers"
            className={`${
              activeMenu === "others" ? "border-b-2 border-orange-500 font-bold text-orange-500" : ""
            }`}
          >
            Others
          </Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right flex items-center gap-10">
        {/* Paper Icon */}
        <div className="navbar-note-icon relative">
          <Link to="/myorders">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#445770"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 2H18a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zM6 2v16h12V2H6z"
              />
            </svg>
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="navbar-cart-icon relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" className="w-8" />
          </Link>
        </div>

        {/* Sign In Button */}
        <Link to="/signin">
          <button className="signbutton border border-red-500 rounded-full px-8 py-2 text-red-500 hover:bg-red-100 transition duration-300">
            Sign In
          </button>
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Navigation Menu (Mobile) */}
      <ul
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 left-0 right-0 bg-white p-8 shadow-lg z-50 transition-transform ease-in-out duration-300`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={closeMenu}
            className="text-gray-600 text-3xl"
          >
            &times;
          </button>
        </div>
        <li>
          <Link
            to="/"
            onClick={closeMenu}
            className={`${
              activeMenu === "home" ? "border-b-2 border-orange-500 font-bold text-orange-500" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/restaurants"
            onClick={closeMenu}
            className={`${
              activeMenu === "restaurants" ? "border-b-2 border-orange-500 font-bold text-orange-500" : ""
            }`}
          >
            Restaurants
          </Link>
        </li>
        <li>
          <Link
            to="/groceries"
            onClick={closeMenu}
            className={`${
              activeMenu === "groceries" ? "border-b-2 border-orange-500 font-bold text-orange-500" : ""
            }`}
          >
            Groceries
          </Link>
        </li>
        <li>
          <Link
            to="/flowers"
            onClick={closeMenu}
            className={`${
              activeMenu === "others" ? "border-b-2 border-orange-500 font-bold text-orange-500" : ""
            }`}
          >
            Others
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
