import React from "react";
import {useAppSelector} from "../../helpers/redux-hooks";



const SendSettings = () => {

    const merchant = useAppSelector(state => state.app.merchant)


    return <div className="subtab__content">
        <table>
            <tr className="content__table-colored">
                <td>Параметры заказа</td>
                <td>{merchant.show_param_list_mapping}</td>
            </tr>
            <tr className='content__table'>
                <td>Параметры связок</td>
                <td>{merchant.show_binding_param_list}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Логины мерчантов со связками</td>
                <td>{merchant.viewable_merchant_bindings}</td>
            </tr>
            <tr className='content__table'>
                <td>Тип связки</td>
                <td>{merchant.allowed_binding_type}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Использование закрытых связок</td>
                <td>{merchant.private_bindings}</td>
            </tr>
            <tr className='content__table'>
                <td>Кол-во попыток оплаты</td>
                <td>{merchant.payment_attempts}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Кол-во попыток оплаты</td>
                <td>{merchant.refund_attempts}</td>
            </tr>
            <tr className='content__table'>
                <td>Продолжительность сессии в секундах</td>
                <td>{merchant.session_timeout_secs}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Кол-во часов для завершения двухстадийного заказа</td>
                <td></td>
            </tr>
            <tr className='content__table'>
                <td>Адрес возврата после оплаты</td>
                <td>{merchant.back_url}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Адрес возврата при ошибке</td>
                <td>{merchant.fail_url}</td>
            </tr>
            <tr className='content__table'>
                <td>Лимиты на кол-во определённых типов запросов в период времени</td>
                <td>{merchant.limits}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Передача параметров в процессинг</td>
                <td>{merchant.processing_fields}</td>
            </tr>
            <tr className='content__table'>
                <td>Получение параметров</td>
                <td>{merchant.received_processing_fields}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Параметры подтверждения покупки</td>
                <td>{merchant.verify_purchase_fields}</td>
            </tr>
            <tr className='content__table'>
                <td>Дополнительные параметры</td>
                <td>{merchant.return_params_fields}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Параметры редиректа</td>
                <td>{merchant.return_back_url_params_fields}</td>
            </tr>
            <tr className='content__table'>
                <td>Значения дополнительных параметров</td>
                <td>merchant_additional_param</td>
            </tr>
        </table>
    </div>;
};

export default SendSettings;
