import React, { FC } from "react";
import { useAppSelector } from "../../helpers/redux-hooks";
import includeOption from '../../helpers/includeOption';
import buildList from '../../helpers/buildList';

const Settings: FC = () => {
	const merchant: any = useAppSelector(state => state.app.merchant);
	const merchantEnabled = merchant.enabled ? 'Активен' : 'Неактивен';

	return (
		<table className="subtab__content">
			<tbody>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Логин мерчанта </span>
					</td>
					<td>
						<span className="content__table-span">{merchant.merchant_login}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Предприятие</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.merchant_full_name}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Пароль</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.password}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Смена пароля</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.must_change_pwd}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Merchant ID (MID)</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.processing_id}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Terminal ID (TID)</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.terminal_id}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешена оплата через страницу на стороне продавца</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'USE_EXTERNAL_MPI')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Активность продавца</span>
					</td>
					<td>
						<span className="content__table-span">{merchantEnabled}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Валюта</span>
					</td>
					<td>
						<ul className="table-list">
							{ buildList(merchant.currencies) }
						</ul>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Код валюты</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.default_currency}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Имя мерчанта на странице правил МПС</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.rules_page_merchant_name}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Автозавершение включено</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'AUTOCOMPLETION_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешено проведение автоплатежей</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'AUTOPAYMENTS_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешена дополнительная информация по платежу (авиа)</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'AVIA_ADDENUM')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Сервис/система для проверки адреса клиента в случае выполнения оплаты по картам VISA и MasterCard / Amex</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'AVS_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Система генерирует clientId</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'CLIENT_ID_GENERATION')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Конвертация валют, отличных от рублёвой</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'CURRENCY_CONVERSION_REQUIRED')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Система генерирует номер заказа</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'GENERATE_ORDERNUMBER')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Обязательное указание описания заказа</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'ORDER_DESCRIPTION_REQUIRED')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешены частичные отмены</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'PARTIAL_REVERSE')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Оплата картами запрещена</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'PAY_BY_CARD_NOT_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Оплата картой, когда уже известна сумма оплаты</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'PAY_BY_CARD_QUICK_BUTTONS')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Отсылать сообщение клиенту после каждого возврата средств</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SEND_CLIENT_EMAIL_AFTER_REFUND')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Отсылать сообщение-заявку в банк вместо отмены завершения</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SEND_EMAIL_INSTEAD_COMPLETION_REVERSAL')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешена отправка описания заказа в процессинг</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SEND_ORDER_DESC_TO_SV')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешена отправка номера заказа в процессинг</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SEND_ORDER_NUMBER_TO_SV')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешена отправка платёжной формы</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SEND_PAYMENT_FORM')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешена оплата связкой через СМС</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SMS_BINDING_PAYMENT_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешены платежи через SSL</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SSL_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешены платежи через SSL для AMEX</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SSL_AMEX_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешены платежи через SSL для CUP</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SSL_CUP_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешены платежи через SSL для JCB</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SSL_JCB_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешены платежи через SSL для Mastercard</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SSL_MASTERCARD_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешены платежи через SSL для MIR</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SSL_MIR_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Оплата через SSL, если есть 3DS связка</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SSL_VIA_3DS_BINDING')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешены платежи через SSL для VISA</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SSL_VISA_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешена отправка платёжной формы</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'USE_GENERIC_FINISH_PAYMENT_PAGE')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешено проверять платежи</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'VERIFY_PAYMENTS_ALLOWED')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Поддержка белого списка для кредитовых операций</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'WHITE_LIST_CREDIT')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Поддержка белого списка для дебетовых операций</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'WHITE_LIST_DEBIT')}`}></span>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Settings;
