import React from 'react';

const CustomTable = () => {
    return (
        <table >
            <tr className="content__table-colored">
                <td>Логин</td>
                <td>payment_page_login</td>
            </tr>
            <tr className='content__table'>
                <td>Языки</td>
                <td>ru / en</td>
            </tr>
            <tr className="content__table-colored">
                <td>Мультиязычность</td>
                <td>yes / no</td>
            </tr>
            <tr className='content__table'>
                <td>Логин финальной страницы</td>
                <td>finish_page_login</td>
            </tr>
            <tr className="content__table-colored">
                <td>Видимые доп. параметры заказа</td>
                <td>show_param_list_mapping</td>
            </tr>
            <tr className='content__table'>
                <td>Количество попыток оплаты</td>
                <td>payment_attempts</td>
            </tr>
            <tr className="content__table-colored">
                <td>Продолжительность сессии</td>
                <td>session_timeout_secs</td>
            </tr>
            <tr className='content__table'>
                <td>Двухстадийный заказ автома</td>
                <td>завершится через:  м.</td>
            </tr>
            <tr className="content__table-colored">
                <td>URL возврата</td>
                <td>backup_url</td>
            </tr>
            <tr className='content__table'>
                <td>URL ошибки</td>
                <td>fail_url</td>
            </tr>
        </table>
    );
};

export default CustomTable;