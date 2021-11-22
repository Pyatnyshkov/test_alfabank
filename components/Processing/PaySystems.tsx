import React, { useState } from "react";

const PaySystems = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  const getContent = () => {
    switch (toggleState) {
      case 1:
        return 'mir_terminal_id';
      case 2:
        return 'mc_3ds_id';
      case 3:
        return 'visa_3ds_id';
      case 4:
        return 'card_accept_code';
      case 5:
        return 'CUP_3ds_id';
      case 6:
        return 'amex_3ds_id';
    }
  };

  return (
    <div className="subtab__content">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "subtabs active-tabs" : "subtabs"}
          onClick={() => toggleTab(1)}
        />
        <button
          className={toggleState === 2 ? "subtabs active-tabs" : "subtabs"}
          onClick={() => toggleTab(2)}
        />
        <button
          className={toggleState === 3 ? "subtabs active-tabs" : "subtabs"}
          onClick={() => toggleTab(3)}
        />
        <button
          className={toggleState === 4 ? "subtabs active-tabs" : "subtabs"}
          onClick={() => toggleTab(4)}
        />
        <button
          className={toggleState === 5 ? "subtabs active-tabs" : "subtabs"}
          onClick={() => toggleTab(5)}
        />
        <button
          className={toggleState === 6 ? "subtabs active-tabs" : "subtabs"}
          onClick={() => toggleTab(6)}
        />
      </div>
      <div className="content-tabs">
        <strong>ID: </strong>
        <div className="content">{getContent()}</div>
      </div>
    </div>
  );
};

export default PaySystems;
