import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from '../assets/FoodItem/apple.jpg'
import image2 from '../assets/FoodItem/burger.jpg'
import image3 from '../assets/FoodItem/sushi.jpg' 

const Cart = () => {

  const navigate = useNavigate()

  const mockCartItems = [
    { id: 1, name: 'Apple', price: 50, quantity: 2, image: image1 },
    { id: 2, name: 'Burger', price: 300, quantity: 1, image: image2 },
    { id: 3, name: 'Bread', price: 20, quantity: 3, image: image3 },
  ]

  const getTotalCartAmount = () => {
    return mockCartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const removeFromCart = (id) => {
    console.log('Removed item with id:', id)
  }

  return (
    <div className="cart p-6 rounded-lg shadow-xl mx-28">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-6 gap-4 text-gray-700 text-sm font-semibold mb-6">
          <p className="text-lg font-bold text-gray-900">Items</p>
          <p className="text-lg font-bold text-gray-900">Title</p>
          <p className="text-lg font-bold text-gray-900">Price</p>
          <p className="text-lg font-bold text-gray-900">Quantity</p>
          <p className="text-lg font-bold text-gray-900">Total</p>
          <p className="text-lg font-bold text-gray-900">Remove</p>
        </div>

        <hr className="my-4 border-t-2 border-orange-300" />

        {mockCartItems.map((item) => (
          <div key={item.id} className="cart-items-title cart-items-item grid grid-cols-6 gap-4 items-center py-3 hover:bg-orange-50 transition duration-300 ease-in-out rounded-lg">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-full shadow-md border-2 border-orange-200" />
            <p className="text-lg text-gray-800 font-semibold">{item.name}</p>
            <p className="text-lg text-orange-600 font-semibold">${item.price}</p>
            <p className="text-lg text-gray-700">{item.quantity}</p>
            <p className="text-lg text-orange-600 font-semibold">${item.price * item.quantity}</p>
            <p onClick={() => removeFromCart(item.id)} className="cursor-pointer text-red-600 hover:text-red-800 text-lg transition duration-300 ease-in-out">x</p>
          </div>
        ))}

        <hr className="my-4 border-t-2 border-orange-300" />
      </div>

      <div className="cart-bottom flex flex-wrap gap-6 justify-between mt-8">
        <div className="cart-total flex flex-col gap-4 w-full sm:w-1/2 bg-white p-5 rounded-lg shadow-lg border-2 border-orange-300">
          <h2 className="text-xl font-bold text-gray-800">Cart Totals</h2>
          <div className="cart-total-details flex justify-between text-gray-700 font-semibold mb-2">
            <p className="text-lg">Subtotal</p>
            <p className="text-lg">${getTotalCartAmount()}</p>
          </div>
          <hr className="my-2 border-t-2 border-orange-300" />
          <div className="cart-total-details flex justify-between text-gray-700 font-semibold mb-2">
            <p className="text-lg">Delivery Fee</p>
            <p className="text-lg">${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="my-2 border-t-2 border-orange-300" />
          <div className="cart-total-details flex justify-between text-gray-800 font-bold mb-2">
            <p className="text-lg">Total</p>
            <p className="text-lg">${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <button onClick={() => navigate('/placeorder')} className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out">PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode flex flex-col sm:w-1/3 p-5 rounded-lg">
          <p className="text-gray-700 font-semibold text-lg">If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input flex mt-4 p-3 border-2 border-orange-300 rounded-lg">
            <input type="text" placeholder="Promo Code" className="w-full p-2 bg-transparent border-none outline-none rounded-lg text-gray-700" />
            <button className="ml-4 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
