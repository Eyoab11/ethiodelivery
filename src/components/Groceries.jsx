import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Plus icon from React Icons
import image1 from '../assets/Groceries/apple.jpg';
import image2 from '../assets/Groceries/milk.jpg';
import image3 from '../assets/Groceries/bread.jpg';
import image4 from '../assets/Groceries/cheese.jpg';
import image5 from '../assets/Groceries/potatoes.jpg';
import image6 from '../assets/Groceries/tomatoes.jpg';
import image7 from '../assets/Groceries/corn.jpg';
import image8 from '../assets/Groceries/cabbage.jpg';

const Groceries = () => {
  const sampleData = [
    {
      image: image1,
      name: 'Apple',
      price: 50,
    },
    {
      image: image2,
      name: 'Milk',
      price: 30,
    },
    {
      image: image3,
      name: 'Bread',
      price: 20,
    },
    {
      image: image4,
      name: 'Cheese',
      price: 120,
    },
    {
      image: image5,
      name: 'Potatoes',
      price: 40,
    },
    {
      image: image6,
      name: 'Tomatoes',
      price: 60,
    },
    {
      image: image7,
      name: 'Corn',
      price: 25,
    },
    {
      image: image8,
      name: 'Cabbage',
      price: 35,
    },
  ];

  const [quantity, setQuantity] = useState(Array(sampleData.length).fill(0));
  const [showButtons, setShowButtons] = useState(Array(sampleData.length).fill(false));
  const [searchQuery, setSearchQuery] = useState('');

  const increaseQuantity = (index) => {
    const newQuantity = [...quantity];
    newQuantity[index] += 1;
    setQuantity(newQuantity);
  };

  const decreaseQuantity = (index) => {
    const newQuantity = [...quantity];
    if (newQuantity[index] > 0) {
      newQuantity[index] -= 1;
    }
    setQuantity(newQuantity);
  };

  const toggleButtons = (index) => {
    const newShowButtons = [...showButtons];
    newShowButtons[index] = !newShowButtons[index];
    setShowButtons(newShowButtons);
  };

  const filteredData = sampleData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-8">Groceries Available</h2>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search Groceries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-6 py-3 border border-gray-300 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Responsive Grid Layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredData.map((item, index) => (
            <div key={index} className="max-w-xs rounded-lg shadow-lg bg-white relative mx-auto">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {/* Orange Plus Icon inside the image, shifted to the right */}
                <div
                  className="absolute bottom-2 right-4 text-white bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                  onClick={() => toggleButtons(index)}
                >
                  <FaPlus className="w-8 h-8" /> {/* React Icon Plus */}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <div className="text-xl font-medium text-orange-500 mt-2">{item.price} ETB</div>

                {showButtons[index] && (
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-xl font-medium">{quantity[index]}</span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:outline-none">
          See More
        </button>
      </div>
    </div>
  );
};

export default Groceries;
