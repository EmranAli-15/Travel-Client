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
        }
    },
})

export const { flightTickets } = crudSlice.actions;
export default crudSlice.reducer;