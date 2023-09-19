import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    isAdmin: null,
    dashboardLoading: true,
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
        },
        isAdmin: (state, action) => {
            state.isAdmin = action.payload;
            state.dashboardLoading = false;
        },
    },
})

export const { login, logout, loading, isAdmin, dashboardLoading } = authSlice.actions;
export default authSlice.reducer;