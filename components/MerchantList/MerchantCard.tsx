import React from 'react';
import { useAppDispatch } from "../../helpers/redux-hooks";

import { setMerchant } from "../../store/reducers/app";
import { Merchant } from "../../models/merchant";

interface IList {
    merchant: Merchant;
    selected: Merchant;
}

const MerchantCard: React.FC<IList> = ({merchant, selected}) => {
    const dispatch = useAppDispatch();
    const selectMerchant = (merchant: Merchant) => {
        if (selected.merchant_full_name === merchant.merchant_full_name) {
            dispatch(setMerchant(selected));
        } else {
            dispatch(setMerchant(merchant));
        }
    };

    return (
        <li
            className={`merchant__elem 
                ${merchant.merchant_full_name === selected.merchant_full_name 
                && "merchant__elem__selected"}`
            }
        >
            <button className="merchant__button" type="button" onClick={() => selectMerchant(merchant)} >
                <h2 className="merchant__name">
                    {merchant.merchant_full_name}
                </h2>
                <ul className="merchant-contacts-list">
                    <li className="merchant__contact">
                        <a
                            className="merchant__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={merchant.merchant_url} >
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
            </button>
        </li>
    )
} 

export default MerchantCard;