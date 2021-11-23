import React, { FC } from "react";
import {useAppSelector} from "../../helpers/redux-hooks";

const Settings: FC = () => {
	const merchant = useAppSelector(state => state.app.merchant);
	const REGISTER_BY_CLIENT = merchant.options?.includes('REGISTER_BY_CLIENT') ? 'content__table-check' : 'content__table-uncheck';
	
	return (
		<table className="subtab__content">
			<tbody>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Логин мерчанта</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.merchant_login}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Пароль</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.password}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Предприятие</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.merchant_full_name}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Merchant ID (MID)</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.processing_id}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Terminal ID (TID)</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.terminal_id}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Код категории продавца</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.mcc}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Логин страницы правил</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.rules_page_login}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Разрешена регистрация заказа клиентом</span>
					</td>
					<td>
						<span className={`content__table-span ${REGISTER_BY_CLIENT}`}></span>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Settings;
