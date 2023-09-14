import { apiSlice } from "../api/apiSlice";

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
                    console.log(result.data)
                    localStorage.setItem('access-token', (result.data.token))
                } catch (err) { }
            }
        })
    }),
})

export const { useJwtMutation } = authApi;