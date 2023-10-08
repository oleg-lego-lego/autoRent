import React from 'react';
import {Registration} from "./Registration";
import {HeroPages} from "../HeroPages";

export const RegistrationPage = () => {
    return (
        <>
            <HeroPages name={'Registration'}/>
            <div className="container">
                <div className="favorites-section">
                    <div className="favorites--empty">
                        <Registration/>
                    </div>
                </div>
            </div>
        </>

    );
};
