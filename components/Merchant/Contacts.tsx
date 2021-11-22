import React, { FC } from "react";

const Contacts: FC = () => {
    return <div className="subtab__content">
        <table>
            <tr className="content__table-colored">
                <td>URL</td>
                <td>merchant_url</td>
            </tr>
            <tr className='content__table'>
                <td>Оферта</td>
                <td>agreement_url</td>
            </tr>
            <tr className='content__table'>
                <td>Emails</td>
                <td>merchant_emails</td>
            </tr>
            <tr className='content__table'>
                <td>Номер телефона</td>
                <td></td>
            </tr>
            <tr className='content__table'>
                <td>Email для связи</td>
                <td></td>
            </tr>
        </table>
    </div>
};

export default Contacts;
