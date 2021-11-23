import { useMemo } from "react";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
import { Merchant } from "../models/merchant";

const serverStore = () =>
  configureStore({
    reducer: {
      app: appReducer
    }
  });

const clientStore = (preloadedState: any) => {
  return configureStore({
    reducer: {
      app: appReducer
    },
    preloadedState
  });
};

export const initializeStore = (merchants: Merchant[]) => {
  const _store = serverStore();

  if (typeof window === "undefined") return _store;
  const state = _store.getState();
  return clientStore({
    ...state,
    app: {
      ...state.app,
      merchants
    }
  });
};

export const useStore = (merchants: Merchant[]) =>
  useMemo(() => initializeStore(merchants), [merchants]);

export type AppStore = ReturnType<typeof useStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore['getState']>;
