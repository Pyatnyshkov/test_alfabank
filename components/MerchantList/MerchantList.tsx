import React, { FC } from "react";
import MerchantCard from "./MerchantCard";
import { useAppSelector } from "../../helpers/redux-hooks";
import { Merchant } from "../../models/merchant";
import { merchantApi } from "../../services/MerchantService";

const List: FC = () => {
  const {
    data: merchants
  } = merchantApi.useFetchMerchantsQuery(null);
  const selected = useAppSelector(state => state.app.merchant);
  const merchantList = merchants?.map((merchant: Merchant, index: number) => (
    <MerchantCard
      merchant={merchant}
      key={index}
      selected={merchant.merchant_full_name === selected.merchant_full_name}
    />
  ));

  return (
    <nav className="aside">
      <ul className="merchants-list">{merchantList}</ul>
    </nav>
  );
};

export default React.memo(List);
