import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/redux-hooks";
import { selectSubTab } from "../../store/reducers/app";

import CustomTabs from "../UI/CustomTabs";
import Settings from './Settings';
import Contacts from './Contacts';

const Merchant = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(selectSubTab(tabs[0].value));
    }, []);
    const { subTab } = useAppSelector(state => state.app);
    const tabs = [
        {
            name: "Настройки",
            value: "Settings"
        },
        {
            name: "Контакты",
            value: "Contacts"
        }
    ];
    const handleTab = (value: string) => {
        dispatch(selectSubTab(value));
    };
    const getContent = () => {
        switch (subTab) {
            case 'Settings':
                return <Settings />;
            case 'Contacts':
                return <Contacts />;
        }
    };
    return (
        <div className="tabContent">
            <CustomTabs
                selected={subTab}
                tabs={tabs}
                name="subTub"
                handleTab={handleTab}
                className="subTab"
            />
            {getContent()}
        </div>
    );
};

export default Merchant;
