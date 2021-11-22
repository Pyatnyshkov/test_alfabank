import React, { FC } from "react";
import {useAppSelector} from "../../helpers/redux-hooks";

const Contacts: FC = () => {
    const app = useAppSelector(state => state.app)
    return <div className="subtab__content">
        <table>
            <tbody>
                <tr className="content__table-colored">
                    <td>URL</td>
                    <td>{app.merchant.merchant_url}</td>
                </tr>
                <tr className='content__table'>
                    <td>Оферта</td>
                    <td>{app.merchant.agreement_url}</td>
                </tr>
                <tr className='content__table'>
                    <td>Emails</td>
                    <td>{app.merchant.merchant_emails}</td>
                </tr>
                <tr className='content__table'>
                    <td>Номер телефона</td>
                    <td>{app.merchant.merchant_phone}</td>
                </tr>
                <tr className='content__table'>
                    <td>Email для связи</td>
                    <td>{app.merchant.merchant_feedback_email}</td>
                </tr>
            </tbody>
        </table>
    </div>
};

export default Contacts;
