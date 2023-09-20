import { apiSlice } from "../api/apiSlice";

export const hotelApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        publishHotelTicket: builder.mutation({
            query: (data) => (
                {
                    url: '/publishHotelTicket',
                    method: 'POST',
                    body: data,
                })
        }),

        getHotelTickets: builder.query({
            query: (name) => `getHotelTickets/${name}`,
            async onQueryStarted(queryFulfilled, { dispatch }) {
                const result = queryFulfilled;
                const data = result.data;
                console.log(data);
            }
        })
    })
})

export const { usePublishHotelTicketMutation, useGetHotelTicketsQuery } = hotelApi;