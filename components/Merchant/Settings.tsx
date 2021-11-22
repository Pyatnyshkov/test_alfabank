import React, { FC } from "react";

const Settings: FC = () => {
  return (
    <div className="subtab__content">
      <table>
        <tbody>
          <tr className="content__table-colored">
            <td>Шаблон</td>
            <td>template_merchant login</td>
          </tr>
          <tr className="content__table">
            <td>Логин</td>
            <td>merchant_login</td>
          </tr>
          <tr className="content__table-colored">
            <td>Пользователи</td>
            <td>custom_user_logins</td>
          </tr>
          <tr className="content__table">
            <td>Пароль</td>
            <td>password (Необходимо сменить)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Settings;
