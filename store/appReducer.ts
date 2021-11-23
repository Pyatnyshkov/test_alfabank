import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Merchant } from "../models/merchant";
import { AppState } from "../models/app";

const initialState: AppState = {
  merchants: [],
  merchant: {
    template_merchant_login: "",
    merchant_login: "",
    merchant_full_name: "",
    processing_id: "",
    terminal_id: "",
    merchant_emails: "",
    users: [{ username: "", password: "" }]
  }
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMerchant(state, action: PayloadAction<Merchant>) {
      state.merchant = action.payload;
    }
  }
});

export const { setMerchant } = appSlice.actions;
export default appSlice.reducer;
