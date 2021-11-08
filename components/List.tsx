import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../helpers/redux-hooks";
import { Merchant } from "../models/merchant";
import { setMerchant } from "../store/reducers/app";

const List: FC = () => {
  const { merchants } = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  return (
    <div className="merchants_list">
      {merchants.map((merchant: Merchant, index: number) => (
        <div
          className="merchant_list-elem"
          key={index}
          onClick={() => dispatch(setMerchant(merchant.merchant_full_name))}
        >
          <div className="merchant_list-name">{merchant.merchant_full_name}</div>
          <div className="merchant_list-contacts">
            <div className="merchant_list-contacts-elem">
              {merchant.merchant_url}
            </div>
            <div className="merchant_list-contacts-elem">
              {merchant.merchant_phone}
            </div>
            <div className="merchant_list-contacts-elem">
              {merchant.merchant_emails}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
