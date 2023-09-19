import { apiSlice } from "../api/apiSlice";
import { dashboardLoading, isAdmin, loading } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        jwt: builder.mutation({
            query: (data) => (
                {
                    url: "/jwt",
                    method: "POST",
                    body: data,
                }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem('access-token', (result.data.token))
                } catch (err) { }
            }
        }),

        adminSecure: builder.query({
            query: (email) => ({
                url: `/adminSecure/${email}`
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const data = result.data;
                    dispatch(isAdmin(data))
                } catch (err) { }
            }
        })
    }),
})

export const { useJwtMutation, useAdminSecureQuery } = authApi;