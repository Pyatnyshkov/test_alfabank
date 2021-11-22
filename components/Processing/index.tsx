import React, { useState } from "react";

import CustomTabs from "../UI/CustomTabs";
import Settings from './Settings';
import PaySystems from './PaySystems';
import PaymentPage from './PaymentPage';
import PayTypes from './PayTypes';
import SendSettings from './SendSettings';
import Notifications from "./Notifications";

const Processing = () => {
  const [tab, setTab] = useState("Settings");
  const tabs = [
    {
      name: "Настройки",
      value: "Settings"
    },
    {
      name: "Платежные системы",
      value: "PaySystems"
    },
    {
      name: "Платежная страница",
      value: "PaymentPage"
    },
    {
      name: "Способы оплаты",
      value: "PayTypes"
    },
    {
      name: "Передача параметров",
      value: "SendSettings"
    },
    {
      name: "Уведомления",
      value: 'SendNotifications'
    }
  ];
  const b = () => {

  }
  const getContent = () => {
    switch (tab) {
      case 'Settings':
        return <Settings />;
      case 'PaySystems':
        return <PaySystems />;
      case 'PaymentPage':
        return <PaymentPage />;
      case 'PayTypes':
        return <PayTypes />;
      case 'SendSettings':
        return <SendSettings />;
      case 'SendNotifications':
        return <Notifications/>
    }
  };
  return (
    <section className="tab-content">
      <CustomTabs
        selected={tab}
        tabs={tabs}
        name="subTub"
        handleTab={(value) => setTab(value)}
        className="sub-tab"
      />
      {getContent()}
    </section>
  );
};

export default Processing;
