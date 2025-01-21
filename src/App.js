import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Route and Routes
import Home from "./pages/HomePage";
import Restaurants from "./pages/Restaurants"; // Import the Restaurants page
import SignIn from "./pages/SignIn"; // Import the SignIn page
import SignUp from "./pages/SignUp"; // Import the SignUp page
import GroceriesPage from "./pages/GroceriesPage";
import CartPage from "./pages/CartPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import OthersPage from "./pages/OthersPage";
import RestaurantPage from "./pages/RestaurantPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} /> {/* Route for Restaurants page */}
        <Route path="/signin" element={<SignIn />} /> {/* Route for SignIn page */}
        <Route path="/signup" element={<SignUp />} /> {/* Route for SignUp page */}
        <Route path="/groceries" element={<GroceriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/placeorder" element={<PlaceOrderPage />} />
        <Route path="/myorders" element={<MyOrdersPage /> } />
        <Route path="/flowers" element={<OthersPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
