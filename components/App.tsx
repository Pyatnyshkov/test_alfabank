import React, { FC, useEffect } from "react";

import List from "./MerchantList/MerchantList";
import Header from "./Header/Header";
import Analytics from "./Analytics";
import MerchantCard from "./MerchantCard";

import { Merchant } from "../models/merchant";
import { useAppDispatch, useAppSelector } from "../helpers/redux-hooks";
import { setMerchants } from "../store/reducers/app";

interface AppProps {
  items: Merchant[];
}

const App: FC<AppProps> = ({ items }) => {
  const dispatch = useAppDispatch();
  const { merchant } = useAppSelector(state => state.app);
  useEffect(() => {
    dispatch(setMerchants(items));
  }, [items]);

  return (
    <div className="page container">
      <Header />
      <main className="main__page">
          <List />
          <div className="merchant">
            { merchant.merchant_full_name ? <MerchantCard /> : <Analytics /> }
          </div>
      </main>
    </div>
  );
};

export default App;
