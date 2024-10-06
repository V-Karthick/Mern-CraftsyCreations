import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {login} from "./store"

const baseQuery = fetchBaseQuery({
    baseUrl:"http://localhost:8000",
    credentials:"include",
    prepareHeaders:(headers,{getState})=>{
        const token = getState().user.token
        if(token){
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async(args, api, extraOptions)=>{
    let result = await baseQuery(agrs, api, extraOptions)

    if(result?.error?.originalStatus === 403)
    {
        console.log("sending refresh token")

        const refreshResult = await baseQuery("/refresh",api, extraOptions)
        console.log(refresh)
        if(refreshResult?.data)
        {
            const user = api.getState().user.name

            api.dispatch(login({...refreshResult.data, user}))

            result = await baseQuery(args, api, extraOptions)
        }
        // else
        // {
        //     api.dispatch()
        // }
    }
    return result;

}

export const apiSlice = createApi({
    baseQuery:baseQueryWithReauth,
    endpoints:builder=>({
        
    })
})