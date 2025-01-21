import React, { useState } from 'react';
import { assets } from '../assets/assets.js';

const MyOrders = () => {

    const [data] = useState([
        {
            items: [
                { name: 'Burger', quantity: 2 },
                { name: 'Fries', quantity: 1 },
            ],
            amount: 15,
            status: 'Delivered'
        },
        {
            items: [
                { name: 'Pizza', quantity: 1 },
                { name: 'Coke', quantity: 2 },
            ],
            amount: 20,
            status: 'Pending'
        }
    ]);

  return (
    <div className='my-12 px-12 mx-20'>
        <h2 className='text-3xl font-semibold text-black mb-8'>My Orders</h2>
        <div className="space-y-6">
            {data.map((order, index) => {
                return (
                    <div key={index} className='flex items-center justify-between p-6 border border-gray-300 dark:border-orange-500 rounded-lg shadow-md'>
                        {/* Parcel Icon */}
                        <img src={assets.parcel_icon} alt="Parcel" className="w-16 h-16" />

                        {/* Order Items */}
                        <div className='flex-1'>
                            <p className='text-lg text-black'>
                                {order.items.map((item, idx) => (
                                    <span key={idx} className="mr-2">
                                        {item.name} x {item.quantity}
                                        {idx !== order.items.length - 1 && ','}
                                    </span>
                                ))}
                            </p>
                        </div>

                        {/* Total Amount */}
                        <div className='flex-1 text-lg font-bold text-black'>
                            {order.amount} ETB
                        </div>

                        {/* Items Count */}
                        <div className='flex-1 text-lg text-black'>
                            Items: {order.items.length}
                        </div>

                        {/* Status */}
                        <div className='flex-1 text-lg flex items-center text-black'>
                            <span className={`text-${order.status === 'Delivered' ? 'green' : 'red'}-500`}>
                                &#x25cf;
                            </span>
                            <b className='ml-2'>{order.status}</b>
                        </div>

                        {/* Track Order Button */}
                        <button className='text-sm border border-gray-600 dark:border-gray-200 bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300'>
                            Track Order
                        </button>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default MyOrders;
