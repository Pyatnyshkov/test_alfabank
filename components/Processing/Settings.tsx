import React from "react";

const Settings = () => {
  return <div className="subtab__content">
    <table>
      <tr className="content__table-colored">
        <td>Шаблон</td>
        <td>template_merchant login</td>
      </tr>
      <tr className='content__table'>
        <td>Логин</td>
        <td>merchant_login</td>
      </tr>
      <tr className="content__table-colored">
        <td>Пользователи</td>
        <td>custom_user_logins</td>
      </tr>
      <tr className='content__table'>
        <td>Пароль</td>
        <td>password (Необходимо сменить)</td>
      </tr>
    </table>
  </div>;
};

export default Settings;
