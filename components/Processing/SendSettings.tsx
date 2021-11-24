import React from "react";
import {useAppSelector} from "../../helpers/redux-hooks";
import includeOption from "../../helpers/includeOption";



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
            <tr className="content__table-colored">
                <td>Название параметра</td>
                <td>{merchant.name}</td>
            </tr>
            <tr className='content__table'>
                <td>Способ оплаты</td>
                <td>{merchant.payment_way}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Значение</td>
                <td>{merchant.value}</td>
            </tr>
            <tr className='content__table'>
                <td>Таймаут сессии</td>
                <td>{merchant.session_timeout_secs}</td>
            </tr>
            <tr className="content__table-colored">
                <td>Разрешено использование связок </td>
                <td></td>
            </tr>
            {/* Временно написаны сразу ключи, в дальнейшем надо реструктурировать таблицу*/}
            <tr className='content__table'>
                <td>Разрешена деактивация связок</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'ALTERNATIVE_SESSION_TIMEOUT')}`}></span>
                </td>
            </tr>
            <tr className="content__table-colored">
                <td>Разрешено создание связок без платежа</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'BINDING_WITHOUT_PAYMENT_ALLOWED')}`}></span>
                </td>
            </tr>
            <tr className='content__table'>
                <td>Разрешены связки</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'BINDINGS_V2_ALLOWED')}`}></span>
                </td>
            </tr>
            <tr className="content__table-colored">
                <td>Разрешена передача персональных данных</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'CAN_TRANSFER_PERSONAL_DATA')}`}></span>
                </td>
            </tr>
            <tr className='content__table'>
                <td>Разрешена загрузка пользовательских сертификатов</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'CAN_UPLOAD_MPI_CERTIFICATES')}`}></span>
                </td>
            </tr>
            <tr className="content__table-colored">
                <td>Разрешение передавать логин/пароль в get-запросах</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'CREDENTIALS_IN_HTTP_GET_ALLOWED')}`}></span>
                </td>
            </tr>
            <tr className='content__table'>
                <td>Разрешено создание кредитовых связок</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'CREDIT_BINDING_ALLOWED')}`}></span>
                </td>
            </tr>
            <tr className="content__table-colored">
                <td>Разрешено получение информации по связкам по полному номеру карты</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'GET_BINDINGS_BY_CARD_NUMBER_OR_BINDING_ID')}`}></span>
                </td>
            </tr>
            <tr className='content__table'>
                <td>Наследовать связки родителя</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'INHERIT_PARENT_BINDING')}`}></span>
                </td>
            </tr>
            <tr className="content__table-colored">
                <td>Наследовать лимиты родителя</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'INHERIT_PARENT_LIMIT')}`}></span>
                </td>
            </tr>
            <tr className='content__table'>
                <td>Наследовать списки родителя</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'INHERIT_PARENT_LIST')}`}></span>
                </td>
            </tr>
            <tr className="content__table-colored">
                <td>Разрешено наследование правил родителя</td>
                <td>
                    <span className={`content__table-span ${includeOption(merchant.options, 'PARENTS_RULE_INHERITANCE')}`}></span>
                </td>
            </tr>
            <tr className='content__table'>
                <td>Тип операции</td>
                <td>operation_type</td>
            </tr>
            <tr className="content__table-colored">
                <td>Тип операции</td>
                <td>period_type</td>
            </tr>
            <tr className='content__table'>
                <td>Значение периода</td>
                <td>period_value</td>
            </tr>
            <tr className="content__table-colored">
                <td>Единицы периода</td>
                <td>period_units</td>
            </tr>
            <tr className='content__table'>
                <td>Максимальное значение</td>
                <td>max_value</td>
            </tr>
        </table>
    </div>;
};

export default SendSettings;
