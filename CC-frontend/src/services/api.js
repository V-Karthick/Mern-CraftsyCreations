import axios from "axios"
const api = "http://localhost:8000"

const loginAuthentication = (email, password) =>{
    return axios.post(`${api}/user/login`,{email, password})
}

const signinAuthentication = (name, email, password)=>{
    return axios.post(`${api}/user/register`,{name, email, password})
}

const addProducts = (image, name, desc, price)=>{
    return axios.post(`${api}/product/add`,{image, name, desc, price})
}

const getProducts = ()=>{
    return axios.get(`${api}/product/view`)
}

const deleteProducts=(id)=>{
    return axios.delete(`${api}/product/delete`,{data:{id}})
}

const addToCart = (email, image, name, desc, price)=>{
    return axios.post(`${api}/cart/add`,{email, image, name, desc, price})
}

const displayCart = ()=>{
    return axios.get(`${api}/cart/view`)
}

const removeCartItem = (userEmail, productId)=>{
    console.log(userEmail, productId)
    return axios.delete(`${api}/cart/delete`,{data:{userEmail, productId}})
}

const addOrder = (address, phno, pName, pImage, pQuantity, pPrice)=>{
    return axios.post(`${api}/order/add`,{address, phno, pName, pImage, pQuantity, pPrice})
}

const getOrder = ()=>{
    return axios.get(`${api}/order/view`)
}

export {loginAuthentication, signinAuthentication, addProducts, getProducts, deleteProducts, addToCart, displayCart, removeCartItem, addOrder, getOrder}