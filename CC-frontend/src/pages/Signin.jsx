import React from 'react'

const Signin = () => {
  return (
    <div
            className="flex items-center justify-center h-screen"
            style={{ background: 'linear-gradient(to bottom, #3b3a36, #6b6a60)' }}
        >
            <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>
                <form className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:ring-2 hover:ring-yellow-300 transition duration-300 focus:ring-yellow-500 focus:ring-opacity-100 focus:border-black"
                            
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:ring-2 hover:ring-yellow-300 transition duration-300 focus:ring-yellow-500 focus:ring-opacity-100 focus:border-black"
                            
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:ring-2 hover:ring-yellow-300 transition duration-300 focus:ring-yellow-500 focus:ring-opacity-100 focus:border-black"
                            
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white py-2 rounded-md transition duration-300"
                        style={{ background: 'linear-gradient(to right, #8B4513, #DAA520)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Signin