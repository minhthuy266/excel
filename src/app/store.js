import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import contractsReducer from "../features/contract/contractSlice";

import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    contracts: contractsReducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});
