import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../helpers/redux-hooks";
import { selectTab } from "../store/reducers/app";

import CustomTabs from "./UI/CustomTabs";

const Tabs: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(selectTab(tabs[0].value));
  }, []);
  const { mainTab } = useAppSelector(state => state.app);
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
  const handleTab = (value: string) => {
    dispatch(selectTab(value));
  };
  return (
    <CustomTabs
      handleTab={handleTab}
      selected={mainTab}
      tabs={tabs}
      name="mainTab"
    />
  );
};

export default Tabs;
