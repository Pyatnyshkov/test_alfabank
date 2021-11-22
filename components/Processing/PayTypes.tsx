import React, {useState} from "react";

const PayTypes = () => {

    const [toggleState, setToggleState] = useState(1);


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
                <strong>ID:</strong>
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <p>
                        DATA VARIANT №1
                    </p>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <p>
                        DATA VARIANT №2
                    </p>
                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <p>
                        DATA VARIANT №3
                    </p>
                </div>
                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    <p>
                        DATA VARIANT №4
                    </p>
                </div>
                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                    <p>
                        DATA VARIANT №5
                    </p>
                </div>
                <div className={toggleState === 6 ? "content  active-content" : "content"}>
                    <p>
                        DATA VARIANT №6
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PayTypes;