import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// https://travel-server-mu.vercel.app
// http://localhost:5000
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://travel-server-mu.vercel.app",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem('access-token')
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),

    endpoints: (builder) => ({}),
})