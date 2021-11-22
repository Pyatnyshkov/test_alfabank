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
    <article className="merchant-card">
      <header className="merchant-card-header">
        <h3 className="merchant-card__title">{merchant.merchant_full_name}</h3>
        <span
          className={`merchant-card__active ${
            merchant.enabled
              ? "merchant-card__active-enabled"
              : "merchant-card__active-disabled"
          }`}
        >
          {merchant.enabled ? "Активен" : "Неактивен"}
        </span>
      </header>
      <main className="merchant-card-main">
        <CustomTabs
            handleTab={(value) => setTab(value)}
            selected={tab}
            tabs={tabs}
            name="mainTab"
            className="center-list"
        />
        {getContent()}
      </main>
    </article>
  );
};

export default React.memo(MerchantCard);
