import { apiSlice } from "../api/apiSlice";

export const flightApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        publishFlightTicket: builder.mutation({
            query: (data) => (
                {
                    url: '/publishFlightTicket',
                    method: 'POST',
                    body: data,
                }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    const data = result.data;
                    console.log(data);
                } catch (err) {

                }
            }
        })
    })
})

export const { usePublishFlightTicketMutation } = flightApi;