import React from 'react';
import {CollapsibleTable} from "./TableBookCar";

export const LoginAccount = () => {
    return (
        <div className="container">
            <div className="favorites-section">
                <div className="favorites--empty">
                    <CollapsibleTable/>
                </div>
            </div>
        </div>
    );
};
