import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    flightTickets: [],
    hotelTickets: [],
    carTickets: [],
}

const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {
        flightTickets: (state, action) => {
            state.flightTickets = action.payload
        },

        hotelTickets: (state, action) => {
            state.hotelTickets = action.payload
        }
    },
})

export const { flightTickets, hotelTickets } = crudSlice.actions;
export default crudSlice.reducer;