import axios from "axios"
const api = "http://localhost:8000"

const loginAuthentication = (email, password) =>{
    return axios.post(`${api}/user/login`,{email, password})
}

const signinAuthentication = (name, email, password)=>{
    return axios.post(`${api}/user/register`,{name, email, password})
}

export {loginAuthentication, signinAuthentication}