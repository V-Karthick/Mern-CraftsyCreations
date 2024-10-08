import React, { useEffect, useState } from 'react';
import { getOrder } from '../services/api';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrder = async () => {
        try {
            const { data } = await getOrder();
            if (data) {
                setOrders(data);
                console.log(orders)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    const convertToIndianTime = (dateString) => {
        const options = {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
        const date = new Date(dateString);
        return date.toLocaleString('en-IN', options);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6 text-center">Your Orders</h1>
            {orders.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map(({ _id, productImage, productName, productPrice, productQuantity, userAddress, userPhno, updatedAt }) => (
                        <div key={_id} className="shadow-md rounded-lg p-6 bg-[#f5f5f5]">
                            <div className="w-full h-48 mb-4">
                                <img
                                    src={productImage}
                                    alt={productName}
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{productName}</h2>
                            <p className="text-lg text-gray-700">Price: <span className="font-bold">{productPrice}</span></p>
                            <p className="text-lg text-gray-700">Quantity: <span className="font-bold">{productQuantity}</span></p>
                            <p className="text-md text-gray-600">Address: {userAddress}</p>
                            <p className="text-md text-gray-600">Phone: {userPhno}</p>
                            <p className="text-md text-gray-600">Order Date: {convertToIndianTime(updatedAt)}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-lg">No orders found.</p>
            )}
        </div>
    );
};

export default Orders;
