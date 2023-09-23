import { apiSlice } from "../api/apiSlice";
import { dashboardLoading, isAdmin, loading, logout } from "./authSlice";
import { auth, signOut } from '../auth/firebase'

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

            async onQueryStarted(arg, { queryFulfilled, dispatch, }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result)
                    const data = result.data;
                    dispatch(isAdmin(data))
                } catch (err) {
                    signOut(auth)
                        .then(result => {
                            logout()
                        })
                        .catch(error => {

                        })
                }
            }
        })
    }),
})

export const { useJwtMutation, useAdminSecureQuery } = authApi;