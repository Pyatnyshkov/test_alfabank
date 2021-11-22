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
      <li className="tab__item" key={index}>
        <label className="tabs-label">
          <input
            type="radio"
            name={name}
            value={tab.value}
            checked={selected === tab.value}
            className="tab__radio"
            onChange={handleClick}
          />
          <span className="tabs__name">{tab.name}</span>
        </label>
      </li>
    ));
  return (
    <nav className="merchant-card-nav">
      <ul className={`merchant-card-list tabs ${className ? className : ""}`}>
        {getTabs()}
      </ul>
    </nav>
  );
};

export default CustomTabs;
