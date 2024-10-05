import {configureStore, createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        value:{ 
            email:"",
            
        }
    },
    reducers:{
        login:(state, action)=>{
            state.value.email=action.payload.email
        }
    }
})

export const {login} = userSlice.actions

export const store = configureStore({
    reducer:{
        user:userSlice.reducer
    }
})