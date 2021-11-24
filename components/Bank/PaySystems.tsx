import React, { FC, useState } from "react";
import { useAppSelector } from "../../helpers/redux-hooks";
import includeOption from "../../helpers/includeOption";

interface paymentSystems {
    [key: string]: string | undefined;
}

const PaySystems: FC = () => {
    const [paySystem, setPaySystem] = useState("");
    const merchant = useAppSelector(state => state.app.merchant);
    const toggleTab = (paySystem: string) => {
        setPaySystem(paySystem);
    };
    const paymentSystems: paymentSystems = {
        mir_3ds_id: merchant.mir_3ds_id,
        master_card_3ds_id: merchant.master_card_3ds_id,
        visa_3ds_id: merchant.visa_3ds_id,
        jcb_3ds_id: merchant.jcb_3ds_id,
        cup_3ds_id: merchant.cup_3ds_id,
        amex_3ds_id: merchant.amex_3ds_id,
    };
    const apply = Object.keys(paymentSystems).filter(
        (paymentSystem: string) => paymentSystems[paymentSystem]
    );

    console.log(paySystem);

    return (
        <div>
        <table className="subtab__content">
            <tbody>
                <tr className="table-key">
                    <td className="table-key">
                        <span className="content__table-span">
                            Разрешена оплата без CVC
                        </span>
                    </td>
                    <td>
                        <span
                        className={`content__table-span ${includeOption(
                            merchant.options,
                            "PAY_WITHOUT_CVC"
                        )}`}
                        />
                    </td>
                </tr>
                <tr className="table-key">
                    <td className="table-key">
                        <span className="content__table-span">
                            Использование криптограмм для оплаты на стороне ТСП
                        </span>
                    </td>
                    <td>
                        <span
                        className={`content__table-span ${includeOption(
                            merchant.options,
                            "PAYMENT_WITH_SELF_ENCRYPTED_TOKEN_ALLOWED"
                        )}`}
                        />
                    </td>
                </tr>
                <tr className="table-key">
                    <td className="table-key">
                        <span className="content__table-span">
                            Разрешено проводить двухфазные платежи
                        </span>
                    </td>
                    <td>
                        <span
                        className={`content__table-span ${includeOption(
                            merchant.options,
                            "TWO_PHASE_PAYMENT_ALLOWED"
                        )}`}
                        />
                    </td>
                </tr>
                <tr className="table-key">
                    <td className="table-key">
                        <span className="content__table-span">
                            Разрешено использование TDSecAuthorizer
                        </span>
                    </td>
                    <td>
                        <span
                        className={`content__table-span ${includeOption(
                            merchant.options,
                            "USE_TDS_AUTHORIZER"
                        )}`}
                        />
                    </td>
                </tr>
                <tr className="table-key">
                    <td className="table-key">
                        <span className="content__table-span">
                            Разрешена оплата расшифрованными токенами
                        </span>
                    </td>
                    <td>
                        <span
                        className={`content__table-span ${includeOption(
                            merchant.options,
                            "VENDOR_PAY_DIRECT_ALLOWED"
                        )}`}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <table className="subtab__content">
            <tbody>
                <tr>
                    {apply.map((paymentSystem: string, index: number) => (
                        <td>
                            <button
                                key={index}
                                className={
                                    paySystem === paymentSystem ? `subtabs active-tabs ${paymentSystem}` : `subtabs ${paymentSystem}`
                                }
                                onClick={() => toggleTab(paymentSystem)}
                            />
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
        <table className="subtab__content">
            {
                paySystem === 'mir_3ds_id' ? (
                    <tbody>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в Ares-е для MIR 
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_ARES_MIR"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в PARes-е для MIR
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_PARES_MIR"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в VERes-е для MIR
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_VERES_MIR"
                                )}`}
                                />
                            </td>
                        </tr>
                    </tbody>
                ) 
                    : 
                paySystem === 'master_card_3ds_id' ? (
                    <tbody>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в Ares-е для Mastercard
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_ARES_MC"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в PARes-е для MasterCard 
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_PARES_MC"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в VERes-е для Mastercard
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_VERES_MC"
                                )}`}
                                />
                            </td>
                        </tr>
                    </tbody>
                )
                    :
                paySystem === 'visa_3ds_id' ? (
                    <tbody>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в Ares-е для VISA
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_ARES_VISA"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в PARes-е для VISA
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_PARES_VISA"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в VERes-е для VISA
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_VERES_VISA"
                                )}`}
                                />
                            </td>
                        </tr>
                    </tbody>
                )
                    :
                paySystem === 'amex_3ds_id' ? (
                    <tbody>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    ID для передачи в AmEx
                                </span>
                            </td>
                            <td>
                                <span className="content__table-span">{merchant.card_acceptor_code}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Разрешено использование карт American Express
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "USE_AMEX"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в Ares-е для AMEX
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_ARES_AMEX"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в PARes-е для AMEX
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_PARES_AMEX"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в VERes-е для AMEX
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_VERES_AMEX"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Разрешено использование AMEX SafeKey
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "SAFE_KEY_ALLOWED"
                                )}`}
                                />
                            </td>
                        </tr>
                    </tbody>
                )
                    :
                paySystem === 'jcb_3ds_id' ? (
                    <tbody>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Разрешено использование карт JCB
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "USE_JCB"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в Ares-е для JCB
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_ARES_JCB"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в PARes-е для JCB
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_PARES_JCB"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в VERes-е для JCB
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_VERES_JCB"
                                )}`}
                                />
                            </td>
                        </tr>
                    </tbody>
                ) 
                    :
                paySystem === 'cup_3ds_id' ? (
                    <tbody>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Разрешено использование карт CUP
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "USE_CUP"
                                )}`}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-key">
                                <span className="content__table-span">
                                    Оплата c ECI=7, если U в Ares-е для CUP
                                </span>
                            </td>
                            <td>
                            <span
                                className={`content__table-span ${includeOption(
                                    merchant.options,
                                    "TRY_SSL_IF_U_IN_ARES_CUP"
                                )}`}
                                />
                            </td>
                        </tr>
                    </tbody>
                ) : ''
            }
        </table>
        </div>
    );
};

export default PaySystems;
