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
    <nav className="aside">
      <ul className="merchants-list">
        {merchants.map((merchant: Merchant, index: number) => (
          <li
            className={`merchant__elem ${merchant.merchant_full_name ===
              selected.merchant_full_name && "merchant__elem__selected"}`}
            key={index}
            onClick={() => selectMerchant(merchant)}
          >
            <h2 className="merchant__name">
              {merchant.merchant_full_name}
            </h2>
            <ul className="merchant-contacts-list">
              <li className="merchant__contact">
                <a
                  className="merchant__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={merchant.merchant_url}
                >
                  {merchant.merchant_url}
                </a>
              </li>
              <li className="merchant__contact">
                <span className="merchant__phone">
                  {merchant.merchant_phone}
                </span>
              </li>
              <li className="merchant__contact">
                <span className="merchant__mail">
                  {merchant.merchant_emails}
                </span>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default List;
