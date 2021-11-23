import React, { FC } from "react";
import {useAppSelector} from "../../helpers/redux-hooks";

const Settings: FC = () => {
  const app = useAppSelector(state => state.app)

  return (
    <div className="subtab__content">
      <table>
        <tbody>
          <tr className="content__table-colored">
            <td>Шаблон</td>
            <td>{app.merchant.template_merchant_login}</td>
          </tr>
          <tr className="content__table">
            <td>Логин</td>
            <td>{app.merchant.merchant_login}</td>
          </tr>
          <tr className="content__table-colored">
            <td>Пользователи</td>
            <td>{app.merchant.custom_user_logins}</td>
          </tr>
          <tr className="content__table">
            <td>Пароль</td>
            <td>{app.merchant.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Settings;
