import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Merchant } from "../models/merchant";

interface IApp {
  merchant: Merchant;
}
const initialState: IApp = {
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

const merchantSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMerchant(state, action: PayloadAction<Merchant>) {
      state.merchant = action.payload;
    }
  }
});

export const { setMerchant } = merchantSlice.actions;
export default merchantSlice.reducer;
