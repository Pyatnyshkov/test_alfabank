import React, { FC } from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../store";
import { Merchant } from "../models/merchant";

interface AppProps {
  items: Merchant[];
}

const Index: FC<AppProps> = ({ items }) => {
  return (
    <Provider store={store}>
      <App items={items} />
    </Provider>
  );
};

export default Index;
