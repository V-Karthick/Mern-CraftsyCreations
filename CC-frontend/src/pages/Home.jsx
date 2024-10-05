import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const email = useSelector((state)=>state.user.value.email)
  return (
    <div>Welcome{email}</div>
  )
}

export default Home