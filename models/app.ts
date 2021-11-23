import { Merchant } from "./merchant";

export interface AppState {
  merchants: Merchant[];
  merchant: Merchant;
}
