import React from 'react'

const UserDetails = () => {
  return (
    <div className='h-full w-full bg-white flex justify-center items-center'>
     <div className='h-[80%] w-[80%]  flex justify-around items-center'>
        <div className='h-[90%] w-[40%]  flex justify-center items-center'>
          <div className='h-[90%] w-[90%]  rounded-lg bg-white flex justify-center items-center' >
            <form className='border-2 border-black rounded-md h-[90%] w-[90%] flex flex-col justify-center items-center'>
            <h1 className='text-xl font-semibold'>Order details</h1>
              <input className='my-3 bg-gray-200 rounded-sm border-2  h-10 w-[70%] p-2 text-black'  type='text' placeholder='Address' />
              <input className='my-3 bg-gray-200 rounded-sm border-2  h-10 w-[70%] p-2 text-black' type='text' placeholder='Phone number'></input>
              <input className='my-3 bg-gray-200 rounded-sm border-2  h-10 w-[70%] p-2 text-black' type='text' placeholder='Quantity'></input>
              <button className='bg-green-400 rounded-sm px-4 py-2' type="submit">Order</button>
            </form>
            
          </div>
        </div>

        <div className='h-[90%] w-[40%] border-2 border-black'></div>

     </div>
    </div>
  )
}

export default UserDetails