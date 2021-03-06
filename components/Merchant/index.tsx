import React, { useState } from "react";

import CustomTabs from "../UI/CustomTabs";
import Settings from "./Settings";
import Contacts from "./Contacts";

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
    }
  ];
  const getContent = () => {
    switch (tab) {
      case "Settings":
        return <Settings />;
      case "Contacts":
        return <Contacts />;
    }
  };
  return (
    <section className="tab-content">
      <CustomTabs
        selected={tab}
        tabs={tabs}
        name="subTub"
        handleTab={value => setTab(value)}
        className="sub-tab"
      />
      {getContent()}
    </section>
  );
};

export default Merchant;
