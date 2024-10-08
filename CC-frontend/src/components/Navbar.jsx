import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <div className=''>
      <nav className="top-0 left-0 w-full flex justify-between items-center p-6 font-bold text-white">
        
        <h1 className="text-5xl font-qwitcher z-10  ">Craftsy Creations</h1>

        <div className="space-x-4 z-10">
          <button className="text-white z-10 hover:text-gray-400 "><Link to="/home">Home</Link></button>
          <button className="text-white hover:text-gray-400 z-10"><Link to="/products">Products</Link></button>
          <button className="text-white hover:text-gray-400 z-10"><Link to="/cart">Cart</Link></button>
          <button className="text-white hover:text-gray-400 z-10"><Link to="/orders">Order</Link></button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;