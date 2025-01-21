import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom
import '@fortawesome/fontawesome-free/css/all.min.css';  
import restaurant1 from '../assets/Restaurants/restaurant-1.jpg';
import restaurant2 from '../assets/Restaurants/restaurant-2.jpg';
import restaurant3 from '../assets/Restaurants/restaurant-3.jpg';
import restaurant4 from '../assets/Restaurants/restaurant-4.jpg';
import restaurant5 from '../assets/Restaurants/restaurant-5.jpg';
import restaurant6 from '../assets/Restaurants/restaurant-6.jpg';
import restaurant7 from '../assets/Restaurants/restaurant-7.jpg';
import restaurant8 from '../assets/Restaurants/restaurant-8.jpg';
import restaurant9 from '../assets/Restaurants/restaurant-9.jpg';
import restaurant10 from '../assets/Restaurants/restaurant-10.jpg';
import restaurant11 from '../assets/Restaurants/restaurant-11.jpg';
import restaurant12 from '../assets/Restaurants/restaurant-12.jpg';

const restaurantsData = [
  { id: 1, name: "Restaurant 1", img: restaurant1, rating: 4.5 },
  { id: 2, name: "Restaurant 2", img: restaurant2, rating: 3.0 },
  { id: 3, name: "Restaurant 3", img: restaurant3, rating: 5.0 },
  { id: 4, name: "Restaurant 4", img: restaurant4, rating: 4.0 },
  { id: 5, name: "Restaurant 5", img: restaurant5, rating: 4.7 },
  { id: 6, name: "Restaurant 6", img: restaurant6, rating: 3.5 },
  { id: 7, name: "Restaurant 7", img: restaurant7, rating: 4.2 },
  { id: 8, name: "Restaurant 8", img: restaurant8, rating: 4.8 },
  { id: 9, name: "Restaurant 9", img: restaurant9, rating: 3.8 },
  { id: 10, name: "Restaurant 10", img: restaurant10, rating: 4.3 },
  { id: 11, name: "Restaurant 11", img: restaurant11, rating: 3.7 },
  { id: 12, name: "Restaurant 12", img: restaurant12, rating: 4.1 },
];

const RestaurantsComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredRestaurants = restaurantsData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-orange-500"></i>);
    }

    if (halfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-orange-500"></i>);
    }

    while (stars.length < 5) {
      stars.push(<i key={`empty-${stars.length}`} className="fas fa-star text-gray-300"></i>);
    }

    return stars;
  };

  return (
    <div className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Restaurants Available</h2>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search Restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-6 py-3 border border-gray-300 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant`}  // Navigating to restaurant page by id
            key={restaurant.id}
            className="relative flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border-4 border-orange-500 transition-transform transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-orange-500"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={restaurant.img}
                alt={restaurant.name}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800">{restaurant.name}</p>

            <div className="flex items-center mt-2">
              {renderStars(restaurant.rating)}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:outline-none">
          See More
        </button>
      </div>
    </div>
  );
};

export default RestaurantsComponent;
