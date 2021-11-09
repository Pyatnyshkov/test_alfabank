import React, { FC } from "react";
import { useAppSelector } from "../helpers/redux-hooks";

import Tabs from "./Tabs";
import Merchant from './Merchant';
import Processing from './Processing';
import Bank from './Bank';
import Fiscalization from './Fiscalization';

const MerchantCard: FC = () => {
  const { merchant, mainTab } = useAppSelector(state => state.app);

  const getContent = () => {
    switch (mainTab) {
      case "Merchant":
        return <Merchant />;
      case "Processing":
        return <Processing />;
      case "Bank":
        return <Bank />;
      case "Fiscalization":
        return <Fiscalization />;
    }
  };
  return (
    <div className="merchant_card">
      <div className="merchant_card-title">
        <div className="merchant_card-name">{merchant.merchant_full_name}</div>
        <div
          className={`merchant_card-active ${
            merchant.enabled
              ? "merchant_card-active-enabled"
              : "merchant_card-active-disabled"
          }`}
        >
          {merchant.enabled ? "Активен" : "Неактивен"}
        </div>
      </div>
      <Tabs />
      {getContent()}
    </div>
  );
};

export default MerchantCard;
