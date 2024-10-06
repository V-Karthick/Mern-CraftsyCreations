import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../state/store'
import { loginAuthentication } from '../services/api'

const Login = () => {
    const userEmail = useRef(null)
    const userPassword = useRef(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginHandler=async(e)=>{
        e.preventDefault()

        const email = userEmail.current.value
        const password = userPassword.current.value

        await loginAuthentication(email, password)
        .then((fetchedData)=>{
            
            const {message, name, admin, token} = fetchedData.data
            console.log(fetchedData.data)
            if(message==="successful")
                {
                    localStorage.setItem('token', token);
                    dispatch(login({
                    name:name,
                    email:email,
                    admin:admin,
                    token:token
                }))
                navigate("/home")
            }
            else if(message==="failed")
            {
                console.log("password is incorrect")
            }
            else
            {
                console.log(message)
            }
        })
        .catch((error)=>{
            console.log(error)
        })


    }
  return (
    <div
    className="flex items-center justify-center h-screen"
    style={{ background: 'linear-gradient(to bottom, #3b3a36, #6b6a60)' }}
>
    <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={loginHandler} className="space-y-6">
            {/* <div>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:ring-2 hover:ring-yellow-300 transition duration-300 focus:ring-yellow-500 focus:ring-opacity-100 focus:border-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div> */}
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:ring-2 hover:ring-yellow-300 transition duration-300 focus:ring-yellow-500 focus:ring-opacity-100 focus:border-black"
                    ref={userEmail}
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:ring-2 hover:ring-yellow-300 transition duration-300 focus:ring-yellow-500 focus:ring-opacity-100 focus:border-black"
                    ref={userPassword}
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full text-white py-2 rounded-md transition duration-300"
                style={{ background: 'linear-gradient(to right, #8B4513, #DAA520)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            >
                Login
            </button>
        </form>
    </div>
</div>
  )
}

export default Login