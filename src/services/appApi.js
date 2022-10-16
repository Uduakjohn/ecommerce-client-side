import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const appApi = createApi({
    reducerPath:"appApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    endpoints: (builder) => ({
        signupUser:builder.mutation({
            query:(user) => ({
                url:"/users",
                method:"post",
                body:user,
            }),
        }),
    })
})

export const {useSignupUserMutation} =appApi;
export default appApi;