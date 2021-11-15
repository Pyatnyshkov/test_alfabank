import React, { FC, useState } from "react";

const Contacts: FC = () => {
    const [subTab, setSubTab] = useState('')
    return <div className="subtab__content">
        <table>
            <tr className="content__table-colored">
                <td>1</td>
                <td>2</td>
            </tr>
            <tr className='content__table'>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
    </div>
};

export default Contacts;
