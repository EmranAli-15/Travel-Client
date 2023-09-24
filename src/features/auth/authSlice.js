import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        loading: (state, action) => {
            state.loading = action.payload;
        }
    },
})

export const { login, logout, loading } = authSlice.actions;
export default authSlice.reducer;