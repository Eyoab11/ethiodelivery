import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import FeaturedRestaurants from "../components/FeaturedRestaurants";
import Footer from "../components/Footer";
import FoodDisplay from "../components/FoodDisplay";
import FoodItem from "../components/FoodItem";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FoodDisplay />
      <Categories />
      <FoodItem />
      <Footer />
    </div>
  );
};

export default Home;
