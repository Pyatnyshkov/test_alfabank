import React, { useState } from "react";

import CustomTabs from "../UI/CustomTabs";
import Settings from "./Settings";
import Contacts from "./Contacts";
import PaySystems from "./PaySystems";

const Merchant = () => {
  const [tab, setTab] = useState("Settings");
  const tabs = [
    {
      name: "Настройки",
      value: "Settings"
    },
    {
      name: "Контакты",
      value: "Contacts"
    },
    {
      name: "Платежные системы",
      value: "PaySystems"
    }
  ];
  const getContent = () => {
    switch (tab) {
      case "Settings":
        return <Settings />;
      case "Contacts":
        return <Contacts />;
      case "PaySystems":
        return <PaySystems />;
    }
  };
  return (
    <div className="tabContent">
      <CustomTabs
        selected={tab}
        tabs={tabs}
        name="subTub"
        handleTab={value => setTab(value)}
        className="subTab"
      />
      {getContent()}
    </div>
  );
};

export default Merchant;
