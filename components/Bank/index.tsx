import React, { useState } from "react";

import CustomTabs from "../UI/CustomTabs";
import Settings from "./Settings";
import DS from "./3ds";
import PaySystems from "./PaySystems";

const Merchant = () => {
  const [tab, setTab] = useState("Settings");
  const tabs = [
    {
      name: "Настройки",
      value: "Settings"
    },
    {
      name: "3DS",
      value: "3DS"
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
      case "3DS":
        return <DS />;
      case "PaySystems":
        return <PaySystems />;
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
