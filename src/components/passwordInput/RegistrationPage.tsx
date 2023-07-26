import React from 'react';
import {Registration} from "./Registration";

export const RegistrationPage = () => {
    return (
        <div className="container">
            <div className="favorites-section">
                <div className="favorites--empty">
                    <Registration/>
                </div>
            </div>
        </div>
    );
};
