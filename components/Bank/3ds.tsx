import React, { FC } from "react";
import { useAppSelector } from "../../helpers/redux-hooks";
import includeOption from '../../helpers/includeOption';

const Contacts: FC = () => {
    const merchant: any = useAppSelector(state => state.app.merchant);

    return (
        <table className="subtab__content">
            <tbody>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешено использование Mastercard SecureCode</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SECURECODE_ALLOWED')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Разрешено использование Verified by Visa</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'VERIFIED_BY_VISA_ALLOWED')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешено использование JSecure 3DS 2.0</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'JSECURE_ALLOWED_3DS2')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Разрешено использование MirAccept 3DS 2.0</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'MIR_ACCEPT_ALLOWED_3DS2')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">3D Secure-платежи проходят только со статусом Y</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'ACCEPT_ONLY_ECI_Y')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Включить режим iReq-SSL для ошибок iReq</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'IREQ_SSL_ENABLED')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешено использование JSecure</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'JSECURE_ALLOWED')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Разрешено участие в программе рассрочки Mastercard</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'MASTERCARD_INSTALLMENTS_ALLOWED')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешена оплата по токенизированным связкам в MDES</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'MASTERCARD_TOKENIZE')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Разрешена оплата через страницу на стороне продавца</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'MERCHANT_SIDE_PAYMENT_FORM_ALLOWED')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешено использование MirAccept</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'MIR_ACCEPT_ALLOWED')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Получать 3DS реквизиты операции</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'REPLY_3DS_DATA')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешено использование AMEX SafeKye 3DS 2.0</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SAFE_KEY_ALLOWED_3DS2')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Разрешено использование Mastercard SecureCode 3DS 2.0</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'SECURECODE_ALLOWED_3DS2')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешены платежи через 3DS ver.2</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'THREEDS_VER2_ALLOWED')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Разрешено использование UnionPay 3-D Secure</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'UNIONPAY_3D_SECURE_ALLOWED')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешено использование Verified by Visa 3DS 2.0</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'VERIFIED_BY_VISA_ALLOWED_3DS2')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Разрешено использовать сервис вовлечённости в 3DS</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'VERIFY_ENROLLMENT')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешено участие в программе рассрочки Visa</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'VISA_INSTALLMENTS_ALLOWED')}`}></span>
					</td>
				</tr>
                <tr className="content__table">
					<td>
						<span className="content__table-span">Разрешена токенизация связок в VTS</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'VISA_TOKENIZE')}`}></span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td>
						<span className="content__table-span">Разрешена работа со связками DMR (Деньги Мейл.Ру)</span>
					</td>
					<td>
						<span className={`content__table-span ${includeOption(merchant.options, 'WORK_WITH_DMR')}`}></span>
					</td>
				</tr>
            </tbody>
        </table>
    );
};

export default Contacts;
