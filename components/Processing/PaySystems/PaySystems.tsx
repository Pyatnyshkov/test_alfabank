import React, {useState} from 'react';

const PaySystems = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "subtabs active-tabs" : "subtabs"}
                    onClick={() => toggleTab(1)}
                >

                </button>
                <button
                    className={toggleState === 2 ? "subtabs active-tabs" : "subtabs"}
                    onClick={() => toggleTab(2)}
                >

                </button>
                <button
                    className={toggleState === 3 ? "subtabs active-tabs" : "subtabs"}
                    onClick={() => toggleTab(3)}
                >
                </button>
                <button
                    className={toggleState === 4 ? "subtabs active-tabs" : "subtabs"}
                    onClick={() => toggleTab(4)}
                >

                </button>
                <button
                    className={toggleState === 5 ? "subtabs active-tabs" : "subtabs"}
                    onClick={() => toggleTab(5)}
                >

                </button>
                <button
                    className={toggleState === 6 ? "subtabs active-tabs" : "subtabs"}
                    onClick={() => toggleTab(6)}
                >

                </button>
            </div>
            <div>
                <div className="content-tabs">
                    <strong>ID: </strong>
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <p>
                            mir_terminal_id
                        </p>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <p>
                            mc_3ds_id
                        </p>
                    </div>
                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <p>
                            visa_3ds_id
                        </p>
                    </div>

                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <p>
                            card_accept_code
                        </p>
                    </div>
                    <div
                        className={toggleState === 5 ? "content  active-content" : "content"}
                    >
                        <p>
                            CUP_3ds_id
                        </p>
                    </div>
                    <div
                        className={toggleState === 6 ? "content  active-content" : "content"}
                    >
                        <p>
                            amex_3ds_id
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaySystems;