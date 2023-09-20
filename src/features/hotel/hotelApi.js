import Swal from "sweetalert2";
import { apiSlice } from "../api/apiSlice";

export const hotelApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        publishHotelTicket: builder.mutation({
            query: (data) => (
                {
                    url: '/publishHotelTicket',
                    method: 'POST',
                    body: data,
                }),
            async onQueryStarted(arg, { queryFulfilled }) {
                const result = await queryFulfilled;
                if (result.data.acknowledged === true) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'A hotel ticket uploaded',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        }),

        getHotelTickets: builder.query({
            query: (name) => `getHotelTickets/${name}`
        })
    })
})

export const { usePublishHotelTicketMutation, useGetHotelTicketsQuery } = hotelApi;