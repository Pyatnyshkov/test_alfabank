import React, { useState } from "react";
import {useAppSelector} from "../../helpers/redux-hooks";
import app from "../../store/reducers/app";


const PaySystems = () => {
  const [toggleState, setToggleState] = useState(1);
  const merchant = useAppSelector(state => state.app.merchant)
  const toggleTab = (index: any) => {
    setToggleState(index);
  };


  const paymentSystems: any = {
    mir_3ds: merchant.mir_3ds_id,
    mc_3ds: merchant.master_card_3ds_id,
    visa_3ds: merchant.visa_3ds_id,
    jcb_3ds: merchant.jcb_3ds_id,
    cup_3ds: merchant.cup_3ds_id,
    amex_3ds: merchant.amex_3ds_id
  }

  const apply = Object.keys(paymentSystems).filter(x => x !== undefined)

  const checkData = {
    checkMirData: function () {
      if (merchant.mir_3ds_id) {
        return merchant.mir_3ds_id
      } else {
        return '-'
      }
    },
    checkMcData: function () {
      if(merchant.master_card_3ds_id){
        return merchant.master_card_3ds_id
      } else {
        return '-'
      }
    },
    checkVisaData: function () {
      if(merchant.visa_3ds_id){
        return merchant.visa_3ds_id
      } else {
        return '-'
      }
    },
    checkJcbData: function () {
      if(merchant.jcb_3ds_id){
        return merchant.jcb_3ds_id
      } else {
        return '-'
      }
    },
    checkCupData: function () {
      if(merchant.amex_3ds_id){
        return merchant.cup_3ds_id
      } else {
        return '-'
      }
    },
    checkAmexData: function () {
      if(merchant.amex_3ds_id){
        return merchant.amex_3ds_id
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

        {apply.map((paymentSystem: any, index) => (
            <button
              key={index}
              className={toggleState === paymentSystem ? "subtabs active-tabs" : "subtabs"}
              onClick={() => toggleTab(paymentSystem)}
            />
        ))}

        {/*<button*/}
        {/*  className={toggleState === 1 ? "subtabs active-tabs" : "subtabs"}*/}
        {/*  onClick={() => toggleTab(1)}*/}
        {/*/>*/}
        {/*<button*/}
        {/*  className={toggleState === 2 ? "subtabs active-tabs" : "subtabs"}*/}
        {/*  onClick={() => toggleTab(2)}*/}
        {/*/>*/}
        {/*<button*/}
        {/*  className={toggleState === 3 ? "subtabs active-tabs" : "subtabs"}*/}
        {/*  onClick={() => toggleTab(3)}*/}
        {/*/>*/}
        {/*<button*/}
        {/*  className={toggleState === 4 ? "subtabs active-tabs" : "subtabs"}*/}
        {/*  onClick={() => toggleTab(4)}*/}
        {/*/>*/}
        {/*<button*/}
        {/*  className={toggleState === 5 ? "subtabs active-tabs" : "subtabs"}*/}
        {/*  onClick={() => toggleTab(5)}*/}
        {/*/>*/}
        {/*<button*/}
        {/*  className={toggleState === 6 ? "subtabs active-tabs" : "subtabs"}*/}
        {/*  onClick={() => toggleTab(6)}*/}
        {/*/>*/}
      </div>
      <div className="content-tabs">
        <strong>ID: </strong>
        <div className="content">{getContent()}</div>
      </div>
    </div>
  );
};

export default PaySystems;
