import React from 'react';

const Notifications = () => {
    return (
        <div className="subtab__content">
            <table>
                <tr className="content__table-colored">
                    <td>Тип</td>
                    <td>симметричный / ассиметричный</td>
                </tr>
                <tr className='content__table'>
                    <td>Токен</td>
                    <td>callback_token</td>
                </tr>
                <tr className="content__table-colored">
                    <td>Адрес для callback</td>
                    <td>callback</td>
                </tr>
                <tr className='content__table'>
                    <td>Тип callback</td>
                    <td>merchant_number</td>
                </tr>
                <tr className='content__table'>
                    <td>Тип операции</td>
                    <td>callback</td>
                </tr>
                <tr className='content__table'>
                    <td>HTTP заголовка</td>
                    <td>merchant_number</td>
                </tr>
                <tr className='content__table'>
                    <td>Дополнительные параметры</td>
                    <td>callback</td>
                </tr>
                <tr className='content__table'>
                    <td>Тип callback</td>
                    <td>merchant_number</td>
                </tr>
            </table>
        </div>
    );
};

export default Notifications;