import React, { FC } from "react";
import { useAppSelector } from "../helpers/redux-hooks";

import Menu from "./Menu";
import PaymentSystems from "./Bank/PaymentSystems";
import PayTypes from "./Processing/PayTypes";

const MerchantCard: FC = () => {
  const { merchant, tab } = useAppSelector(state => state.app);

  const getContent = () => {
    switch (tab) {
      case "PaymentSystems":
        return <PaymentSystems />;
      case "PayTypes":
        return <PayTypes />;
    }
  };
  return (
    <div className="merchant_card">
      {merchant}
      <Menu />
      {getContent()}
    </div>
  );
};

export default MerchantCard;
