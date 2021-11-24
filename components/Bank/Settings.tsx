import React, { FC } from "react";
import { useAppSelector } from "../../helpers/redux-hooks";
import includeOption from "../../helpers/includeOption";
import buildList from "../../helpers/buildList";

const Settings: FC = () => {
  const merchant: any = useAppSelector(state => state.app.merchant);
  const EXTERNAL_FRAUD_CONTROL_ENABLED = merchant.external_fraud_control_enabled
    ? "content__table-check"
    : "content__table-uncheck";
  const OVERRIDED_FRAUD_CONTROL_LOGIN_ENABLED = merchant.overrided_fraud_control_login_enabled
    ? "content__table-check"
    : "content__table-uncheck";

  return (
    <table className="subtab__content">
      <tbody>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Логин мерчанта</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.merchant_login}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Список логинов</span>
          </td>
          <td>
            <ul className="table-list">
              {buildList(merchant.custom_user_logins)}
            </ul>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Предприятие</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.merchant_full_name}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Merchant ID (MID)</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.processing_id}
            </span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Terminal ID (TID)</span>
          </td>
          <td>
            <span className="content__table-span">{merchant.terminal_id}</span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Адрес сайта (URL)</span>
          </td>
          <td>
            <span className="content__table-span">{merchant.merchant_url}</span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Фрод-мониторинг вне шлюза РБС
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${EXTERNAL_FRAUD_CONTROL_ENABLED}`}
            />
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Имя для фрод-контроля</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.overrided_fraud_control_login}
            </span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Terminal ID (TID) длч СПБ
            </span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.sbp_terminal_id}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Код категории продавца</span>
          </td>
          <td>
            <span className="content__table-span">{merchant.mcc}</span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Список разрешений</span>
          </td>
          <td>
            <ul className="table-list">{buildList(merchant.options)}</ul>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Валюта</span>
          </td>
          <td>
            <ul className="table-list">{buildList(merchant.currencies)}</ul>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Код валюты</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.default_currency}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Отправка в фрод-мониторинг "Имя для ФК"
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${OVERRIDED_FRAUD_CONTROL_LOGIN_ENABLED}`}
            />
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Имя мерчанта на странице правил МПС
            </span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.rules_page_merchant_name}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Разрешено взимание комиссии с клиента
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "ALLOW_TO_CHARGE_COMMISSION"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Разрешено проведение автоплатежей
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "AUTOPAYMENTS_ALLOWED"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Разрешено проведение завершений на сумму, большую, чем сумма
              предавторизации
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "DEPOSIT_CAN_BE_EXCEEDED"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Разрешены платежи через оператор связи МТС
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "MTS_PAYMENT_ALLOWED"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Разрешено использовать другие способы оплаты
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "PAY_BY_OTHER_WAY"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Разрешить платежи по рассрочке с использованием платёжного шлюза
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "RBS_INSTALLMENTS_ALLOWED"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Разрешено создание рекуррентных связок
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "RECURRENT_INITIALIZE"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Разрешено превышение суммы при возврате
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "REFUND_CAN_BE_EXCEEDED"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Разрешены возвраты</span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "REFUNDS_ALLOWED"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Использовать лимиты</span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "USE_LIMIT"
              )}`}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Settings;
