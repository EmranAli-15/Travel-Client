import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import crudSlice from "../features/CRUD/crudSlice";

export const store = configureStore({
    reducer:
    {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        crud: crudSlice,
    },

    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})