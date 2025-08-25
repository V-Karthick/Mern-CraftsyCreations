import React, { useEffect, useRef, useState } from 'react';
import {  X } from "lucide-react";
import { addProducts, addToCart, deleteProducts, getProducts } from '../services/api';
import { useSelector } from 'react-redux';
import { isAdmin, selectCurrentEmail } from '../state/store';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";


const ProductDisplay = () => {

  const email = useSelector(selectCurrentEmail)
  const adminStatus = useSelector(isAdmin)
  const [inCart, setInCart] = useState(false)
  
  const [products, setProducts] = useState([]); 
  const [addProductsPage, setAddProductsPage] = useState(false); 

  const image = useRef(null);
  const name = useRef(null);
  const desc = useRef(null);
  const price = useRef(null);

  const AddToCart = async(id,productImage, productName, productDesc,productPrice)=>{
    
    try {
      const {data}=await addToCart(email, productImage, productName, productDesc, productPrice)
      console.log(data)
      setInCart((prevState)=>({
        ...prevState,
        [id]:true,
      }))
      toast.success("Added to Cart Successfully",{
        duration:3000,
        position:"bottom-right"
      })
    } catch (error) {
      
      console.log(error)
    }
      
  }
  const deleteHandler=async(id)=>{
    try {
      const {data} = await deleteProducts(id)
      console.log(data)
      fetchProduct()
    } catch (error) {
      console.log(error)
    }
  }

  const fetchProduct = async () => {
    try {
      const { data } = await getProducts();
      if (Array.isArray(data)) {
        setProducts(data); 
      } else {
        console.error("Expected array but got:", data);
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  const productHandler = async (e) => {
    e.preventDefault();
    try {
      const insert = await addProducts(
        image.current.value,
        name.current.value,
        desc.current.value,
        price.current.value
      );
      console.log(insert.data);
      setAddProductsPage(false);
      fetchProduct(); 
    } catch (error) {
      console.log(error);
    }
  };

//   return (
//     <div className="h-full p-8 bg-black overflow-y-auto">
      
//       <div className='flex justify-between items-center bg-black mb-5'>
//         <h1 className="text-3xl  mb-8 text-white  font-extralight">PRODUCTS</h1>
//         {adminStatus && (
//           <button className="h-[50%] w-[15%] text-black font-bold py-2 rounded bg-white" onClick={() => setAddProductsPage(true)}>
//             Add Products
//           </button>
//         )}
//       </div>

//     <div className="flex flex-wrap justify-center gap-8">
//   {products.length > 0 ? products.map(({ _id, productImage, productName, productDesc, productPrice }) => (
//     <div 
//       key={_id} 
//       className="w-full max-w-sm bg-[#111827] border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105 overflow-hidden"
//     >
//       {/* Product Image (fills upper part, no padding) */}
//       <img 
//         src={productImage} 
//         alt={productName} 
//         className="w-full h-56 object-cover"
//       />

//       {/* Content Section */}
//       <div className="px-6 pb-6 pt-4">
//         {/* Product Name */}
//         <h5 className="text-lg font-semibold tracking-tight text-white mb-2">
//           {productName}
//         </h5>

//         {/* Description */}
//         <p className="text-gray-300 text-sm mb-4">{productDesc}</p>

//         {/* Price + Add to Cart */}
//         <div className="flex items-center justify-between">
//           <span className="text-3xl font-bold text-white">{productPrice}</span>
//           <button
//             onClick={() => AddToCart(_id, productImage, productName, productDesc, productPrice)}
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
//                        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
//                        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             {!inCart[_id] ? "Add to cart" : "Go To Cart"}
//           </button>
//         </div>

//         {/* Admin Delete Button */}
//         {adminStatus && (
//           <button
//             onClick={() => deleteHandler(_id)}
//             className="mt-4 w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 
//                        focus:outline-none focus:ring-red-300 font-medium rounded-lg 
//                        text-sm px-5 py-2.5 text-center"
//           >
//             Delete Product
//           </button>
//         )}
//       </div>
//     </div>
//   )) : <p>No products available</p>}
// </div>





      
//       {addProductsPage && (
//         <div className='h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50'>
//           <div className='h-[70%] w-[40%] border-2 border-gray-500 bg-gray-50 flex flex-col justify-center items-center rounded-md'>
//             <div className='h-[13%] w-full bg-black  flex items-center justify-center'>
//               <div className='h-full w-[80%] flex justify-between items-center'>
//                 <h2 className='text-white  text-2xl font-semibold'>Add a product</h2>
//                 <X onClick={() => setAddProductsPage(false)} className='h-8 w-8  text-white text-sm'/>
                
//               </div>
//             </div>

            
//             <form onSubmit={productHandler} className='flex flex-col justify-center items-center h-[90%] w-[90%] gap-4'>
//               <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='Product image' required ref={image} />
//               <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='Product Name' required ref={name} />
//               <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='Product Description' required ref={desc} />
//               <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='Product Price' required ref={price} />
//               <button className='bg-black text-white w-[20%] rounded-md px-4 py-2 hover:bg-slate-700' type='submit'>Add</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
  

//   );
return (
  <div className="h-full p-8 bg-black overflow-y-auto">
      
    {/* Header */}
    <div className="flex justify-between items-center mb-5">
      <h1 className="text-3xl mb-8 text-yellow-400 font-extralight tracking-wide">PRODUCTS</h1>
      {adminStatus && (
        <button 
          className="h-[50%] w-[15%] font-bold py-2 rounded bg-yellow-400 text-black hover:bg-yellow-500 transition"
          onClick={() => setAddProductsPage(true)}
        >
          Add Products
        </button>
      )}
    </div>

    {/* Product Grid */}
    <div className="flex flex-wrap justify-center gap-8">
      {products.length > 0 ? products.map(({ _id, productImage, productName, productDesc, productPrice }) => (
        <div 
          key={_id} 
          className="w-full max-w-sm bg-[#111111] border border-yellow-500 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105 overflow-hidden"
        >
          {/* Product Image */}
          <img 
            src={productImage} 
            alt={productName} 
            className="w-full h-56 object-cover"
          />

          {/* Content Section */}
          <div className="px-6 pb-6 pt-4">
            {/* Product Name */}
            <h5 className="text-lg font-semibold tracking-tight text-yellow-400 mb-2">
              {productName}
            </h5>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">{productDesc}</p>

            {/* Price + Add to Cart */}
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-white">{productPrice}</span>
              <button
                onClick={() => AddToCart(_id, productImage, productName, productDesc, productPrice)}
                className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:outline-none 
                           focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
              >
                {!inCart[_id] ? "Add to cart" : "Go To Cart"}
              </button>
            </div>

            {/* Admin Delete Button */}
            {adminStatus && (
              <button
                onClick={() => deleteHandler(_id)}
                className="mt-4 w-full text-white bg-red-600 hover:bg-red-700 focus:ring-2 
                           focus:outline-none focus:ring-red-400 font-medium rounded-lg 
                           text-sm px-5 py-2.5 text-center transition"
              >
                Delete Product
              </button>
            )}
          </div>
        </div>
      )) : <p className="text-yellow-400">No products available</p>}
    </div>

    {/* Add Product Modal */}
    {addProductsPage && (
      <div className="h-screen w-screen absolute top-0 left-0 bg-black/70 flex justify-center items-center z-50">
        <div className="h-[70%] w-[40%] border-2 border-yellow-500 bg-[#1a1a1a] flex flex-col justify-center items-center rounded-md">
          {/* Modal Header */}
          <div className="h-[13%] w-full bg-black flex items-center justify-center border-b border-yellow-500">
            <div className="h-full w-[80%] flex justify-between items-center">
              <h2 className="text-yellow-400 text-2xl font-semibold">Add a product</h2>
              <X onClick={() => setAddProductsPage(false)} className="h-8 w-8 text-yellow-400 cursor-pointer hover:text-yellow-500"/>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={productHandler} className="flex flex-col justify-center items-center h-[90%] w-[90%] gap-4">
            <input className="w-[80%] px-4 py-2 bg-black text-white border-b-2 border-yellow-500 focus:outline-none hover:border-yellow-400" type="text" placeholder="Product image" required ref={image} />
            <input className="w-[80%] px-4 py-2 bg-black text-white border-b-2 border-yellow-500 focus:outline-none hover:border-yellow-400" type="text" placeholder="Product Name" required ref={name} />
            <input className="w-[80%] px-4 py-2 bg-black text-white border-b-2 border-yellow-500 focus:outline-none hover:border-yellow-400" type="text" placeholder="Product Description" required ref={desc} />
            <input className="w-[80%] px-4 py-2 bg-black text-white border-b-2 border-yellow-500 focus:outline-none hover:border-yellow-400" type="text" placeholder="Product Price" required ref={price} />
            <button className="bg-yellow-400 text-black w-[30%] rounded-md px-4 py-2 hover:bg-yellow-500 font-semibold transition" type="submit">Add</button>
          </form>
        </div>
      </div>
    )}
  </div>
);

}

export default ProductDisplay;
