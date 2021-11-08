import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Merchant } from "../../models/merchant";

interface AppState {
  merchants: Merchant[];
  merchant: string;
  tab: string;
  subTab: string;
}
const initialState: AppState = {
  merchants: [],
  merchant: "",
  tab: "Merchant",
  subTab: "Settings"
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMerchants(state, action: PayloadAction<Merchant[]>) {
      state.merchants = action.payload;
    },
    setMerchant(state, action: PayloadAction<string>) {
      state.merchant = action.payload;
    },
    selectTab(state, action: PayloadAction<string>) {
      state.tab = action.payload;
    },
    selectSubTub(state, action: PayloadAction<string>) {
      state.subTab = action.payload;
    }
  }
});

export const { setMerchants, setMerchant, selectTab, selectSubTub } = appSlice.actions;
export default appSlice.reducer;
