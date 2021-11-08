import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Merchant } from "../../models/merchant";

interface AppState {
  merchants: Merchant[];
  merchant: string;
  tab: string;
}
const initialState: AppState = {
  merchants: [],
  merchant: "",
  tab: "Information"
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
    }
  }
});

export const { setMerchants, setMerchant, selectTab } = appSlice.actions;
export default appSlice.reducer;
