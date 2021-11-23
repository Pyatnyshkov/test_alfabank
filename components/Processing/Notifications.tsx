import React from 'react';
import {useAppSelector} from "../../helpers/redux-hooks";

const Notifications = () => {
    const merchant = useAppSelector(state => state.app.merchant)

    return (
        <div className="subtab__content">
            <table>
                <tr className="content__table-colored">
                    <td>Тип</td>
                    <td>симметричный / ассиметричный</td>
                </tr>
                <tr className='content__table'>
                    <td>Токен</td>
                    <td>{merchant.callback_token}</td>
                </tr>
                <tr className="content__table-colored">
                    <td>Адрес для callback</td>
                    <td>{merchant.callback_addresses}</td>
                </tr>
                <tr className='content__table'>
                    <td>Тип callback</td>
                    <td>{merchant.callback_type}</td>
                </tr>
                <tr className="content__table-colored">
                    <td>Тип операции</td>
                    <td>{merchant.callback_operations}</td>
                </tr>
                <tr className='content__table'>
                    <td>HTTP заголовка</td>
                    <td>{merchant.callback_headers}</td>
                </tr>
                <tr className="content__table-colored">
                    <td>Дополнительные параметры</td>
                    <td>{merchant.callback_additional_params}</td>
                </tr>
            </table>
        </div>
    );
};

export default Notifications;