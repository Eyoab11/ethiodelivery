import React, { useState } from 'react';
import { menu_list } from '../assets/assets.js';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FoodDisplay = ({ category, setCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define items per page based on screen size
  const itemsPerPage = {
    small: 2, // Small screens (mobile)
    medium: 3, // Medium screens (tablet)
    large: 6, // Large screens (desktop)
    extraLarge: 8, // Extra-large screens (large desktops)
  };

  // Function to get items per page based on the window width
  const getItemsPerPage = () => {
    if (window.innerWidth >= 1200) {
      return itemsPerPage.extraLarge;
    } else if (window.innerWidth >= 1024) {
      return itemsPerPage.large;
    } else if (window.innerWidth >= 768) {
      return itemsPerPage.medium;
    } else {
      return itemsPerPage.small;
    }
  };

  // Handle Next Button click
  const handleNext = () => {
    const maxIndex = menu_list.length - getItemsPerPage();
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + getItemsPerPage());
    }
  };

  // Handle Prev Button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - getItemsPerPage());
    }
  };

  return (
    <div className="mt-10 px-4" id="explore-menu">
      <h1 className="text-3xl font-bold text-center mb-8">Explore our menu</h1>

      <div className="explore-menu-list flex justify-between items-center gap-6 text-center mt-[20px] mx-auto">
        <div className="flex items-center ml-16">
          <button
            onClick={handlePrev}
            className="text-orange-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
        </div>

        {/* Displaying the items */}
        <div className="flex gap-6 overflow-hidden">
          {menu_list.slice(currentIndex, currentIndex + getItemsPerPage()).map((item, index) => (
            <div
              key={index}
              onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
              className="explore-menu-list-item flex flex-col items-center"
            >
              <img
                className={`w-[12vw] min-w-[100px] max-w-[150px] cursor-pointer rounded-full transition-all duration-200 ${
                  category === item.menu_name ? 'border-4 border-tomato p-[2px]' : ''
                } hover:border-4 hover:border-orange-500 hover:scale-105`} // Hover effect added
                src={item.menu_image}
                alt={item.menu_name}
                style={{
                  objectFit: 'cover', // Ensures the image fits the circle perfectly
                  aspectRatio: '1 / 1', // Keeps the aspect ratio as 1:1 (circle)
                }}
              />
              <p className="mt-[10px] text-[#747474] text-[max(1.2vw,14px)] cursor-pointer">{item.menu_name}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center mr-16">
          <button
            onClick={handleNext}
            className="text-orange-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            disabled={currentIndex + getItemsPerPage() >= menu_list.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
