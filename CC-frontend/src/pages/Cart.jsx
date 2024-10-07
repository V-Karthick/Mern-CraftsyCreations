import React, { useEffect, useState } from 'react';

import CartCard from '../components/CartCard';
import Data from '../assets/Data';
import { displayCart, removeCartItem } from '../services/api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
    const fetchCart= async()=>{
      try {
        const {data} = await displayCart()
        if(Array.isArray(data))
          {
          setCartItems(data)
        }
        else
        {
          console.log("data is fetching")
        }
      } catch (error) {
        console.log(error)
      }
    }
    const removeHandler=async(email, id)=>{
      try {
        const {data} = await removeCartItem(email, id)
        console.log(data)
        fetchCart()
      } catch (error) {
        console.log(error)
      }
  }
    useEffect(()=>{
      fetchCart()
    },[])
    if(!cartItems)
      {
        return <h2>Loading...</h2>
      }
      // console.log(cartItems)
  return (
    <div className=" h-full p-8" style={{ backgroundColor: '#D4E7D0' }}>
      <h1 className="text-3xl font-bold text-center mb-8 text-[#4d6e4b]">YOUR CART</h1>
      <div className="h-[90%] flex flex-wrap justify-center gap-8 overflow-y-auto">
        {cartItems.map(({ _id,userEmail,  productImage, productName, productDesc, productPrice }) => (
          <div key={_id} className="shadow-md rounded-lg p-6 flex flex-row justify-between group transform transition-all hover:-translate-y-2 bg-[#40583d] hover:bg-[#2d3b2c] w-full">
          <div className="w-1/3">
            <img src={productImage} alt={productName} className="w-full h-48 object-cover mb-4 rounded" />
          </div>
    
          <div className="w-2/3 pl-6 flex flex-col justify-between ">
            <div>
              
              <h2 className="text-xl font-semibold group-hover:text-[#4d6e4b] text-[#84a682]">{productName}</h2>
              
            
              <p className="text-black group-hover:text-white mb-0">{productDesc}</p>
              <span className="text-4xl font-bold text-[#84a682]">{productPrice}</span>
            </div>
    
           
            <div className="flex justify-end  mt-1 items-end">
              <button onClick={()=>removeHandler(userEmail, _id)}
                className="text-white font-bold py-2 px-4 rounded bg-red-600 hover:bg-red-700">
                REMOVE FROM CART
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;