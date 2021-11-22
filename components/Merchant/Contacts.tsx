import React, { FC } from "react";

const Contacts: FC = () => {
<<<<<<< HEAD
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
=======
  const [subTab, setSubTab] = useState("");
  return (
    <div className="subtab__content">
      <table>
        <tbody>
          <tr className="content__table-colored">
            <td>1</td>
            <td>2</td>
          </tr>
          <tr className="content__table">
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
>>>>>>> master
    </div>
  );
};

export default Contacts;
