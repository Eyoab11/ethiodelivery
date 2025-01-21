import React from "react";
import kkfc from '../assets/kkfc.jpg'
import pizzaHut from '../assets/pizzaHut.jpg'

const restaurants = [
  {
    id: 1,
    name: "Pizza Hut",
    image: pizzaHut,
    rating: 4.5,
  },
  {
    id: 2,
    name: "KKFC",
    image: kkfc,
    rating: 4.3,
  },
];

const FeaturedRestaurants = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Featured Restaurants</h2>
      <div className="grid grid-cols-2 gap-6 mt-4">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg hover:shadow-md"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="h-32 w-full rounded-lg"
            />
            <div className="mt-2 flex items-center justify-between w-full">
              <p className="font-medium">{restaurant.name}</p>
              <p className="text-orange-500 font-semibold">{restaurant.rating} ★</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
