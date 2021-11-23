import React, { FC } from "react";
import { useAppSelector } from "../../helpers/redux-hooks";
import includeOption from '../../helpers/includeOption';
import buildList from '../../helpers/buildList';

const PaymentPage: FC = () => {
	const merchant: any = useAppSelector(state => state.app.merchant);
	const multi_language = merchant.use_multi_language_payment_page ? 'content__table-check' : 'content__table-uncheck';

	return (
		<table className="subtab__content">
			<tbody>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Язык платежной страницы</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.default_language}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>Название языков</td>
					<td>
						<ul className="table-list">
							{ buildList(merchant.locales) }
						</ul>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>Логин платежной страницы</td>
					<td>
						<span className="content__table-span">{merchant.payment_page_login}</span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Логин финальной страницы</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.finish_page_login}</span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Мультиязычность</span>
					</td>
					<td>
						<span className={`content__table-span ${multi_language}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Отображение информации о правилах МПС</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'CAN_DISPLAY_IPS_RULES')}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Перенаправлять на заданную платёжную страницу</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'CUSTOM_PAYMENT_PAGE')}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Использует страницу ожидания завершения 3DS</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'USE_COMPLETION_FINISH_3DS_PAGE')}`}></span>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default PaymentPage;
