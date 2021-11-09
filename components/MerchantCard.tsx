import React, { FC, useState } from "react";

import Merchant from './Merchant';
import Processing from './Processing';
import Bank from './Bank';
import Fiscalization from './Fiscalization';
import CustomTabs from "./UI/CustomTabs";

import {useAppSelector} from "../helpers/redux-hooks";

const MerchantCard: FC = () => {
  const merchant = useAppSelector(state => state.app.merchant);
  const [ tab, setTab ] = useState<string>("Merchant");
  const tabs = [
    {
      name: "Мерчант",
      value: "Merchant"
    },
    {
      name: "Процессинг",
      value: "Processing"
    },
    {
      name: "Банк",
      value: "Bank"
    },
    {
      name: "Фискализация",
      value: "Fiscalization"
    }
  ];

  const getContent = () => {
    switch (tab) {
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
      <CustomTabs
          handleTab={(value) => setTab(value)}
          selected={tab}
          tabs={tabs}
          name="mainTab"
      />
      {getContent()}
    </div>
  );
};

export default MerchantCard;
