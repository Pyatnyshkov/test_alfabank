import React from "react";
import { useAppDispatch } from "../../helpers/redux-hooks";

import { setMerchant } from "../../store/appReducer";
import { Merchant } from "../../models/merchant";

interface IList {
  merchant: Merchant;
  selected: boolean;
}

const MerchantCard: React.FC<IList> = ({ merchant, selected }) => {
  const dispatch = useAppDispatch();
  const selectMerchant = (merchant: Merchant) => {
    if (!selected) {
      dispatch(setMerchant(merchant));
    }
  };

  return (
    <li className={`merchant__elem ${selected && "merchant__elem__selected"}`}>
      <button
        className="merchant__button"
        type="button"
        onClick={() => selectMerchant(merchant)}
      >
        <h2 className="merchant__name">{merchant.merchant_full_name}</h2>
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
            <span className="merchant__phone">{merchant.merchant_phone}</span>
          </li>
          <li className="merchant__contact">
            <span className="merchant__mail">
              {merchant.merchant_feedback_email}
            </span>
          </li>
        </ul>
      </button>
    </li>
  );
};

export default React.memo(MerchantCard);
