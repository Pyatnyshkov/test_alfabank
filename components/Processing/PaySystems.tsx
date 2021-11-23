import React, { useState } from "react";
import { useAppSelector } from "../../helpers/redux-hooks";

interface paymentSystems {
  [key: string]: string | undefined;
}

const PaySystems = () => {
  const [paySystem, setPaySystem] = useState("");
  const merchant = useAppSelector(state => state.app.merchant);
  const toggleTab = (paySystem: string) => {
    setPaySystem(paySystem);
  };

  const paymentSystems: paymentSystems = {
    mir_3ds_id: merchant.mir_3ds_id,
    master_card_3ds_id: merchant.master_card_3ds_id,
    visa_3ds_id: merchant.visa_3ds_id,
    jcb_3ds_id: merchant.jcb_3ds_id,
    cup_3ds_id: merchant.cup_3ds_id,
    amex_3ds_id: merchant.amex_3ds_id
  };

  const apply = Object.keys(paymentSystems).filter(
    (paymentSystem: string) => paymentSystems[paymentSystem]
  );

  return (
    <div className="subtab__content">
      <div className="bloc-tabs">
        {apply.map((paymentSystem: string, index: number) => (
          <button
            key={index}
            className={
              paySystem === paymentSystem ? "subtabs active-tabs" : "subtabs"
            }
            onClick={() => toggleTab(paymentSystem)}
          />
        ))}
      </div>
      <div className="content-tabs">
        <strong>ID: </strong>
        <div className="content">{merchant[paySystem]}</div>
      </div>
    </div>
  );
};

export default PaySystems;
