import React, { FC } from "react";
import MerchantCard from "./MerchantCard";
import { useAppSelector } from "../../helpers/redux-hooks";

const List: FC = () => {
  const merchants = useAppSelector(state => state.app.merchants);
  const selected = useAppSelector(state => state.app.merchant);
  const merchantList = merchants.map(merchant => (
    <MerchantCard
      merchant={merchant}
      key={merchant.merchant_full_name}
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
