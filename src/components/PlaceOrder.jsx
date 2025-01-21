import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    country: "Ethiopia", // Default country set to Ethiopia
    phone: ""
  });

  const getTotalCartAmount = () => 50; // Mock total cart amount
  const cartItems = {}; // Mock cart items
  const token = "mock-token"; // Mock token
  const food_list = []; // Mock food list
  const url = "https://example.com"; // Mock URL

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    console.log(orderData);
    alert("Order placed successfully!");
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center bg-white">
      <form onSubmit={placeOrder} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl flex gap-12">
        {/* Left Section */}
        <div className="flex-1 mr-6">
          <p className="text-3xl font-semibold text-gray-800 mb-8">Delivery Information</p>
          <div className="space-y-6">
            <div className="flex gap-6">
              <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition" />
              <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition" />
            </div>
            <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition" />
            <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition" />
            <div className="flex gap-6">
              <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition" />
              <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition" />
            </div>
            <div className="flex gap-6">
              <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition" />
            </div>
            <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 ml-6 bg-gray-50 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Cart Totals</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold text-gray-800">${getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="text-gray-600">Delivery Fee</p>
              <p className="font-semibold text-gray-800">${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p className="font-semibold text-gray-800">${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button type="submit" className="w-full py-4 mt-4 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition duration-300 ease-in-out focus:outline-none">PROCEED TO PAYMENT</button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
