import React, { FC } from "react";

import List from "./MerchantList/MerchantList";
import Analytics from "./Analytics";
import MerchantCard from "./MerchantCard";
import { useAppSelector } from "../helpers/redux-hooks";

const App: FC = () => {
  const { merchant_full_name } = useAppSelector(state => state.app.merchant);
  return (
    <>
      <List />
      <div className="merchant">
        {merchant_full_name ? <MerchantCard /> : <Analytics />}
      </div>
    </>
  );
};

export default App;
