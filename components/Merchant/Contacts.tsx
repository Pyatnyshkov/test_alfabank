import React, { FC } from "react";
import { useAppSelector } from "../../helpers/redux-hooks";

const Contacts: FC = () => {
  const app = useAppSelector(state => state.app);
  const merchant = app.merchant;

  return (
    <table className="subtab__content">
      <tbody>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Адрес сайта (URL)</span>
          </td>
          <td>
            <span className="content__table-span">{merchant.merchant_url}</span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Адрес оферты</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.agreement_url}
            </span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Адреса почты</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.merchant_emails}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Фактический адрес мерчанта
            </span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.merchant_actual_address}
            </span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Номер телефона мерчанта</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.merchant_phone}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Адрес для обратной связи
            </span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.merchant_feedback_email}
            </span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Описание мерчанта</span>
          </td>
          <td>
            <span className="content__table-span">{merchant.description}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Contacts;
