import { configureStore } from "@reduxjs/toolkit";
import { merchantApi } from "../services/MerchantService";
import app from "./appReducer";

export const store = configureStore({
  reducer: {
    app,
    [merchantApi.reducerPath]: merchantApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(merchantApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
