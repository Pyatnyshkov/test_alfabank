import React, { useState } from "react";
import {useAppSelector} from "../../helpers/redux-hooks";

const PaySystems = () => {
  const [toggleState, setToggleState] = useState(1);
  const app = useAppSelector(state => state.app)
  const toggleTab = (index: any) => {
    setToggleState(index);
  };


  const checkData = {
    checkMirData: function () {
      if (app.merchant.mir_3ds_id) {
        return app.merchant.mir_3ds_id
      } else {
        return '-'
      }
    },
    checkMcData: function () {
      if(app.merchant.master_card_3ds_id){
        return app.merchant.master_card_3ds_id
      } else {
        return '-'
      }
    },
    checkVisaData: function () {
      if(app.merchant.visa_3ds_id){
        return app.merchant.visa_3ds_id
      } else {
        return '-'
      }
    },
    checkJcbData: function () {
      if(app.merchant.jcb_3ds_id){
        return app.merchant.jcb_3ds_id
      } else {
        return '-'
      }
    },
    checkCupData: function () {
      if(app.merchant.amex_3ds_id){
        return app.merchant.cup_3ds_id
      } else {
        return '-'
      }
    },
    checkAmexData: function () {
      if(app.merchant.amex_3ds_id){
        return app.merchant.amex_3ds_id
      } else {
        return '-'
      }
    }
  }
  const getContent = () => {
    switch (toggleState) {
      case 1:
        return checkData.checkMirData()
      case 2:
        return  checkData.checkMcData();
      case 3:
        return checkData.checkVisaData();
      case 4:
        return checkData.checkJcbData();
      case 5:
        return checkData.checkCupData();
      case 6:
        return checkData.checkAmexData();
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
