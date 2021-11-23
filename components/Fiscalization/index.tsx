import React, { FC } from "react";
import {useAppSelector} from "../../helpers/redux-hooks";

const Fiscalization: FC = () => {
    const merchant:any = useAppSelector(state => state.app.merchant);
    const CAN_CREATE_OFD_RECEIPTS_MANUALLY = merchant.options?.includes('CAN_CREATE_OFD_RECEIPTS_MANUALLY') ? 'content__table-check' : 'content__table-uncheck';

    return <section className="subtab__content">
        <table className="subtab__content">
			<tbody>
				<tr className="content__table-colored">
					<td className="table-key">
						<span className="content__table-span">ИНН</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.merchant_inn}</span>
					</td>
				</tr>
                <tr className="content__table">
					<td className="table-key">
						<span className="content__table-span">КПП</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.merchant_kpp}</span>
					</td>
				</tr>
                <tr className="content__table-colored">
					<td className="table-key">
						<span className="content__table-span">ОГРН</span>
					</td>
					<td>
						<span className="content__table-span">{merchant.merchant_ogrn}</span>
					</td>
				</tr>
                <tr className="content__table">
					<td className="table-key">
						<span className="content__table-span">Разрешено формирование фискальных чеков</span>
					</td>
					<td>
						<span className={`content__table-span ${CAN_CREATE_OFD_RECEIPTS_MANUALLY}`}></span>
					</td>
				</tr>
            </tbody>
        </table>
    </section>;
};

export default Fiscalization;
