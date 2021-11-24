import React, { FC } from "react";
import { useAppSelector } from "../../helpers/redux-hooks";
import includeOption from "../../helpers/includeOption";
import buildList from "../../helpers/buildList";

const Notifications: FC = () => {
  const merchant: any = useAppSelector(state => state.app.merchant);
  const SEND_CLIENT_EMAIL = merchant.send_client_email
    ? "content__table-check"
    : "content__table-uncheck";
  const SEND_MERCHANT_EMAIL = merchant.send_merchant_email
    ? "content__table-check"
    : "content__table-uncheck";

  const MERCHANT_ADDITIONAL_PARAM = merchant.merchant_additional_param.map(
    (merchant: any, key: number) => (
      <li key={key}>
        <table>
          <tbody>
            <tr>
              <td>
                <span className="content__table-span">Название</span>
              </td>
              <td>
                <span className="content__table-span">{merchant.name}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="content__table-span">Способ оплаты</span>
              </td>
              <td>
                <span className="content__table-span">
                  {merchant.payment_way}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="content__table-span">Значение</span>
              </td>
              <td>
                <span className="content__table-span">{merchant.value}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
    )
  );

  return (
    <table className="subtab__content">
      <tbody>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Отсылать уведомление по телефону
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "SEND_PAYER_NOTIFICATION_BY_PHONE"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Токен мерчанта для подписи в callback
            </span>
          </td>
          <td>
            <span className="content__table-span">{merchant.signer_token}</span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Симметричный ключ для подписи callback-уведомления
            </span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.callback_token}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Тип подписи callback-уведомления
            </span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.callback_signing_type}
            </span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Тип коллбека</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.callback_type}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Адреса для коллбеков</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.callback_addresses}
            </span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Список callback-операций
            </span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.callback_operations}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Отправлять уведомления клиенту
            </span>
          </td>
          <td>
            <span className={`content__table-span ${SEND_CLIENT_EMAIL}`} />
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Отправлять уведомления продавцу
            </span>
          </td>
          <td>
            <span className={`content__table-span ${SEND_MERCHANT_EMAIL}`} />
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              HTTP заголовки для коллбеков
            </span>
          </td>
          <td>
            <ul className="table-list">
              {buildList(merchant.callback_headers)}
            </ul>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Дополнительные параметры для коллбеков
            </span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.callback_additional_params}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">Идентификатор родителя</span>
          </td>
          <td>
            <span className="content__table-span">{merchant.parent_id}</span>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Список операцией для оповещений покупателя
            </span>
          </td>
          <td>
            <ul className="table-list">
              {buildList(merchant.operations_for_payer_notification)}
            </ul>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Список операцией для оповещений продавца
            </span>
          </td>
          <td>
            <ul className="table-list">
              {buildList(merchant.operations_for_merchant_notification)}
            </ul>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">Открытый токен</span>
          </td>
          <td>
            <span className="content__table-span">
              {merchant.open_token_id}
            </span>
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Дополнительные параметры продавца
            </span>
          </td>
          <td>
            <ul className="table-list-column">{MERCHANT_ADDITIONAL_PARAM}</ul>
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Разрешено выполнять callback-операции
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "CALLBACK_OPERATIONS"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table">
          <td className="table-key">
            <span className="content__table-span">
              Уведомлять о создании связки
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "NOTIFY_BINDING_CREATED"
              )}`}
            />
          </td>
        </tr>
        <tr className="content__table-colored">
          <td className="table-key">
            <span className="content__table-span">
              Отправлять уведомления об оформлении заказа
            </span>
          </td>
          <td>
            <span
              className={`content__table-span ${includeOption(
                merchant.options,
                "SEND_ORDER_REGISTRATION_NOTIFICATION"
              )}`}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Notifications;
