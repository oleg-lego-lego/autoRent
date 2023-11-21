import React from 'react';
import {Registration} from "../components/passwordInput/Registration";
import {HeroPages} from "../components/heroPages/HeroPages";

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
