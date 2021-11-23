import React, { FC } from "react";
import {useAppSelector} from "../../helpers/redux-hooks";

interface IArrya {
	locales: string[]
}

const PaymentPage: FC = () => {
	const merchant:any = useAppSelector(state => state.app.merchant);
	const language:IArrya = merchant.locales.map((language: string, key: number) => (
		<li key={key}>
			{language}
			{language.length === (key + 1) ? ' ' : `,`}
			&nbsp;
		</li>
	));
	const multi_language = merchant.use_multi_language_payment_page ? 'content__table-check' : 'content__table-uncheck';
	const CAN_DISPLAY_IPS_RULES = merchant.options?.includes('CAN_DISPLAY_IPS_RULES') ? 'content__table-check' : 'content__table-uncheck';
	const CUSTOM_PAYMENT_PAGE = merchant.options?.includes('CUSTOM_PAYMENT_PAGE') ? 'content__table-check' : 'content__table-uncheck';
	const USE_COMPLETION_FINISH_3DS_PAGE = merchant.options?.includes('USE_COMPLETION_FINISH_3DS_PAGE') ? 'content__table-check' : 'content__table-uncheck';

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
							{language}
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
						<span className={`content__table-span ${CAN_DISPLAY_IPS_RULES}`}></span>
					</td>
				</tr>
				<tr className="content__table-colored">
					<td>
						<span className="content__table-span">Перенаправлять на заданную платёжную страницу</span>
					</td>
					<td>
						<span className={`content__table-span ${CUSTOM_PAYMENT_PAGE}`}></span>
					</td>
				</tr>
				<tr className="content__table">
					<td>
						<span className="content__table-span">Использует страницу ожидания завершения 3DS</span>
					</td>
					<td>
						<span className={`content__table-span ${USE_COMPLETION_FINISH_3DS_PAGE}`}></span>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default PaymentPage;
