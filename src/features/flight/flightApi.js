import { apiSlice } from "../api/apiSlice";
import { flightTickets } from '../CRUD/crudSlice'

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
        }),

        getFlightTickets: builder.mutation({
            query: (data) => (
                {
                    url: '/getFlightTickets',
                    method: 'POST',
                    body: data
                }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                const data = result.data;
                dispatch(flightTickets(data));
            }
        }),

        searchFlightTickets: builder.query({
            query: (data) => `/searchFlightTickets/${data}`,
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                const data = result.data;
                dispatch(flightTickets(data));
            }
        })
    })
})

export const { usePublishFlightTicketMutation, useGetFlightTicketsMutation, useSearchFlightTicketsQuery } = flightApi;