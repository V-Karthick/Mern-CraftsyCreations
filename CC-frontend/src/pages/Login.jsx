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
    className="flex items-center justify-center h-screen bg-black"
    // style={{ background: 'linear-gradient(to bottom, #3b3a36, #6b6a60)' }}
>
    <div className='bg-white flex w-[60%] h-[80%] rounded-3xl '>
    <div className="bg-white rounded-3xl p-8 max-w-md w-full flex justify-center items-center w-[50%] ">
    <div className=' flex flex-col justify-center items-center'>
    <h2 class="text-2xl text-center text-gray-800 mb-5 font-semibold">
  <span>WELCOME TO</span> <br />
  <span class="block text-purple-600 italic font-qwitcher text-3xl">Craftsy Creations</span>
</h2>
        <p className='text-wrap text-sm mb-5 font-extralight'><span className='font-semibold'>Log In</span> to discover one-of-a-kind handmade crafts that bring warmth and artistry to your life.</p>
        <form 
        onSubmit={loginHandler}
         className="space-y-6 flex flex-col justify-center items-center">
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
            <div className='flex justify-start flex-col'>
                {/* <label htmlFor="">EMAIL</label> */}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border-b-2 focus:outline-none  border-black  hover:border-purple-500  "
                    ref={userEmail}
                    required
                />
            </div>
            <div className='flex justify-start flex-col'>
            {/* <label htmlFor="">PASSWORD</label> */}
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-purple-500 "
                    ref={userPassword}
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full text-white py-2 rounded-md transition duration-300 bg-black hover:bg-purple-500"
                // style={{ background: 'linear-gradient(to right, #8B4513, #DAA520)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            >
                Login
            </button>
            
        </form>
        <p className='text-sm mt-4 font-extralight '>Don't have an account? <span className='font-semibold hover:underline'>Sign Up</span></p>
    </div>
    </div>
    <div className='flex  box-border border-black w-[80%] h-[100%] rounded-3xl items-center justify-center'>
        {/* <img src="https://images.unsplash.com/photo-1505582866941-6788e0205dd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="jnjnjn" className='rounded-lg flex justify-center items-center h-[90%] w-[90%]'/> */}
        <img src="https://i.pinimg.com/564x/5d/30/16/5d30167d065e4497f215f778aebd002d.jpg" alt="jnjnjn" className=' flex justify-center items-center h-[90%] w-[90%] rounded-3xl'/>
        </div>
        </div>
</div>
  )
}

export default Login