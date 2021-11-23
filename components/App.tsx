import React, { FC } from "react";

import List from "./MerchantList/MerchantList";
import Header from "./Header/Header";
import Analytics from "./Analytics";
import MerchantCard from "./MerchantCard";

import { useAppSelector } from "../helpers/redux-hooks";

const App: FC = () => {
  const { merchant_full_name } = useAppSelector(state => state.app.merchant);

  return (
    <div className="page container">
      <Header />
      <main className="main__page">
        <List />
        <div className="merchant">
          {merchant_full_name ? <MerchantCard /> : <Analytics />}
        </div>
      </main>
    </div>
  );
};

export default App;
