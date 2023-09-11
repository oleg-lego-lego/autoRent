import React from 'react';
import {CollapsibleTable} from "../login_account/TableBookCar";

export const Garage = () => {
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
