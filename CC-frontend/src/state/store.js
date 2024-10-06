import {configureStore, createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{    
            name:"",
            email:"",
            admin:false,
            token:""
    },
    reducers:{
        login:(state, action)=>{
            state.name=action.payload.name
            state.email=action.payload.email
            state.admin=action.payload.admin
            state.token=action.payload.token
        }
    }
})

export const {login} = userSlice.actions

export const store = configureStore({
    reducer:{
        user:userSlice.reducer
    }
})

export const selectCurrentUser = (state)=>state.user.name
export const selectCurrenttoken = (state)=>state.user.token