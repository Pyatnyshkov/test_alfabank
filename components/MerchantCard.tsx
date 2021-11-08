import React, { FC } from "react";
import { useAppSelector } from "../helpers/redux-hooks";

import Menu from "./Menu";
import Information from "./Information";
import PaymentSystems from "./PaymentSystems";
import PayTypes from "./PayTypes";

const MerchantCard: FC = () => {
  const { merchant, tab } = useAppSelector(state => state.app);

  const getContent = () => {
    switch (tab) {
      case "Information":
        return <Information />;
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
