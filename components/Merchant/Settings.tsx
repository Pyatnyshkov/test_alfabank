import React, { FC } from "react";
import {useAppSelector} from "../../helpers/redux-hooks";
import includeOption from '../../helpers/includeOption';

const Settings: FC = () => {
	const merchant: any = useAppSelector(state => state.app.merchant);
	
	return (
		<table className="subtab__content">
			<tbody>
				<tr className="content__table-colored">
					<td className="table-key">
						<span className="content__table-span">Логин мерчанта</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.merchant_login}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td className="table-key">
						<span className="content__table-span">Пароль</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.password}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td className="table-key">
						<span className="content__table-span">Предприятие</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.merchant_full_name}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td className="table-key">
						<span className="content__table-span">Merchant ID (MID)</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.processing_id}</span>
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
						<span className="content__table-span">Код категории продавца</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.mcc}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td className="table-key">
						<span className="content__table-span">Логин страницы правил</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.rules_page_login}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td className="table-key">
						<span className="content__table-span">Разрешена регистрация заказа клиентом</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'REGISTER_BY_CLIENT')}`}></span>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Settings;
