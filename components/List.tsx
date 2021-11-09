import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../helpers/redux-hooks";
import { Merchant } from "../models/merchant";
import { setMerchant } from "../store/reducers/app";

const List: FC = () => {
  const merchants = useAppSelector(state => state.app.merchants);
  const selected = useAppSelector(state => state.app.merchant);
  const dispatch = useAppDispatch();
  const selectMerchant = (merchant: Merchant) => {
    if (selected.merchant_full_name === merchant.merchant_full_name) {
      dispatch(setMerchant(selected));
    } else {
      dispatch(setMerchant(merchant));
    }
  };
  return (
    <div className="merchants_list">
      {merchants.map((merchant: Merchant, index: number) => (
        <div
          className={`merchant_list-elem ${merchant.merchant_full_name ===
            selected.merchant_full_name && "merchant_list-elem-selected"}`}
          key={index}
          onClick={() => selectMerchant(merchant)}
        >
          <div className="merchant_list-name">
            {merchant.merchant_full_name}
          </div>
          <div className="merchant_list-contacts">
            <div className="merchant_list-contacts-elem">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={merchant.merchant_url}
              >
                {merchant.merchant_url}
              </a>
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
