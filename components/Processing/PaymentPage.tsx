import React, {useState} from "react";

const PaymentPage = () => {
    const [toggleLanguage, setToggleLanguage] = useState(false)
    const [toggleMultilanguage, setToggleMultilanguage] = useState(false)

    const onHandleToggle = () => {
        setToggleLanguage(toggleLanguage => !toggleLanguage)
    }

    const onHandleMultiToggle = () => {
        setToggleMultilanguage(toggleMultilanguage => !toggleMultilanguage)
    }

    return (
        <div className="subtab__content">
        <table >
            <tr className="content__table-colored">
                <td>Логин</td>
                <td>payment_page_login</td>
            </tr>
            <tr className='content__table'>
                <td>Языки</td>
                <td>
                    <ul className='table-list'>
                        <li
                            className={`table-list__item ${!toggleLanguage ? '' : 'tab-choose'}`}
                            onClick={onHandleToggle}
                        >RU</li>
                        <li
                            className={`table-list__item ${!toggleLanguage ? 'tab-choose' : ''}`}
                            onClick={onHandleToggle}
                        >EN</li>

                    </ul>
                </td>
            </tr>
            <tr className="content__table-colored">
                <td>Мультиязычность</td>
                {/* Кошмарный переключатель мультиязычности*/}
                <ul className='table-list'>
                    <li
                        className={`table-list__check ${!toggleMultilanguage ? 'table-list__circle': ''}`}
                        onClick={onHandleMultiToggle}
                    >

                    </li>
                    <li
                        className={`table-list__cross ${!toggleMultilanguage ? '': 'table-list__circle'}`}
                        onClick={onHandleMultiToggle}
                    >

                    </li>
                </ul>
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
        </div>
    )
};

export default PaymentPage;
