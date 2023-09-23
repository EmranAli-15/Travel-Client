import Swal from "sweetalert2";
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
                const result = await queryFulfilled;
                if (result.data.acknowledged === true) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'A flight ticket uploaded',
                        showConfirmButton: false,
                        timer: 1500
                    })
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

        getSingleFlight: builder.query({
            query: (id) => `/getSingleFlight/${id}`
        })
    })
})

export const { useGetSingleFlightQuery, usePublishFlightTicketMutation, useGetFlightTicketsMutation } = flightApi;