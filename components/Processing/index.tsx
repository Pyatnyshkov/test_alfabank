import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/redux-hooks";
import { selectSubTab } from "../../store/reducers/app";

import CustomTabs from "../UI/CustomTabs";
import Settings from './Settings';
import PaySystems from './PaySystems';
import PaymentPage from './PaymentPage';
import PayTypes from './PayTypes';
import SendSettings from './SendSettings';

const Processing = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(selectSubTab(tabs[0].value));
  }, []);
  const { subTab } = useAppSelector(state => state.app);
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
    }
  ];
  const handleTab = (value: string) => {
    dispatch(selectSubTab(value));
  };
  const getContent = () => {
    switch (subTab) {
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
    }
  };
  return (
    <div className="tabContent">
      <CustomTabs
        selected={subTab}
        tabs={tabs}
        name="subTub"
        handleTab={handleTab}
        className="subTab"
      />
      {getContent()}
    </div>
  );
};

export default Processing;
