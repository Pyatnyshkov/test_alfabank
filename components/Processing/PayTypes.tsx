import React, {useState} from "react";
import {useAppSelector} from "../../helpers/redux-hooks";

const PayTypes = () => {

    const [toggleState, setToggleState] = useState(1);

    const merchant = useAppSelector(state => state.app.merchant)

    const paymentTypes = {
        sbp_terminal_id: merchant.sbp_terminal_id,
    }
    const getContent = () => {
        switch (toggleState) {
            case 1:
                return '1';
            case 2:
                return '2'
            case 3:
                return '3'
            case 4:
                return '4'
            case 5:
                return '5'
            case 6:
                return '6'
        }
    }
    return (
        <div className="subtab__content">
            <div className='bloc-tabs'>
                <button
                    className={toggleState === 1 ? "payTabs active-tabs" : "payTabs"}
                    onClick={() => setToggleState(1)}
                >

                </button>
                <button
                    className={toggleState === 2 ? "payTabs active-tabs" : "payTabs"}
                    onClick={() => setToggleState(2)}
                >

                </button>
                <button
                    className={toggleState === 3 ? "payTabs active-tabs" : "payTabs"}
                    onClick={() => setToggleState(3)}
                >

                </button>
                <button
                    className={toggleState === 4 ? "payTabs active-tabs" : "payTabs"}
                    onClick={() => setToggleState(4)}
                >

                </button>
                <button
                    className={toggleState === 5 ? "payTabs active-tabs" : "payTabs"}
                    onClick={() => setToggleState(5)}
                >

                </button>
                <button
                    className={toggleState === 6 ? "payTabs active-tabs" : "payTabs"}
                    onClick={() => setToggleState(6)}
                >

                </button>
            </div>

                <div className="content-tabs">
                    <strong>ID: </strong>
                    <div className="content">{getContent()}</div>
                </div>
        </div>
    );
};

export default PayTypes;