import React, { FC } from "react";

interface Tab {
  name: string;
  value: string;
}

interface TabsProps {
  selected: string;
  tabs: Tab[];
  name: string;
  handleTab: (value: string) => void;
  className?: string;
}

const CustomTabs: FC<TabsProps> = ({
  handleTab,
  selected,
  tabs,
  name,
  className
}) => {
  const handleClick = (event: { target: HTMLInputElement }) => {
    handleTab(event.target.value);
  };
  const getTabs = () =>
    tabs.map((tab, index) => (
      <label className="tabs-label" key={index}>
        <input
          type="radio"
          name={name}
          value={tab.value}
          checked={selected === tab.value}
          className="tab_radio"
          onChange={handleClick}
        />
        <span className="tabs-elem">{tab.name}</span>
      </label>
    ));
  return <div className={`tabs ${className ? className : ''}`}>{getTabs()}</div>;
};

export default CustomTabs;
