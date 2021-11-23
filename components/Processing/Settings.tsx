import React from "react";
import {useAppSelector} from "../../helpers/redux-hooks";


const Settings = () => {

  const merchant = useAppSelector(state => state.app.merchant)

  return (
    <div className="subtab__content">
      <table>
        <tbody>
          <tr className="content__table-colored">
            <td>Шаблон</td>
            <td>{merchant.template_merchant_login}</td>
          </tr>
          <tr className="content__table">
            <td>Логин</td>
            <td>{merchant.merchant_login}</td>
          </tr>
          <tr className="content__table-colored">
            <td>Пользователи</td>
            <td>{merchant.custom_user_logins}</td>
          </tr>
          <tr className="content__table">
            <td>Пароль</td>
            <td>{merchant.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Settings;
