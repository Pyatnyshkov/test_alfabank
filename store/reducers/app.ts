import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Merchant } from "../../models/merchant";

interface AppState {
  merchants: Merchant[];
  merchant: Merchant;
  mainTab: string;
  subTab: string;
}
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
  },
  mainTab: "",
  subTab: ""
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMerchants(state, action: PayloadAction<Merchant[]>) {
      state.merchants = action.payload;
    },
    setMerchant(state, action: PayloadAction<Merchant>) {
      state.merchant = action.payload;
    },
    selectTab(state, action: PayloadAction<string>) {
      state.mainTab = action.payload;
    },
    selectSubTab(state, action: PayloadAction<string>) {
      state.subTab = action.payload;
    }
  }
});

export const {
  setMerchants,
  setMerchant,
  selectTab,
  selectSubTab
} = appSlice.actions;
export default appSlice.reducer;
